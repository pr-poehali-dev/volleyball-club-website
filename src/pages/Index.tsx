import Icon from '@/components/ui/icon';

const CDN = 'https://cdn.poehali.dev/projects/f8da45ff-6aab-40de-9eea-01ccb40b7a9d/files';
const IMG_HERO   = `${CDN}/52e4cb2a-0436-47e5-ab85-cb4c282c0784.jpg`;
const IMG_ABOUT1 = `${CDN}/9b93b030-e451-4f69-98a8-70e801927a90.jpg`;
const IMG_ABOUT2 = `${CDN}/c871e101-27ea-43de-bba3-c4ae059c2776.jpg`;

const TELEGRAM = 'https://t.me/bluntblonde';
const VK = 'https://vk.ru/blunt7blonde';

const players = [
  { name: 'Анна Соколова',   num: '7',  role: 'Связующая',    height: '182', img: `${CDN}/9fa6e3cd-80cf-489c-b568-0e9a6561adfb.jpg` },
  { name: 'Мария Орлова',    num: '12', role: 'Доигровщица',  height: '189', img: `${CDN}/67f3a57e-d89f-4d9b-8c2a-9fdd3f2a7ef1.jpg` },
  { name: 'Екатерина Лис',   num: '4',  role: 'Центральная',  height: '194', img: `${CDN}/0af143f9-5ed4-4ec0-aae3-f610dca94337.jpg` },
  { name: 'Дарья Волкова',   num: '9',  role: 'Либеро',       height: '171', img: `${CDN}/d9ea08f9-c366-4b82-ae4f-536f218b9b3c.jpg` },
  { name: 'Ольга Рябова',    num: '15', role: 'Диагональная', height: '190', img: `${CDN}/216d4428-3241-4c49-955f-30c38ba1109f.jpg` },
  { name: 'София Зайцева',   num: '21', role: 'Доигровщица',  height: '185', img: `${CDN}/f37ce6eb-7411-4a75-a254-0893c3419f30.jpg` },
];

const reviews = [
  { name: 'Анна', role: 'Связующая', text: 'В «Импульсе» я впервые почувствовала, что значит настоящая команда. Здесь не дают сдаться — ни тренеры, ни девочки рядом.' },
  { name: 'Мария', role: 'Доигровщица', text: 'Тренировки заряжают на всю неделю вперёд. Площадка стала вторым домом, а девчонки — настоящей семьёй.' },
  { name: 'Дарья', role: 'Либеро', text: 'Каждая игра — это полёт. Здесь верят в тебя больше, чем ты сама. Это и толкает расти.' },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-body">

      {/* ─── NAV ─── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur border-b-2 border-brand">
        <div className="container flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 shrink-0">
              <div className="absolute inset-0 bg-brand rounded-sm rotate-6 group-hover:rotate-12 transition-transform" />
              <div className="absolute inset-0 grid place-items-center font-display font-700 text-xl text-white">И</div>
            </div>
            <div>
              <div className="font-display font-700 text-lg leading-none tracking-[0.2em] text-brand">ИМПУЛЬС</div>
              <div className="text-[9px] tracking-[0.25em] text-foreground/50 uppercase">Волейбольный клуб</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 font-display uppercase text-sm tracking-[0.12em] text-foreground/70">
            <a href="#about"    className="hover:text-brand transition-colors">О клубе</a>
            <a href="#sections" className="hover:text-brand transition-colors">Разделы</a>
            <a href="#team"     className="hover:text-brand transition-colors">Команда</a>
            <a href="#join"     className="hover:text-brand transition-colors">Вступить</a>
          </nav>

          <a href="#join"
            className="bg-electric text-white font-display uppercase text-xs tracking-[0.15em] px-5 py-2.5 rounded-sm hover:scale-105 transition-transform shadow-lg">
            В команду
          </a>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section id="top" className="relative pt-16 min-h-screen flex items-center overflow-hidden sport-grid">
        <div className="absolute inset-0">
          <img src={IMG_HERO} alt="Команда Импульс" className="w-full h-full object-cover object-top opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        </div>
        <div className="absolute top-0 right-0 w-2 h-full bg-electric" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-electric" />

        <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-20">
          <div>
            <div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-up">
              <span className="w-10 h-0.5 bg-electric" />
              <span className="font-display uppercase text-xs tracking-[0.3em] text-electric">Сезон 2026 · Высшая лига</span>
            </div>

            <h1 className="font-display font-700 uppercase leading-none text-6xl sm:text-7xl xl:text-8xl opacity-0 animate-fade-up"
                style={{ animationDelay: '0.1s' }}>
              <span className="block text-brand">ЖЕНСКИЙ</span>
              <span className="block text-foreground">ВОЛЕЙБОЛ</span>
              <span className="block text-electric">КЛУБ</span>
            </h1>

            <div className="mt-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-stroke font-display font-700 text-7xl sm:text-8xl xl:text-9xl select-none">ИМПУЛЬС</span>
            </div>

            <p className="mt-6 max-w-md text-foreground/70 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Энергия. Характер. Победа. Мы не просто играем — мы живём волейболом.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <a href={TELEGRAM} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-brand text-white font-display uppercase text-sm tracking-[0.1em] px-6 py-3 rounded-sm hover:scale-105 transition-transform">
                <Icon name="Send" size={18} /> Telegram
              </a>
              <a href={VK} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-brand text-brand font-display uppercase text-sm tracking-[0.1em] px-6 py-3 rounded-sm hover:bg-brand hover:text-white transition-colors">
                <Icon name="Share2" size={18} /> ВКонтакте
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              {[['12', 'Сезонов'], ['18', 'Игроков'], ['3', 'Кубка']].map(([n, l]) => (
                <div key={l} className="border-l-4 border-electric pl-4">
                  <div className="font-display font-700 text-4xl text-brand">{n}</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-foreground/60">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center opacity-0 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 bg-brand rounded-2xl rotate-12 opacity-20" />
              <div className="absolute inset-0 bg-electric rounded-2xl -rotate-6 opacity-10" />
              <div className="absolute inset-0 border-4 border-brand rounded-2xl rotate-3" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display font-700 text-[12rem] leading-none text-brand">И</span>
              </div>
              <div className="absolute -bottom-3 -right-3 bg-electric text-white font-display text-xs uppercase tracking-[0.2em] px-4 py-2">
                ИМПУЛЬС
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-24 bg-brand diag-top">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <h2 className="font-display font-700 uppercase text-5xl sm:text-6xl text-white leading-none">
              О клубе<br /><span className="text-electric">«Импульс»</span>
            </h2>
            <p className="max-w-sm text-white/70 leading-relaxed">
              Мы создали пространство, где каждая девушка может стать сильнее, быстрее и смелее.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="relative rounded-xl overflow-hidden h-80">
              <img src={IMG_ABOUT1} alt="Тренировка" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-brand to-transparent" />
            </div>
            <div className="relative rounded-xl overflow-hidden h-80">
              <img src={IMG_ABOUT2} alt="Матч" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-brand to-transparent" />
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl sm:text-2xl font-300 text-white/90 leading-relaxed">
              «Импульс» — это не просто команда. Это сила характера, скорость мысли и вера друг в друга.
              Здесь каждая подача рождает энергию, каждый блок — шаг к победе, а каждая тренировка делает нас сильнее.
            </p>
            <a href="#join"
              className="inline-flex items-center gap-3 mt-10 bg-electric text-white font-display uppercase tracking-[0.15em] px-10 py-4 rounded-sm hover:scale-105 transition-transform shadow-xl">
              Попасть в команду <Icon name="ArrowRight" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── SECTIONS ─── */}
      <section id="sections" className="py-20 sport-grid">
        <div className="container">
          <h2 className="font-display font-700 uppercase text-4xl sm:text-5xl text-brand text-center mb-12">
            Разделы клуба
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'CalendarDays', title: 'Расписание',   sub: 'Тренировки и игры на неделю',    href: '#sections', dark: true  },
              { icon: 'Trophy',       title: 'Соревнования', sub: 'Турниры, лиги и кубки сезона',   href: '#sections', dark: false },
              { icon: 'Users',        title: 'Наша команда', sub: 'Все игроки клуба «Импульс»',     href: '#team',     dark: true  },
            ].map((s, i) => (
              <a key={s.title} href={s.href}
                className={`group relative rounded-xl overflow-hidden border-2 border-transparent hover:border-electric transition-all opacity-0 animate-fade-up p-8 ${s.dark ? 'bg-brand' : 'bg-electric'}`}
                style={{ animationDelay: `${i * 0.1}s` }}>
                <Icon name={s.icon} size={44} className="text-white" />
                <h3 className="mt-5 font-display font-700 uppercase text-3xl text-white tracking-wide">{s.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{s.sub}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-white font-display uppercase text-xs tracking-[0.2em]">
                  Открыть <Icon name="ArrowRight" size={14} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section id="team" className="py-24 border-t-4 border-brand" style={{ background: 'hsl(202 70% 88%)' }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-3 text-electric font-display uppercase text-xs tracking-[0.3em] mb-4">
              <span className="w-8 h-0.5 bg-electric" /> Состав сезона 2026 <span className="w-8 h-0.5 bg-electric" />
            </span>
            <h2 className="font-display font-700 uppercase text-5xl sm:text-6xl text-brand">Наша команда</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {players.map((p, i) => (
              <article key={p.num}
                className="group rounded-xl overflow-hidden border-2 border-transparent hover:border-electric transition-all shadow-md hover:shadow-xl opacity-0 animate-fade-up bg-white"
                style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="relative h-80 overflow-hidden">
                  <img src={p.img} alt={p.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/20 to-transparent" />
                  <span className="absolute top-3 left-3 bg-electric text-white font-display font-700 text-2xl w-12 h-12 grid place-items-center rounded-sm">
                    {p.num}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display font-700 uppercase text-xl text-white">{p.name}</h3>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-white/80 text-xs uppercase tracking-wider">{p.role}</span>
                      <span className="flex items-center gap-1 text-white/70 text-xs"><Icon name="Ruler" size={12} /> {p.height} см</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* REVIEWS */}
          <div className="mt-24 text-center mb-12">
            <h3 className="font-display font-700 uppercase text-4xl sm:text-5xl text-brand">Говорят игроки</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <figure key={r.name}
                className="bg-white rounded-xl p-7 border-l-4 border-electric shadow-md opacity-0 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}>
                <Icon name="Quote" size={32} className="text-electric" />
                <blockquote className="mt-3 text-foreground/80 leading-relaxed text-sm">«{r.text}»</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-brand grid place-items-center text-white font-display font-700 text-sm shrink-0">{r.name[0]}</span>
                  <div>
                    <div className="font-display font-700 uppercase text-sm text-brand tracking-wide">{r.name}</div>
                    <div className="text-xs text-foreground/50 uppercase tracking-widest">{r.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JOIN ─── */}
      <section id="join" className="py-24 bg-brand sport-grid">
        <div className="container max-w-2xl">
          <div className="text-center mb-10">
            <span className="inline-block bg-electric text-white font-display uppercase text-xs tracking-[0.2em] px-4 py-2 mb-5">
              Открытый набор
            </span>
            <h2 className="font-display font-700 uppercase text-5xl sm:text-6xl text-white">Заявка<br />в команду</h2>
            <p className="mt-4 text-white/70">Заполни форму — мы рассмотрим заявку и пригласим на просмотр.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-2xl">
            <div className="space-y-4">
              <input placeholder="Имя и фамилия"
                className="w-full border-2 border-foreground/10 focus:border-brand rounded-sm px-4 py-3 outline-none transition-colors text-foreground placeholder:text-foreground/40" />
              <input placeholder="Телефон или Telegram"
                className="w-full border-2 border-foreground/10 focus:border-brand rounded-sm px-4 py-3 outline-none transition-colors text-foreground placeholder:text-foreground/40" />
              <input placeholder="Возраст и амплуа"
                className="w-full border-2 border-foreground/10 focus:border-brand rounded-sm px-4 py-3 outline-none transition-colors text-foreground placeholder:text-foreground/40" />
              <textarea placeholder="Расскажи о своём опыте в волейболе" rows={4}
                className="w-full border-2 border-foreground/10 focus:border-brand rounded-sm px-4 py-3 outline-none transition-colors text-foreground placeholder:text-foreground/40 resize-none" />
              <button className="w-full bg-electric text-white font-display uppercase tracking-[0.2em] py-4 rounded-sm hover:scale-[1.02] transition-transform shadow-lg text-sm">
                Отправить заявку
              </button>
            </div>
            <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-foreground/10">
              <a href={TELEGRAM} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand hover:text-electric transition-colors font-display uppercase text-xs tracking-[0.15em]">
                <Icon name="Send" size={16} /> @bluntblonde
              </a>
              <a href={VK} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand hover:text-electric transition-colors font-display uppercase text-xs tracking-[0.15em]">
                <Icon name="Share2" size={16} /> ВКонтакте
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-8" style={{ background: 'hsl(215 60% 12%)' }}>
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 shrink-0">
              <div className="absolute inset-0 bg-brand rounded-sm rotate-6" />
              <div className="absolute inset-0 grid place-items-center font-display font-700 text-white text-sm">И</div>
            </div>
            <span className="font-display font-700 tracking-[0.2em] text-white">ИМПУЛЬС</span>
          </div>
          <span className="text-white/40 text-sm">© 2026 ВК «Импульс». Все права защищены.</span>
          <div className="flex gap-4">
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-electric transition-colors"><Icon name="Send" size={20} /></a>
            <a href={VK} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-electric transition-colors"><Icon name="Share2" size={20} /></a>
          </div>
        </div>
      </footer>

    </div>
  );
}
