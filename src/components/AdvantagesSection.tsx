import { motion } from "framer-motion";
import { Shield, Globe, Zap, Handshake, Clock } from "lucide-react";

const advantages = [
  { icon: Shield, title: "Глубокая экспертиза", desc: "Многолетний опыт работы с системами 1С" },
  { icon: Globe, title: "Международный опыт", desc: "Проекты для глобальных компаний" },
  { icon: Zap, title: "Современные интеграции", desc: "1С с цифровыми сервисами и API" },
  { icon: Handshake, title: "Гибкое сотрудничество", desc: "Проектная работа и техподдержка" },
  { icon: Clock, title: "Оперативность", desc: "Быстрая реакция и прозрачная отчетность" },
];

const AdvantagesSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Почему <span className="text-gradient">мы</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
