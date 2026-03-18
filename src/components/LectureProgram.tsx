import Icon from "@/components/ui/icon"

const parts = [
  {
    number: "01",
    title: "Базы данных и СУБД",
    duration: "20 мин",
    icon: "Database",
    topics: [
      "Что такое база данных и чем отличается от файлов",
      "СУБД: функции и популярные системы (MySQL, PostgreSQL, SQLite)",
      "Типы БД: реляционные, NoSQL, иерархические",
    ],
  },
  {
    number: "02",
    title: "Реляционные базы данных",
    duration: "25 мин",
    icon: "Table",
    topics: [
      "Таблицы, строки, столбцы и типы данных",
      "Первичный и внешний ключи, составные ключи",
      "Связи: один к одному, один ко многим, многие ко многим",
    ],
  },
  {
    number: "03",
    title: "SQL-запросы",
    duration: "30 мин",
    icon: "Code2",
    topics: [
      "DDL, DML, DCL, TCL — категории команд",
      "SELECT, INSERT, UPDATE, DELETE — основные операторы",
      "JOIN, GROUP BY, HAVING, агрегирующие функции",
    ],
  },
  {
    number: "04",
    title: "Проектирование и нормализация",
    duration: "25 мин",
    icon: "GitBranch",
    topics: [
      "Принципы: атомарность, отсутствие избыточности, целостность",
      "Нормальные формы: 1NF, 2NF, 3NF, BCNF",
      "Денормализация: когда и зачем нарушать правила",
    ],
  },
]

export default function LectureProgram() {
  return (
    <section className="mx-4 md:mx-0 mt-6">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-accent font-mono text-sm mb-2">// программа лекции</p>
          <h2
            className="text-foreground text-3xl md:text-4xl font-semibold leading-tight"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            4 части. 90–120 минут.<br />От теории до практики.
          </h2>
        </div>
        <a href="#contact">
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-mono font-semibold text-sm whitespace-nowrap hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300 flex items-center gap-2">
            Записаться <Icon name="ArrowUpRight" size={16} />
          </button>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {parts.map((part) => (
          <div
            key={part.number}
            className="relative rounded-2xl bg-card border border-border p-6 overflow-hidden group hover:border-accent transition-colors duration-300"
          >
            <div className="absolute top-4 right-4 text-foreground/5 font-mono font-bold text-7xl leading-none select-none">
              {part.number}
            </div>

            <div className="flex items-start gap-4 mb-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Icon name={part.icon} size={18} className="text-accent" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-accent font-mono text-xs">{part.number}</span>
                  <span className="text-muted-foreground font-mono text-xs border border-border rounded-full px-2 py-0.5">{part.duration}</span>
                </div>
                <h3 className="text-foreground font-semibold text-base" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {part.title}
                </h3>
              </div>
            </div>

            <ul className="space-y-2">
              {part.topics.map((topic, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-accent mt-1 flex-shrink-0 text-xs">—</span>
                  <span className="text-muted-foreground font-mono text-xs leading-relaxed">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
