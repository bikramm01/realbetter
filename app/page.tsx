"use client"

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { Disclosure } from '@headlessui/react';
import Header from "./components/Header"
const painPoints = [
  {
    title: "No Verified Inventory",
    desc: "Agents waste hours chasing fake, outdated, or duplicated properties.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48" className="text-red-500">
        <rect x="8" y="16" width="48" height="32" rx="4" ry="4" fill="none" stroke="currentColor" strokeWidth="4"/>
        <line x1="20" y1="28" x2="44" y2="44" stroke="currentColor" strokeWidth="4"/>
        <line x1="44" y1="28" x2="20" y2="44" stroke="currentColor" strokeWidth="4"/>
      </svg>
    ),
    color: "bg-red-100",
  },
  {
    title: "No Common Marketplace",
    desc: "Inventory is scattered across WhatsApp groups, brokers, PDFs, and voice notes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48" className="text-blue-500">
        <rect x="8" y="20" width="16" height="32" fill="none" stroke="currentColor" strokeWidth="3"/>
        <rect x="40" y="24" width="16" height="28" fill="none" stroke="currentColor" strokeWidth="3"/>
        <line x1="24" y1="36" x2="40" y2="36" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
      </svg>
    ),
    color: "bg-blue-100",
  },
  {
    title: "Hard to Find Fresh Floors",
    desc: "No single place to see new availability, what's sold, and what's coming soon.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48" className="text-yellow-500">
        <circle cx="28" cy="28" r="12" fill="none" stroke="currentColor" strokeWidth="3"/>
        <line x1="36" y1="36" x2="48" y2="48" stroke="currentColor" strokeWidth="3"/>
        <rect x="12" y="16" width="24" height="32" fill="none" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    color: "bg-yellow-100",
  },
  {
    title: "No Quality Photos/Videos",
    desc: "Agents lose buyers because they can't showcase properties professionally.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48" className="text-green-500">
        <rect x="12" y="20" width="40" height="28" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="32" cy="34" r="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        <line x1="44" y1="20" x2="52" y2="28" stroke="currentColor" strokeWidth="3"/>
      </svg>
    ),
    color: "bg-green-100",
  },
  {
    title: 'Buyers Want "Options, Options, Options"',
    desc: "Hard to present multiple relevant properties instantly - deals get delayed.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48" className="text-purple-500">
        <rect x="6" y="20" width="16" height="32" fill="none" stroke="currentColor" strokeWidth="3"/>
        <rect x="24" y="16" width="16" height="36" fill="none" stroke="currentColor" strokeWidth="3"/>
        <rect x="42" y="24" width="16" height="28" fill="none" stroke="currentColor" strokeWidth="3"/>
      </svg>
    ),
    color: "bg-purple-100",
  },
];

const faqItems = [
  {
    question: 'Are you spending hours chasing outdated listings?',
    answer: 'RealBetter consolidates all listings in one place, saving you time and reducing errors.',
  },
  {
    question: 'Have your deals fallen apart due to unreliable data?',
    answer: 'With verified inventory and real-time updates, you can confidently close more deals.',
  },
  {
    question: 'Looking back to consolidate relevant data and update your list of leads?',
    answer: 'RealBetter automatically organizes your leads and properties so nothing falls through the cracks.',
  },
  {
    question: 'Do you struggle to showcase properties professionally?',
    answer: 'Our platform provides high-quality photos, videos, and virtual tours ready for your clients.',
  },
  {
    question: 'Are buyers demanding multiple options instantly?',
    answer: 'You can quickly present curated property options to match buyer preferences and close faster.',
  },
  {
    question: 'Wasting time on WhatsApp groups, PDFs, and scattered data?',
    answer: 'RealBetter centralizes all your property data and communication in one clean dashboard.',
  },
];


/* ---------- Accent Colors ---------- */
const colors = {
  red: "#f87171",    // Tailwind red-400
  blue: "#60a5fa",   // Tailwind blue-400
  yellow: "#facc15", // Tailwind yellow-400
  green: "#34d399",  // Tailwind green-400
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
type ColorKey = keyof typeof colors;

function getColor(key: string) {
  if (key in colors) {
    return colors[key as ColorKey];
  }
  return undefined;
}

export default function RealBetterLandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
< Header />
    <header
  className="bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage: "url('/images/gurgaon-hero.jpg')", // Replace with your image path
  }}
>
  {/* Gradient overlay for better readability */}
  <div className="bg-gradient-to-r from-black/70 via-black/50 to-black/70 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-25 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: Hero text */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white drop-shadow-md"
          >
            The agent growth engine built for how <span className="underline decoration-red-400/60">you</span> work.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-lg lg:text-xl max-w-xl text-white/90 drop-shadow"
          >
            Fresh inventory. Verified listings. Daily updates. Whether you sell builder floors,
            resale, new launches or exclusive mandates - RealBetter helps you close faster.
          </motion.p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#get-access"
              className="inline-flex items-center justify-center rounded-md bg-red-600 text-white font-semibold px-6 py-3 shadow-md hover:bg-red-700 transition"
            >
              Book Demo
            </a>

            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-md border border-red-600 text-white/90 px-5 py-3 hover:bg-red-700/20 transition"
            >
              Watch 60s Demo
            </a>
          </div>

          <div className="mt-6 text-sm text-white/80">
            <span className="mr-4">✅ 1,000+ Gurgaon Agents</span>
            <span className="mr-4">✅ Daily Fresh Updates</span>
            <span>✅ Verified Builders & Owners</span>
          </div>
        </div>

        {/* Right: Cards */}
      <div className="relative mt-10 lg:mt-0 perspective-1000">
  <motion.div
    initial={{ rotateY: -10, opacity: 0, scale: 0.95 }}
    animate={{ rotateY: 0, opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20"
  >
    <motion.div
      animate={{ rotate: [0, 3, -3, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
    >
      <SegmentCard
        title="Builder Floors"
        subtitle="Fresh floors, HD photos"
        color="#ef4444"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21V7a2 2 0 012-2h14a2 2 0 012 2v14M3 10h18M7 21v-4h4v4M13 21v-6h4v6" />
          </svg>
        }
      />
      <SegmentCard
        title="Resale"
        subtitle="Verified resale listings"
        color="#3b82f6"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l5 5v9a2 2 0 01-2 2z" />
          </svg>
        }
      />
      <SegmentCard
        title="New Launches"
        subtitle="Pre-launch alerts & decks"
        color="#f59e0b"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.5 0-3 1-4 3s-1 5 4 5 4-4 4-5-1.5-3-4-3z" />
          </svg>
        }
      />
      <SegmentCard
        title="Listings"
        subtitle="Push to 10,000+ agents"
        color="#10b981"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M4 19h16M4 15h16" />
          </svg>
        }
      />
    </motion.div>
  </motion.div>
</div>



      </div>
    </div>
  </div>
</header>

<section className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
  {/* Background floating images / shapes */}
{/* Top-left circle */}
<svg
  className="absolute -top-20 -left-20 opacity-20 animate-pulse-slow w-52 h-52"
  viewBox="0 0 200 200"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle cx="100" cy="100" r="100" fill="rgba(248, 113, 113, 0.3)" />
</svg>

{/* Bottom-right circle */}
<svg
  className="absolute -bottom-24 -right-32 opacity-20 animate-pulse-slow w-72 h-72"
  viewBox="0 0 300 300"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle cx="150" cy="150" r="150" fill="rgba(250, 204, 21, 0.3)" />
</svg>


  <div className="max-w-7xl mx-auto px-6">
    {/* Section Title */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-3xl md:text-3xl font-extrabold text-center text-gray-900 mb-4 drop-shadow"
    >
      The Daily Struggles Every Gurgaon Agent Faces
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
    >
      These are the REAL challenges they face every day - and why RealBetter exists.
    </motion.p>

    {/* Pain Points Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {painPoints.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2, duration: 0.8 }}
          className="flex flex-col gap-4 p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform bg-white relative overflow-hidden"
        >
          {/* Inline SVG Icon */}
          <div className={`w-16 h-16 flex items-center justify-center rounded-full ${p.color} mb-2`}>
            {p.icon}
          </div>

          <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
          <p className="text-gray-600">{p.desc}</p>

          {/* Animated SVG underline */}
          <motion.div
            className="w-16 h-1 bg-red-500 rounded-full mt-2 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 + 0.3, duration: 0.5 }}
          />
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Segments Grid */}
     <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-extrabold text-center text-gray-900"
      >
        Built for 4 agent types - and it feels like it.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-3 text-center max-w-2xl mx-auto text-gray-600"
      >
        Each agent segment has its own workflow. We tailored features, messaging and UX so every
        agent can use RealBetter the way they already work.
      </motion.p>

      {/* Segments Grid */}
      <div className="mt-10 grid gap-6 grid-cols-1 lg:grid-cols-4">
        <SegmentPanel
          title="Builder Floors"
          tagline="Fresh Floors. Verified Floors."
          bullets={[
            "Verified builder floors (fresh availability)",
            "HD photos & videos",
            "Floor-wise specifications",
            "Hot floors of the day",
          ]}
          accent="red"
        />

        <SegmentPanel
          title="Resale"
          tagline="No time-wasters. Only real resale."
          bullets={[
            "Largest pool of verified resale",
            "Mandate files & owner-posted",
            "Presentable PDF share",
            "Instant budget match filters",
          ]}
          accent="blue"
        />

        <SegmentPanel
          title="New Launches"
          tagline="First to know. First to close."
          bullets={[
            "Pre-launch alerts",
            "High-quality project decks",
            "Landing pages for agents",
            "Filters for unit type / view / block",
          ]}
          accent="yellow"
        />

        <SegmentPanel
          title="Listings"
          tagline="Your listing sold — faster."
          bullets={[
            "Push to 10,000+ verified agents",
            "Auto-marketing tools",
            "Lead tracking & owner reports",
            "Maximum exposure for mandates",
          ]}
          accent="green"
        />
      </div>

      {/* Master CTA */}
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
        </a>
      </motion.div>
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


   <section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
    
    {/* Left: Image */}
    <div className="lg:w-1/2 flex justify-center relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full relative flex justify-center"
      >
        <Image
          src="/agent.webp"
          alt="How RealBetter Works"
          width={800}
          height={800}
          className="w-full h-auto rounded-3xl shadow-2xl object-cover"
        />

        {/* Animated floating circles */}
        <motion.div
          className="absolute -top-8 -left-8 w-24 h-24 rounded-full border-2 border-red-400/50"
          animate={{ scale: [0.8, 1.1, 0.8], rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-2 border-yellow-400/30"
          animate={{ scale: [1, 0.9, 1], rotate: [0, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
      </motion.div>
    </div>

    {/* Right: Steps */}
    <div className="lg:w-1/2 space-y-8">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold text-gray-900"
      >
        How RealBetter Works - 4 Simple Steps
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-gray-600"
      >
        Search. Share. Present. Close. - All with verified data.
      </motion.p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        <HowStep
          number={1}
          title="Join the Platform"
          desc="Sign up and get immediate access to curated inventory."
        />
        <HowStep
          number={2}
          title="Search by Segment"
          desc="Builder floors, resale, new launches or listings - filter instantly."
        />
        <HowStep
          number={3}
          title="Share in 1 Click"
          desc="HD photos, decks, PDFs - ready to send to buyers."
        />
        <HowStep
          number={4}
          title="Close Faster"
          desc="Deals move quicker with real, verified inventory."
        />
      </div>
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



<section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-extrabold text-center text-gray-900 mb-4"
        >
          Is This You?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-8"
        >
          If you answer yes to any of these, RealBetter is built for you:
        </motion.p>

        <div className="space-y-4">
  {faqItems.map((item, index) => (
    <Disclosure
      key={index}
      as="div"
      className="border border-red-300 rounded-2xl bg-white shadow-sm"
    >
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between items-center w-full px-6 py-4 text-left text-gray-900 font-semibold hover:bg-red-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500">
            <span>{item.question}</span>
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronUpIcon className="w-6 h-6 text-red-500" />
            </motion.span>
          </Disclosure.Button>

          <Disclosure.Panel>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 pb-4 text-gray-700 text-sm"
            >
              {item.answer}
            </motion.div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  ))}
</div>

      </div>
    </section>
<section className="py-20 bg-red-50">
  <div className="max-w-3xl mx-auto px-6 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl font-extrabold text-gray-900 mb-4"
    >
      Ready to See RealBetter in Action?
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-gray-700 mb-8 text-lg"
    >
      Book a personalized demo and discover how RealBetter can transform your workflow and boost your sales.
    </motion.p>

    <motion.a
      href="#book-demo" // Replace with your actual demo booking link
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-block px-8 py-4 bg-red-500 text-white font-semibold rounded-2xl shadow-lg hover:bg-red-600 transition-colors duration-300"
    >
      Book My Demo
    </motion.a>
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

/* ---------- Subcomponents ---------- */

type SegmentCardProps = {
  title: string;
  subtitle: string;
  color?: string;
};

function SegmentCard({ title, subtitle, color, icon }: { title: string; subtitle: string; color?: string; icon?: React.ReactNode }) {
  return (
    <div
      className="flex items-center gap-4 rounded-lg p-4 shadow-lg"
      style={{ backgroundColor: color }}
    >
      {icon && <div className="flex-shrink-0">{icon}</div>}
      <div>
        <div className="font-semibold text-white">{title}</div>
        <div className="text-sm text-white/90">{subtitle}</div>
      </div>
    </div>
  );
}

function SegmentPanel({ title, tagline, bullets, accent }: { title: string; tagline: string; bullets: string[]; accent: string }) {
  const accentColor = getColor(accent) || "#e5e7eb"; // fallback gray
  return (
    <article className="rounded-2xl p-6 border shadow-sm bg-white" style={{ borderColor: accentColor }}>
      <h4 className="font-bold text-lg text-gray-900">{title}</h4>
      <div className="text-sm text-gray-500 mt-1">{tagline}</div>

      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3 items-start">
            <svg className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7l-1.5-1.5 1-1 0.5.5L11 8l4-4 1 1-5 5-1.5 1.5L9 11z" clipRule="evenodd" />
            </svg>
            <span>{b}</span>
          </li>
        ))}
      </ul>

    
    </article>
  );
}

function HowStep({ number, title, desc }: { number: number; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm text-left">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">{number}</div>
        <div>
          <div className="font-semibold text-gray-900">{title}</div>
          <div className="text-sm text-gray-500">{desc}</div>
        </div>
      </div>
    </div>
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

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
      <div className="text-sm text-gray-600">{label}</div>
      <div className="font-semibold text-gray-900">{value}</div>
    </div>
  );
}
