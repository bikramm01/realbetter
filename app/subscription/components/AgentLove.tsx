"use client";

import React from "react";
import { motion } from "framer-motion";

/* ================= ONLINE AGENT AVATARS ================= */
const agentFaces = [
  "/agents/1.jpg",
  "/agents/2.jpg",
  "/agents/3.jpg",
  "/agents/4.jpg",
  "/agents/5.jpg",
];

export default function AgentOrbit() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT — TRUST CONTENT */}
          <div className="bg-white rounded-2xl shadow-sm border p-8 space-y-6 text-center md:text-left">

            <h2 className="text-3xl md:text-4xl font-extrabold">
              Trusted by Thousands of Agents
            </h2>

            <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">
              A fast-growing network of verified real estate professionals using
              RealBetter daily to close builder floor and resale deals faster.
            </p>

            {/* STATS STRIP */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div>
                <p className="text-xl font-extrabold text-red-600">11,000+</p>
                <p className="text-xs text-gray-500">Active Agents</p>
              </div>
              <div>
                <p className="text-xl font-extrabold text-red-600">6,000+</p>
                <p className="text-xs text-gray-500">Live Listings</p>
              </div>
              <div>
                <p className="text-xl font-extrabold text-red-600">1,500+</p>
                <p className="text-xs text-gray-500">Builders</p>
              </div>
            </div>

            {/* MICRO TRUST LINE */}
            <div className="text-sm text-gray-500 pt-2">
              Verified agents · Direct builder inventory · Daily updates
            </div>

          </div>

          {/* RIGHT — ORBIT */}
          <div className="flex justify-center md:justify-end">
            <div
              className="
                relative
                w-[220px] h-[220px]
                sm:w-[260px] sm:h-[260px]
                md:w-[320px] md:h-[320px]
              "
            >

              {/* GLOW */}
              <div className="absolute inset-0 rounded-full bg-red-500/10 blur-3xl" />

              {/* PULSE */}
              <motion.div
                className="absolute inset-0 rounded-full bg-red-500/10"
                animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.25, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* ROTATING RING */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 28,
                  ease: "linear",
                }}
              >
                {agentFaces.map((src, i) => {
                  const angle = (360 / agentFaces.length) * i;

                  return (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        transform: `
                          rotate(${angle}deg)
                          translate(140px)
                          rotate(-${angle}deg)
                        `,
                      }}
                    >
                      <img
                        src={src}
                        alt="RealBetter Agent"
                        className="
                          w-12 h-12
                          rounded-full
                          border-2 border-white
                          shadow-lg
                          bg-white
                          object-cover
                        "
                      />
                    </div>
                  );
                })}
              </motion.div>

              {/* CENTER LOGO */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="
                    w-24 h-24
                    rounded-full
                    bg-white
                    shadow-xl
                    flex items-center justify-center
                    border
                  "
                >
                  <img
                    src="/logo-realbetter.png"
                    alt="RealBetter"
                    className="w-16 h-auto"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
