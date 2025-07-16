import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import useAxiosPrivate from "../../../Hooks/Axios/useAxiosPrivate";
const initialState = {
  isLoading: false,
  carts: [],
  isError: true,
};

// add to cart
export const addToCart = createAsyncThunk("carts", async (data) => {
  const axiosPrivate = useAxiosPrivate();
  const response = await axiosPrivate.post("/carts", data);

  return response.data;
});

// get cart
export const getCarts = createAsyncThunk("getCarts", async (data) => {
  const axiosPrivate = useAxiosPrivate();

  const response = await axiosPrivate.get(`/carts?email=${data}`);

  return response.data;
});

const CartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.carts.push(action.payload);
    });
    builder.addCase(addToCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.isError = true;
      console.log(action.payload);
    });

    // get cart
    builder.addCase(getCarts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.carts = action.payload;
    });
    builder.addCase(getCarts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCarts.rejected, (state, action) => {
      state.isError = true;
      console.log(action.payload);
    });
  },
});

export default CartsSlice.reducer;
