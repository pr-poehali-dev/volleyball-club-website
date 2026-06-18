import Icon from '@/components/ui/icon';

const CDN = 'https://cdn.poehali.dev/projects/f8da45ff-6aab-40de-9eea-01ccb40b7a9d/files';
const IMG_PLAYER = `${CDN}/9b93b030-e451-4f69-98a8-70e801927a90.jpg`;
const IMG_TEAM = `${CDN}/bf642d54-ec8b-4687-af63-77f1641662da.jpg`;
const IMG_BALL = `${CDN}/c871e101-27ea-43de-bba3-c4ae059c2776.jpg`;

const TELEGRAM = 'https://t.me/bluntblonde';
const VK = 'https://vk.ru/blunt7blonde';

const players = [
  { name: 'Анна Соколова', num: '7', role: 'Связующая', height: '182' },
  { name: 'Мария Орлова', num: '12', role: 'Доигровщица', height: '189' },
  { name: 'Екатерина Лис', num: '4', role: 'Центральная', height: '194' },
  { name: 'Дарья Волкова', num: '9', role: 'Либеро', height: '171' },
  { name: 'Ольга Рябова', num: '15', role: 'Диагональная', height: '190' },
  { name: 'София Зайцева', num: '21', role: 'Доигровщица', height: '185' },
];

const reviews = [
  { name: 'Анна', text: 'В «Импульсе» я впервые почувствовала, что значит настоящая команда. Здесь не дают сдаться.' },
  { name: 'Мария', text: 'Тренировки заряжают на неделю вперёд. Девочки стали мне как сёстры, а площадка — вторым домом.' },
  { name: 'Дарья', text: 'Каждая игра — как полёт. Тренеры верят в нас больше, чем мы сами. Это вдохновляет двигаться выше.' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-white/10">
        <div className="container flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid place-items-center w-9 h-9 rounded-full border border-electric/60 text-electric font-display text-2xl font-500">И</span>
            <span className="font-display text-2xl font-500 tracking-[0.25em]">ИМПУЛЬС</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 uppercase text-xs tracking-[0.2em] text-foreground/70">
            <a href="#about" className="hover:text-electric transition-colors">Клуб</a>
            <a href="#sections" className="hover:text-electric transition-colors">Разделы</a>
            <a href="#team" className="hover:text-electric transition-colors">Команда</a>
            <a href="#join" className="hover:text-electric transition-colors">В команду</a>
          </nav>
          <a href="#join" className="bg-electric text-background uppercase text-xs tracking-[0.2em] px-5 py-2 rounded-full hover:scale-105 transition-transform">
            Заявка
          </a>
        </div>
      </header>

      {/* HERO — logo letter + socials */}
      <section id="top" className="relative grain min-h-screen flex items-center justify-center text-center">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[45rem] h-[45rem] rounded-full bg-brand/30 blur-[140px]" />
        <div className="absolute bottom-0 right-10 w-[28rem] h-[28rem] rounded-full bg-electric/15 blur-[130px]" />

        <div className="container relative py-24 flex flex-col items-center">
          <div className="opacity-0 animate-fade-up grid place-items-center w-40 h-40 sm:w-52 sm:h-52 rounded-full border border-electric/50">
            <span className="font-display text-electric text-[7rem] sm:text-[9rem] leading-none font-300">И</span>
          </div>
          <h1 className="mt-8 font-display font-300 tracking-[0.3em] text-5xl sm:text-7xl opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            ИМПУЛЬС
          </h1>
          <p className="mt-3 uppercase text-xs sm:text-sm tracking-[0.4em] text-foreground/60 opacity-0 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            Женский волейбольный клуб
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-electric text-background px-7 py-3 rounded-full uppercase text-xs tracking-[0.2em] hover:scale-105 transition-transform">
              <Icon name="Send" size={18} /> Telegram
            </a>
            <a href={VK} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 border border-white/25 px-7 py-3 rounded-full uppercase text-xs tracking-[0.2em] hover:bg-white/5 transition-colors">
              <Icon name="Share2" size={18} /> ВКонтакте
            </a>
          </div>
        </div>
        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/40 animate-bounce">
          <Icon name="ChevronDown" size={28} />
        </a>
      </section>

      {/* ABOUT — title + photos + description + join button */}
      <section id="about" className="container py-24">
        <div className="text-center mb-14">
          <h2 className="font-display font-300 text-5xl sm:text-6xl tracking-[0.15em]">О клубе «Импульс»</h2>
          <span className="inline-block mt-4 w-20 h-px bg-electric" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <img src={IMG_BALL} alt="Волейбол" className="rounded-2xl object-cover w-full h-72 md:h-96 opacity-0 animate-fade-up" />
          <img src={IMG_TEAM} alt="Команда" className="rounded-2xl object-cover w-full h-72 md:h-96 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }} />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-2xl sm:text-3xl font-300 leading-relaxed text-foreground/90">
            «Импульс» — это не просто команда. Это сила характера, скорость мысли и вера друг в друга.
            Здесь каждая подача рождает энергию, каждый блок — это шаг к победе, а каждая тренировка делает нас
            сильнее, чем вчера. Мы играем сердцем — и это чувствуют трибуны.
          </p>
          <p className="mt-6 text-foreground/60 leading-relaxed">
            Присоединяйся к клубу, где раскрываются таланты, рождаются легенды и куётся настоящая дружба.
            Твой импульс к большому спорту начинается здесь.
          </p>
          <a href="#join" className="inline-flex items-center gap-3 mt-10 bg-electric text-background px-9 py-4 rounded-full uppercase text-sm tracking-[0.2em] hover:scale-105 transition-transform">
            Попасть в команду <Icon name="ArrowRight" size={18} />
          </a>
        </div>
      </section>

      {/* SECTIONS — schedule / competitions / team */}
      <section id="sections" className="border-y border-white/10 bg-white/[0.02] py-20">
        <div className="container grid md:grid-cols-3 gap-6">
          {[
            { icon: 'CalendarDays', title: 'Расписание клуба', desc: 'Тренировки и игры на неделю', href: '#sections' },
            { icon: 'Trophy', title: 'Соревнования клуба', desc: 'Турниры, лиги и кубки сезона', href: '#sections' },
            { icon: 'Users', title: 'Наша команда', desc: 'Игроки клуба «Импульс»', href: '#team' },
          ].map((s, i) => (
            <a key={s.title} href={s.href}
              className="group relative rounded-2xl border border-white/10 bg-background p-8 hover:border-electric/60 transition-colors opacity-0 animate-fade-up overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-electric/10 group-hover:bg-electric/20 transition-colors" />
              <Icon name={s.icon} size={34} className="text-electric relative" />
              <h3 className="mt-6 font-display text-3xl font-400 tracking-wide relative">{s.title}</h3>
              <p className="mt-2 text-foreground/55 relative">{s.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-electric uppercase text-xs tracking-[0.2em] relative">
                Открыть <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="container py-24">
        <div className="text-center mb-14">
          <h2 className="font-display font-300 text-5xl sm:text-6xl tracking-[0.15em]">Наша команда</h2>
          <p className="mt-3 text-foreground/55">Спортсменки клуба «Импульс»</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((p, i) => (
            <article key={p.num}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-electric/60 transition-colors opacity-0 animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="relative h-72 overflow-hidden">
                <img src={IMG_PLAYER} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <span className="absolute top-4 right-5 font-display font-500 text-6xl text-electric/90">{p.num}</span>
                <span className="absolute bottom-4 left-5 uppercase text-[11px] tracking-[0.2em] bg-electric text-background px-3 py-1 rounded-full">{p.role}</span>
              </div>
              <div className="p-5 flex items-center justify-between">
                <h3 className="font-display text-2xl font-400 tracking-wide">{p.name}</h3>
                <span className="flex items-center gap-1 text-foreground/50 text-sm"><Icon name="Ruler" size={14} /> {p.height} см</span>
              </div>
            </article>
          ))}
        </div>

        {/* REVIEWS */}
        <div className="mt-24 text-center mb-12">
          <h3 className="font-display font-300 text-4xl sm:text-5xl tracking-[0.15em]">Отзывы девушек</h3>
          <span className="inline-block mt-4 w-16 h-px bg-electric" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <figure key={r.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 opacity-0 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}>
              <Icon name="Quote" size={28} className="text-electric/70" />
              <blockquote className="mt-4 font-display text-xl font-300 leading-relaxed text-foreground/90">«{r.text}»</blockquote>
              <figcaption className="mt-5 uppercase text-xs tracking-[0.2em] text-electric">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* JOIN */}
      <section id="join" className="relative grain border-t border-white/10 py-24">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand/30 blur-[130px]" />
        <div className="container relative max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="font-display font-300 text-5xl sm:text-6xl tracking-[0.15em]">Заявка в команду</h2>
            <p className="mt-4 text-foreground/60">Оставь свои контакты — мы рассмотрим заявку и пригласим на просмотр.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 space-y-4">
            <input placeholder="Имя и фамилия" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:border-electric transition-colors" />
            <input placeholder="Телефон" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:border-electric transition-colors" />
            <input placeholder="Возраст и амплуа" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:border-electric transition-colors" />
            <textarea placeholder="Расскажи о своём опыте" rows={4} className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:border-electric transition-colors resize-none" />
            <button className="w-full bg-electric text-background uppercase tracking-[0.2em] py-4 rounded-md hover:scale-[1.02] transition-transform">
              Отправить заявку
            </button>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/70 hover:text-electric transition-colors uppercase text-xs tracking-[0.2em]">
              <Icon name="Send" size={18} /> @bluntblonde
            </a>
            <a href={VK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/70 hover:text-electric transition-colors uppercase text-xs tracking-[0.2em]">
              <Icon name="Share2" size={18} /> ВКонтакте
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-foreground/50 text-sm">
          <div className="flex items-center gap-3 font-display text-xl tracking-[0.25em] text-foreground">
            <span className="grid place-items-center w-8 h-8 rounded-full border border-electric/60 text-electric">И</span> ИМПУЛЬС
          </div>
          <span>© 2026 ВК «Импульс». Все права защищены.</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
