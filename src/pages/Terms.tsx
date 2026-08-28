import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-3xl font-bold mb-8 text-[#1E293B]">الشروط والأحكام</h1>
          <div className="prose prose-slate max-w-none text-[#64748B]">
            <p className="text-sm mb-8">تاريخ آخر تحديث: 27 أغسطس 2026</p>
            
            <h2 className="text-xl font-bold text-[#1E293B] mt-8 mb-4">1. قبول الشروط</h2>
            <p className="mb-6">باستخدامك لمنصة "سند"، فإنك توافق على الالتزام بهذه الشروط والأحكام في جميع تعاملاتك مع المنصة.</p>
            
            <h2 className="text-xl font-bold text-[#1E293B] mt-8 mb-4">2. الترخيص والاستخدام</h2>
            <p className="mb-6">نمنحك ترخيصاً غير حصري لاستخدام منصة سند وفقاً للباقة التي قمت بالاشتراك بها. يُحظر إعادة بيع أو ترخيص استخدام المنصة لأطراف أخرى.</p>
            
            <h2 className="text-xl font-bold text-[#1E293B] mt-8 mb-4">3. مسؤولية المحتوى</h2>
            <p className="mb-6">أنت المسؤول الوحيد عن دقة وقانونية جميع البيانات والوثائق التي تقوم برفعها أو إنشائها داخل المنصة.</p>
            
            <h2 className="text-xl font-bold text-[#1E293B] mt-8 mb-4">4. الدفع والاشتراكات</h2>
            <p className="mb-6">تُدفع رسوم الاشتراك مقدماً حسب الباقة المختارة (شهرياً أو سنوياً). لا تُسترد الرسوم المدفوعة إلا وفقاً لما تقتضيه القوانين المحلية.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}