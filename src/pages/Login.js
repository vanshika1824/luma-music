import React from "react";

function Login({ setUser }) {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="bg-zinc-950/70 backdrop-blur-md p-10 rounded-2xl shadow-2xl text-center w-[350px]">
        {/* Logo / Title */}
        <h1 className="text-5xl font-extrabold text-green-500 mb-8 tracking-wide">
          Luma Music
        </h1>

        {/* Login Button */}
        <button
          onClick={() => setUser({ name: "User" })}
          className="w-full bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-green-500/50"
        >
          Log in with Demo
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-zinc-700"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-zinc-700"></div>
        </div>

        {/* Extra Login Options (fake for UI) */}
        <div className="flex flex-col gap-3">
          <button className="w-full border border-zinc-600 hover:border-green-500 px-6 py-2 rounded-full text-sm transition">
            Continue with Google
          </button>
          <button className="w-full border border-zinc-600 hover:border-green-500 px-6 py-2 rounded-full text-sm transition">
            Continue with Facebook
          </button>
        </div>

        {/* Terms */}
        <p className="mt-8 text-xs text-gray-500">
          By logging in, you agree to Luma Music’s{" "}
          <span className="text-green-400 hover:underline cursor-pointer">
            Terms
          </span>{" "}
          &{" "}
          <span className="text-green-400 hover:underline cursor-pointer">
            Privacy Policy
          </span>
          .
        </p>
      </div>
    </div>
  );
}

export default Login;
