import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: localStorage.getItem("my-token"),
  },
  reducers: {
    login(state) {
      localStorage.setItem("my-token", JSON.stringify("token"));
      state.isAuth = true;
    },
    logout(state) {
      localStorage.removeItem("my-token");
      state.isAuth = false;
    },
  },
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
