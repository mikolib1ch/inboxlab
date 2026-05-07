import React from "react";

export function ProgressBar({ value, max }: { value: number; max: number }) {
  const percent = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="w-full h-3 bg-gray-200 rounded-full border border-black mt-2">
      <div
        className="h-3 bg-[#ec78b8] rounded-full transition-all"
        style={{ width: percent + "%" }}
      ></div>
    </div>
  );
}
