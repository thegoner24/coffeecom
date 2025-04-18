import React from "react";

export default function OrderConfirmation() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f7f6f2] p-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6 text-[#4e3620]">Thank You for Your Order!</h1>
        <p className="mb-4 text-[#6c4f2b]">Your purchase supports sustainable coffee farming and empowers communities.</p>
        <div className="mb-6">
          <span className="text-[#3e7c3a] font-bold">Order #123456</span>
        </div>
        <a href="/marketplace" className="bg-[#3e7c3a] text-white rounded px-4 py-2 font-semibold hover:bg-[#315e2e] transition">Continue Shopping</a>
      </div>
    </div>
  );
}
