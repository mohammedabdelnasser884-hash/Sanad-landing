import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MessageCircle, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/config";
import { SanadIcon } from "@/components/SanadLogo";

export default function Portal() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-24 px-4">
        <div className="w-full max-w-md bg-white border border-[#E2E8F0] p-8 rounded-2xl shadow-sm relative overflow-hidden text-center">
          <SanadIcon size={64} className="mx-auto mb-4 rounded-xl" />

          <div className="inline-flex items-center gap-1.5 bg-[#F8F9FA] border border-[#E2E8F0] text-[#64748B] text-xs font-medium px-3 py-1 rounded-full mb-5">
            <Clock className="w-3.5 h-3.5" />
            قريباً
          </div>

          <h1 className="text-2xl font-bold text-[#1E293B] mb-2">بوابة العملاء قيد التجهيز</h1>
          <p className="text-sm text-[#64748B] mb-8 leading-relaxed">
            نظام تسجيل الدخول للعملاء الحاليين لسه بيتجهّز. لو عندك حساب بالفعل أو محتاج مساعدة، تواصل معنا مباشرة وهنرد عليك بسرعة.
          </p>

          <div className="space-y-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="w-full h-11 flex items-center justify-center gap-2 bg-[#1E293B] hover:bg-[#0F172A] text-white font-semibold rounded-lg text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              تواصل عبر واتساب
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="w-full h-11 flex items-center justify-center gap-2 border border-[#E2E8F0] hover:border-[#C8A75D] text-[#1E293B] font-semibold rounded-lg text-sm transition-colors"
            >
              <Mail className="w-4 h-4" />
              راسلنا على {siteConfig.email}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
