import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../utils/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      alert("Sign up successful!");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-white/30 flex flex-col items-center w-80"
      >
        <h1 className="text-2xl font-bold text-white mb-4">Sign Up</h1>

        <label className="text-lg font-semibold mb-2 text-white w-full">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="input input-bordered w-full mb-4 bg-white/20 backdrop-blur-md text-white placeholder-white px-4 py-2 rounded-lg outline-none"
        />

        <label className="text-lg font-semibold mb-2 text-white w-full">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="input input-bordered w-full mb-4 bg-white/20 backdrop-blur-md text-white placeholder-white px-4 py-2 rounded-lg outline-none"
        />

        <button type="submit" className="btn w-full bg-white/30 backdrop-blur-md hover:bg-white/40 text-white font-semibold py-2 rounded-lg mt-4">
          Sign Up
        </button>
        <p className="text-white mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-blue-300 hover:text-blue-400 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
