"use client";

import Header from "./components/Header";
import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import AgentLove from"./components/AgentLove";

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
/* ================= MOTION CONFIG ================= */
const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export default function SubscriptionClient() {
  const [plan, setPlan] = useState<"annual" | "monthly">("annual");

  // 👉 ADD EXIT POPUP STATE + LOGIC HERE

  return (
    <main className="bg-white text-gray-900">
  <Header />
{/* ================= FULL WIDTH HERO ================= */}
<section className="relative min-h-[90vh] flex items-center justify-center py-25 overflow-hidden">

 {/* BACKGROUND IMAGE */}
<div
  className="absolute inset-0 bg-cover bg-center scale-105"
  style={{ backgroundImage: "url('/images/hero-dashboard.png')" }}
/>

{/* DARK GRADIENT + BLUR */}
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/95 backdrop-blur-[3px]" />

{/* VIGNETTE (edges darker, center focus) */}
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_70%)]" />

  {/* CONTENT */}
  <motion.div
    variants={container}
    initial="hidden"
    animate="visible"
    className="relative w-full max-w-4xl mx-auto px-5 text-center text-white"
  >
    <motion.div variants={item} className="space-y-6">

      {/* BADGE */}
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/15 backdrop-blur text-xs font-semibold tracking-wide">
  India’s First App for Real Estate Agents
</div>

      {/* MAIN HEADING */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
        Stop Chasing Inventory.
        <br />
        Start Closing Real Deals.
      </h1>

      {/* SUBTEXT */}
      <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto">
        Access verified builder floors, resale properties and premium listings
        on one professional platform built exclusively for agents.
      </p>

      {/* TRUST STATS */}
      <div className="flex flex-wrap justify-center gap-8 pt-2">
        <div>
          <p className="text-xl font-bold">11,000+</p>
          <p className="text-xs text-white/75">Active Agents</p>
        </div>
        <div>
          <p className="text-xl font-bold">6,000+</p>
          <p className="text-xs text-white/75">Verified Listings</p>
        </div>
        <div>
          <p className="text-xl font-bold">1,500+</p>
          <p className="text-xs text-white/75">Direct Builders</p>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <a
          href="#pricing"
          className="inline-flex justify-center px-8 py-4 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 transition"
        >
          View Subscription Plans
        </a>

        {/* PRICE STRIP */}
        <span className="relative text-sm text-white/90">
          Starting at ₹3,000 / month
          <motion.span
            aria-hidden
            className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-transparent via-white/70 to-transparent"
            animate={{ x: ["-15%", "15%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        </span>
      </div>

      {/* TRUST NOTE */}
      <p className="text-xs text-white/70 pt-2">
        Secure payments via Razorpay • GST included • 7-day money-back guarantee
      </p>

    </motion.div>
  </motion.div>
</section>

{/* ================= PROBLEM → SOLUTION ================= */}
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-5">

    {/* HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
        Why Most Agents Struggle to Close Deals
      </h2>
      <p className="text-gray-600 text-lg">
        The problem is not your effort. It’s the broken system around you.
      </p>
    </div>

    {/* GRID */}
    <div className="grid lg:grid-cols-3 gap-10 items-center">

      {/* PROBLEMS */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-5"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Current Reality
        </h3>

        {[
          "Fake or outdated availability",
          "Same property circulated by many agents",
          "Clients losing confidence",
          "Endless WhatsApp follow-ups",
        ].map((text) => (
          <div
            key={text}
            className="flex items-start gap-4 bg-white p-5 rounded-xl shadow border"
          >
            {/* alert icon */}
            <svg
              className="w-5 h-5 text-gray-400 mt-1"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v4m0 4h.01M10.29 3.86l-7.4 12.8A2 2 0 004.6 20h14.8a2 2 0 001.71-3.34l-7.4-12.8a2 2 0 00-3.42 0z"
              />
            </svg>

            <p className="text-gray-700">{text}</p>
          </div>
        ))}
      </motion.div>

      {/* CENTER IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <img
          src="/images/agent-using-phone.png"
          alt="Agent using RealBetter app"
          className="w-[220px] sm:w-[260px] lg:w-[300px] rounded-2xl shadow-2xl"
        />
      </motion.div>

      {/* SOLUTIONS */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-5"
      >
        <h3 className="text-lg font-bold text-red-600 mb-4">
          With RealBetter
        </h3>

        {[
          "Verified live inventory from trusted sources",
          "Direct builder & owner listings",
          "Faster site visits and decisions",
          "Stronger client trust and faster closures",
        ].map((text) => (
          <div
            key={text}
            className="flex items-start gap-4 bg-white p-5 rounded-xl shadow border border-red-100"
          >
            {/* check icon */}
            <svg
              className="w-5 h-5 text-red-600 mt-1"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m7 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p className="text-gray-800">{text}</p>
          </div>
        ))}
      </motion.div>

    </div>

    {/* RESULT STRIP */}
    <div className="mt-16 text-center">
      <div className="inline-flex items-center gap-3 bg-red-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
          />
        </svg>
        Less chasing. More closing. Better reputation.
      </div>
    </div>

  </div>
</section>


    <AgentLove />
{/* ================= WHAT YOU GET ================= */}
<section id="features" className="py-24  bg-white">
  <div className="max-w-7xl mx-auto px-5">

    {/* HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
        What You Get With RealBetter
      </h2>
      <p className="text-gray-600 text-lg">
        A complete professional system designed to help agents close faster.
      </p>
    </div>

    {/* GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* FEATURE CARD */}
      {[
        {
          title: "Developer Store Access",
          desc: "Direct access to verified primary sales inventories from builders.",
          icon: (
            <>
              <path d="M3 21h18" />
              <path d="M4 21V8l8-5 8 5v13" />
              <path d="M9 21v-6h6v6" />
            </>
          ),
        },
        {
          title: "Resale Marketplace",
          desc: "Curated resale properties from trusted agent network.",
          icon: (
            <>
              <path d="M3 10l9-7 9 7" />
              <path d="M5 10v11h14V10" />
            </>
          ),
        },
        {
          title: "Builder Floor Inventory",
          desc: "High-demand builder floors with strong margins and fast closures.",
          icon: (
            <>
              <path d="M4 21V4h16v17" />
              <path d="M9 21v-8h6v8" />
            </>
          ),
        },
        {
          title: "Unlimited Sell Postings",
          desc: "Post and manage unlimited listings without restrictions.",
          icon: (
            <>
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </>
          ),
        },
        {
          title: "Platinum Club Deals",
          desc: "Priority premium listings with higher conversion potential.",
          icon: (
            <>
              <path d="M12 3l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-6.5L2 10h7z" />
            </>
          ),
        },
        {
          title: "Professional Tools",
          desc: "Presentations, verified data and faster client follow-ups.",
          icon: (
            <>
              <rect x="3" y="4" width="18" height="12" rx="2" />
              <path d="M8 20h8" />
            </>
          ),
        },
      ].map((f) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
        >
          {/* ICON */}
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow mb-5 text-red-600">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {f.icon}
            </svg>
          </div>

          <h3 className="font-bold text-lg mb-2">{f.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
        </motion.div>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-16 text-center">
      <a
        href="#pricing"
        className="inline-flex items-center gap-3 px-10 py-4 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition"
      >
        Start Closing Smarter
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M13 5l7 7-7 7" />
        </svg>
      </a>
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



{/* ================= HOW IT WORKS ================= */}
<section id="how" className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-5">

    {/* HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
        How RealBetter Works
      </h2>
      <p className="text-gray-600 text-lg">
        From verified listings to faster closures — in three simple steps.
      </p>
    </div>

    {/* STEPS */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* STEP 1 */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition relative"
      >
        <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-red-600 text-white font-bold flex items-center justify-center shadow-lg">
          01
        </div>

        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-50 text-red-600 mb-6">
          {/* Property Search Icon */}
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 10.5L12 3l9 7.5" />
            <path d="M5 10v10h14V10" />
            <path d="M9 20v-6h6v6" />
          </svg>
        </div>

        <h3 className="font-bold text-lg mb-3">Discover Verified Inventory</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Browse builder floors, resale and premium listings posted by verified
          builders and trusted agents.
        </p>
      </motion.div>

      {/* STEP 2 */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition relative"
      >
        <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-red-600 text-white font-bold flex items-center justify-center shadow-lg">
          02
        </div>

        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-50 text-red-600 mb-6">
          {/* Schedule / Calendar Icon */}
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
            <path d="M9 16l2 2 4-4" />
          </svg>
        </div>

        <h3 className="font-bold text-lg mb-3">Connect & Schedule Visits</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Coordinate directly with listing partners and arrange site visits
          without endless WhatsApp chasing.
        </p>
      </motion.div>

      {/* STEP 3 */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition relative"
      >
        <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-red-600 text-white font-bold flex items-center justify-center shadow-lg">
          03
        </div>

        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-50 text-red-600 mb-6">
          {/* Deal / Handshake Icon */}
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 12l5 5L22 7" />
            <path d="M2 12l5 5" />
          </svg>
        </div>

        <h3 className="font-bold text-lg mb-3">Present, Negotiate & Close</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Use accurate pricing, verified data and professional listings to close
          deals with confidence.
        </p>
      </motion.div>

    </div>

    

  </div>
</section>

    {/* ================= RIGHT FOR YOU ================= */}
    <section className="py-15 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* IMAGE */}
        <div className="flex justify-center mb-10">
          <Image
            src="/images/happy-agent-closing-deal.png" // replace with your image path
            alt="Happy real estate agent closing a builder floor deal"
            width={420}
            height={280}
            className="rounded-2xl shadow-lg object-cover"
            priority
          />
        </div>
    
        {/* TITLE */}
        <h2 className="text-3xl font-extrabold text-center mb-10">
          Is RealBetter Right for You?
        </h2>
    
        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* PERFECT FOR */}
          <div className="bg-white p-6 rounded-xl shadow border border-red-100">
            <h3 className="font-bold mb-3 text-red-600">✅ Perfect For</h3>
            <ul className="space-y-2">
              <li>✔ Builder floor agents in Gurgaon</li>
              <li>✔ Agents closing ₹5Cr+ deals</li>
              <li>✔ Professionals who value accuracy</li>
            </ul>
          </div>
    
          {/* NOT FOR */}
          <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
            <h3 className="font-bold mb-3 text-gray-700">❌ Not For</h3>
            <ul className="space-y-2">
              <li>✖ Random WhatsApp brokers</li>
              <li>✖ Fake inventory sellers</li>
              <li>✖ Non-Gurgaon markets</li>
            </ul>
          </div>
    
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
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

      {/* ================= PRICING ================= */}
<section id="pricing" className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-5">

    {/* TITLE */}
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
        Upgrade Your Plan
      </h2>
      <p className="text-gray-600 text-lg">
        Choose the plan that fits your business growth.
      </p>
    </div>

    {/* PAYMENT TRUST STRIP */}
    <div className="flex flex-col items-center mb-12">
      <div className="flex flex-wrap items-center justify-center gap-6 bg-white px-6 py-4 rounded-xl shadow-sm border">

        {/* Razorpay Logo */}
        <img
          src="/images/razorpay-logo.png"
          alt="Razorpay Secure Payments"
          className="h-6 sm:h-7 object-contain"
        />

        {/* Trust Text */}
        <div className="text-sm text-gray-600 text-center sm:text-left">
          Secure payments powered by{" "}
          <span className="font-semibold text-gray-900">Razorpay</span>
          <span className="hidden sm:inline"> • </span>
          <span className="block sm:inline">
            UPI, Cards, Net Banking & Wallets
          </span>
        </div>

      </div>

      <p className="text-xs text-gray-500 mt-3 text-center">
        GST included • Instant invoice • Bank-grade security
      </p>
    </div>

    {/* PRICING GRID */}
    <div className="grid md:grid-cols-2 gap-10">

      {/* LEFT — FEATURES */}
      <div className="bg-white p-8 rounded-2xl shadow border">
        <h3 className="text-2xl font-extrabold mb-6">
          What’s Included
        </h3>

        <ul className="space-y-4 text-gray-700">
          {[
            "Developer Store access",
            "Resale Marketplace listings",
            "Builder Floor inventory",
            "Unlimited sell postings",
            "Platinum Club top deals",
            "Verified partner network",
          ].map((t) => (
            <li key={t} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-red-600 mt-0.5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 12l2 2 4-4m7 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT — PLANS */}
      <div className="bg-white p-8 rounded-2xl shadow border">

        {/* ANNUAL PLAN — BEST VALUE */}
        <div
          onClick={() => setPlan("annual")}
          className={`
            relative
            border-2 rounded-xl p-6 mb-6 cursor-pointer
            transition
            ${
              plan === "annual"
                ? "border-red-600 ring-2 ring-red-100"
                : "border-gray-300 hover:border-gray-400"
            }
          `}
        >
          {/* Badge */}
          <div className="absolute -top-3 left-6 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            BEST VALUE
          </div>

          <h4 className="font-bold text-lg mb-1">Annual Plan</h4>

          <p className="text-sm mb-1">
            <span className="line-through text-gray-400 mr-2">₹36,000</span>
            <span className="text-red-600 font-bold text-lg">
              ₹18,000 / year
            </span>
          </p>

          <p className="text-xs text-gray-500">
            Effective ₹1,500 per month • Save 50%
          </p>
        </div>

        {/* MONTHLY PLAN */}
        <div
          onClick={() => setPlan("monthly")}
          className={`
            border rounded-xl p-6 mb-8 cursor-pointer transition
            ${
              plan === "monthly"
                ? "border-red-600 ring-2 ring-red-100"
                : "border-gray-300 hover:border-gray-400"
            }
          `}
        >
          <h4 className="font-bold text-lg mb-1">Monthly Plan</h4>
          <p className="text-sm text-gray-700 font-semibold">
            ₹3,000 / month
          </p>
        </div>

        {/* PAY BUTTON */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="
            w-full py-4 rounded-full
            bg-red-600 text-white font-bold text-lg
            hover:bg-red-700 transition
            shadow-lg
          "
        >
          {plan === "annual"
            ? "Pay ₹18,000 / Year - Save 50%"
            : "Pay ₹3,000 / Month"}
        </motion.button>

        <p className="text-xs text-gray-500 text-center mt-4">
          7-day money-back guarantee on all plans
        </p>

      </div>

    </div>
  </div>
</section>


     {/* ================= MONEY BACK GUARANTEE ================= */}
<section className="py-20 bg-white">
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: easeOut }}
    className="max-w-6xl mx-auto px-6"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* LEFT */}
      <div className="space-y-5 text-center md:text-left">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-700 text-xs font-semibold tracking-wide">
          REALBETTER GUARANTEE
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
          Try RealBetter with complete peace of mind
        </h2>

        <p className="text-lg font-semibold text-red-600">
          7-Day Money-Back Guarantee
        </p>

        <ul className="text-gray-700 text-base space-y-2">
          <li>• Explore all premium features for 7 days</li>
          <li>• Full refund if it doesn’t fit your workflow</li>
          <li>• No questions, no conditions</li>
          <li>• Simple cancellation process</li>
        </ul>

        {/* Trust Faces */}
        <div className="mt-6 flex flex-wrap justify-center md:justify-start items-center gap-3">
          <div className="flex -space-x-3">
            {[
              "https://randomuser.me/api/portraits/men/32.jpg",
              "https://randomuser.me/api/portraits/women/44.jpg",
              "https://randomuser.me/api/portraits/men/65.jpg",
              "https://randomuser.me/api/portraits/women/29.jpg",
              "https://randomuser.me/api/portraits/men/12.jpg",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="RealBetter Agent"
                className="w-11 h-11 rounded-full border-2 border-white shadow-sm object-cover"
              />
            ))}
          </div>

          <p className="text-sm text-gray-600 ml-2">
            Trusted by{" "}
            <span className="font-semibold text-red-600">11,000+</span> agents
          </p>
        </div>

        {/* CTA */}
        <div className="pt-5">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-9 py-3.5 bg-red-600 text-white font-semibold rounded-full shadow-md
                       hover:bg-red-700 transition"
          >
            Start Risk-Free Trial
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center md:justify-end">
        <img
          src="/images/money-back-guarantee.webp"
          alt="7 Days Money Back Guarantee"
          className="w-full max-w-sm rounded-xl shadow-lg"
        />
      </div>

    </div>
  </motion.div>
</section>


   {/* ================= FINAL CTA ================= */}
<section className="relative py-20 text-white text-center overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-700" />
  <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

  <div className="relative max-w-3xl mx-auto px-6">

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug mb-5">
      Stop chasing inventory.
      <br />
      Start closing verified deals.
    </h2>

    <p className="text-white/90 text-base mb-8">
      Join thousands of agents already using RealBetter to close faster with
      verified listings and direct builder access.
    </p>

    <a
      href="#pricing"
      className="inline-flex items-center justify-center px-9 py-4 bg-white text-red-600 font-bold rounded-full
                 hover:bg-gray-100 transition shadow-lg"
    >
      Start from ₹3,000 / Month
    </a>

  </div>
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