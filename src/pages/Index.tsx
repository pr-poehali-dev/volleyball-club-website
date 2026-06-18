import Icon from '@/components/ui/icon';

const PLAYER_IMG = 'https://cdn.poehali.dev/projects/f8da45ff-6aab-40de-9eea-01ccb40b7a9d/files/c6a63ffb-da86-47a6-bf09-11c7a0437684.jpg';

const players = [
  { name: 'Анна Соколова', num: '7', role: 'Связующая', height: '182', points: 412, blocks: 88, aces: 56 },
  { name: 'Мария Орлова', num: '12', role: 'Доигровщица', height: '189', points: 638, blocks: 142, aces: 91 },
  { name: 'Екатерина Лис', num: '4', role: 'Центральная', height: '194', points: 521, blocks: 203, aces: 34 },
  { name: 'Дарья Волкова', num: '9', role: 'Либеро', height: '171', points: 0, blocks: 0, aces: 0, special: '94% приём' },
  { name: 'Ольга Рябова', num: '15', role: 'Диагональная', height: '190', points: 712, blocks: 96, aces: 78 },
  { name: 'София Зайцева', num: '21', role: 'Доигровщица', height: '185', points: 489, blocks: 110, aces: 64 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-white/10">
        <div className="container flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-md bg-brand -rotate-6">
              <Icon name="Volleyball" size={22} className="text-white" />
            </span>
            <span className="font-display text-2xl font-700 tracking-wider">ВИХРЬ</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 font-display uppercase text-sm tracking-widest">
            <a href="#roster" className="hover:text-brand transition-colors">Состав</a>
            <a href="#contacts" className="hover:text-brand transition-colors">Контакты</a>
          </nav>
          <a href="#contacts" className="bg-brand text-white font-display uppercase text-sm tracking-wider px-5 py-2 rounded-md hover:scale-105 transition-transform">
            В клуб
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative grain pt-16 min-h-screen flex items-center">
        <div className="absolute -top-20 -left-32 w-[40rem] h-[40rem] rounded-full bg-brand/20 blur-[120px]" />
        <div className="absolute top-40 right-0 w-[30rem] h-[30rem] rounded-full bg-electric/20 blur-[120px]" />

        <div className="container relative grid lg:grid-cols-2 gap-10 items-center py-16">
          <div className="opacity-0 animate-slide-in-x" style={{ animationDelay: '0.1s' }}>
            <span className="inline-flex items-center gap-2 text-electric font-display uppercase tracking-[0.3em] text-xs mb-5">
              <span className="w-8 h-px bg-electric" /> Высшая лига · сезон 2026
            </span>
            <h1 className="font-display font-700 uppercase leading-[0.85] text-6xl sm:text-7xl xl:text-8xl">
              Женский<br />
              волейбольный<br />
              <span className="text-brand">клуб «Вихрь»</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-foreground/70">
              Сила, скорость и характер. Команда, которая держит подачу даже когда трибуны затихают.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#roster" className="bg-brand text-white font-display uppercase tracking-wider px-7 py-3 rounded-md hover:scale-105 transition-transform">
                Наши игроки
              </a>
              <a href="#contacts" className="border border-white/25 font-display uppercase tracking-wider px-7 py-3 rounded-md hover:bg-white/5 transition-colors">
                Связаться
              </a>
            </div>
            <div className="mt-12 flex gap-10">
              {[['18', 'Игроков'], ['2', 'Кубка'], ['12', 'Сезонов']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-4xl font-700 text-electric">{n}</div>
                  <div className="uppercase text-xs tracking-widest text-foreground/50">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative opacity-0 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <div className="absolute inset-0 bg-brand rotate-3 rounded-2xl" />
            <img src={PLAYER_IMG} alt="Игрок ВИХРЬ" className="relative rounded-2xl diag-clip object-cover w-full aspect-[4/5] shadow-2xl" />
            <div className="absolute -bottom-5 -left-5 bg-background border border-white/10 rounded-xl px-5 py-3">
              <div className="font-display text-3xl font-700 text-brand">#12</div>
              <div className="uppercase text-xs tracking-widest text-foreground/60">Капитан</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-white/10 bg-brand/10 py-4 overflow-hidden">
        <div className="flex w-max animate-marquee whitespace-nowrap font-display uppercase text-2xl tracking-widest text-foreground/40">
          {Array(8).fill(0).map((_, i) => (
            <span key={i} className="mx-6 flex items-center gap-6">Вперёд, Вихрь <Icon name="Volleyball" size={20} className="text-brand" /></span>
          ))}
        </div>
      </div>

      {/* ROSTER */}
      <section id="roster" className="container py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <h2 className="font-display font-700 uppercase text-5xl sm:text-6xl leading-none">
            Состав<br /><span className="text-stroke">команды</span>
          </h2>
          <p className="max-w-sm text-foreground/60">Профили спортсменок с актуальной статистикой текущего сезона.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((p, i) => (
            <article
              key={p.num}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-brand/60 transition-colors opacity-0 animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img src={PLAYER_IMG} alt={p.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <span className="absolute top-3 right-4 font-display font-700 text-6xl text-brand/90">{p.num}</span>
                <span className="absolute bottom-3 left-4 uppercase text-xs tracking-widest bg-electric text-background px-3 py-1 rounded-full font-600">{p.role}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl font-600 uppercase tracking-wide">{p.name}</h3>
                <div className="flex items-center gap-2 text-foreground/50 text-sm mt-1">
                  <Icon name="Ruler" size={14} /> {p.height} см
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                  {p.special ? (
                    <div className="col-span-3 bg-white/[0.04] rounded-lg py-3">
                      <div className="font-display text-xl font-700 text-electric">{p.special}</div>
                      <div className="uppercase text-[10px] tracking-widest text-foreground/40">Надёжность</div>
                    </div>
                  ) : (
                    <>
                      <Stat value={p.points} label="Очки" />
                      <Stat value={p.blocks} label="Блоки" />
                      <Stat value={p.aces} label="Эйсы" />
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="relative grain border-t border-white/10 py-24">
        <div className="container grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display font-700 uppercase text-5xl sm:text-6xl leading-none mb-6">
              Хочешь <span className="text-brand">в команду?</span>
            </h2>
            <p className="text-foreground/60 max-w-md mb-8">
              Приходи на тренировку, познакомься с тренерским штабом и почувствуй атмосферу клуба «Вихрь».
            </p>
            <div className="space-y-4 font-display uppercase tracking-wide">
              <ContactRow icon="MapPin" title="Зал" value="г. Москва, ул. Спортивная, 24" />
              <ContactRow icon="Phone" title="Телефон" value="+7 (495) 123-45-67" />
              <ContactRow icon="Mail" title="Почта" value="club@vihr-volley.ru" />
            </div>
            <div className="flex gap-3 mt-8">
              {['Instagram', 'Send', 'Youtube'].map((ic) => (
                <a key={ic} href="#" className="grid place-items-center w-11 h-11 rounded-md border border-white/15 hover:bg-brand hover:border-brand transition-colors">
                  <Icon name={ic} size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="font-display uppercase text-2xl tracking-wide mb-6">Записаться на просмотр</h3>
            <div className="space-y-4">
              <input placeholder="Ваше имя" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:border-brand transition-colors" />
              <input placeholder="Телефон" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:border-brand transition-colors" />
              <textarea placeholder="Сообщение" rows={4} className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:border-brand transition-colors resize-none" />
              <button className="w-full bg-brand text-white font-display uppercase tracking-wider py-3 rounded-md hover:scale-[1.02] transition-transform">
                Отправить заявку
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-foreground/50 text-sm">
          <div className="flex items-center gap-2 font-display text-xl tracking-wider text-foreground">
            <Icon name="Volleyball" size={20} className="text-brand" /> ВИХРЬ
          </div>
          <span>© 2026 ВК «Вихрь». Все права защищены.</span>
        </div>
      </footer>
    </div>
  );
};

const Stat = ({ value, label }: { value: number; label: string }) => (
  <div className="bg-white/[0.04] rounded-lg py-3">
    <div className="font-display text-xl font-700">{value}</div>
    <div className="uppercase text-[10px] tracking-widest text-foreground/40">{label}</div>
  </div>
);

const ContactRow = ({ icon, title, value }: { icon: string; title: string; value: string }) => (
  <div className="flex items-center gap-4">
    <span className="grid place-items-center w-11 h-11 rounded-md bg-brand/15 text-brand shrink-0">
      <Icon name={icon} size={20} />
    </span>
    <div className="normal-case">
      <div className="text-[11px] uppercase tracking-widest text-foreground/40">{title}</div>
      <div className="text-foreground/90">{value}</div>
    </div>
  </div>
);

export default Index;
