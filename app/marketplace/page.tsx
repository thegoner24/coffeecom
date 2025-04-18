"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const mockProducts = [
  { id: 1, name: "Single Origin Espresso", category: "Espresso", desc: "Rich, bold, and sustainably sourced.", emoji: "☕" },
  { id: 2, name: "Filter Blend", category: "Filter", desc: "Smooth and balanced for daily brews.", emoji: "🫘" },
  { id: 3, name: "Decaf Delight", category: "Decaf", desc: "All the flavor, none of the buzz.", emoji: "🌱" },
  { id: 4, name: "African Roast", category: "Espresso", desc: "Fruity notes from top farms.", emoji: "🌍" },
  { id: 5, name: "Asian Harmony", category: "Filter", desc: "Earthy and aromatic.", emoji: "🍃" },
  { id: 6, name: "Latin Blend", category: "Espresso", desc: "Chocolatey, nutty, and sweet.", emoji: "🍫" },
];

const categories = ["All", "Espresso", "Filter", "Decaf"];

import { useRouter } from "next/navigation";

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const filteredProducts = mockProducts.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || product.desc.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f6f2] via-[#e2f6e9] to-[#e5dcc5] p-0 flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full max-w-5xl mx-auto pt-12 pb-6 px-6 text-center">
        <div className="flex flex-col items-center mb-4">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#3e7c3a]/10 mb-3">
            <span className="text-4xl">☕</span>
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#4e3620] mb-2 drop-shadow">Marketplace</h1>
          <p className="text-[#6c4f2b] text-lg md:text-xl max-w-2xl mb-2">Discover and shop ethical, sustainable coffee from around the world. Support farmers, explore unique flavors, and make every cup count.</p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="w-full max-w-4xl mx-auto mt-2 mb-6 px-4 flex gap-3">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-5 py-2 rounded-full font-semibold border transition shadow-sm text-[#4e3620] bg-white/80 border-[#e6e3df] hover:bg-[#e2f6e9] ${cat === selectedCategory ? 'bg-[#3e7c3a] text-white border-[#3e7c3a]' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Filter/Search Glassmorphism Bar */}
      <div className="w-full max-w-4xl mx-auto mb-10 px-4">
        <div className="backdrop-blur bg-white/70 border border-[#e6e3df] rounded-2xl shadow flex gap-4 flex-wrap p-4">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="border border-[#a67c52] rounded-lg px-4 py-2 bg-white text-[#4e3620] placeholder-[#a67c52] focus:outline-none focus:ring-2 focus:ring-[#a67c52] flex-1 min-w-[180px]"
          />
          <select
            className="border border-[#a67c52] rounded-lg px-4 py-2 bg-white text-[#4e3620] focus:outline-none focus:ring-2 focus:ring-[#a67c52] min-w-[160px]"
          >
            <option>All Origins</option>
            <option>South America</option>
            <option>Africa</option>
            <option>Asia</option>
          </select>
          <select
            className="border border-[#a67c52] rounded-lg px-4 py-2 bg-white text-[#4e3620] focus:outline-none focus:ring-2 focus:ring-[#a67c52] min-w-[160px]"
          >
            <option>All Types</option>
            <option>Single Origin</option>
            <option>Blend</option>
          </select>
        </div>
      </div> 

      {/* Product Grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 pb-16">
        <AnimatePresence>
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 rgba(34, 60, 80, 0.15)" }}
              className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center border border-[#e6e3df] cursor-pointer"
            >
              <div className="w-28 h-28 bg-[#e2f6e9] rounded-full flex items-center justify-center mb-5 shadow-inner text-5xl">
                {product.emoji}
              </div>
              <h3 className="text-xl font-bold text-[#4e3620] mb-2">{product.name}</h3>
              <p className="text-[#6c4f2b] text-center mb-4">{product.desc}</p>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#a67c52]/10 text-[#a67c52] mb-2">{product.category}</span>
              <button
                className="bg-[#3e7c3a] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#315e2e] transition"
                onClick={() => router.push(`/product/${product.id}`)}
              >
                View Details
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
