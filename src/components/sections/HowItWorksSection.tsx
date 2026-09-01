import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FilePlus, FolderOpen, CalendarCheck, FileBarChart2, LayoutDashboard } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  { icon: FilePlus, title: "إضافة القضية", description: "سجّل القضية وأطرافها ووثائقها في دقائق." },
  { icon: FolderOpen, title: "إدارة المستندات", description: "أرفق وصنّف جميع وثائق القضية بسهولة." },
  { icon: CalendarCheck, title: "متابعة الجلسات", description: "جدولة الجلسات مع تنبيهات تلقائية." },
  { icon: FileBarChart2, title: "إصدار التقارير", description: "تقارير شاملة جاهزة بنقرة واحدة." },
  { icon: LayoutDashboard, title: "إدارة المكتب", description: "لوحة تحكم تجمع كل شيء في مكان واحد." },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" ref={ref} className="py-14 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-10"
        >
          <SectionHeading
            eyebrow="كيف يعمل سند"
            title="من القضية الأولى لإدارة المكتب"
            subtitle="سند لا يضيف نظامًا جديدًا إلى مكتبك. بل يرتب ما هو موجود أصلًا."
          />
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-10 right-12 left-12 h-px bg-[#E2E8F0]" style={{ top: "2.5rem" }} />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-6 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`flex flex-row lg:flex-col items-center lg:items-center text-right lg:text-center gap-3 ${
                  i === steps.length - 1 && steps.length % 2 === 1
                    ? "col-span-2 lg:col-span-1 justify-center lg:justify-start max-w-[calc(50%-0.5rem)] mx-auto lg:max-w-none lg:mx-0"
                    : ""
                }`}
                data-testid={`step-${i}`}
              >
                <div className="relative w-11 h-11 lg:w-12 lg:h-12 shrink-0 rounded-2xl bg-white border-2 border-[#E2E8F0] flex items-center justify-center z-10 shadow-sm">
                  <step.icon size={17} className="text-[#C8A75D]" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#C8A75D] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <div className="lg:text-center">
                  <h4 className="text-[#1E293B] font-semibold text-sm">{step.title}</h4>
                  <p className="text-[#64748B] text-xs leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
