/*
 * Sanad Logo — rebuilt from the official reference artwork
 * Container: rounded square ("squircle"), NOT a circle — navy fill, gold border
 * Grid: 100×100 viewBox | Navy: #041B45 | Gold: #C8A75D (flat, no gradient)
 *
 * Icon geometry (measured directly from the reference PNG):
 *   Stem       : x=26, y 30→73, sw=10, round caps
 *   Top dot    : cx=26, cy=30, r=7  (bigger anchor dot)
 *   Line 1     : (26,34)→(79,34)   flush with stem — full length
 *   Line 2     : (26,50)→(79,50)   flush with stem — full length (same as line 1)
 *   Line 3     : (36,65)→(79,65)   indented from stem, ends flush with lines 1 & 2
 *   Square     : x=6,y=6, w=88,h=88, rx=20, gold border sw=3.5
 */

const NAVY   = "#041B45";
const GOLD   = "#C8A75D";
const SW     = 10;   // uniform stroke width for stem + lines
const DOT_R  = 7;    // top anchor dot radius
const SQ_R   = 20;   // square corner radius
const SQ_SW  = 3.5;  // square border stroke width
const SQ_INSET = 6;  // square inset from viewBox edge

/** Shared icon mark — pure geometry, no colors here */
function IconMark({ color = GOLD }: { color?: string }) {
  return (
    <>
      {/* Vertical stem */}
      <line x1="26" y1="30" x2="26" y2="73"
        stroke={color} strokeWidth={SW} strokeLinecap="round" />
      {/* Top anchor dot */}
      <circle cx="26" cy="30" r={DOT_R} fill={color} />
      {/* Line 1 — flush with stem, full length */}
      <line x1="26" y1="34" x2="79" y2="34"
        stroke={color} strokeWidth={SW} strokeLinecap="round" />
      {/* Line 2 — flush with stem, full length (same as line 1) */}
      <line x1="26" y1="50" x2="79" y2="50"
        stroke={color} strokeWidth={SW} strokeLinecap="round" />
      {/* Line 3 — indented from stem, ends flush with lines 1 & 2 */}
      <line x1="36" y1="65" x2="79" y2="65"
        stroke={color} strokeWidth={SW} strokeLinecap="round" />
    </>
  );
}

/* ─── 1. App Icon (rounded square, navy bg, gold border + icon) ─── */
export function SanadIcon({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100"
      fill="none" xmlns="http://www.w3.org/2000/svg"
      className={className} role="img" aria-label="سند">
      <rect x={SQ_INSET} y={SQ_INSET}
        width={100 - SQ_INSET * 2} height={100 - SQ_INSET * 2}
        rx={SQ_R} fill={NAVY} stroke={GOLD} strokeWidth={SQ_SW} />
      <IconMark />
    </svg>
  );
}

/* ─── 2. Horizontal Logo (icon + "سند" wordmark) ─── */
export function SanadLogoHorizontal({
  height = 36, className = "",
}: { height?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} dir="rtl">
      <SanadIcon size={height} />
      <div className="flex flex-col leading-none" style={{ gap: 3 }}>
        <span style={{
          fontFamily: "'IBM Plex Sans Arabic', sans-serif",
          fontSize: Math.round(height * 0.54),
          fontWeight: 700,
          color: "#1E293B",
          letterSpacing: "0.01em",
          lineHeight: 1,
        }}>سند</span>
        <span style={{
          fontFamily: "'IBM Plex Sans Arabic', sans-serif",
          fontSize: Math.round(height * 0.265),
          fontWeight: 400,
          color: "#94A3B8",
          lineHeight: 1,
        }}>نظام التشغيل القانوني</span>
      </div>
    </div>
  );
}

/* ─── 3. Wordmark only (icon + large "سند") ─── */
export function SanadLogoWordmark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} dir="rtl">
      <SanadIcon size={size} />
      <span style={{
        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
        fontSize: Math.round(size * 0.72),
        fontWeight: 800,
        color: "#1E293B",
        letterSpacing: "-0.015em",
      }}>سند</span>
    </div>
  );
}

/* ─── 4. Monochrome (dark or light) ─── */
export function SanadLogoMono({
  size = 40, dark = false, className = "",
}: { size?: number; dark?: boolean; className?: string }) {
  const fg = dark ? "#FFFFFF" : "#1E293B";
  const bg = dark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.05)";
  return (
    <svg width={size} height={size} viewBox="0 0 100 100"
      fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x={SQ_INSET} y={SQ_INSET}
        width={100 - SQ_INSET * 2} height={100 - SQ_INSET * 2}
        rx={SQ_R} fill={bg} stroke={fg} strokeWidth={SQ_SW} opacity={0.9} />
      <IconMark color={fg} />
    </svg>
  );
}

/* ─── Default export ─── */
interface SanadLogoProps {
  variant?: "icon" | "horizontal" | "wordmark" | "mono";
  size?: number;
  className?: string;
}
export default function SanadLogo({ variant = "horizontal", size = 40, className = "" }: SanadLogoProps) {
  if (variant === "icon")      return <SanadIcon size={size} className={className} />;
  if (variant === "wordmark")  return <SanadLogoWordmark size={size} className={className} />;
  if (variant === "mono")      return <SanadLogoMono size={size} className={className} />;
  return <SanadLogoHorizontal height={size} className={className} />;
}
