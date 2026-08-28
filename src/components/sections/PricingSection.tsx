import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const ease = [0.22, 1, 0.36, 1] as const;

const plans = [
  {
    id: "individual",
    name: "الفردية",
    price: "99",
    period: "شهرياً",
    features: ["محامٍ واحد", "50 قضية نشطة", "التقويم القانوني", "يعمل على كل الأجهزة"],
    cta: "ابدأ مجاناً",
    highlighted: false,
  },
  {
    id: "office",
    name: "المكتب",
    price: "299",
    period: "شهرياً",
    features: ["حتى 10 محامين", "قضايا غير محدودة", "الذكاء الاصطناعي (قريباً)", "الأرشفة الذكية"],
    cta: "ابدأ تجربتك",
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "المؤسسة",
    price: "تواصل",
    period: "",
    features: ["محامون غير محدودون", "تخصيص كامل", "مدير حساب مخصص", "SLA مضمون"],
    cta: "طلب عرض",
    highlighted: false,
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" ref={ref} className="py-16 px-6 bg-[#FAFAF8]">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="mb-10"
        >
          <SectionHeading
            eyebrow="الأسعار"
            title="خطط واضحة وبسيطة"
            subtitle="14 يوماً مجاناً — لا بطاقة ائتمانية"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5, ease }}
              className={`relative rounded-2xl p-9 flex flex-col gap-8 ${
                plan.highlighted ? "bg-[#1E293B]" : "bg-white"
              }`}
              style={plan.highlighted ? undefined : { border: "1px solid #EAECF0" }}
              data-testid={`plan-${plan.id}`}
            >
              {plan.highlighted && (
                <span
                  className="absolute top-7 left-7 bg-[#C8A75D] text-[#1E293B] font-bold rounded-full px-2.5 py-0.5"
                  style={{ fontSize: 10, letterSpacing: "0.05em" }}
                >
                  الأكثر شيوعاً
                </span>
              )}

              <div className="mt-6">
                <p
                  className={`font-medium mb-3 uppercase tracking-wider ${
                    plan.highlighted ? "text-slate-400" : "text-[#94A3B8]"
                  }`}
                  style={{ fontSize: 11 }}
                >
                  {plan.name}
                </p>
                <div className="flex items-end gap-1.5">
                  {isNaN(Number(plan.price)) ? (
                    <span
                      className={`font-black ${
                        plan.highlighted ? "text-[#C8A75D]" : "text-[#1E293B]"
                      }`}
                      style={{ fontSize: "1.75rem" }}
                    >
                      {plan.price}
                    </span>
                  ) : (
                    <>
                      <span
                        className={`font-black leading-none ${
                          plan.highlighted ? "text-white" : "text-[#1E293B]"
                        }`}
                        style={{ fontSize: "2.75rem" }}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={`pb-1.5 ${
                          plan.highlighted ? "text-slate-400" : "text-[#94A3B8]"
                        }`}
                        style={{ fontSize: 12 }}
                      >
                        ر.س / {plan.period}
                      </span>
                    </>
                  )}
                </div>
              </div>

              <ul className="flex flex-col gap-3.5 flex-1">
                {plan.features.map((f, fi) => (
                  <li
                    key={fi}
                    className={`flex items-center gap-2.5 ${
                      plan.highlighted ? "text-slate-300" : "text-[#64748B]"
                    }`}
                    style={{ fontSize: 14 }}
                  >
                    <Check size={11} className="text-[#C8A75D] flex-shrink-0" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                data-testid={`button-plan-${plan.id}`}
                className={`w-full py-3.5 rounded-xl text-sm font-semibold text-center transition-colors ${
                  plan.highlighted
                    ? "bg-[#C8A75D] hover:bg-[#B8902A] text-[#1E293B]"
                    : "bg-[#1E293B] hover:bg-[#0F172A] text-white"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
