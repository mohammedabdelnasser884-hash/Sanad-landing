import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MessageCircle, Twitter, Linkedin, Instagram } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config";
import SectionHeading from "@/components/SectionHeading";

const schema = z.object({
  name: z.string().min(2, "الاسم مطلوب"),
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  message: z.string().min(10, "الرسالة قصيرة جداً"),
});
type FormValues = z.infer<typeof schema>;

export default function SupportSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const form = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { name: "", email: "", message: "" } });

  function onSubmit(data: FormValues) {
    console.log("Contact form:", data);
    form.reset();
  }

  return (
    <section id="support" ref={ref} className="py-14 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-10"
        >
          <SectionHeading
            eyebrow="تواصل معنا"
            title="نحن هنا لمساعدتك"
            subtitle="فريق الدعم جاهز للإجابة على جميع استفساراتك"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="flex flex-col gap-6"
          >
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 border border-[#E2E8F0] rounded-xl p-5 hover:border-[#C8A75D]/40 transition-colors group" data-testid="link-email">
              <div className="w-10 h-10 rounded-lg bg-[#C8A75D]/10 flex items-center justify-center group-hover:bg-[#C8A75D]/20 transition-colors">
                <Mail size={18} className="text-[#C8A75D]" />
              </div>
              <div>
                <div className="text-xs text-[#64748B] mb-0.5">البريد الإلكتروني</div>
                <div className="text-[#1E293B] font-medium text-sm">{siteConfig.email}</div>
              </div>
            </a>
            <a href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border border-[#E2E8F0] rounded-xl p-5 hover:border-[#C8A75D]/40 transition-colors group" data-testid="link-whatsapp">
              <div className="w-10 h-10 rounded-lg bg-[#C8A75D]/10 flex items-center justify-center group-hover:bg-[#C8A75D]/20 transition-colors">
                <MessageCircle size={18} className="text-[#C8A75D]" />
              </div>
              <div>
                <div className="text-xs text-[#64748B] mb-0.5">واتساب</div>
                <div className="text-[#1E293B] font-medium text-sm" dir="ltr">{siteConfig.whatsapp}</div>
              </div>
            </a>
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-[#64748B]">تابعنا على</span>
              {[
                { href: siteConfig.socialLinks.twitter, Icon: Twitter, label: "Twitter" },
                { href: siteConfig.socialLinks.linkedin, Icon: Linkedin, label: "LinkedIn" },
                { href: siteConfig.socialLinks.instagram, Icon: Instagram, label: "Instagram" },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} data-testid={`link-social-${label.toLowerCase()}`} className="w-9 h-9 border border-[#E2E8F0] rounded-lg flex items-center justify-center text-[#64748B] hover:border-[#C8A75D] hover:text-[#C8A75D] transition-colors">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="border border-[#E2E8F0] rounded-2xl p-7 bg-white"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#1E293B] text-sm">الاسم</FormLabel>
                    <FormControl>
                      <Input placeholder="اسمك الكريم" className="border-[#E2E8F0] text-sm" data-testid="input-name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#1E293B] text-sm">البريد الإلكتروني</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" dir="ltr" className="border-[#E2E8F0] text-sm" data-testid="input-email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#1E293B] text-sm">رسالتك</FormLabel>
                    <FormControl>
                      <Textarea placeholder="كيف يمكننا مساعدتك؟" rows={4} className="border-[#E2E8F0] text-sm resize-none" data-testid="input-message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <button type="submit" data-testid="button-submit-contact" className="w-full bg-[#C8A75D] hover:bg-[#B38E3D] text-[#1E293B] font-semibold py-2.5 rounded-lg text-sm transition-colors">
                  إرسال الرسالة
                </button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}