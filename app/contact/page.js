"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const containerRef = useRef(null);
  const formBoxRef = useRef(null);
  const infoBlockRef = useRef(null);
  const bgVisualRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry animations
      gsap.from(".reveal-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(formBoxRef.current, {
        x: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.4,
      });

      gsap.from(".info-item", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.6,
      });

      // Background visual animations
      gsap.to(".grid-line", {
        strokeDashoffset: 0,
        duration: 2,
        stagger: 0.1,
        ease: "power2.inOut",
      });

      // Floating ambient particles
      gsap.to(".ambient-orb", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });
    }, containerRef);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 30;

      gsap.to(".parallax-layer", {
        x: xPos,
        y: yPos,
        duration: 2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <main ref={containerRef} className="bg-black min-h-screen text-white pt-32 flex flex-col relative overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.03] select-none">
          <svg width="100%" height="100%" className="parallax-layer">
            <defs>
              <pattern id="contactGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contactGrid)" />
          </svg>
        </div>

        {/* Ambient Glows */}
        <div className="ambient-orb absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="ambient-orb absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="flex-1 max-w-[1280px] mx-auto px-6 w-full pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Vision & Contact Info */}
          <div>
            <div className="mb-12">
              <h5 className="reveal-text text-[11px] uppercase tracking-widest text-zinc-500 font-semibold mb-6">Contact Us</h5>
              <h1 className="reveal-text text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-8">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Scale?</span>
              </h1>
              <p className="reveal-text text-lg text-zinc-400 font-light leading-relaxed max-w-lg">
                Connect with our engineering team to discuss architecture, development, or automation at enterprise scale.
              </p>
            </div>

            <div ref={infoBlockRef} className="space-y-10">
              <div className="info-item group cursor-pointer">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider mb-1">Email us</div>
                    <div className="text-lg font-medium group-hover:text-blue-400 transition-colors">contact@scaledesktechnology.com</div>
                  </div>
                </div>
              </div>

              <div className="info-item group cursor-pointer">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.657 16.657L13.414 20.9l-1.172-1.172a4 4 0 115.656-5.656l1.171 1.172-4.243 4.243z" /><path d="M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider mb-1">Visit us</div>
                    <div className="text-lg font-medium group-hover:text-indigo-400 transition-colors">Mau, Uttar Pradesh</div>
                  </div>
                </div>
              </div>

              <div className="info-item group cursor-pointer">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider mb-1">Call us</div>
                    <div className="text-lg font-medium group-hover:text-cyan-400 transition-colors">+91 9129937749</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Terminal (Form) */}
          <div ref={formBoxRef} className="relative w-full max-w-[560px] ml-auto">
            {/* Outer border glow */}
            <div className="absolute inset-x-0 inset-y-0 bg-blue-500/20 blur-[60px] opacity-20 pointer-events-none" />
            
            <div className="relative bg-[#080B14]/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden">
              <div className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-2">Initialize Communication</h2>
                <p className="text-sm text-zinc-500 font-light">Enter project parameters to start collaboration.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Identity</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-zinc-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Gateway</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your@Email.com"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-zinc-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Objective</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all duration-300 appearance-none"
                  >
                    <option value="" className="bg-[#080B14]">Select Domain</option>
                    <option value="AI Automation" className="bg-[#080B14]">AI & Intelligent Automation</option>
                    <option value="Platform Eng" className="bg-[#080B14]">Platform Engineering</option>
                    <option value="Cloud Scaling" className="bg-[#080B14]">Cloud Infrastructure Scaling</option>
                    <option value="Product Delivery" className="bg-[#080B14]">Rapid Product Delivery</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Payload</label>
                  <textarea
                    required
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe the technical requirements or vision..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-zinc-700 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full relative group"
                >
                  <div className="absolute inset-0 bg-blue-600 blur-[20px] opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-5 rounded-2xl transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] flex items-center justify-center gap-3 overflow-hidden">
                    {/* Hover Sweep */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : submitted ? (
                      "COMMUNICATION INITIALIZED"
                    ) : (
                      <>
                        <span className="tracking-widest">TRANSMIT REQUEST</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1.5 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </>
                    )}
                  </div>
                </button>

                {submitted && (
                  <p className="text-center text-[10px] font-bold text-blue-400 uppercase tracking-widest animate-pulse">
                    Transmission received. Estimated response within 2.4 cycles.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
