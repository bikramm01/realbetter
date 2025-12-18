"use client";

import React from "react";
import { motion } from "framer-motion";

/* ================= ONLINE AGENT AVATARS ================= */
const agentFaces = [
  "https://randomuser.me/api/portraits/men/68.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg",
  "https://randomuser.me/api/portraits/men/75.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
];

export default function AgentOrbit() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT — TEXT */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              ❤️ Agents Love RealBetter
            </h2>

            <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0">
              A growing ecosystem of verified Indian real estate agents
              who work with <b>real inventory</b>, not WhatsApp forwards.
            </p>

            <div className="text-sm text-gray-600">
              Trusted by{" "}
              <span className="font-semibold text-red-600">11,000+</span> agents ·{" "}
              <span className="font-semibold text-red-600">Gurgaon focused</span> ·
              Verified inventory only
            </div>
          </div>

          {/* RIGHT — ORBIT */}
          <div className="flex justify-center md:justify-end">
            <div className="relative
              w-[220px] h-[220px]
              sm:w-[260px] sm:h-[260px]
              md:w-[320px] md:h-[320px]">

              {/* ROTATING RING */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 30,
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
                          translate(
                            clamp(90px, 18vw, 140px)
                          )
                          rotate(-${angle}deg)
                        `,
                      }}
                    >
                      <img
                        src={src}
                        alt="RealBetter Agent"
                        className="
                          w-10 h-10
                          sm:w-12 sm:h-12
                          md:w-14 md:h-14
                          rounded-full
                          border-2 border-white
                          shadow-lg
                          bg-white
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
                    w-20 h-20
                    sm:w-24 sm:h-24
                    md:w-28 md:h-28
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
                    className="w-14 sm:w-16 md:w-20 h-auto"
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
