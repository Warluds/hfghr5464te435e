import { motion } from "framer-motion";

const clients = [
  {
    name: "Dr. Reddys Laboratories Kazakhstan",
    desc: "Сопровождение 1С:КА, внедрение ЗУП 3, автоматизация зарплатных процессов, маркировка лекарственных средств",
    tag: "Фарма",
  },
  {
    name: "Sanofi Aventis Group",
    desc: "Переход на 1С:ЗУП 3.1, учет по ГПХ, автоматизация учёта промоушн‑расходов, интеграция с WorkDay и SAP",
    tag: "Фарма",
  },
  {
    name: "BASF Central Asia",
    desc: "Модуль охраны труда и медосмотров, автоматизация HR‑процессов",
    tag: "Химия",
  },
  {
    name: "Teva Ratiopharm",
    desc: "Аудит базы 1С, исправление учета и разработка новых модулей",
    tag: "Фарма",
  },
  {
    name: "Prosper Pay",
    desc: "Интеграция 1С с мобильным приложением для мгновенных выплат сотрудникам",
    tag: "FinTech",
  },
  {
    name: "Freerider",
    desc: "Внедрение 1С:УТ, интеграция с сайтом и маркетплейсами",
    tag: "E‑commerce",
  },
  {
    name: "Stella",
    desc: "Сопровождение 1С:КА, система мотивации, доработка модулей и интеграции",
    tag: "Ритейл",
  },
  {
    name: "Hightower (Додо Пицца)",
    desc: "Аудит систем, исправление данных и разработка модулей",
    tag: "HoReCa",
  },
  {
    name: "Rahat Palace Hotel",
    desc: "Автоматизация кадровых процессов и план‑факт анализа",
    tag: "Гостиничный",
  },
  {
    name: "Центральная клиническая больница",
    desc: "Внедрение бухгалтерских и HR систем, расчетные модули",
    tag: "Медицина",
  },
  {
    name: "МК‑Золото Ломбард",
    desc: "Система учета залоговых изделий с нуля",
    tag: "Финансы",
  },
  {
    name: "Master Builders Solutions CA",
    desc: "Сопровождение ЗУП 3, диагностика ошибок, разработка отчетов",
    tag: "Строительство",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Реализованные <span className="text-gradient">проекты</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Более 12 компаний из различных отраслей доверяют нам автоматизацию
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-colors shadow-card"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {client.tag}
                </span>
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{client.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{client.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
