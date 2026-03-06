import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center p-12 rounded-2xl bg-gradient-card border border-border shadow-card relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full bg-primary/10 blur-[80px]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Готовы <span className="text-gradient">начать?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:info@miracode.kz"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-display font-semibold shadow-glow hover:opacity-90 transition-opacity"
              >
                <Mail className="w-5 h-5" />
                info@miracode.kz
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground mt-8 notranslate" translate="no">ТОО "Mira Code"</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
