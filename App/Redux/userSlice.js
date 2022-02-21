import { createSlice } from "@reduxjs/toolkit";
import { saveStorageUser } from "../Utils/storage";

const initialState = {
  userObj: { username: "rtr", password: "45469" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.userObj = { ...state.userObj, ...action.payload };
      saveStorageUser(state.userObj);
    },
  },
  extraReducers: {},
});

// Action creators are generated for each case reducer function
export const { saveUser } = userSlice.actions;

export default userSlice.reducer;
