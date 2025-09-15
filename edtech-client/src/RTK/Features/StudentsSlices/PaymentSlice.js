import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  payments: [],
  isError: false,
  clientSecret: "",
};

export const createCheckoutSession = createAsyncThunk(
  "createCheckoutSession",
  async ({ course, axiosPublic }, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.post(
        "/payments/stripe/create-checkout-session",
        course
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const createPaymentIntent = createAsyncThunk(
  "createPaymentIntent",
  async ({ totalPrice, axiosPublic }, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.post(
        "/payments/stripe/create-payment-intent",
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

export const getSessionStatus = createAsyncThunk(
  "getSessionStatus",
  async ({ session, axiosPublic }) => {
    const response = await axiosPublic.get(
      `/payments/stripe/session-status?session_id=${session}`
    );

    return response.data;
  }
);

export const postPayment = createAsyncThunk(
  "postPayment",
  async ({ payment, axiosPublic }, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.post(
        // "https://edtech-react.vercel.app/api/payments/stripe/payment-success",
        "/payments/stripe/payment-success",
        payment
      );

      return response.data;
    } catch (err) {
      // // console.log(err);
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const getPayments = createAsyncThunk(
  "getPayments",
  async ({ email, axiosPublic }, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.get(
        // `https://edtech-react.vercel.app/api/payments?email=${email}`
        `/payments?email=${email}`
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
      // console.log(action.payload);
    });

    builder.addCase(createCheckoutSession.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createCheckoutSession.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action);
      state.clientSecret = action.payload.clientSecret;
    });
    builder.addCase(createCheckoutSession.rejected, (state, action) => {
      state.isError = true;
      // console.log(action.payload);
    });

    // post payment
    builder.addCase(postPayment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postPayment.fulfilled, (state, action) => {
      state.isLoading = false;
      const payment = action.meta.arg;
      // // console.log({ payment });
      state.payments.push(payment);
    });
    builder.addCase(postPayment.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = true;
      // console.log(action.payload);
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
      // console.log(action.payload);
    });
  },
});

export default PaymentSlice.reducer;
