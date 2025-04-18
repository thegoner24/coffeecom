"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Checkout() {
  const [step, setStep] = useState(1);
  return (
    <div className="min-h-screen bg-[#f7f6f2] p-8">
      <h1 className="text-3xl font-bold text-[#4e3620] mb-8">Checkout</h1>
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="flex justify-between mb-8">
          {['Shipping', 'Payment', 'Review'].map((label, idx) => (
            <div key={label} className={`flex-1 text-center ${step === idx + 1 ? 'font-bold text-[#3e7c3a]' : 'text-[#6c4f2b]'}`}>{label}</div>
          ))}
        </div>
        {step === 1 && (
          <form className="flex flex-col gap-4">
            <input className="border-2 border-[#a67c52] rounded px-4 py-2 bg-white text-[#4e3620] placeholder-[#a67c52] focus:outline-none focus:ring-2 focus:ring-[#3e7c3a] font-medium" type="text" placeholder="Full Name" required />
            <input className="border-2 border-[#a67c52] rounded px-4 py-2 bg-white text-[#4e3620] placeholder-[#a67c52] focus:outline-none focus:ring-2 focus:ring-[#3e7c3a] font-medium" type="text" placeholder="Address" required />
            <input className="border-2 border-[#a67c52] rounded px-4 py-2 bg-white text-[#4e3620] placeholder-[#a67c52] focus:outline-none focus:ring-2 focus:ring-[#3e7c3a] font-medium" type="text" placeholder="City" required />
            <input className="border-2 border-[#a67c52] rounded px-4 py-2 bg-white text-[#4e3620] placeholder-[#a67c52] focus:outline-none focus:ring-2 focus:ring-[#3e7c3a] font-medium" type="text" placeholder="Postal Code" required />
            <button type="button" className="bg-[#3e7c3a] text-white rounded px-4 py-2 font-semibold hover:bg-[#315e2e] transition" onClick={() => setStep(2)}>Next: Payment</button>
          </form>
        )}
        {step === 2 && (
          <form className="flex flex-col gap-4">
            <input className="border-2 border-[#a67c52] rounded px-4 py-2 bg-white text-[#4e3620] placeholder-[#a67c52] focus:outline-none focus:ring-2 focus:ring-[#3e7c3a] font-medium" type="text" placeholder="Card Number" required />
            <input className="border-2 border-[#a67c52] rounded px-4 py-2 bg-white text-[#4e3620] placeholder-[#a67c52] focus:outline-none focus:ring-2 focus:ring-[#3e7c3a] font-medium" type="text" placeholder="Expiry Date" required />
            <input className="border-2 border-[#a67c52] rounded px-4 py-2 bg-white text-[#4e3620] placeholder-[#a67c52] focus:outline-none focus:ring-2 focus:ring-[#3e7c3a] font-medium" type="text" placeholder="CVC" required />
            <button type="button" className="bg-[#3e7c3a] text-white rounded px-4 py-2 font-semibold hover:bg-[#315e2e] transition" onClick={() => setStep(3)}>Next: Review</button>
          </form>
        )}
        {step === 3 && (
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div className="font-bold text-xl text-[#3e7c3a] mb-2" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>Order Summary</motion.div>
            <motion.div className="flex justify-between items-center" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
              <span className="text-[#4e3620] font-medium">Coffee Product 1</span>
              <span className="text-[#a67c52] font-bold">$14.99</span>
            </motion.div>
            <motion.div className="flex justify-between items-center" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
              <span className="text-[#4e3620] font-medium">Coffee Product 2</span>
              <span className="text-[#a67c52] font-bold">$14.99</span>
            </motion.div>
            <motion.div className="flex justify-between items-center border-t border-[#e6e3df] pt-3 mt-2" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
              <span className="font-bold text-[#3e7c3a] text-lg">Total</span>
              <span className="font-bold text-[#3e7c3a] text-xl">$29.98</span>
            </motion.div>
            <motion.button
              className="bg-[#3e7c3a] text-white rounded px-4 py-2 font-semibold hover:bg-[#315e2e] transition mt-2"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(62,124,58,0.15)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              Place Order
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
