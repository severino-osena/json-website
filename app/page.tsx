import Image from "next/image";
import ContactForm from "./components/ContactForm";

const heroStats = [
  { label: "Опыт в разработке", value: "10+ лет" },
  { label: "Коммерческие проекты", value: "30+" },
  { label: "Технологии", value: "JavaScript / TypeScript / Python" },
];

const coreExpertise = [
  "Разработка и поддержка веб‑приложений, SaaS‑платформ и внутренних бизнес‑систем.",
  "Полный цикл разработки: от проектирования архитектуры до вывода продукта в продукции и сопровождения.",
  "Frontend на React/Next.js и Vue с упором на переиспользуемые компоненты и удобство поддержки.",
  "Backend на Node.js/NestJS и Python/FastAPI/Django с REST и GraphQL API.",
  "Проектирование и оптимизация баз данных: PostgreSQL, MySQL, MongoDB, Redis.",
  "Интеграция внешних сервисов, настройка CI/CD, работа с Docker, AWS, Linux, Nginx.",
];

const portfolioProjects = [
  {
    title: "SaaS‑платформа аналитики для e‑commerce",
    role: "Senior Full‑Stack Developer",
    period: "2023 – 2025",
    description:
      "Разработка дашбордов и API для аналитики продаж, складских остатков и маркетинговых метрик с учётом высокой нагрузки.",
    stack: "Next.js, React, Node.js, FastAPI, PostgreSQL, Redis, Docker, AWS",
    result:
      "Сократил время подготовки отчётов с часов до минут, улучшил прозрачность показателей для продуктовой команды.",
  },
  {
    title: "CRM‑система для отдела продаж B2B",
    role: "Full‑Stack Developer",
    period: "2021 – 2023",
    description:
      "Проектирование сущностей, бизнес‑логики и интерфейсов для ведения сделок, задач и отчётности по менеджерам.",
    stack: "React, TypeScript, Node.js, NestJS, PostgreSQL, Redis",
    result:
      "Упростил контроль воронки продаж и автоматизировал часть рутины менеджеров, что увеличило конверсию в сделки.",
  },
  {
    title: "Портал для внутренней автоматизации процессов",
    role: "Full‑Stack Developer",
    period: "2019 – 2022",
    description:
      "Создание единого веб‑портала для внутренних сервисов компании: заявки, согласования, отчёты и мониторинг процессов.",
    stack: "Vue.js, Node.js, Express, MongoDB, Redis, Docker",
    result:
      "Снизил количество ручных операций и ошибок, объединив разрозненные процессы в единую систему.",
  },
  {
    title: "Высоконагруженный лендинг с A/B‑тестами",
    role: "Web Developer",
    period: "2018 – 2019",
    description:
      "Верстка и интеграция лендингов под рекламные кампании с поддержкой A/B‑тестирования и трекинга конверсий.",
    stack: "Next.js, React, TypeScript, Tailwind CSS, Node.js",
    result:
      "Повысил конверсию целевых действий за счёт оптимизации скорости загрузки и экспериментов с UX.",
  },
  {
    title: "Админ‑панель для управления контентом",
    role: "Web Developer",
    period: "2016 – 2018",
    description:
      "Разработка панели администрирования для корпоративных сайтов и лендингов, управление страницами, формами и медиа.",
    stack: "PHP, Laravel, MySQL, Vue.js, Bootstrap",
    result:
      "Сократил зависимость бизнеса от разработчиков при обновлении контента и запуске акций.",
  },
  {
    title: "Многостраничный корпоративный сайт",
    role: "Web Developer",
    period: "2015 – 2016",
    description:
      "Создание адаптивного сайта с каталогом услуг, блогом и формами обратной связи под требования SEO.",
    stack: "HTML5, CSS3, JavaScript, PHP, WordPress",
    result:
      "Обновил онлайн‑представительство компании, улучшил видимость в поисковых системах и удобство для клиентов.",
  },
];

const experience = [
  {
    period: "08.2023 – 10.2025",
    title: "Senior Full‑Stack Engineer",
    company: "8th Light",
    summary:
      "Проектирование архитектуры и ключевых технических решений для масштабируемых веб‑платформ и внутренних сервисов.",
    highlights: [
      "Разрабатывал современные frontend‑приложения на Next.js/React и backend‑сервисы на Python (FastAPI, Django).",
      "Выстраивал понятные контракты между UI, API и data‑layer, упрощая развитие продукта и онбординг команды.",
      "Оптимизировал производительность критичных пользовательских сценариев: рендеринг страниц, загрузка данных, кеширование.",
      "Участвовал в техническом лидерстве: code review, декомпозиция задач, внедрение и поддержка инженерных стандартов.",
      "Работал с облачной инфраструктурой (AWS, Docker), повышая предсказуемость деплоя и надёжность бизнес‑критичных функций.",
    ],
  },
  {
    period: "02.2019 – 06.2023",
    title: "Full‑Stack Developer",
    company: "Atomic Object",
    summary:
      "Разработка full‑stack решений для SaaS‑продуктов и клиентских платформ — от UI до серверной логики и структуры данных.",
    highlights: [
      "Создавал и развивал backend на Node.js/NestJS/Express и Python/FastAPI, проектировал и документировал REST API.",
      "Интегрировал сторонние сервисы, настраивал обработку бизнес‑логики и подготовку данных для frontend.",
      "Строил компонентные интерфейсы на React/TypeScript с упором на переиспользуемость и скорость вывода функций.",
      "Проектировал схемы данных и миграции в PostgreSQL, оптимизировал запросы под растущую нагрузку.",
      "Тесно взаимодействовал с продуктовой командой, дизайном и QA, участвовал в оценке и планировании релизов.",
    ],
  },
  {
    period: "06.2015 – 12.2018",
    title: "Web Developer",
    company: "Simform",
    summary:
      "Разработка корпоративных сайтов, лендингов и административных модулей, полный цикл web‑разработки.",
    highlights: [
      "Верстал адаптивные интерфейсы по дизайн‑макетам с учётом кроссбраузерности и базовой SEO‑оптимизации.",
      "Реализовывал серверную часть на PHP/Laravel, формы обратной связи и панели управления контентом.",
      "Поддерживал и развивал проекты на WordPress и кастомных решениях, устранял баги и ускорял загрузку страниц.",
      "Сформировал прочную базу во full‑cycle web‑разработке: верстка, клиентская логика, backend, базы данных и поддержка.",
    ],
  },
];

const techStacks = [
  {
    label: "Frontend",
    items: [
      "React, Next.js, Vue.js",
      "JavaScript, TypeScript",
      "Tailwind CSS, SCSS",
      "Адаптивная и компонентная архитектура UI",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js, NestJS, Express.js",
      "Python, FastAPI, Django",
      "REST API, GraphQL",
      "Интеграция внешних сервисов",
    ],
  },
  {
    label: "Data & Infra",
    items: [
      "PostgreSQL, MySQL, MongoDB, Redis",
      "Docker, AWS, Linux, Nginx",
      "CI/CD и автоматизация деплоя",
    ],
  },
  {
    label: "Engineering",
    items: [
      "System Design и архитектура",
      "Оптимизация производительности",
      "Code Review и менторство",
      "Agile‑процессы и работа с командой",
    ],
  },
];

const languages = [
  { label: "Русский", level: "профессиональный" },
  { label: "Английский", level: "профессиональный" },
];

export default function Home() {
  return (
    <main className="section-max-width section-padding space-y-28 md:space-y-32">
      {/* Hero */}
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)] items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-slate-300 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_#22c55e]" />
            <span>Открыт к предложениям по full‑stack разработке</span>
          </div>

          <div>
            <p className="section-title">
              Senior Full‑Stack Developer · JavaScript / TypeScript / Python
            </p>
            <h1 className="mt-4 font-semibold text-slate-50">
              <span className="flex items-baseline gap-3 text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
                <span className="text-amber-300 drop-shadow-[0_0_20px_rgba(251,191,36,0.9)]">
                Волков 
                </span>
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #fbbf24 0%, #22c55e 25%, #06b6d4 50%, #ec4899 75%, #f59e0b 100%)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    filter: "drop-shadow(0 0 24px rgba(251,191,36,0.5))",
                  }}
                >
                  Александр Сергеевич
                </span>
              </span>
              <span className="mt-4 block text-lg leading-snug text-slate-200 sm:text-xl md:text-2xl">
                создаю{" "}
                <span className="bg-gradient-to-r from-luxury-gold/80 via-emerald-300/80 to-sky-300/80 bg-clip-text text-transparent">
                  надёжные и поддерживаемые веб‑приложения
                </span>
                , а не «демки».
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-sm md:text-base text-slate-400">
              Senior Full‑Stack Developer с 10+ годами коммерческого опыта в
              JavaScript/TypeScript и Python. Разрабатываю и развиваю
              веб‑приложения, SaaS‑платформы и внутренние бизнес‑системы: от
              архитектуры и API до интерфейсов и оптимизации производительности.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-luxury-gold via-amber-300 to-emerald-300 px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-amber-500/40 transition hover:translate-y-0.5 hover:shadow-xl"
            >
              Опыт работы
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-black/40 px-6 py-2.5 text-sm font-semibold text-emerald-200 shadow-lg shadow-emerald-500/20 transition hover:translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-500/10 hover:text-emerald-100"
            >
              Портфолио
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-400 via-red-400 to-orange-400 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/40 transition hover:translate-y-0.5 hover:shadow-xl hover:shadow-rose-500/50"
            >
              Обсудить проект
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col rounded-2xl bg-white/5 px-4 py-3 text-xs text-slate-300 backdrop-blur-md md:px-5 md:py-4"
              >
                <span className="text-lg font-semibold text-luxury-gold md:text-xl">
                  {stat.value}
                </span>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 text-[11px] text-slate-400">
            <span className="font-semibold text-slate-200">
              Хабаровск, Россия
            </span>
            <span>•</span>
            <span>
              Senior Full‑Stack Developer | JavaScript / TypeScript / Python |
              React, Next.js, Node.js, FastAPI
            </span>
          </div>
        </div>

        {/* Hero visual */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 shadow-luxury">
            <Image
              src="/photo.png"
              alt="Волков Александр Сергеевич — Senior Full‑Stack Developer"
              fill
              className="object-cover object-[50%_18%]"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
              <div className="lux-glass gradient-border rounded-2xl p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                      Фокус
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-50">
                      Full‑stack веб‑разработка
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Frontend и backend, архитектура, интеграции и производительность в
                      продукции.
                    </p>
                  </div>
                  <div className="hidden flex-col items-end gap-1 text-[11px] text-slate-300 sm:flex">
                    <span className="badge-soft">Full‑Stack Developer</span>
                    <span>Ответственность за результат</span>
                    <span>Быстрая поставка фич</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Expertise */}
      <section id="expertise" className="section-padding -mt-16 space-y-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-title">Профессиональный профиль</p>
            <h2 className="section-heading">
              Senior Full‑Stack Developer с фокусом на продуктовую разработку.
            </h2>
            <p className="section-subtitle">
              Беру на себя ответственность за технические решения, быстро
              погружаюсь в доменную область и довожу задачи до устойчивого
              результата в продукции.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-slate-300">
            <span className="tag">Full‑stack разработка</span>
            <span className="tag">Архитектура и System Design</span>
            <span className="tag">Интеграция сервисов</span>
            <span className="tag">Оптимизация производительности</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="lux-glass gradient-border rounded-3xl p-6 md:col-span-2">
            <div className="grid gap-6 md:grid-cols-2">
              {coreExpertise.map((item) => (
                <div key={item} className="flex gap-3">
                  <div className="mt-1 h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-br from-luxury-gold via-amber-300 to-emerald-300 p-[1px]">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-black/90 text-[15px] text-luxury-gold">
                      •
                    </div>
                  </div>
                  <p className="text-sm text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-section-texture bg-cover bg-center shadow-luxury">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black" />
            <div className="relative flex h-full flex-col justify-between p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Стиль работы
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-50">
                  Практичный, ориентированный на результат full‑stack‑разработчик,
                  уверенно ведущий задачи от идеи до релиза.
                </p>
                <p className="mt-3 text-xs text-slate-300">
                  Умею работать с бизнесом и не‑техническими стейкхолдерами,
                  выстраиваю прозрачные ожидания и отдаю приоритет надёжности и
                  поддерживаемости над «эффектными демо».
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
                <span className="badge-soft">Ответственность за результат</span>
                <span className="badge-soft">Фокус на продукте</span>
                <span className="badge-soft">Прозрачная коммуникация</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="section-padding space-y-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-title">Портфолио</p>
            <h2 className="section-heading">
              Подборка реализованных проектов и продуктов.
            </h2>
            <p className="section-subtitle">
              Шесть ключевых примеров, где я отвечал за архитектуру, разработку и
              вывод решений в продукции.
            </p>
          </div>
          <div className="text-xs text-slate-400">
            <p>Коммерческие и внутренние проекты</p>
            <p className="mt-1">От лендингов до сложных SaaS‑платформ</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioProjects.map((project) => (
            <article
              key={project.title}
              className="lux-glass gradient-border flex flex-col rounded-3xl p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-slate-50">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">
                    {project.role} · {project.period}
                  </p>
                </div>
                <span className="badge-soft hidden text-[11px] text-emerald-200 sm:inline-flex">
                  {/* product-проект */}
                </span>
              </div>

              <p className="mt-3 text-sm text-slate-300">
                {project.description}
              </p>

              <div className="mt-4 space-y-2 text-xs text-slate-300">
                <p className="font-semibold text-slate-200">Технологии</p>
                <p>{project.stack}</p>
              </div>

              <div className="mt-4 space-y-2 text-xs text-slate-300">
                <p className="font-semibold text-slate-200">Результат</p>
                <p>{project.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section-padding space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-title">Опыт работы</p>
            <h2 className="section-heading">
              Full‑stack‑разработка от корпоративных сайтов до SaaS‑платформ.
            </h2>
            <p className="section-subtitle">
              Более 10 лет коммерческого опыта: frontend и backend‑разработка,
              проектирование архитектуры, работа с базами данных, интеграции и
              сопровождение в продукции.
            </p>
          </div>
          <div className="text-xs text-slate-400">
            <p>2015 — 2025</p>
            <p className="mt-1">Full‑stack‑разработка и веб‑инженерия</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-5 hidden w-px bg-gradient-to-b from-luxury-gold/60 via-slate-700 to-transparent md:block" />

          <div className="space-y-10">
            {experience.map((role, idx) => (
              <article
                key={role.title}
                className="relative ml-0 md:ml-10 rounded-3xl border border-white/10 bg-black/50 p-6 shadow-lg shadow-black/60 backdrop-blur-xl"
              >
                <div className="absolute -left-[26px] top-7 hidden h-4 w-4 rounded-full border border-amber-300 bg-gradient-to-br from-luxury-gold via-amber-300 to-emerald-300 shadow-[0_0_25px_rgba(251,191,36,0.9)] md:flex" />

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                      {role.period}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-50">
                      {role.title}
                    </h3>
                    <p className="text-xs text-slate-400">{role.company}</p>
                  </div>
                  <span className="badge-soft">
                    {idx === 0
                      ? "Senior Full‑Stack Engineer"
                      : idx === 1
                      ? "Full‑Stack Developer"
                      : "Web Developer"}
                  </span>
                </div>

                <p className="mt-4 text-sm text-slate-300">{role.summary}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {role.highlights.map((hl) => (
                    <li key={hl} className="flex gap-2">
                      <span className="mt-[6px] h-[3px] w-3 rounded-full bg-gradient-to-r from-luxury-gold to-emerald-300" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technical skills */}
      <section id="skills" className="section-padding space-y-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-title">Ключевые компетенции</p>
            <h2 className="section-heading">
              Современный стек для разработки веб‑продуктов и внутренних систем.
            </h2>
            <p className="section-subtitle">
              Фокус на надёжных и проверенных технологиях JavaScript/TypeScript и
              Python, которые хорошо работают в  и удобны в
              сопровождении.
            </p>
          </div>
          <div className="text-xs text-slate-400">
            <p>Языки: JavaScript, TypeScript, Python, SQL</p>
            <p className="mt-1">
              Инфраструктура: PostgreSQL, MySQL, MongoDB, Redis, Docker, AWS
            </p>
          </div>
        </div>

        <div className="grid gap-6 overflow-visible md:grid-cols-4">
          {techStacks.map((stack) => (
            <div
              key={stack.label}
              className="lux-glass gradient-border relative flex flex-col rounded-3xl p-5 transition-transform duration-300 ease-out hover:z-10 hover:scale-[1.5]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                {stack.label}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {stack.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-luxury-gold via-amber-300 to-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Details */}
      <section id="contact" className="section-padding space-y-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)]">
          <div className="space-y-6">
            <p className="section-title">Контакты</p>
            <h2 className="section-heading">
              Давайте обсудим вашу задачу по разработке.
            </h2>
            <p className="section-subtitle">
              Если вам нужен разработчик, который берёт на себя ответственность
              за технические решения и доводит задачи до результата в 
              — напишите мне.
            </p>

            <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Город
                </p>
                <p>Россия, Хабаровск</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Телефон
                </p>
                <p>+7 909 810 3663</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Email
                </p>
                <a
                  href="mailto:jsongy0818@gmail.com"
                  className="text-luxury-gold hover:underline"
                >
                  jsongy0818@gmail.com
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Роль
                </p>
                <p>
                  Senior Full‑Stack Developer | JavaScript / TypeScript / Python
                  | React, Next.js, Node.js, FastAPI
                </p>
              </div>
            </div>

            <ContactForm />

            <div className="mt-4 space-y-3 text-xs text-slate-300">
              <p className="font-semibold text-slate-200">Стиль работы</p>
              <ul className="space-y-1">
                <li>• Практичный, ориентированный на результат подход.</li>
                <li>
                  • Полная ответственность за технические решения и качество реализации.
                </li>
                <li>• Понятная коммуникация с бизнесом и командой.</li>
                <li>
                  • Фокус на надёжности, производительности и удобстве поддержки.
                </li>
              </ul>
            </div>
          </div>

          <div className="lux-glass gradient-border flex flex-col justify-between rounded-3xl p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Кратко
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-50">
                Senior Full‑Stack Developer с полным циклом ответственности за продукт.
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                От проектирования архитектуры и API до разработки интерфейсов,
                работы с базами данных и настройки деплоя — отношусь ко всему
                как к продукции‑решению: версионирование, тестирование и
                наблюдаемость.
              </p>
            </div>

            <div className="mt-6 grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Образование
                </p>
                <p className="mt-2">
                  Дальневосточный Государственный Университет Путей Сообщния, 2014
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Языки
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-200">
                  {languages.map((lang) => (
                    <li key={lang.label}>
                      {lang.label} —{" "}
                      <span className="text-slate-400">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-6 text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="tel:+79098103663"
              className="flex items-center gap-2 text-slate-400 transition hover:text-emerald-400"
              aria-label="Phone"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <a
              href="https://t.me/Lucashq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 transition hover:text-sky-400"
              aria-label="Telegram"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
            <a
              href="mailto:jsongy0818@gmail.com"
              className="flex items-center gap-2 text-slate-400 transition hover:text-amber-300"
              aria-label="Email"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href="https://github.com/canyok-dev0818"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 transition hover:text-blue-400"
              aria-label="GitHub"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 .297C5.37.297 0 5.667 0 12.297c0 5.302 3.438 9.8 8.207 11.387.6.112.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.333-5.466-5.933 0-1.31.469-2.382 1.236-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.004-.404c1.02.005 2.048.138 3.004.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.806 5.625-5.48 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.9-.015 3.293 0 .32.216.694.825.576C20.565 22.092 24 17.597 24 12.297 24 5.667 18.627.297 12 .297Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p>
              © {new Date().getFullYear()} Волков Александр Сергеевич. Senior Full‑Stack
              Developer (JavaScript / TypeScript / Python).
            </p>
            <p className="flex flex-wrap gap-2">
              <span>Сайт на Next.js и Tailwind CSS.</span>
              <span className="hidden md:inline">
                Современный дизайн под структуру резюме.
              </span>
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}

