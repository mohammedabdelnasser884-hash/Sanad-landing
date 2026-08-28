import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
const heroScreens = [
  { src: "/screenshots/home.jpg", alt: "الرئيسية" },
  { src: "/screenshots/clients.jpg", alt: "الموكلين" },
  { src: "/screenshots/case-detail.jpg", alt: "تفاصيل القضية" },
];

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center bg-white overflow-hidden"
      style={{ minHeight: "90vh", paddingTop: 72 }}
    >
      {/* ── Compact text block ── */}
      <div className="max-w-3xl mx-auto w-full text-center px-6 pt-16 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="font-black text-[#1E293B]"
          style={{
            fontSize: "clamp(2.5rem, 7.5vw, 6rem)",
            letterSpacing: "-0.032em",
            lineHeight: 1.06,
            marginBottom: "1.25rem",
          }}
        >
          إدارة مكتبك القانوني
          <br />
          من مكان واحد
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.5, ease }}
          style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
            color: "#64748B",
            maxWidth: 360,
            margin: "0 auto 2.25rem",
            lineHeight: 1.6,
          }}
        >
          القضايا، العملاء، الجلسات، والأتعاب — كل شيء في منصة واحدة.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.45, ease }}
          className="flex flex-wrap justify-center items-center gap-4"
        >
          <a
            href="#contact"
            data-testid="button-hero-start"
            className="bg-[#1E293B] hover:bg-[#0F172A] text-white font-bold transition-colors"
            style={{ fontSize: 15, padding: "14px 40px", borderRadius: 14 }}
          >
            ابدأ الآن
          </a>
          <a
            href="#contact"
            data-testid="button-hero-demo"
            className="text-[#64748B] hover:text-[#1E293B] font-medium transition-colors flex items-center gap-1.5"
            style={{ fontSize: 14 }}
          >
            طلب عرض توضيحي
            <span style={{ opacity: 0.5 }}>←</span>
          </a>
        </motion.div>
      </div>

      {/* ── THE PRODUCT — dominant visual ── */}
      <motion.div
        initial={{ opacity: 0, y: 64 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28, duration: 1.0, ease }}
        className="relative flex justify-center items-end w-full"
        style={{ paddingInline: "clamp(16px, 4vw, 48px)", gap: "clamp(10px, 2vw, 28px)" }}
      >
        {/* Side phone — sessions */}
        <div
          className="hidden sm:block flex-shrink-0"
          style={{
            width: "clamp(170px, 19vw, 280px)",
            marginBottom: "clamp(40px, 6vw, 100px)",
            opacity: 0.5,
          }}
        >
          <PhoneFrame src="/screenshots/case-detail.jpg" alt="تفاصيل القضية" />
        </div>

        {/* CENTER phone — hero, much larger */}
        <div
          className="relative flex-shrink-0"
          style={{ width: "clamp(260px, 34vw, 500px)", zIndex: 10 }}
        >
          <LivePhoneFrame />
        </div>

        {/* Side phone — clients */}
        <div
          className="hidden sm:block flex-shrink-0"
          style={{
            width: "clamp(170px, 19vw, 280px)",
            marginBottom: "clamp(40px, 6vw, 100px)",
            opacity: 0.5,
          }}
        >
          <PhoneFrame src="/screenshots/clients.jpg" alt="الموكلين" />
        </div>
      </motion.div>
    </section>
  );
}

function PhoneFrame({ src, alt, primary = false }: { src: string; alt: string; primary?: boolean }) {
  return (
    <div
      className="w-full overflow-hidden"
      style={{
        aspectRatio: "9/19.5",
        borderRadius: "clamp(22px, 3.5vw, 44px)",
        background: "#041B45",
        border: primary
          ? "2.5px solid rgba(30,41,59,0.95)"
          : "2px solid rgba(30,41,59,0.45)",
        boxShadow: primary
          ? "0 64px 120px -20px rgba(4,27,69,0.40), 0 0 0 1px rgba(200,167,93,0.14)"
          : "0 28px 56px -12px rgba(0,0,0,0.18)",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-top"
        draggable={false}
      />
    </div>
  );
}

function LivePhoneFrame() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroScreens.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, []);

  const activeScreen = heroScreens[activeIndex];

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        aspectRatio: "9/19.5",
        borderRadius: "clamp(22px, 3.5vw, 44px)",
        background: "#041B45",
        border: "2.5px solid rgba(30,41,59,0.95)",
        boxShadow: "0 64px 120px -20px rgba(4,27,69,0.40), 0 0 0 1px rgba(200,167,93,0.14)",
      }}
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.img
          key={activeScreen.src}
          src={activeScreen.src}
          alt={activeScreen.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease }}
          className="w-full h-full object-cover object-top"
          draggable={false}
        />
      </AnimatePresence>
    </div>
  );
}
