import { SanadLogoHorizontal } from "@/components/SanadLogo";

export default function Footer() {
  return (
    <footer className="bg-[#FAFAF8] border-t border-[#F1F5F9] py-14 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

        <SanadLogoHorizontal height={26} />

        <nav className="flex flex-wrap gap-7">
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
