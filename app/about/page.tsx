"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f7f6f2] flex flex-col items-center py-0">
      {/* Hero Section */}
      <motion.section
        className="w-full bg-gradient-to-r from-[#f7f6f2] via-[#e5dcc5] to-[#e2f6e9] py-16 px-4 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#3e7c3a] mb-6 drop-shadow-lg">About CoffeeCom</h1>
          <p className="text-[#4e3620] text-xl md:text-2xl mb-6 font-medium">
            Brewing a Better World, One Cup at a Time.
          </p>
          <p className="text-[#6c4f2b] text-lg md:text-xl mb-8">
            CoffeeCom is a sustainability-driven marketplace and community for coffee lovers and ethical producers. Our mission is to connect conscious consumers with coffee farmers and cooperatives, ensuring every cup supports fair trade, environmental stewardship, and thriving communities.
          </p>
          <div className="flex justify-center gap-6 mt-6 mb-10">
            <span className="inline-flex items-center gap-2 bg-[#3e7c3a]/90 text-white px-5 py-2 rounded-full font-bold shadow hover:bg-[#315e2e] transition"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><circle cx="12" cy="12" r="10" stroke="#a67c52" strokeWidth="2" fill="#f7f6f2"/><path d="M8 12l2 2 4-4" stroke="#3e7c3a" strokeWidth="2"/></svg>Ethical Sourcing</span>
            <span className="inline-flex items-center gap-2 bg-[#a67c52]/90 text-white px-5 py-2 rounded-full font-bold shadow hover:bg-[#8d6236] transition"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><circle cx="12" cy="12" r="10" stroke="#3e7c3a" strokeWidth="2" fill="#f7f6f2"/><path d="M12 8v4l3 2" stroke="#a67c52" strokeWidth="2"/></svg>Community Impact</span>
          </div>
        </div>
      </motion.section>

      {/* Vision & Why Section */}
      <motion.section
        className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-10 mt-[-4rem] z-10 flex flex-col md:flex-row gap-10 items-center"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[#4e3620] mb-2">Our Vision</h2>
          <p className="text-[#6c4f2b] mb-4">
            We envision a world where every coffee purchase empowers growers, protects the planet, and brings people together. By prioritizing transparency, traceability, and direct trade, we help you make choices that matter.
          </p>
          <h2 className="text-2xl font-bold text-[#4e3620] mt-8 mb-2">Why CoffeeCom?</h2>
          <ul className="list-disc list-inside text-[#6c4f2b] mb-4">
            <li>Support for sustainable and ethical coffee farming</li>
            <li>Direct connection with producers and their stories</li>
            <li>Community-driven reviews, impact tracking, and events</li>
            <li>Transparency on sourcing, pricing, and impact</li>
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-center">
          {/* SVG Illustration */}
          <motion.svg
            width="180"
            height="180"
            viewBox="0 0 180 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate="visible"
          >
            <motion.circle
              cx="90"
              cy="90"
              r="88"
              stroke="#a67c52"
              strokeWidth="4"
              fill="#e2f6e9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.ellipse
              cx="90"
              cy="110"
              rx="60"
              ry="30"
              fill="#a67c52"
              opacity="0.15"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            {/* Animated Coffee Bean */}
            <motion.ellipse
              cx="90"
              rx="35"
              ry="50"
              fill="#3e7c3a"
              animate={{ cy: [80, 75, 80] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            />
            {/* Animated Steam */}
            <motion.ellipse
              cx="90"
              rx="15"
              ry="18"
              fill="#f7f6f2"
              animate={{ cy: [60, 50, 60], opacity: [0.8, 0.2, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.2 }}
            />
            <motion.ellipse
              cx="90"
              rx="8"
              ry="10"
              fill="#a67c52"
              animate={{ cy: [78, 68, 78], opacity: [0.6, 0.15, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.5 }}
            />
          </motion.svg>
        </div>
      </motion.section>

      {/* Impact Section */}
      <motion.section
        className="w-full max-w-4xl mt-16 flex flex-col md:flex-row gap-10 items-center justify-between"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="flex-1 bg-[#e2f6e9] rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-xl font-bold text-[#3e7c3a] mb-2">Our Impact</h3>
          <p className="text-[#4e3620] mb-4">Every cup makes a difference. Here’s what we’ve achieved so far:</p>
          <div className="flex justify-center gap-10 text-[#4e3620] font-bold text-lg">
            <motion.div whileHover={{ scale: 1.08, y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
              <span className="block text-3xl text-[#3e7c3a]">12K+</span>
              Farmers Empowered
            </motion.div>
            <motion.div whileHover={{ scale: 1.08, y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
              <span className="block text-3xl text-[#a67c52]">50+</span>
              Communities Supported
            </motion.div>
            <motion.div whileHover={{ scale: 1.08, y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
              <span className="block text-3xl text-[#4e3620]">100K+</span>
              Cups Brewed Sustainably
            </motion.div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          {/* Impact SVG */}
          <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="75" cy="75" r="70" stroke="#3e7c3a" strokeWidth="4" fill="#f7f6f2"/>
            <path d="M75 110 Q95 90 75 70 Q55 90 75 110Z" fill="#a67c52"/>
            <circle cx="75" cy="75" r="28" fill="#e2f6e9"/>
            <ellipse cx="75" cy="75" rx="14" ry="8" fill="#3e7c3a"/>
          </svg>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="w-full max-w-4xl mt-16 mb-20 bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h3 className="text-2xl font-bold text-[#4e3620] mb-6">Meet the CoffeeCom Team</h3>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
          <motion.div whileHover={{ scale: 1.08, y: -8 }} transition={{ type: 'spring', stiffness: 300 }} className="flex flex-col items-center">
            <span className="w-20 h-20 rounded-full bg-[#a67c52] mb-2 flex items-center justify-center text-white text-3xl font-bold">A</span>
            <span className="font-semibold text-[#4e3620]">Alex Barista</span>
            <span className="text-[#6c4f2b] text-sm">Founder & Coffee Evangelist</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.08, y: -8 }} transition={{ type: 'spring', stiffness: 300 }} className="flex flex-col items-center">
            <span className="w-20 h-20 rounded-full bg-[#3e7c3a] mb-2 flex items-center justify-center text-white text-3xl font-bold">S</span>
            <span className="font-semibold text-[#4e3620]">Sophie Roast</span>
            <span className="text-[#6c4f2b] text-sm">Sustainability Lead</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.08, y: -8 }} transition={{ type: 'spring', stiffness: 300 }} className="flex flex-col items-center">
            <span className="w-20 h-20 rounded-full bg-[#a67c52] mb-2 flex items-center justify-center text-white text-3xl font-bold">M</span>
            <span className="font-semibold text-[#4e3620]">Marco Beans</span>
            <span className="text-[#6c4f2b] text-sm">Community Builder</span>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
