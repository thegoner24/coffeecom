"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock initial products (should match structure from marketplace)
const initialProducts = [
  { id: 1, name: "Single Origin Espresso", category: "Espresso", desc: "Rich, bold, and sustainably sourced.", emoji: "☕" },
  { id: 2, name: "Filter Blend", category: "Filter", desc: "Smooth and balanced for daily brews.", emoji: "🫘" },
  { id: 3, name: "Decaf Delight", category: "Decaf", desc: "All the flavor, none of the buzz.", emoji: "🌱" },
];

const categories = ["Espresso", "Filter", "Decaf"];
const emojiOptions = ["☕", "🫘", "🌱", "🌍", "🍃", "🍫"];

export default function SellerDashboard() {
  const [products, setProducts] = useState(initialProducts);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", category: categories[0], desc: "", emoji: emojiOptions[0] });
  const [isAdding, setIsAdding] = useState(false);

  // Handlers
  type Product = { id: number; name: string; category: string; desc: string; emoji: string };
  type FormEvent = React.FormEvent<HTMLFormElement>;
  type InputEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

  const handleInput = (e: InputEvent) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleAdd = () => {
    setForm({ name: "", category: categories[0], desc: "", emoji: emojiOptions[0] });
    setEditingId(null);
    setIsAdding(true);
  };
  const handleEdit = (prod: Product) => {
    setForm({ name: prod.name, category: prod.category, desc: prod.desc, emoji: prod.emoji });
    setEditingId(prod.id);
    setIsAdding(true);
  };
  const handleDelete = (id: number) => setProducts(ps => ps.filter(p => p.id !== id));
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    if (editingId) {
      setProducts(ps => ps.map(p => p.id === editingId ? { ...p, ...form } : p));
    } else {
      const newId = Math.max(0, ...products.map(p => p.id)) + 1;
      setProducts(ps => [...ps, { ...form, id: newId }]);
    }
    setIsAdding(false);
    setEditingId(null);
    setForm({ name: "", category: categories[0], desc: "", emoji: emojiOptions[0] });
  };
  const handleCancel = () => {
    setIsAdding(false);
    setEditingId(null);
    setForm({ name: "", category: categories[0], desc: "", emoji: emojiOptions[0] });
  };

  // Mock orders
  const [orders, setOrders] = useState([
    { id: 101, product: "Single Origin Espresso", buyer: "Alice", quantity: 2, status: "Pending" },
    { id: 102, product: "Filter Blend", buyer: "Bob", quantity: 1, status: "Shipped" },
    { id: 103, product: "Decaf Delight", buyer: "Carol", quantity: 3, status: "Completed" },
  ]);
  const orderStatuses = ["Pending", "Shipped", "Completed"];
  const handleOrderStatus = (orderId: number, status: string) => {
    setOrders(os => os.map(o => o.id === orderId ? { ...o, status } : o));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f6f2] via-[#e2f6e9] to-[#e5dcc5] p-8">
      <h1 className="text-3xl font-bold text-[#4e3620] mb-6">Seller Dashboard</h1>

      {/* Order Management Section */}
      <motion.div
        className="bg-white rounded-xl shadow-xl p-6 mb-10 border border-[#e6e3df] max-w-4xl mx-auto"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-[#3e7c3a] mb-4">Order Management</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="text-[#4e3620] bg-[#e2f6e9]">
                <th className="py-2 px-4 font-semibold">Order ID</th>
                <th className="py-2 px-4 font-semibold">Product</th>
                <th className="py-2 px-4 font-semibold">Buyer</th>
                <th className="py-2 px-4 font-semibold">Qty</th>
                <th className="py-2 px-4 font-semibold">Status</th>
                <th className="py-2 px-4 font-semibold">Update</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {orders.map((order, idx) => (
                  <motion.tr
                    key={order.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: 0.05 * idx }}
                    className="border-b border-[#e6e3df] hover:bg-[#f7f6f2]"
                  >
                    <td className="py-2 px-4 text-[#4e3620] font-semibold">{order.id}</td>
                    <td className="py-2 px-4 text-[#3e7c3a]">{order.product}</td>
                    <td className="py-2 px-4 text-[#a67c52]">{order.buyer}</td>
                    <td className="py-2 px-4">{order.quantity}</td>
                    <td className="py-2 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${order.status === "Pending" ? "bg-yellow-100 text-yellow-700" : order.status === "Shipped" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}>{order.status}</span>
                    </td>
                    <td className="py-2 px-4">
                      <select
                        value={order.status}
                        onChange={e => handleOrderStatus(order.id, e.target.value)}
                        className="border border-[#e6e3df] rounded px-2 py-1 text-[#4e3620] focus:border-[#3e7c3a] focus:ring-2 focus:ring-[#3e7c3a]"
                      >
                        {orderStatuses.map(st => (
                          <option value={st} key={st}>{st}</option>
                        ))}
                      </select>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Product Management Section */}
      <div className="mb-8 flex justify-between items-center">
        <span className="text-xl text-[#3e7c3a] font-semibold">Your Products</span>
        <button
          className="bg-[#3e7c3a] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#315e2e] transition"
          onClick={handleAdd}
        >
          + Add Product
        </button>
      </div>
      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        <AnimatePresence>
          {products.map(prod => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center border border-[#e6e3df] relative"
            >
              <span className="absolute top-2 right-2 text-2xl cursor-pointer text-[#a67c52] hover:text-red-500" onClick={() => handleDelete(prod.id)} title="Delete">×</span>
              <div className="w-16 h-16 bg-[#e2f6e9] rounded-full flex items-center justify-center mb-3 text-3xl">
                {prod.emoji}
              </div>
              <div className="font-semibold text-[#4e3620] mb-1 text-center">{prod.name}</div>
              <div className="text-xs text-[#6c4f2b] mb-2 text-center">{prod.desc}</div>
              <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-[#a67c52]/10 text-[#a67c52] mb-2">{prod.category}</span>
              <button
                className="mt-2 bg-[#3e7c3a] text-white px-4 py-1 rounded-full font-semibold hover:bg-[#315e2e] transition text-xs"
                onClick={() => handleEdit(prod)}
              >
                Edit
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {/* Add/Edit Form */}
      <AnimatePresence>
        {isAdding && (
          <motion.form
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-xl p-8 max-w-lg mx-auto flex flex-col gap-4 border border-[#e6e3df]"
          >
            <h2 className="text-xl font-bold text-[#4e3620] mb-2">{editingId ? "Update" : "Add"} Product</h2>
            <div>
              <label className="block text-[#3e7c3a] mb-2 font-bold text-lg">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInput}
                className="w-full border-2 border-[#e6e3df] rounded-lg px-4 py-2 text-base focus:outline-none focus:border-[#3e7c3a] focus:ring-2 focus:ring-[#3e7c3a] bg-white shadow-sm text-[#4e3620] placeholder-[#a67c52]"
                required
                placeholder="Enter product name"
              />
            </div>
            <div>
              <label className="block text-[#3e7c3a] mb-2 font-bold text-lg">Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleInput}
                className="w-full border-2 border-[#e6e3df] rounded-lg px-4 py-2 text-base focus:outline-none focus:border-[#3e7c3a] focus:ring-2 focus:ring-[#3e7c3a] bg-white shadow-sm text-[#4e3620]"
              >
                {categories.map(cat => (
                  <option value={cat} key={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[#3e7c3a] mb-2 font-bold text-lg">Description</label>
              <textarea
                name="desc"
                value={form.desc}
                onChange={handleInput}
                className="w-full border-2 border-[#e6e3df] rounded-lg px-4 py-2 text-base focus:outline-none focus:border-[#3e7c3a] focus:ring-2 focus:ring-[#3e7c3a] bg-white shadow-sm text-[#4e3620] placeholder-[#a67c52]"
                rows={2}
                required
                placeholder="Enter product description"
              />
            </div>
            <div>
              <label className="block text-[#3e7c3a] mb-2 font-bold text-lg">Emoji</label>
              <select
                name="emoji"
                value={form.emoji}
                onChange={handleInput}
                className="w-full border-2 border-[#e6e3df] rounded-lg px-4 py-2 text-base focus:outline-none focus:border-[#3e7c3a] focus:ring-2 focus:ring-[#3e7c3a] bg-white shadow-sm text-[#4e3620]"
              >
                {emojiOptions.map(emj => (
                  <option value={emj} key={emj}>{emj}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-4 mt-4">
              <button
                type="submit"
                className="bg-[#3e7c3a] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#315e2e] transition"
              >
                {editingId ? "Update" : "Add"}
              </button>
              <button
                type="button"
                className="bg-gray-200 text-[#4e3620] px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
