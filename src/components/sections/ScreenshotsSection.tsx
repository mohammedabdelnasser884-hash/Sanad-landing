import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

/* Mobile phone-frame screenshots — ordered to follow a natural user journey */
const screens = [
  { src: "/screenshots/home.jpg",        label: "الرئيسية" },
  { src: "/screenshots/new-case.jpg",    label: "تقييد قضية جديدة" },
  { src: "/screenshots/case-detail.jpg", label: "تفاصيل القضية والجلسات" },
  { src: "/screenshots/archive.jpg",     label: "الأرشيف الرقمي" },
  { src: "/screenshots/clients.jpg",     label: "الموكلين" },
];

/* Desktop-style showcase — browser frame + document card, shown side by side */
const deskScreen  = { src: "/screenshots/cases-desktop.jpg", label: "القضايا — من الديسكتوب" };
const exportScreen = { src: "/screenshots/case-export.jpg",  label: "تصدير ملف القضية رسمياً" };

const ease = [0.22, 1, 0.36, 1] as const;

type LightboxTarget =
  | { kind: "phone"; index: number }
  | { kind: "desktop" }
  | { kind: "export" }
  | null;

export default function ScreenshotsSection() {
  const [lightbox, setLightbox] = useState<LightboxTarget>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  function open(target: LightboxTarget) { setLightbox(target); document.body.style.overflow = "hidden"; }
  function close()                      { setLightbox(null);   document.body.style.overflow = ""; }

  const activeSrc =
    lightbox?.kind === "phone"   ? screens[lightbox.index].src :
    lightbox?.kind === "desktop" ? deskScreen.src :
    lightbox?.kind === "export"  ? exportScreen.src : "";
  const activeAlt =
    lightbox?.kind === "phone"   ? screens[lightbox.index].label :
    lightbox?.kind === "desktop" ? deskScreen.label :
    lightbox?.kind === "export"  ? exportScreen.label : "";
  const isPhoneLightbox = lightbox?.kind === "phone";

  return (
    <>
      <section id="screenshots" ref={ref} className="py-16 bg-[#FAFAF8] overflow-hidden">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="mb-10 px-6"
        >
          <SectionHeading eyebrow="التطبيق" title="شاهد سند من الداخل" />
        </motion.div>

        {/* ── Desktop showcase: browser frame + document card, side by side ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mx-auto mb-20 px-6 flex flex-wrap items-start justify-center"
          style={{ maxWidth: 1040, gap: "clamp(16px, 3vw, 32px)" }}
        >
          {/* Browser-frame card — cases list */}
          <div className="flex flex-col items-center" style={{ width: "clamp(280px, 56vw, 640px)" }}>
            <div
              className="w-full cursor-zoom-in group overflow-hidden"
              style={{
                borderRadius: 16,
                background: "#0B1220",
                border: "1px solid rgba(30,41,59,0.85)",
                boxShadow: "0 48px 100px -24px rgba(4,27,69,0.35), 0 0 0 1px rgba(200,167,93,0.10)",
              }}
              onClick={() => open({ kind: "desktop" })}
              title="انقر للتكبير"
              data-testid="screenshot-desktop-cases"
            >
              <div
                className="flex items-center gap-2 px-4"
                style={{ height: 38, background: "#111A2E", borderBottom: "1px solid rgba(200,167,93,0.14)" }}
              >
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22C55E" }} />
              </div>
              <div className="relative overflow-hidden">
                <img
                  src={deskScreen.src}
                  alt={deskScreen.label}
                  className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  draggable={false}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6"
                  style={{ background: "linear-gradient(to top, rgba(4,27,69,0.45) 0%, transparent 55%)" }}
                >
                  <span className="text-white font-medium" style={{ fontSize: 13 }}>تكبير</span>
                </div>
              </div>
            </div>
            <p className="text-[#64748B] font-medium text-center mt-5" style={{ fontSize: 13 }}>
              {deskScreen.label}
            </p>
          </div>

          {/* Document card — official exported case file */}
          <div className="flex flex-col items-center" style={{ width: "clamp(160px, 22vw, 230px)" }}>
            <div
              className="w-full cursor-zoom-in group overflow-hidden"
              style={{
                borderRadius: 12,
                background: "#0B1220",
                border: "1px solid rgba(200,167,93,0.28)",
                boxShadow: "0 40px 90px -20px rgba(4,27,69,0.30), 0 0 0 1px rgba(200,167,93,0.14)",
              }}
              onClick={() => open({ kind: "export" })}
              title="انقر للتكبير"
              data-testid="screenshot-case-export"
            >
              <div className="relative overflow-hidden">
                <img
                  src={exportScreen.src}
                  alt={exportScreen.label}
                  className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  draggable={false}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
                  style={{ background: "linear-gradient(to top, rgba(4,27,69,0.5) 0%, transparent 60%)" }}
                >
                  <span className="text-white font-medium" style={{ fontSize: 12 }}>تكبير</span>
                </div>
              </div>
            </div>
            <p className="text-[#64748B] font-medium text-center mt-5" style={{ fontSize: 13 }}>
              {exportScreen.label}
            </p>
          </div>
        </motion.div>

        {/* ── Phone mockups row — mobile journey ── */}
        <div
          className="flex items-end justify-center"
          style={{
            gap: "clamp(10px, 2vw, 22px)",
            paddingInline: "clamp(16px, 4vw, 64px)",
            overflowX: "auto",
            paddingBottom: 4,
          }}
        >
          {screens.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.6, ease }}
              className="flex flex-col items-center gap-5 flex-shrink-0"
              style={{ width: "clamp(155px, 17vw, 240px)" }}
            >
              <div
                className="w-full cursor-zoom-in group relative overflow-hidden"
                style={{
                  aspectRatio: "9/19.5",
                  borderRadius: "clamp(18px, 2.6vw, 32px)",
                  background: "#041B45",
                  border: "2px solid rgba(30,41,59,0.85)",
                  boxShadow: "0 40px 80px -16px rgba(4,27,69,0.30), 0 0 0 1px rgba(200,167,93,0.1)",
                }}
                onClick={() => open({ kind: "phone", index: i })}
                title="انقر للتكبير"
                data-testid={`screenshot-${i}`}
              >
                <img
                  src={s.src}
                  alt={s.label}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  draggable={false}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6"
                  style={{ background: "linear-gradient(to top, rgba(4,27,69,0.5) 0%, transparent 60%)" }}
                >
                  <span className="text-white font-medium" style={{ fontSize: 13 }}>تكبير</span>
                </div>
              </div>
              <p className="text-[#64748B] font-medium text-center" style={{ fontSize: 12.5 }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-6"
            style={{ background: "rgba(4,27,69,0.92)", backdropFilter: "blur(20px)" }}
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.22, ease }}
              className="relative"
              style={{ maxWidth: isPhoneLightbox ? 360 : 720, width: "100%" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeSrc}
                alt={activeAlt}
                className="w-full object-cover object-top"
                style={{
                  maxHeight: "88vh",
                  borderRadius: isPhoneLightbox ? 40 : 16,
                  border: "2px solid rgba(200,167,93,0.25)",
                  boxShadow: "0 48px 100px -12px rgba(0,0,0,0.7)",
                }}
                draggable={false}
              />
              <button
                onClick={close}
                className="absolute -top-3 -left-3 flex items-center justify-center rounded-full"
                style={{
                  width: 38, height: 38,
                  background: "#041B45",
                  border: "1.5px solid rgba(200,167,93,0.35)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
                }}
                aria-label="إغلاق"
              >
                <X size={15} color="#C8A75D" />
              </button>

              {/* Dots — only for the phone-frame carousel */}
              {isPhoneLightbox && (
                <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex gap-2">
                  {screens.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); open({ kind: "phone", index: i }); }}
                      className="rounded-full transition-all"
                      style={{
                        width: lightbox.kind === "phone" && i === lightbox.index ? 24 : 8,
                        height: 8,
                        background: lightbox.kind === "phone" && i === lightbox.index ? "#C8A75D" : "rgba(200,167,93,0.35)",
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
