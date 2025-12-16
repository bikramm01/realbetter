"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Header from "../components/Header";

/* ================= ANIMATION VARIANTS ================= */

// easeOut equivalent (TS-safe)
const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};



const testimonials = [
  {
    video: "/videos/agent1.mp4",
    agent: "Naveen Arora",
    role: "Builder Floor Agent",
    likes: 124,
    comments: 12,
    text: "“Earlier I wasted hours confirming availability. RealBetter gives fresh builder floors daily with photos. My presentation improved instantly.”"
  },
  {
    video: "/videos/agent2.mp4",
    agent: "Aman Dahiya",
    role: "Resale Agent",
    likes: 98,
    comments: 8,
    text: "“I closed a 4-floor deal in 48 hours. No time wasted.”"
  },
  {
    video: "/videos/agent3.mp4",
    agent: "Ankush Malik",
    role: "New Launch Agent",
    likes: 150,
    comments: 20,
    text: "“Resale is messy, but RealBetter brings structure. I always have 5–6 options ready now.”"
  },
  {
    video: "/videos/agent4.mp4",
    agent: "Ravi Sharma",
    role: "Listing Agent",
    likes: 85,
    comments: 5,
    text: "“Listing distribution is so easy now, and I get instant feedback from buyers.”"
  },
  
];
/* ================= PAGE ================= */

export default function BuilderFloorsPage() {
  return (
    <main className="bg-white text-gray-900">
      <Header />

      {/* ================= HERO ================= */}
      <section className="relative bg-black text-white overflow-hidden">
        <Image
          src="/images/gurgaon-hero.jpg"
          alt="Gurgaon Builder Floors"
          fill
          priority
          className="object-cover opacity-30"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative max-w-7xl mx-auto px-6 py-28 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold">
            REALBETTER — BUILDER FLOORS FOR <br /> REAL ESTATE AGENTS
          </h1>

          <p className="mt-6 text-xl font-semibold text-red-400">
            6000+ VERIFIED NEW BUILDER FLOORS IN GURGAON
          </p>

          <p className="mt-4 text-lg text-white/90">
            Talk directly to 1500+ builders · Fresh · Verified · Ready to sell
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#demo"
              className="px-8 py-4 bg-red-600 rounded-full font-semibold hover:bg-red-700 transition"
            >
              👉 Book a Free Demo
            </a>
            <a
              href="#inventory"
              className="px-8 py-4 border border-white/40 rounded-full hover:bg-white/10 transition"
            >
              👉 Search Verified Builder Floors
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= DAILY PAIN ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl font-extrabold text-center mb-12"
          >
            🔥 BUILDER FLOOR AGENTS — THIS IS YOUR DAILY PAIN
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-10 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeLeft} className="relative">
              <Image
                src="/images/agent-frustrated.png"
                alt="Frustrated builder floor agent"
                width={600}
                height={450}
                className="rounded-2xl shadow-lg object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                Every builder floor agent has lived this moment
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              className="bg-white rounded-2xl shadow p-8 space-y-4 text-lg"
            >
              <p>Let’s be honest 👇</p>
              <p>
                <b>Client says:</b> “20–25 options dikhao”
              </p>
              <p>Competition is crazy — same floor sold by 10 agents</p>
              <p>Availability turns out to be fake / outdated</p>

              <ul className="space-y-1">
                <li>Photos? ❌</li>
                <li>Construction status? ❌</li>
                <li>Exact location? ❌</li>
                <li>Builder ka direct contact? ❌</li>
              </ul>

              <div className="pt-4 font-semibold">
                You lose:
                <ul className="list-disc ml-6 mt-2">
                  <li>Time</li>
                  <li>Client trust</li>
                  <li>And finally… the deal</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= REAL PROBLEM ================= */}
      <section className="py-20 bg-white">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-extrabold">
            ❌ THE REAL PROBLEM IS NOT CLIENTS
          </h2>
          <p className="text-lg font-semibold text-red-600">
            UNORGANISED BUILDER FLOOR INVENTORY
          </p>
          <ul className="text-lg space-y-1">
            <li>Scattered</li>
            <li>Unverified</li>
            <li>WhatsApp-based</li>
            <li>Forward-to-forward</li>
            <li>Full of confusion</li>
          </ul>
          <p className="font-bold text-xl">
            When inventory is weak, agent loses power.
          </p>
        </motion.div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section className="py-20 bg-red-50">
        <motion.div
          className="max-w-5xl mx-auto px-6 text-center space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-extrabold">
            ✅ REALBETTER SOLVES THIS — COMPLETELY
          </h2>
          <p className="text-lg font-semibold">
            BUILT ONLY for Builder Floor Agents
          </p>
          <blockquote className="bg-white p-6 rounded-xl shadow text-xl font-bold">
            “Agar Gurgaon me hai, toh RealBetter pe hai.
            <br />
            Aur agar RealBetter pe hai, toh matlab{" "}
            <span className="text-red-600">CORRECT</span> hai.”
          </blockquote>
        </motion.div>

        <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 flex justify-center"
              >
                <a
                  href="#book-demo"
                  className="px-8 py-4 bg-red-600 text-white rounded-full font-semibold shadow-lg hover:bg-red-700 transition"
                >
                  Book Your Free Demo
                      <span className="ml-2 inline-block animate-move-arrow">→</span>
        
                </a>
              </motion.div>
          
      </section>

      <section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-extrabold mb-12">
      RealBetter in Numbers
    </h2>

    <div className="grid md:grid-cols-4 gap-6">
      {[
        { n: "6000+", t: "Verified Builder Floors" },
        { n: "1500+", t: "Direct Builders" },
        { n: "100%", t: "Gurgaon Coverage" },
        { n: "Daily", t: "Fresh Inventory" },
      ].map((item) => (
        <motion.div
          key={item.t}
          variants={fadeUp}
          className="bg-gray-50 p-6 rounded-xl shadow"
        >
          <div className="text-4xl font-extrabold text-red-600">
            {item.n}
          </div>
          <div className="mt-2 font-medium">{item.t}</div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<section className="w-full py-20 bg-white flex justify-center" id="demo">
  <div className="w-full max-w-5xl px-4">
    
    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
      Why RealBetter?
    </h2>

    {/* Video Container */}
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl cursor-pointer">
  <video
    id="demoVideo"
    src="/videos/demo.mp4"
    className="w-full h-full object-cover"
    poster="/video-thumb.jpg"
    muted
    playsInline
    autoPlay
    preload="auto"
    controls
    onLoadedMetadata={(e) => {
      const vid = e.target as HTMLVideoElement;
      vid.muted = true;
      vid.play().catch(() => {});
    }}
    onClick={(e) => {
      const vid = e.target as HTMLVideoElement;
      vid.muted = false;   // 🔊 unmute on click
      vid.play();          // continue playing
    }}
  />
</div>


  </div>
</section>



<section className="py-10 bg-white">
  <div className="max-w-7xl mx-auto px-4 lg:px-6">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl font-extrabold text-center text-gray-900"
    >
      Why Gurgaon’s 10,000+ Agents Trust Us
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center text-gray-600 mt-2 max-w-2xl mx-auto"
    >
      See what agents are saying about RealBetter.
    </motion.p>

    {/* Scroll container: vertical on mobile, horizontal on desktop */}
    <div
      className="mt-6 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 overflow-y-auto md:overflow-x-auto pb-4 snap-y md:snap-x snap-mandatory"
      id="video-scroll-container"
    >
      {testimonials.map((t, i) => {
        const videoRef = React.createRef<HTMLVideoElement>();
        const [isPlaying, setIsPlaying] = React.useState(false);

        const togglePlay = () => {
          const v = videoRef.current;
          if (v) {
            if (v.paused) {
              v.play();
              setIsPlaying(true);
            } else {
              v.pause();
              setIsPlaying(false);
            }
            v.muted = false;
          }
        };

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex justify-center w-full" // Center each video
          >
            <div
              className="bg-gray-50 rounded-2xl shadow-md overflow-hidden flex-shrink-0 snap-center"
              style={{ width: '250px', height: '500px' }}
            >
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  src={t.video}
                  muted
                  playsInline
                  className="w-full h-full object-cover cursor-pointer rounded-2xl"
                  onClick={togglePlay}
                />

                {/* Play/Pause Button */}
                <button
                  onClick={togglePlay}
                  className="absolute bottom-3 right-3 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition"
                >
                  {isPlaying ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                {/* Reactions overlay */}
                <div className="absolute bottom-3 left-3 flex flex-col gap-2 text-white">
                  <button className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full text-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    {t.likes}
                  </button>
                  <button className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full text-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4-4.03 7-9 7a9.02 9.02 0 01-4-.92l-4 1 1-4A8.96 8.96 0 013 12c0-4 4.03-7 9-7s9 3 9 7z"
                      />
                    </svg>
                    {t.comments}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

<section className="py-20 bg-gray-50">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-3xl font-extrabold text-center mb-10">
      Is RealBetter Right for You?
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-bold mb-3">✅ Perfect For</h3>
        <ul className="space-y-2">
          <li>✔ Builder floor agents in Gurgaon</li>
          <li>✔ Agents closing ₹5Cr+ deals</li>
          <li>✔ Professionals who value accuracy</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-bold mb-3">❌ Not For</h3>
        <ul className="space-y-2">
          <li>✖ Random WhatsApp brokers</li>
          <li>✖ Fake inventory sellers</li>
          <li>✖ Non-Gurgaon markets</li>
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-red-600 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold mb-6">
            Builder Floors is not about luck.
            <br />
            It’s about inventory.
          </h2>

          <p className="text-xl mb-10">
            RealBetter gives you the strongest builder floor inventory in Gurgaon.
          </p>

          <a
            href="#"
            className="inline-block px-10 py-5 bg-white text-red-600 font-bold rounded-full shadow
                       hover:bg-gray-100 hover:scale-[1.03] transition-transform"
          >
            👉 Sign up free · Earn today · Pay monthly
          </a>
        </motion.div>
      </section>
{/* Notice Section */}
<section className="py-12 bg-gray-50">
  <div className="max-w-3xl mx-auto px-6 text-center">
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-gray-700 text-lg font-medium"
    >
      Keep same footer as actual
    </motion.p>
  </div>
</section>
      
    </main>
  );
}


function Testimonial({ quote, name }: { quote: string; name: string }) {
  return (
    <blockquote className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
      <p className="text-sm text-gray-800">“{quote}”</p>
      <cite className="mt-2 block text-xs text-gray-600">— {name}</cite>
    </blockquote>
  );
}