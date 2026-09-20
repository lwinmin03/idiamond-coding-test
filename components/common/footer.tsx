"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, Loader2, AppleIcon } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const validateEmail = (emailStr: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus("error");
      setMessage("Please enter an email address.");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Thank you for subscribing!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-800 pt-16 pb-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
            Contact Us
          </h3>
          <Link
            href="/appointment"
            className="text-sm text-slate-600 hover:text-slate-900 transition"
          >
            Book Appointment
          </Link>
          <Link
            href="/stores"
            className="text-sm text-slate-600 hover:text-slate-900 transition"
          >
            Visit Our Stores
          </Link>
          <Link
            href="/email-us"
            className="text-sm text-slate-600 hover:text-slate-900 transition"
          >
            Email Us
          </Link>
          <Link
            href="/contact"
            className="text-sm text-slate-600 hover:text-slate-900 transition"
          >
            Contact Us
          </Link>
          <Link
            href="/schedule-consultation"
            className="text-sm text-slate-600 hover:text-slate-900 transition"
          >
            Schedule a consultation
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
            The Art of Gifting
          </h3>
          <Link
            href="/gifting/wrapping"
            className="text-sm text-slate-600 hover:text-slate-900 transition"
          >
            Luxury Gift Wrapping
          </Link>
          <Link
            href="/gifting/gift-cards"
            className="text-sm text-slate-600 hover:text-slate-900 transition"
          >
            Gift Cards
          </Link>
          <Link
            href="/gifting/delivery"
            className="text-sm text-slate-600 hover:text-slate-900 transition"
          >
            Private & White-Glove Delivery
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
            Bespoke & Services
          </h3>
          <Link
            href="/services/custom-design"
            className="text-sm text-slate-600 hover:text-slate-900 transition"
          >
            Custom Jewelry Design
          </Link>
          <Link
            href="/services/consultations"
            className="text-sm text-slate-600 hover:text-slate-900 transition"
          >
            Private Jewelry Consultations
          </Link>
          <Link
            href="/services/restoration"
            className="text-sm text-slate-600 hover:text-slate-900 transition"
          >
            Jewelry Restoration & Care
          </Link>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-6">
          <div>
            <h3 className="text-sm font-medium text-slate-900 mb-3">
              Let’s Keep In Touch
            </h3>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 rounded-l"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                aria-label="Subscribe"
                className="px-5 bg-slate-900 hover:bg-slate-800 text-white transition flex items-center justify-center rounded-r disabled:opacity-50"
              >
                {status === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </form>
            {message && (
              <p
                className={`text-xs mt-2 ${
                  status === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-slate-700 mb-3">
              Payment Methods
            </h4>
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1.5 bg-white border border-slate-200 rounded text-xs font-bold tracking-tighter text-slate-900 shadow-2xs">
                VISA
              </div>

              <div className="px-3 py-1.5 bg-white border border-slate-200 rounded text-xs font-bold text-slate-900 shadow-2xs flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block opacity-80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400 inline-block -ml-2 opacity-80"></span>
              </div>

              <div className="px-3 py-1.5 bg-white border border-slate-200 rounded text-[10px] font-bold tracking-wider text-slate-900 shadow-2xs">
                AMEX
              </div>
              <div className="px-3 py-1.5 bg-white border border-slate-200 rounded text-xs font-medium text-slate-900 shadow-2xs flex items-center gap-1">
                <AppleIcon className="w-3.5 h-3.5 -mt-0.5" />
                <span>Pay</span>
              </div>

              <div className="px-3 py-1.5 bg-white border border-slate-200 rounded text-xs font-serif font-bold text-slate-900 shadow-2xs">
                ₺
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright, Legal Links, Socials */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2026, All Rights Reserved – MyJewel</p>

        <div className="flex items-center gap-6">
          <Link href="/terms" className="hover:text-slate-900 transition">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="hover:text-slate-900 transition">
            Privacy Policy
          </Link>
          <Link href="/sitemap" className="hover:text-slate-900 transition">
            Site Map
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center hover:text-slate-900 hover:border-slate-900 transition"
          >
            <span className="font-bold text-[10px]">f</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center hover:text-slate-900 hover:border-slate-900 transition"
          >
            <span className="font-bold text-[10px]">ig</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
