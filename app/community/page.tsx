"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Community() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f6f2] via-[#e2f6e9] to-[#e5dcc5] p-0 flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full max-w-3xl mx-auto pt-12 pb-6 px-6 text-center">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#3e7c3a]/10 mb-3">
          <span className="text-4xl">🤝</span>
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#4e3620] mb-2 drop-shadow">CoffeeCom Community</h1>
        <p className="text-[#6c4f2b] text-lg md:text-xl max-w-2xl mb-2">See the impact, share your story, and connect with fellow coffee lovers and producers.</p>
      </div>

      {/* Stories & Impact Cards */}
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(34, 60, 80, 0.10)" }}
          className="backdrop-blur bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col gap-2 border border-[#e6e3df]"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">📖</span>
            <h2 className="text-xl font-bold text-[#4e3620]">Stories</h2>
          </div>
          <p className="text-[#6c4f2b]">“CoffeeCom helped our cooperative grow and connect with new customers.”<br/><span className="font-semibold">— Maria, Coffee Grower</span></p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(34, 60, 80, 0.10)" }}
          className="backdrop-blur bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col gap-2 border border-[#e6e3df]"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🌱</span>
            <h2 className="text-xl font-bold text-[#4e3620]">Impact</h2>
          </div>
          <p className="text-[#6c4f2b]">Your purchases have supported over <span className="font-bold">25</span> farming families this year!</p>
        </motion.div>
      </div>

      {/* Community Articles */}
      <div className="w-full max-w-5xl mx-auto mt-16 px-4">
        <h2 className="text-2xl font-extrabold text-[#4e3620] mb-6 flex items-center gap-2"><span className="text-2xl">📰</span> Community Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
            title: "Sustainability in Coffee Farming",
            author: "Alex Barista",
            date: "Apr 2025",
            summary: "How ethical sourcing is changing lives for coffee growers and drinkers alike.",
          }, {
            title: "Building a Coffee Community",
            author: "Sophie Roast",
            date: "Mar 2025",
            summary: "The power of community-driven reviews and events for transparency.",
          }, {
            title: "Traceability: From Farm to Cup",
            author: "Marco Beans",
            date: "Feb 2025",
            summary: "Why traceability matters for quality, ethics, and your morning ritual.",
          }].map((article, idx) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.1 }}
              className="backdrop-blur bg-white/80 rounded-2xl shadow-xl p-6 flex flex-col border border-[#e6e3df] hover:scale-105 hover:shadow-2xl transition-transform"
            >
              <div className="mb-2 flex items-center gap-2 text-[#3e7c3a]">
                <span className="font-semibold">{article.author}</span>
                <span className="text-xs text-[#a67c52]">• {article.date}</span>
              </div>
              <h3 className="text-lg font-bold text-[#4e3620] mb-2">{article.title}</h3>
              <p className="text-[#6c4f2b] mb-4 flex-1">{article.summary}</p>
              <button className="self-start bg-[#a67c52] text-white rounded-full px-4 py-1 font-semibold hover:bg-[#8d6236] transition text-sm shadow">Read More</button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Share Your Story */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-12 mb-16 backdrop-blur bg-white/80 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-[#e6e3df] w-full"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">✍️</span>
          <h2 className="text-xl font-bold text-[#4e3620]">Share Your Story</h2>
        </div>
        <textarea className="w-full border border-[#a67c52] rounded-lg p-3 mb-4 bg-white text-[#4e3620] focus:outline-none focus:ring-2 focus:ring-[#a67c52] resize-none" rows={3} placeholder="How has CoffeeCom impacted you?" />
        <button className="bg-[#3e7c3a] text-white rounded-full px-6 py-2 font-semibold hover:bg-[#315e2e] transition shadow">Submit</button>
      </motion.div>
    </div>
  );
}
