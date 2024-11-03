import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticate: false,
  user: null,
  isLoading: false,
};
export const register = createAsyncThunk(
  "/auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        formData
      );
      return response.data;
    } catch (error) {
      // If there is an error, return the response data or the message via rejectWithValue
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data); // Custom payload in case of error
      } else {
        return rejectWithValue(error.message); // Fallback message if no response data
      }
    }
  }
);
export const signIn = createAsyncThunk(
  "/auth/login",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/sign-in",
        formData,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      // If there is an error, return the response data or the message via rejectWithValue
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data); // Custom payload in case of error
      } else {
        return rejectWithValue(error.message); // Fallback message if no response data
      }
    }
  }
);
export const checkUser = createAsyncThunk(
  "/auth/userVerify",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/auth/verifyUser",

        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      // If there is an error, return the response data or the message via rejectWithValue
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data); // Custom payload in case of error
      } else {
        return rejectWithValue(error.message); // Fallback message if no response data
      }
    }
  }
);
export const signupwithlink = createAsyncThunk(
  "/auth/linksignup",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/userCreateWithmagiclink",
        formData,

        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      // If there is an error, return the response data or the message via rejectWithValue
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data); // Custom payload in case of error
      } else {
        return rejectWithValue(error.message); // Fallback message if no response data
      }
    }
  }
);
export const magiclogin = createAsyncThunk(
  "/auth/magiclogin",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/magiclogin",
        formData,

        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      // If there is an error, return the response data or the message via rejectWithValue
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data); // Custom payload in case of error
      } else {
        return rejectWithValue(error.message); // Fallback message if no response data
      }
    }
  }
);
export const google = createAsyncThunk(
  "/auth/google",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/googleAuth",
        formData,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      // If there is an error, return the response data or the message via rejectWithValue
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data); // Custom payload in case of error
      } else {
        return rejectWithValue(error.message); // Fallback message if no response data
      }
    }
  }
);

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(signIn.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(checkUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticate = true;
        state.user = action.payload.data;
        console.log(action.payload);
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticate = false;
        state.user = null;
        console.log(action.payload);
      })
      .addCase(signupwithlink.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signupwithlink.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
      })
      .addCase(signupwithlink.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(magiclogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(magiclogin.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
      })
      .addCase(magiclogin.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(google.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(google.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
      })
      .addCase(google.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default AuthSlice.reducer;
