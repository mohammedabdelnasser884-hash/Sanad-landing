import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/config";
import { CheckCircle2 } from "lucide-react";
import { SanadIcon } from "@/components/SanadLogo";
import SectionHeading from "@/components/SectionHeading";

export default function WhySanadSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-14 px-6 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: visual */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-white border border-[#E2E8F0] rounded-2xl p-10 flex flex-col items-center text-center gap-4 shadow-sm"
        >
          <SanadIcon size={80} className="rounded-2xl" />
          <h3 className="text-2xl font-bold text-[#1E293B]">سند</h3>
          <p className="text-[#64748B] text-sm leading-relaxed max-w-xs">
            نظام التشغيل القانوني المصمم خصيصاً للمحامين العرب
          </p>
        </motion.div>

        {/* Right: reasons */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <SectionHeading
              eyebrow="لماذا سند؟"
              title="لماذا يختار المحامون سند؟"
              subtitle="بنيناه مع محامين وللمحامين — كل تفصيل مدروس."
              align="start"
            />
          </motion.div>

          <div className="flex flex-col gap-4">
            {siteConfig.whyReasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-4 bg-white border border-[#E2E8F0] rounded-xl p-5"
                data-testid={`why-reason-${i}`}
              >
                <div className="w-8 h-8 rounded-lg bg-[#C8A75D]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 size={16} className="text-[#C8A75D]" />
                </div>
                <div>
                  <h4 className="text-[#1E293B] font-semibold text-sm mb-1">{r.title}</h4>
                  <p className="text-[#64748B] text-sm leading-relaxed">{r.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}