import React from "react";

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f7f6f2] p-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-[#4e3620]">Create your CoffeeCom account</h1>
        <form className="flex flex-col gap-4">
          <input className="border rounded px-4 py-2 text-[#4e3620] placeholder-[#a67c52]" type="text" placeholder="Full Name" required />
          <input className="border rounded px-4 py-2 text-[#4e3620] placeholder-[#a67c52]" type="email" placeholder="Email" required />
          <input className="border rounded px-4 py-2 text-[#4e3620] placeholder-[#a67c52]" type="password" placeholder="Password" required />
          <button className="bg-[#3e7c3a] text-white rounded px-4 py-2 font-semibold hover:bg-[#315e2e] transition" type="submit">Sign Up</button>
        </form>
        <div className="text-sm mt-4 text-center">
          Already have an account? <a href="/login" className="text-[#3e7c3a] hover:underline">Sign in</a>
        </div>
        <div className="text-sm mt-2 text-center">
          <a href="/" className="text-[#a67c52] hover:underline">Back to Home</a>
        </div>
      </div>
    </div>
  );
}
