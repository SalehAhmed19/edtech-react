import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  orders: [],
  isError: false,
};

export const getOrders = createAsyncThunk(
  "getOrders",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/get/orders?email=${email}`
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const OrderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrders.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    });
    builder.addCase(getOrders.rejected, (state, action) => {
      state.isLoading = true;
      state.isError = true;
      console.log(action.payload);
    });
  },
});

export default OrderSlice.reducer;
