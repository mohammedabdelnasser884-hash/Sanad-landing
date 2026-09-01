import { SanadLogoHorizontal } from "@/components/SanadLogo";
import { FacebookIcon } from "@/components/BrandIcons";
import { siteConfig } from "@/config";

export default function Footer() {
  return (
    <footer className="bg-[#FAFAF8] border-t border-[#F1F5F9] py-14 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

        <div className="flex items-center gap-4">
          <SanadLogoHorizontal height={26} />
          <a
            href={siteConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تابعنا على فيسبوك"
            className="flex items-center justify-center bg-[#1E293B] hover:bg-[#0F172A] text-white rounded-full transition-colors"
            style={{ width: 34, height: 34 }}
          >
            <FacebookIcon size={17} />
          </a>
        </div>

        <nav className="flex flex-wrap items-center gap-7">
          {[
            ["/#features", "المميزات"],
            ["/pricing", "الباقات"],
            ["/privacy", "الخصوصية"],
            ["/terms", "الشروط"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-xs text-[#94A3B8] hover:text-[#64748B] transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-[#C4CEDD]">© {new Date().getFullYear()} سند</p>
      </div>
    </footer>
  );
}
