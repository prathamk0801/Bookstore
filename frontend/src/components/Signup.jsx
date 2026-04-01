
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

function Signup() {
  const { register, handleSubmit, reset } = useForm();
  const [authUser, setAuthUser] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";


  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:4001/user/signup",
        data
      );

      localStorage.setItem("user", JSON.stringify(res.data));
      setAuthUser(res.data);
      reset();
      toast.success("Signup Successful 🎉");
      
      navigate(from);

    } catch (error) {
      console.log("ERROR:", error.response?.data);
 if (error.response?.status === 400) {
        toast.error("User already exists ❌");
      } else {
        toast.error("Please fill required field ❌");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen 
      bg-white dark:bg-gray-900 transition duration-300">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative bg-white dark:bg-gray-800 
        shadow-lg p-6 rounded-lg w-80 transition duration-300"
      >
        
        {/* ❌ CROSS BUTTON */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="absolute top-2 right-3 text-xl 
          text-gray-500 hover:text-red-500"
        >
          ✖
        </button>

        <h2 className="text-2xl mb-4 text-center 
          text-black dark:text-white">
          Signup
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          {...register("fullname")}
          className="w-full mb-3 p-2 border rounded 
          bg-white text-black 
          dark:bg-gray-700 dark:text-white 
          dark:border-gray-600 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full mb-3 p-2 border rounded 
          bg-white text-black 
          dark:bg-gray-700 dark:text-white 
          dark:border-gray-600 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="w-full mb-3 p-2 border rounded 
          bg-white text-black 
          dark:bg-gray-700 dark:text-white 
          dark:border-gray-600 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-pink-500 text-white p-2 rounded 
          hover:bg-pink-700 duration-300"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;