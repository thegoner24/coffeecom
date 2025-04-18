"use client";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { items } = useCart();
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);
  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur z-10 shadow-sm flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2">
        <Link href="/">
          <span className="inline-block w-8 h-8 mr-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="16" cy="22" rx="10" ry="4" fill="#e2f6e9"/>
              <rect x="8" y="8" width="16" height="12" rx="6" fill="#a67c52"/>
              <rect x="10" y="10" width="12" height="8" rx="4" fill="#f7e6c5"/>
              <path d="M24 13c2 0 3 2 2 4-1 2-3 2-3 2" stroke="#3e7c3a" strokeWidth="2" fill="none"/>
              <ellipse cx="16" cy="13" rx="4" ry="1.5" fill="#e2f6e9"/>
              <path d="M13 10c0-2 6-2 6 0" stroke="#3e7c3a" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            </svg>
          </span>
        </Link>
        <span className="font-bold text-xl tracking-tight text-[#4e3620]">CoffeeCom</span>
      </div>
      <div className="hidden md:flex gap-8 text-[#4e3620] font-medium">
        <Link href="/about" className="hover:text-[#6c4f2b]">About</Link>
        <Link href="/marketplace" className="hover:text-[#6c4f2b]">Marketplace</Link>
        <Link href="/community" className="hover:text-[#6c4f2b]">Community</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/cart" className="relative">
          <span className="text-2xl">🛒</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#3e7c3a] text-white text-xs rounded-full px-2 py-0.5">{cartCount}</span>
          )}
        </Link>
        {user ? (
          <>
            <span className="hidden md:inline text-[#4e3620]">Hello, {user.name}</span>
            <button onClick={logout} className="bg-[#a67c52] text-white px-4 py-1 rounded-full font-semibold hover:bg-[#4e3620] transition">Logout</button>
          </>
        ) : (
          <>
            <Link href="/login" className="bg-[#3e7c3a] text-white px-4 py-1 rounded-full font-semibold hover:bg-[#315e2e] transition">Login</Link>
            <Link href="/register" className="bg-[#a67c52] text-white px-4 py-1 rounded-full font-semibold hover:bg-[#4e3620] transition">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}
