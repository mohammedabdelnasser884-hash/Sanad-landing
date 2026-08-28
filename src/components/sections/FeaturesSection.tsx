import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Users, CalendarCheck, Receipt, Archive, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const ease = [0.22, 1, 0.36, 1] as const;

const features = [
  { icon: Briefcase, title: "إدارة القضايا", desc: "تتبع كل قضية من الافتتاح حتى الإغلاق." },
  { icon: Users, title: "إدارة العملاء", desc: "سجل موحد لكل عميل ووثائقه وقضاياه." },
  { icon: CalendarCheck, title: "الجلسات", desc: "جدول احترافي مع تنبيهات تلقائية." },
  { icon: Receipt, title: "الأتعاب", desc: "فواتير ومدفوعات بدقة واحترافية." },
  { icon: Archive, title: "الأرشيف", desc: "حفظ وبحث فوري في جميع المستندات." },
  { icon: Sparkles, title: "الذكاء الاصطناعي", desc: "مساعد قانوني للصياغة والبحث.", comingSoon: true },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" ref={ref} className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="mb-12"
        >
          <SectionHeading eyebrow="المميزات" title="كل ما يحتاجه مكتبك" align="start" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.055, duration: 0.5, ease }}
              data-testid={`feature-${i}`}
            >
              <f.icon
                size={19}
                className="text-[#C8A75D] mb-5"
                strokeWidth={1.6}
              />
              <h3
                className="text-[#1E293B] font-semibold mb-2 flex items-center gap-2"
                style={{ fontSize: 15 }}
              >
                {f.title}
                {f.comingSoon && (
                  <span
                    className="font-semibold text-[#C8A75D] bg-[#C8A75D]/10 rounded-full px-2 py-0.5"
                    style={{ fontSize: 10 }}
                  >
                    قريباً
                  </span>
                )}
              </h3>
              <p className="text-[#64748B] leading-relaxed" style={{ fontSize: 14 }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
