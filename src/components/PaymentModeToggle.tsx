import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export type PaymentMode = "monthly" | "annual" | "installment";
export type InstallmentPlan = 2 | 4;

interface PaymentModeToggleProps {
  mode: PaymentMode;
  onChange: (mode: PaymentMode) => void;
  installmentPlan?: InstallmentPlan;
  onInstallmentPlanChange?: (plan: InstallmentPlan) => void;
  className?: string;
}

const options: { value: PaymentMode; label: string }[] = [
  { value: "monthly", label: "شهري" },
  { value: "annual", label: "سنوي" },
  { value: "installment", label: "قسّط" },
];

const installmentOptions: { value: InstallmentPlan; label: string }[] = [
  { value: 2, label: "دفعتين (كل 6 شهور)" },
  { value: 4, label: "4 دفعات (كل 3 شهور)" },
];

const ease = [0.22, 1, 0.36, 1] as const;

// التوجل المشترك بين PricingSection (الرئيسية) وPricing.tsx (صفحة /pricing).
// السعر جوه الكروت متوصّل بالـstate ده عن طريق getAnnualPrice/
// getAnnualMonthlyEquivalent/getInstallmentPrice من config.ts (مرحلة 2.2).
// sub-toggle التقسيط (دفعتين/4 دفعات) بيظهر بس لما mode === "installment"
// (مرحلة 2.3).
export default function PaymentModeToggle({
  mode,
  onChange,
  installmentPlan = 2,
  onInstallmentPlanChange,
  className = "",
}: PaymentModeToggleProps) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <p className="font-bold text-[#1E293B]" style={{ fontSize: 14 }}>
        اختار طريقة الدفع اللي تناسبك
      </p>

      <div
        role="tablist"
        aria-label="طريقة الدفع"
        className="inline-flex items-center gap-1 rounded-full border border-[#EAECF0] bg-white p-1"
      >
        {options.map((opt) => {
          const active = opt.value === mode;
          return (
            <button
              key={opt.value}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onChange(opt.value)}
              className="relative rounded-full font-semibold transition-colors"
              style={{ fontSize: 13.5, padding: "8px 20px" }}
              data-testid={`payment-mode-${opt.value}`}
            >
              {active && (
                <motion.span
                  layoutId="payment-mode-pill"
                  transition={{ duration: 0.3, ease }}
                  className="absolute inset-0 rounded-full bg-[#1E293B]"
                />
              )}
              <span className={`relative z-10 ${active ? "text-white" : "text-[#64748B]"}`}>
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {mode === "annual" && (
          <motion.span
            key="annual-badge"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25, ease }}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#C8A75D]/40 bg-[#C8A75D]/[0.08] text-[#8A6D2F] font-semibold px-3 py-1"
            style={{ fontSize: 12.5 }}
          >
            <Sparkles size={13} className="text-[#C8A75D]" strokeWidth={2.2} />
            وفر شهرين مع الاشتراك السنوي
          </motion.span>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {mode === "installment" && (
          <motion.div
            key="installment-subtoggle"
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.25, ease }}
            className="flex flex-col items-center gap-2 overflow-hidden"
          >
            <div
              role="tablist"
              aria-label="عدد دفعات التقسيط"
              className="inline-flex items-center gap-1 rounded-full border border-[#EAECF0] bg-white p-1"
            >
              {installmentOptions.map((opt) => {
                const active = opt.value === installmentPlan;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => onInstallmentPlanChange?.(opt.value)}
                    className="relative rounded-full font-semibold transition-colors"
                    style={{ fontSize: 12.5, padding: "6px 14px" }}
                    data-testid={`installment-plan-${opt.value}`}
                  >
                    {active && (
                      <motion.span
                        layoutId="installment-plan-pill"
                        transition={{ duration: 0.3, ease }}
                        className="absolute inset-0 rounded-full bg-[#C8A75D]/[0.14] border border-[#C8A75D]/40"
                      />
                    )}
                    <span className={`relative z-10 ${active ? "text-[#8A6D2F]" : "text-[#64748B]"}`}>
                      {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
