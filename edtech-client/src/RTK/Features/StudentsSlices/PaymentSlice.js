import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  payments: [],
  isError: false,
  clientSecret: "",
};

export const createPaymentIntent = createAsyncThunk(
  "createPaymentIntent",
  async (totalPrice, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        // "https://edtech-react.vercel.app/api/payments/stripe/create-payment-intent",
        "http://localhost:4000/api/payments/stripe/create-payment-intent",
        {
          price: totalPrice,
        }
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const postPayment = createAsyncThunk(
  "postPayment",
  async (payment, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        // "https://edtech-react.vercel.app/api/payments/stripe/payment-success",
        "http://localhost:4000/api/payments/stripe/payment-success",
        payment
      );

      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const getPayments = createAsyncThunk(
  "getPayments",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        // `https://edtech-react.vercel.app/api/payments?email=${email}`
        `http://localhost:4000/api/payments?email=${email}`
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const PaymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPaymentIntent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createPaymentIntent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.clientSecret = action.payload.clientSecret;
    });
    builder.addCase(createPaymentIntent.rejected, (state, action) => {
      state.isError = true;
      console.log(action.payload);
    });

    // post payment
    builder.addCase(postPayment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postPayment.fulfilled, (state, action) => {
      state.isLoading = false;
      const payment = action.meta.arg;
      console.log({ payment });
      state.payments.push(payment);
    });
    builder.addCase(postPayment.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = true;
      console.log(action.payload);
    });

    // get payment
    builder.addCase(getPayments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPayments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.payments = action.payload;
    });
    builder.addCase(getPayments.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = true;
      console.log(action.payload);
    });
  },
});

export default PaymentSlice.reducer;
