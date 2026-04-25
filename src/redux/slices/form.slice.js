// store/slices/formSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    submitStart: (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },
    submitSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    submitError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetFormState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
});

export const {
  submitStart,
  submitSuccess,
  submitError,
  resetFormState,
} = formSlice.actions;

export default formSlice.reducer;