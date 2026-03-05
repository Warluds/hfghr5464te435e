import { motion } from "framer-motion";
import { Settings, Code, Smartphone, Users, BarChart3, Database, Server, FileText } from "lucide-react";

const competencies = [
  { icon: Settings, title: "Внедрение и сопровождение", desc: "Полный цикл внедрения систем 1С" },
  { icon: Code, title: "Разработка конфигураций", desc: "Доработка 1С под требования бизнеса" },
  { icon: Smartphone, title: "Интеграции", desc: "1С с мобильными приложениями и сервисами" },
  { icon: Users, title: "HR‑автоматизация", desc: "Кадровые процессы и расчет зарплаты" },
  { icon: BarChart3, title: "Финансовый учет", desc: "Управленческий и финансовый учет" },
  { icon: FileText, title: "Отчеты и обработки", desc: "Разработка модулей и отчетов" },
  { icon: Database, title: "Миграция данных", desc: "Переход между версиями 1С" },
  { icon: Server, title: "Инфраструктура", desc: "Оптимизация производительности систем" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const CompetenciesSection = () => {
  return (
    <section id="competencies" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Наши <span className="text-gradient">компетенции</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Комплексные решения для автоматизации вашего бизнеса
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {competencies.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-colors shadow-card"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
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

export default CompetenciesSection;
