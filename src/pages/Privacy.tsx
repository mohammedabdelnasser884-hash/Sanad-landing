import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-3xl font-bold mb-8 text-[#1E293B]">سياسة الخصوصية</h1>
          <div className="prose prose-slate max-w-none text-[#64748B]">
            <p className="text-sm mb-8">تاريخ آخر تحديث: 27 أغسطس 2026</p>
            
            <h2 className="text-xl font-bold text-[#1E293B] mt-8 mb-4">1. مقدمة</h2>
            <p className="mb-6">في منصة "سند"، نأخذ خصوصية بيانات عملائنا من المكاتب القانونية بجدية تامة. توضح هذه السياسة كيف نقوم بجمع واستخدام وحماية معلوماتك.</p>
            
            <h2 className="text-xl font-bold text-[#1E293B] mt-8 mb-4">2. جمع البيانات</h2>
            <p className="mb-6">نحن نجمع فقط البيانات الضرورية لتشغيل منصة إدارة مكاتب المحاماة بكفاءة، والتي تشمل بيانات الحساب، معلومات القضايا والعملاء التي تقوم بإدخالها، وسجلات الاستخدام.</p>
            
            <h2 className="text-xl font-bold text-[#1E293B] mt-8 mb-4">3. حماية البيانات والتشفير</h2>
            <p className="mb-6">جميع بيانات القضايا والعملاء مشفرة بمعيار AES-256 أثناء النقل والتخزين. نحن لا نقوم بالوصول إلى تفاصيل قضاياك إلا بناءً على طلبك الصريح لأغراض الدعم الفني.</p>
            
            <h2 className="text-xl font-bold text-[#1E293B] mt-8 mb-4">4. مشاركة المعلومات</h2>
            <p className="mb-6">لا نقوم ببيع أو تأجير أو مشاركة معلومات عملائك أو قضاياك مع أي أطراف ثالثة. تظل هذه البيانات ملكية حصرية لك.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}