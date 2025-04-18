"use client";
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

function WishlistButton() {
  const [wishlisted, setWishlisted] = useState(false);
  return (
    <button
      type="button"
      aria-label={wishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
      title={wishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
      onClick={() => setWishlisted(w => !w)}
      className="p-2 rounded-full border-2 border-transparent hover:border-[#3e7c3a] focus:outline-none focus:ring-2 focus:ring-[#3e7c3a] transition"
    >
      {wishlisted ? (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#3e7c3a" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21s-6.1-4.93-8.36-7.21A5.5 5.5 0 0 1 12 5.36a5.5 5.5 0 0 1 8.36 8.43C18.1 16.07 12 21 12 21z"/>
        </svg>
      ) : (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a67c52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21s-6.1-4.93-8.36-7.21A5.5 5.5 0 0 1 12 5.36a5.5 5.5 0 0 1 8.36 8.43C18.1 16.07 12 21 12 21z"/>
        </svg>
      )}
    </button>
  );
}

export default function ProductDetail() {
  // In a real app, fetch product data using the id from the URL
  const router = useRouter();
  // In a real app, get productId from router params
  const productId = "1"; // Placeholder
  const [quantity, setQuantity] = useState(1);

  // Mock products (should match marketplace)
  const mockProducts = [
    { id: 1, name: "Single Origin Espresso", category: "Espresso", desc: "Rich, bold, and sustainably sourced.", emoji: "☕" },
    { id: 2, name: "Filter Blend", category: "Filter", desc: "Smooth and balanced for daily brews.", emoji: "🫘" },
    { id: 3, name: "Decaf Delight", category: "Decaf", desc: "All the flavor, none of the buzz.", emoji: "🌱" },
    { id: 4, name: "African Roast", category: "Espresso", desc: "Fruity notes from top farms.", emoji: "🌍" },
    { id: 5, name: "Asian Harmony", category: "Filter", desc: "Earthy and aromatic.", emoji: "🍃" },
    { id: 6, name: "Latin Blend", category: "Espresso", desc: "Chocolatey, nutty, and sweet.", emoji: "🍫" },
  ];
  const thisProduct = mockProducts.find(p => String(p.id) === productId) || mockProducts[0];
  const relatedProducts = mockProducts.filter(p => String(p.id) !== productId).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f6f2] via-[#e2f6e9] to-[#e5dcc5] p-8">
      <button onClick={() => router.back()} className="mb-4 text-[#3e7c3a] underline">Back to Marketplace</button>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white rounded-xl shadow-2xl p-8 max-w-3xl mx-auto flex flex-col md:flex-row gap-8"
      >
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            className="w-64 h-64 bg-gradient-to-tr from-[#a67c52] to-[#f7e7ce] rounded-full flex items-center justify-center shadow-lg cursor-zoom-in group"
            animate={{ y: [0, -10, 0], scale: [1, 1.04, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 1.18 }}
          >
            <span className="text-7xl select-none">{thisProduct.emoji}</span>
          </motion.div>
        </div>
        <motion.div
          className="flex-1 flex flex-col justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.h1
            className="text-3xl font-bold text-[#4e3620] mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Single Origin Coffee {productId}
          </motion.h1>
          <motion.p
            className="text-[#6c4f2b] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Delicious, ethically sourced beans from sustainable farms. Full origin story, tasting notes, and farmer info here.
          </motion.p>
          <motion.div
            className="mb-4 flex gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="inline-block bg-[#3e7c3a] text-white rounded-full px-3 py-1 text-xs mr-2">Fair Trade</span>
            <span className="inline-block bg-[#a67c52] text-white rounded-full px-3 py-1 text-xs">Organic</span>
          </motion.div>
          <motion.div
            className="mb-6 font-bold text-2xl text-[#3e7c3a]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            $14.99 <span className="text-base font-normal text-[#4e3620]">/ 250g</span>
          </motion.div>
          {/* Quantity Selector */}
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <button
              className="w-8 h-8 rounded-full bg-[#e2f6e9] text-[#3e7c3a] font-bold text-xl flex items-center justify-center shadow hover:bg-[#d1e9db] transition"
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
              type="button"
            >
              -
            </button>
            <motion.span
              key={quantity}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-lg font-semibold text-[#4e3620] w-8 text-center select-none"
            >
              {quantity}
            </motion.span>
            <button
              className="w-8 h-8 rounded-full bg-[#e2f6e9] text-[#3e7c3a] font-bold text-xl flex items-center justify-center shadow hover:bg-[#d1e9db] transition"
              onClick={() => setQuantity(q => Math.min(99, q + 1))}
              aria-label="Increase quantity"
              type="button"
            >
              +
            </button>
          </motion.div>
          <motion.div
            className="flex gap-4 items-center mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.button
              className="bg-[#3e7c3a] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#315e2e] transition"
              whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 rgba(62,124,58,0.13)" }}
            >
              Add to Cart
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.18 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <WishlistButton />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="max-w-3xl mx-auto mt-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="text-xl font-bold text-[#4e3620] mb-2">Reviews</h2>
        <motion.div
          className="bg-[#e6e3df] rounded-lg p-4 mb-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.03, boxShadow: "0 6px 20px 0 rgba(166,124,82,0.07)" }}
        >
          <span className="text-[#4e3620] font-medium">“Fantastic flavor and I love the story behind it!”</span>
          <span className="block text-right mt-2 text-[#a67c52] font-semibold">— Jamie</span>
        </motion.div>
        <motion.div
          className="bg-[#e6e3df] rounded-lg p-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.03, boxShadow: "0 6px 20px 0 rgba(166,124,82,0.07)" }}
        >
          <span className="text-[#4e3620] font-medium">“A great way to support farmers directly.”</span>
          <span className="block text-right mt-2 text-[#a67c52] font-semibold">— Pat</span>
        </motion.div>
      </motion.div>
      {/* Related Products */}
      <motion.div
        className="max-w-3xl mx-auto mt-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="text-xl font-bold text-[#4e3620] mb-4">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedProducts.map((prod, idx) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(62,124,58,0.09)" }}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center cursor-pointer border border-[#e6e3df]"
            >
              <div className="w-16 h-16 bg-[#e2f6e9] rounded-full flex items-center justify-center mb-3 text-3xl">
                {prod.emoji}
              </div>
              <div className="font-semibold text-[#4e3620] mb-1 text-center">{prod.name}</div>
              <div className="text-xs text-[#6c4f2b] mb-2 text-center">{prod.desc}</div>
              <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-[#a67c52]/10 text-[#a67c52] mb-2">{prod.category}</span>
              <button
                className="mt-2 bg-[#3e7c3a] text-white px-4 py-1 rounded-full font-semibold hover:bg-[#315e2e] transition text-xs"
                onClick={() => router.push(`/product/${prod.id}`)}
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
