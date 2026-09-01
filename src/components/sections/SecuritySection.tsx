import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, CloudUpload, Shield } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const ease = [0.22, 1, 0.36, 1] as const;

const items = [
  { icon: Lock, title: "تشفير AES-256", desc: "بياناتك مشفرة بأعلى معايير الأمان العالمية." },
  { icon: CloudUpload, title: "نسخ احتياطي يومي", desc: "نسخ تلقائية في مراكز بيانات موثوقة." },
  { icon: Shield, title: "صلاحيات متقدمة", desc: "تحكم دقيق في صلاحيات كل عضو." },
];

export default function SecuritySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-12 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="mb-8"
        >
          <SectionHeading eyebrow="الأمان" title="بياناتك في مأمن تام" align="start" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.5, ease }}
              data-testid={`security-${i}`}
            >
              <item.icon
                size={19}
                className="text-[#C8A75D] mb-3"
                strokeWidth={1.6}
              />
              <h3
                className="text-[#1E293B] font-semibold mb-1.5"
                style={{ fontSize: 15 }}
              >
                {item.title}
              </h3>
              <p className="text-[#64748B] leading-relaxed" style={{ fontSize: 14 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
