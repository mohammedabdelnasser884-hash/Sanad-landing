import { SanadLogoHorizontal } from "@/components/SanadLogo";
import { siteConfig } from "@/config";

// أيقونة فيسبوك SVG مستقلة — مكتبة lucide-react بدأت تشيل أيقونات
// العلامات التجارية (فيسبوك/تويتر/إلخ) من إصداراتها الحديثة، فبنستخدم
// SVG ثابت هنا عشان الأيقونة متتأثرش بأي تحديث مستقبلي للمكتبة.
function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#FAFAF8] border-t border-[#F1F5F9] py-14 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

        <SanadLogoHorizontal height={26} />

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
          <a
            href={siteConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="صفحة سند على فيسبوك"
            className="text-[#94A3B8] hover:text-[#64748B] transition-colors"
          >
            <FacebookIcon size={16} />
          </a>
        </nav>

        <p className="text-xs text-[#C4CEDD]">© {new Date().getFullYear()} سند</p>
      </div>
    </footer>
  );
}
