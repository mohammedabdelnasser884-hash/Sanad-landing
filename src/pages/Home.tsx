import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ScreenshotsSection from "@/components/sections/ScreenshotsSection";
import SecuritySection from "@/components/sections/SecuritySection";
import PricingSection from "@/components/sections/PricingSection";
import CTASection from "@/components/sections/CTASection";
// StatsSection و TestimonialsSection متعمد استبعادهم مؤقتًا — البيانات بقت
// صادقة (راجع بند 3 في تقرير المراجعة) لكن التفعيل نفسه لسه قرار مطلوب منك.
// TrustSection متعمد استبعاده مؤقتًا — كان بيعرض شعارات placeholder فاضية تحت
// ادعاء ثقة غير مدعوم. رجّعه لـHome لما يبقى عندك شعارات عملاء حقيقيين موافقين
// على الظهور (راجع بند 8 في تقرير المراجعة).

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ScreenshotsSection />
        <SecuritySection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}