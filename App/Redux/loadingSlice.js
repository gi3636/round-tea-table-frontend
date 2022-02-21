import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    updateLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const { updateLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
