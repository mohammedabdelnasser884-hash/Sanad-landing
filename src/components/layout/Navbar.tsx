import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SanadLogoHorizontal } from "@/components/SanadLogo";

const NAV = [
  ["/#features", "المميزات"],
  ["/#screenshots", "التطبيق"],
  ["/pricing", "الأسعار"],
  ["/#contact", "تواصل"],
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-[#F1F5F9]"
          : "bg-white"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" data-testid="link-logo">
          <SanadLogoHorizontal height={46} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-[#64748B] hover:text-[#1E293B] transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/portal"
            className="text-sm text-[#64748B] hover:text-[#1E293B] transition-colors"
            data-testid="link-login"
          >
            دخول
          </Link>
          <a
            href="#contact"
            data-testid="button-start"
            className="bg-[#1E293B] hover:bg-[#0F172A] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            ابدأ مجاناً
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#1E293B] p-1"
          data-testid="button-menu"
          aria-label="القائمة"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-white border-t border-[#F1F5F9] px-6 py-6 flex flex-col gap-5"
          >
            {NAV.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-[#64748B] text-sm"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-[#1E293B] text-white text-sm font-semibold py-2.5 rounded-lg text-center"
            >
              ابدأ مجاناً
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
