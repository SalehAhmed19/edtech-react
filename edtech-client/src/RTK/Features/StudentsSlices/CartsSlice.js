import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  carts: [],
  isError: true,
  totalPrice: null,
};

// add to cart
export const addToCart = createAsyncThunk(
  "carts",
  async ({ courseItem, axiosPublic }, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.post("/carts/post-cart", courseItem);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// get cart
export const getCarts = createAsyncThunk(
  "getCarts",
  async ({ email, axiosPublic }, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.get(`/carts?email=${email}`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// delete from cart
export const deleteCartItem = createAsyncThunk(
  "deteleCartItem",
  async ({ id, axiosPublic }, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.delete(`/carts/remove-carts/${id}`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const CartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.carts.push(action.payload);
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.isError = true;
      console.log(action.payload);
    });

    // get cart
    builder.addCase(getCarts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCarts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.carts = action.payload;
      const carts = action.payload;
      const totalPrice = carts.reduce((sum, cart) => {
        const price = parseFloat(cart.courseFee) || 0;

        return (sum = sum + price);
      }, 0);
      const finalTotal = totalPrice.toFixed(2);
      // console.log(totalPrice.toFixed(2));
      state.totalPrice = finalTotal;
    });
    builder.addCase(getCarts.rejected, (state, action) => {
      state.isError = true;
      console.log(action.payload);
    });

    // delete carts items
    builder.addCase(deleteCartItem.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteCartItem.fulfilled, (state, action) => {
      const id = action.meta.arg.id;
      if (id) {
        const carts = state.carts.filter((cart) => cart.courseId !== id);
        state.carts = carts;
        state.isLoading = false;
        const totalPrice = carts.reduce((sum, cart) => {
          const price = parseFloat(cart.courseFee) || 0;

          return (sum = sum + price);
        }, 0);
        const finalTotal = totalPrice.toFixed(2);
        // console.log(totalPrice.toFixed(2));
        state.totalPrice = finalTotal;
      }
      // console.log(action.meta.arg.id);
    });
    builder.addCase(deleteCartItem.rejected, (state, action) => {
      state.isError = true;
      console.log(action.payload);
    });
  },
});

export default CartsSlice.reducer;
