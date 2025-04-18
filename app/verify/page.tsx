import React from "react";

export default function Verify() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f7f6f2] p-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6 text-[#4e3620]">Verify Your Email</h1>
        <p className="mb-4 text-[#6c4f2b]">We sent a verification link to your email. Please check your inbox and click the link to activate your account.</p>
        <button className="bg-[#3e7c3a] text-white rounded px-4 py-2 font-semibold hover:bg-[#315e2e] transition mt-4">Resend Email</button>
      </div>
    </div>
  );
}
