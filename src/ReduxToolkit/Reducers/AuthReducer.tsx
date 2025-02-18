import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: Boolean(localStorage.getItem("Auth-Token")),
  },
  reducers: {
    login(state) {
      localStorage.setItem("Auth-Token", JSON.stringify("token"));
      state.isAuthenticated = true;
    },
    logout(state) {
      localStorage.removeItem("Auth-Token");
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
