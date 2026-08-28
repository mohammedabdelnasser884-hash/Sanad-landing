import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SanadIcon } from "@/components/SanadLogo";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="py-16 px-6 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col items-center gap-10"
        >
          <SanadIcon size={56} />

          <div className="flex flex-col gap-5">
            <h2
              className="font-black text-[#1E293B]"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
              }}
            >
              ابدأ اليوم
            </h2>
            <p className="text-[#64748B]" style={{ fontSize: "1.0625rem", lineHeight: 1.6 }}>
              انضم إلى مئات المكاتب القانونية في المنطقة.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:support@sanadapp.sa"
              data-testid="button-cta-start"
              className="bg-[#1E293B] hover:bg-[#0F172A] text-white font-semibold px-10 py-4 rounded-xl transition-colors"
              style={{ fontSize: 14 }}
            >
              ابدأ مجاناً — 14 يوماً
            </a>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-cta-demo"
              className="text-[#1E293B] font-semibold px-10 py-4 rounded-xl transition-colors bg-white"
              style={{ border: "1px solid #E2E8F0", fontSize: 14 }}
            >
              تواصل معنا
            </a>
          </div>

          <a
            href="mailto:support@sanadapp.sa"
            className="text-[#94A3B8] hover:text-[#64748B] transition-colors"
            style={{ fontSize: 13 }}
          >
            support@sanadapp.sa
          </a>
        </motion.div>
      </div>
    </section>
  );
}
