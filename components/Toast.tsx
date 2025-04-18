"use client";
import { useToast } from "../context/ToastContext";

export default function Toast() {
  const { toasts, removeToast } = useToast();
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`px-4 py-2 rounded shadow-lg text-white font-semibold transition-all
            ${toast.type === "success" ? "bg-green-600" : toast.type === "error" ? "bg-red-600" : "bg-gray-700"}
          `}
          onClick={() => removeToast(toast.id)}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
