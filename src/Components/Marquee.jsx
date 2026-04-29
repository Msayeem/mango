"use client";

import { useRef, useState } from "react";

const defaultItems = [
  { text: "New Arrivals: The Midnight Library", tag: "new" },
  { text: "Special Discount on Memberships — 20% off this week", tag: "promo" },
  { text: "New Arrivals: Atomic Habits", tag: "new" },
  { text: "Free shipping on orders over $35", tag: "promo" },
  { text: "New Arrivals: The Alchemist", tag: "new" },
  { text: "Summer Reading Challenge — join now", tag: "alert" },
];

const tagStyles = {
  new:   { background: "#fff3e0", color: "#b45309" },
  promo: { background: "#fef9c3", color: "#854d0e" },
  alert: { background: "#fee2e2", color: "#991b1b" },
};

const tagLabels = {
  new:   "New",
  promo: "Promo",
  alert: "Alert",
};

export default function Marquee({
  items = defaultItems,
  speed = 30,
  separator = "|",
  pauseOnHover = true,
}) {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);

  const doubled = [...items, ...items];

  return (
    <div
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
      role="marquee"
      aria-label="Announcements"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "#fff4ec",
        borderTop: "1px solid #fdd9b5",
        borderBottom: "1px solid #fdd9b5",
      }}
    >
      {/* Left fade */}
      <div style={{
        pointerEvents: "none",
        position: "absolute",
        inset: "0",
        right: "auto",
        width: "64px",
        zIndex: 10,
        background: "linear-gradient(to right, #fff4ec, transparent)",
      }} />
      {/* Right fade */}
      <div style={{
        pointerEvents: "none",
        position: "absolute",
        inset: "0",
        left: "auto",
        width: "64px",
        zIndex: 10,
        background: "linear-gradient(to left, #fff4ec, transparent)",
      }} />

      <div
        ref={trackRef}
        style={{
          display: "flex",
          alignItems: "center",
          height: "44px",
          width: "max-content",
          animation: `marquee-scroll ${speed}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "0 20px",
              fontSize: "13.5px",
              color: "#7c3d12",
              whiteSpace: "nowrap",
              fontFamily: "inherit",
            }}
          >
            {item.tag && tagStyles[item.tag] && (
              <span style={{
                ...tagStyles[item.tag],
                borderRadius: "4px",
                padding: "2px 8px",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                flexShrink: 0,
              }}>
                {tagLabels[item.tag]}
              </span>
            )}
            {item.text}
            <span style={{ color: "#fdba74", userSelect: "none", marginLeft: "4px" }}>
              {separator}
            </span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
