"use client";
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax values
  const heroBgTranslate = scrollY * 0.15;
  const cupTranslate = scrollY * 0.25;

  return (
    <div className="bg-[#f7f6f2] min-h-screen flex flex-col font-sans">


      {/* Hero Section */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-8 py-16 md:py-24 max-w-6xl mx-auto w-full overflow-hidden">
        {/* Parallax BG */}
        <motion.div
          className="absolute left-1/2 top-0 w-[120vw] h-[140%] -translate-x-1/2 -z-10"
          style={{
            transform: `translate(-50%, ${heroBgTranslate}px)`
          }}
        >
          <div className="w-full h-full bg-gradient-to-tr from-[#e2f6e9] via-[#f7e7ce] to-[#a67c52]/30 rounded-full blur-3xl opacity-70" />
        </motion.div>
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[#4e3620] mb-6 leading-tight"
          >
            Sustainably Sourced. <br /> Community Powered. <br /> Welcome to <span className="text-[#3e7c3a]">CoffeeCom</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-[#6c4f2b] mb-8 max-w-xl"
          >
            The marketplace for ethical coffee and a thriving, supportive community. Empowering farmers, connecting coffee lovers, and making every cup count for the planet.
          </motion.p>
          <motion.a
            href="#market"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 rgba(62,124,58,0.15)" }}
            className="inline-block bg-[#3e7c3a] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-[#315e2e] transition"
          >
            Explore Marketplace
          </motion.a>
        </div>
        <div className="flex-1 flex justify-center">
          {/* Animated SVG/Illustration */}
          <motion.div
            className="w-64 h-64 bg-gradient-to-tr from-[#a67c52] to-[#f7e7ce] rounded-full flex items-center justify-center shadow-lg"
            animate={{ y: [0, -12, 0], scale: [1, 1.06, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
            style={{
              transform: `translateY(${cupTranslate}px)`
            }}
          >
            <span className="text-6xl">☕</span>
          </motion.div>
        </div>
      </section>

      {/* About/Impact Section */}
      <section id="about" className="bg-[#e6e3df] py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#4e3620] mb-4">Our Mission</h2>
          <p className="text-[#6c4f2b] text-lg mb-6">
            CoffeeCom is dedicated to sustainability, fair trade, and empowering coffee-growing communities worldwide. We believe in transparency, ethical sourcing, and making a positive impact—one cup at a time.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center mt-8">
            <div className="flex-1 bg-white rounded-lg shadow p-6">
              <span className="block text-3xl mb-2">🌱</span>
              <h3 className="text-xl font-semibold text-[#4e3620]">Sustainable Sourcing</h3>
              <p className="text-[#6c4f2b]">All products are sourced from eco-friendly farms using ethical practices.</p>
            </div>
            <div className="flex-1 bg-white rounded-lg shadow p-6">
              <span className="block text-3xl mb-2">🤝</span>
              <h3 className="text-xl font-semibold text-[#4e3620]">Community Support</h3>
              <p className="text-[#6c4f2b]">A portion of every sale goes directly to supporting coffee-growing communities.</p>
            </div>
            <div className="flex-1 bg-white rounded-lg shadow p-6">
              <span className="block text-3xl mb-2">🌍</span>
              <h3 className="text-xl font-semibold text-[#4e3620]">Global Impact</h3>
              <p className="text-[#6c4f2b]">Join a movement making a difference for people and the planet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section id="market" className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#4e3620] mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Cards - Placeholder */}
          {[1,2,3].map(i => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 * i }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(62,124,58,0.10)" }}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center cursor-pointer"
            >
              <div className="w-32 h-32 bg-[#e6e3df] rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl">☕</span>
              </div>
              <h3 className="text-xl font-semibold text-[#4e3620] mb-2">Single Origin Coffee {i}</h3>
              <p className="text-[#6c4f2b] text-center mb-4">Delicious, ethically sourced beans from sustainable farms.</p>
              <button className="bg-[#3e7c3a] text-white px-5 py-2 rounded-full font-medium hover:bg-[#315e2e] transition">View Details</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="bg-[#e6e3df] py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#4e3620] mb-8">Community Voices</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Testimonial Cards - Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex-1 bg-white rounded-lg shadow p-6"
            >
              <p className="text-[#6c4f2b] italic mb-4">“CoffeeCom connected me directly with farmers. I love knowing my purchase makes a real difference!”</p>
              <span className="block font-bold text-[#4e3620]">- Alex, Customer</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-1 bg-white rounded-lg shadow p-6"
            >
              <p className="text-[#6c4f2b] italic mb-4">“Our cooperative has grown thanks to the CoffeeCom community.”</p>
              <span className="block font-bold text-[#4e3620]">- Maria, Coffee Grower</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#4e3620] mb-8 text-center">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-1 bg-white rounded-lg shadow p-6 text-center"
          >
            <span className="block text-4xl mb-2">🔎</span>
            <h3 className="text-xl font-semibold text-[#4e3620] mb-2">Discover</h3>
            <p className="text-[#6c4f2b]">Browse a curated selection of sustainable coffees and products.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 bg-white rounded-lg shadow p-6 text-center"
          >
            <span className="block text-4xl mb-2">🛒</span>
            <h3 className="text-xl font-semibold text-[#4e3620] mb-2">Shop</h3>
            <p className="text-[#6c4f2b]">Purchase directly from ethical producers and support their communities.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1 bg-white rounded-lg shadow p-6 text-center"
          >
            <span className="block text-4xl mb-2">🤗</span>
            <h3 className="text-xl font-semibold text-[#4e3620] mb-2">Connect</h3>
            <p className="text-[#6c4f2b]">Join a passionate community of coffee lovers and changemakers.</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        id="cta"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="bg-[#3e7c3a] py-16 px-8 flex flex-col items-center justify-center"
      >
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Ready to Make a Difference?</h2>
        <p className="text-lg text-[#e6e3df] mb-8 text-center max-w-xl">
          Join CoffeeCom and be part of a community that values sustainability, transparency, and impact. Start your journey today!
        </p>
        <motion.a
          href="#"
          whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(62,124,58,0.20)" }}
          className="bg-white text-[#3e7c3a] px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-[#e6e3df] transition"
        >
          Sign Up
        </motion.a>
      </motion.section>
    </div>
  );
}
