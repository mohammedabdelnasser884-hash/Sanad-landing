import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";
import { SanadIcon } from "@/components/SanadLogo";
import { FacebookIcon, WhatsAppIcon } from "@/components/BrandIcons";
import { siteConfig } from "@/config";

const ease = [0.22, 1, 0.36, 1] as const;

const contactOptions = [
  { label: "فيسبوك", href: siteConfig.facebook, icon: FacebookIcon, external: true },
  { label: "إيميل", href: `mailto:${siteConfig.email}`, icon: Mail, external: false },
  { label: "واتساب", href: `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`, icon: WhatsAppIcon, external: true },
];

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
              كن من أوائل المكاتب اللي تدير قضاياها بذكاء.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 w-full max-w-sm">
            <p className="text-[#94A3B8]" style={{ fontSize: 13 }}>اطلب تجربتك المجانية لمدة شهر كامل عن طريق:</p>
            <div className="flex flex-wrap justify-center gap-3 w-full">
              {contactOptions.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  data-testid={`button-cta-${label}`}
                  className="flex items-center gap-2 bg-white hover:bg-[#F8FAFC] text-[#1E293B] font-semibold px-6 py-3.5 rounded-xl transition-colors"
                  style={{ border: "1px solid #E2E8F0", fontSize: 14 }}
                >
                  <Icon size={17} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
