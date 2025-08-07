import React from 'react'

const SignIn = () => {
  return (
    <><div className="min-h-screen flex items-center justify-center bg-[#1C110A] text-[#E4D6A7] px-4">
          <form className="bg-neutral-800 p-8 rounded-lg w-full max-w-md shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
              <input
                  type="email"
                  placeholder="Email"
                  className="w-full mb-4 px-4 py-2 rounded bg-neutral-700 text-white" />
              <input
                  type="password"
                  placeholder="Password"
                  className="w-full mb-6 px-4 py-2 rounded bg-neutral-700 text-white" />
              <button className="w-full bg-[#E9B44C] text-[#1C110A] py-2 rounded hover:bg-[#9B2915] hover:text-white transition">
                  Sign In
              </button>
              <p className="text-sm text-center mt-4">
                  Don’t have an account? <a href="/signup" className="text-[#50A2A7] underline">Sign Up</a>
              </p>
          </form>
      </div><footer className="w-full text-center py-4 text-sm text-[#E4D6A7] opacity-70 absolute bottom-0 left-0">
              &copy; {new Date().getFullYear()} CodeCraft. All rights reserved.
          </footer></>
  );
};

export default SignIn;
