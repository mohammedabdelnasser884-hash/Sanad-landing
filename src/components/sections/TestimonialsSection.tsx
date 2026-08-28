import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import { siteConfig } from "@/config";
import SectionHeading from "@/components/SectionHeading";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // مفيش شهادات حقيقية موافق عليها لسه — القسم بيختفي بدل ما يوري عناصر فاضية
  // أو (الأخطر) يرجع لعرض شهادات مفبركة. أضف شهادات حقيقية في config.ts لتفعيله.
  if (siteConfig.testimonials.length === 0) return null;

  return (
    <section ref={ref} className="py-14 px-6 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-10"
        >
          <SectionHeading eyebrow="آراء العملاء" title="يثق بنا المحامون في المنطقة" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 flex flex-col gap-4"
              data-testid={`testimonial-${i}`}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} size={14} className="fill-[#C8A75D] text-[#C8A75D]" />
                ))}
              </div>
              <p className="text-[#64748B] text-sm leading-relaxed flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#C8A75D]/15 flex items-center justify-center text-[#C8A75D] font-bold text-sm">
                  {t.name.charAt(2)}
                </div>
                <div>
                  <div className="text-[#1E293B] font-semibold text-sm">{t.name}</div>
                  <div className="text-[#64748B] text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}