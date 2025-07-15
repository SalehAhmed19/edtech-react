import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  carts: [],
  isError: true,
};

// add to cart
export const addToCart = createAsyncThunk("carts", async (data) => {
  const response = await axios.post("http://localhost:4000/api/carts", data);

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
  },
});

export default CartsSlice.reducer;
