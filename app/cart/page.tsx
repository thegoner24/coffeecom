import React from "react";

export default function Cart() {
  // In a real app, fetch cart items from context or API
  return (
    <div className="min-h-screen bg-[#f7f6f2] p-8">
      <h1 className="text-3xl font-bold text-[#4e3620] mb-8">Your Cart</h1>
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
        <div className="flex flex-col gap-6 mb-8">
          {[1,2].map(i => (
            <div key={i} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#e6e3df] rounded-full flex items-center justify-center">
                  <span className="text-2xl">☕</span>
                </div>
                <div>
                  <div className="font-semibold text-[#4e3620]">Coffee Product {i}</div>
                  <div className="text-[#6c4f2b] text-sm">250g</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="number" min="1" defaultValue="1" className="w-12 border border-[#a67c52] rounded px-2 py-1 bg-white text-[#4e3620] focus:outline-none focus:ring-2 focus:ring-[#a67c52]" />
                <div className="font-bold text-lg text-[#a67c52]">$14.99</div>
                <button className="text-[#a67c52] hover:underline">Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="font-bold text-lg text-[#3e7c3a]">Total</span>
          <span className="font-bold text-lg text-[#3e7c3a]">$29.98</span>
        </div>
        <a href="/checkout" className="bg-[#3e7c3a] text-[#f7e6c5] px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-[#315e2e] transition w-full block text-center">Proceed to Checkout</a>
      </div>
    </div>
  );
}
