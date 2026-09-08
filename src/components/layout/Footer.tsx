import { Link } from "wouter";
import { SanadLogoHorizontal } from "@/components/SanadLogo";

export default function Footer() {
  return (
    <footer className="bg-[#FAFAF8] border-t border-[#F1F5F9] py-14 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

        <div className="flex items-center gap-4">
          <SanadLogoHorizontal height={26} />
        </div>

        <nav className="flex flex-wrap items-center gap-7">
          <a
            href="/#features"
            className="text-xs text-[#94A3B8] hover:text-[#64748B] transition-colors"
          >
            المميزات
          </a>
          {[
            ["/pricing", "الباقات"],
            ["/privacy", "السياسات والخصوصية"],
            ["/terms", "الشروط"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="text-xs text-[#94A3B8] hover:text-[#64748B] transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-[#C4CEDD]">© {new Date().getFullYear()} سند</p>
      </div>
    </footer>
  );
}
