import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "start";
  className?: string;
}

/**
 * Unified section heading used across the whole landing page:
 * a slim gold accent line + label (eyebrow) + a large, heavy title.
 * Alignment defaults to "start" (right-aligned in RTL) everywhere for
 * a consistent, editorial feel — pass align="center" only where a
 * centered header is intentional.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "start",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      <div
        className={`inline-flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
        style={{ marginBottom: 18 }}
      >
        <span style={{ width: 32, height: 3, background: "#C8A75D", display: "inline-block", borderRadius: 2 }} />
        <span
          className="text-[#C8A75D] font-extrabold"
          style={{ fontSize: 17, letterSpacing: "0.06em" }}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className="font-black text-[#1E293B]"
        style={{
          fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
          letterSpacing: "-0.03em",
          lineHeight: 1.12,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-[#64748B] mt-4 ${align === "center" ? "mx-auto" : ""}`}
          style={{ fontSize: 15.5, lineHeight: 1.6, maxWidth: 460 }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
