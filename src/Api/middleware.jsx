import axios from "axios";

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: "https://api.tvmaze.com", // Change this to your API base URL
  // timeout: 5000, // Request timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from localStorage (or cookies if you're using Next.js)
    const token = localStorage.getItem("my-token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("response", response);

    return response.data || response; // Return only the data from response
  },
  (error) => {
    if (error.response) {
      // Handle specific status codes
      if (error.response.status === 401) {
        console.error("Unauthorized! Redirecting to login...");
        // Optional: Redirect to login page
        window.location.href = "/login";
      } else if (error.response.status === 403) {
        console.error("Forbidden! You don’t have permission.");
      } else if (error.response.status === 500) {
        console.error("Server Error! Try again later.");
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
