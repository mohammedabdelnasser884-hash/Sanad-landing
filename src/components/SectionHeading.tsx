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
 * a bold gold rectangle badge (eyebrow) + a large, heavy title.
 * Replaces the previously inconsistent mix of pill-badges / plain
 * uppercase text / varying h2 sizes across sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      <span
        className="inline-block bg-[#C8A75D] text-[#041B45] font-extrabold"
        style={{
          fontSize: 12,
          letterSpacing: "0.14em",
          padding: "7px 18px",
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        {eyebrow}
      </span>
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
