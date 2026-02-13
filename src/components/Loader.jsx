import React, { useEffect, useState } from "react";

export default function Loader() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setPercent(0);

    const id = setInterval(() => {
      setPercent((p) => (p >= 99 ? 99 : p + 1));
    }, 25);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F0F0F]/95 backdrop-blur-md">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.3)]"
          style={{
            background: `conic-gradient(
              #F5D27A,
              #D4AF37,
              #8C6B1F,
              #D4AF37,
              #F5D27A
            ) ${percent * 3.6}deg,
            #2A2A2A 0deg`,
          }}
        >
          <div className="w-20 h-20 rounded-full bg-[#1C1C1C] flex items-center justify-center shadow-inner">
            <span className="text-[#EDE8D0] text-lg font-semibold">
              {percent}%
            </span>
          </div>
        </div>

        <p className="text-[#CBB26A] tracking-[0.25em] uppercase text-sm">
          Loading...
        </p>
      </div>
    </div>
  );
}
