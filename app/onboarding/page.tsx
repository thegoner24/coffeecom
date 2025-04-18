import React from "react";

export default function Onboarding() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f7f6f2] p-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6 text-[#4e3620]">Welcome to CoffeeCom!</h1>
        <p className="mb-4 text-[#6c4f2b]">Tell us your coffee preferences to personalize your experience.</p>
        <form className="flex flex-col gap-4">
          <label className="flex items-center gap-2 text-[#4e3620] font-medium">
            <input type="checkbox" /> Sustainable/Fair Trade
          </label>
          <label className="flex items-center gap-2 text-[#4e3620] font-medium">
            <input type="checkbox" /> Single Origin
          </label>
          <label className="flex items-center gap-2 text-[#4e3620] font-medium">
            <input type="checkbox" /> Organic
          </label>
          <button className="bg-[#3e7c3a] text-white rounded px-4 py-2 font-semibold hover:bg-[#315e2e] transition mt-4" type="submit">Finish</button>
        </form>
        <button className="text-[#3e7c3a] mt-4 underline" type="button">Skip</button>
      </div>
    </div>
  );
}
