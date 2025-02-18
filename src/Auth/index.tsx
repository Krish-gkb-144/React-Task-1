import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../ReduxToolkit/Reducers/AuthReducer";

const Auth = () => {
  const [formData, setFormData] = useState({
    email: "test123@gmail.com",
    password: "Test@123",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email === "test123@gmail.com" && formData.password === "Test@123") {
      navigate("/home");
      dispatch(login());
    } else {
      alert("Please enter a valid email and password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300" placeholder="Enter your email" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Auth;
