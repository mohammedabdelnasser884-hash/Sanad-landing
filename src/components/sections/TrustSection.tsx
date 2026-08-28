import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-14 bg-[#FAFAF8]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[#94A3B8] font-medium uppercase mb-14"
          style={{ fontSize: 11, letterSpacing: "0.22em" }}
        >
          نُبنى بالتعاون مع محامين ممارسين
        </motion.p>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="h-6 bg-[#E8EEF4] rounded"
              style={{ width: i % 2 === 0 ? 96 : 112 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
