import { siteConfig } from "@/config";
import { Languages, Lock, CloudUpload } from "lucide-react";
import { motion } from "framer-motion";

const icons = [Languages, Lock, CloudUpload];

export default function StatsSection() {
  return (
    <section className="py-12 border-y border-white/5 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {siteConfig.stats.map((stat, i) => {
            const Icon = icons[i] ?? Lock;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center justify-center p-8 rounded-2xl bg-card border border-border"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <Icon size={32} />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-lg text-muted-foreground">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
