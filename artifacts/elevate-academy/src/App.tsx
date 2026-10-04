import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { Link, Route, Router as WouterRouter, Switch, useLocation, useRoute } from 'wouter';
import {
  ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Brain, Check, CheckCircle2,
  ChevronRight, Compass, FileText, Focus, GraduationCap, Menu, MessageCircle,
  NotebookPen, PanelTop, PenLine, ShieldCheck, Sparkles, Target, X,
} from 'lucide-react';
import studyIllustration from './assets/study-illustration.webp';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Results', href: '/results' },
  { label: 'Contact', href: '/contact' },
];

const courses = [
  {
    id: 'foundation-program',
    number: '01',
    title: 'Foundation Program',
    summary: 'Build strong academic fundamentals through clear explanations and purposeful practice.',
    audience: 'For learners ready to strengthen the building blocks of confident study.',
    topics: ['Core concept clarity', 'Guided problem-solving', 'Study planning and review habits', 'Regular formative assessments'],
    icon: Target,
  },
  {
    id: 'competitive-exam-preparation',
    number: '02',
    title: 'Competitive Exam Preparation',
    summary: 'Connect strong subject knowledge with deliberate practice and a considered exam strategy.',
    audience: 'For students preparing for a competitive examination pathway.',
    topics: ['Structured subject sessions', 'Exam-style problem practice', 'Strategy and time planning', 'Feedback-led revision'],
    icon: BookOpen,
  },
  {
    id: 'senior-secondary-program',
    number: '03',
    title: 'Senior Secondary Program',
    summary: 'Navigate advanced school subjects with a clear sequence from understanding to application.',
    audience: 'For senior secondary learners building confidence across core subjects.',
    topics: ['Topic-by-topic instruction', 'Worked examples and application', 'Doubt-solving support', 'Revision and retrieval practice'],
    icon: GraduationCap,
  },
  {
    id: 'crash-course',
    number: '04',
    title: 'Crash Course',
    summary: 'Use a focused revision plan to revisit priority concepts and practise with purpose.',
    audience: 'For learners seeking a short, structured review before an assessment period.',
    topics: ['Priority topic review', 'Focused practice sets', 'Common misconception checks', 'A clear revision plan'],
    icon: Brain,
  },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="Elevate Academy home" className="inline-flex items-center gap-3">
      <span className={`grid h-10 w-10 place-items-center rounded-xl ${light ? 'bg-[#f1eee4] text-[#223650]' : 'bg-[#223650] text-[#f8f4e9]'}`}>
        <span className="font-display text-[22px] font-extrabold leading-none">e</span>
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-[17px] font-extrabold tracking-[-.04em] ${light ? 'text-[#f8f4e9]' : 'text-[#223650]'}`}>Elevate Academy</span>
        <span className={`mt-1 block text-[9px] font-bold uppercase tracking-[.2em] ${light ? 'text-[#b6c0c9]' : 'text-slate-500'}`}>Learning with direction</span>
      </span>
    </Link>
  );
}

function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [location]);
  return (
    <header className="sticky top-0 z-50 border-b border-[#d9d8cf] bg-[#f8f6ef]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-3.5 sm:px-8 lg:px-12">
        <Brand />
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`nav-link relative py-2 text-[13px] font-semibold ${location === item.href ? 'text-[#3478b9]' : 'text-[#465265]'}`}>
              {item.label}
              {location === item.href && <span className="absolute inset-x-0 -bottom-[1px] h-[2px] rounded-full bg-[#3478b9]" />}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="button-lift hidden items-center gap-2 rounded-full bg-[#3478b9] px-5 py-3 text-[13px] font-bold text-white shadow-sm md:inline-flex">
          Start a conversation <ArrowUpRight size={15} />
        </Link>
        <button type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} className="grid h-11 w-11 place-items-center rounded-full border border-[#d9d8cf] text-[#223650] md:hidden">
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile navigation" className="border-t border-[#d9d8cf] bg-[#f8f6ef] px-5 py-3 md:hidden">
          {navItems.map((item) => <Link key={item.href} href={item.href} className={`flex items-center justify-between border-b border-[#e5e2d8] py-4 text-[15px] font-semibold ${location === item.href ? 'text-[#c65e49]' : 'text-[#223650]'}`}>{item.label}<ChevronRight size={17} /></Link>)}
          <Link href="/contact" className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#3478b9] px-5 py-3.5 text-sm font-bold text-white">Enquire Now <ArrowRight size={16} /></Link>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1f3045] text-[#f8f4e9]">
      <div className="mx-auto max-w-[1240px] px-5 pb-8 pt-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-[1.2fr_.8fr]">
          <div>
            <Brand light />
            <p className="mt-5 max-w-md text-sm leading-7 text-[#c2cad1]">A fictional coaching institute concept, built around clear teaching, considered preparation and steady student progress.</p>
          </div>
          <div className="md:justify-self-end">
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[.2em] text-[#d99a84]">Explore</div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-3">
              {navItems.slice(1).map((item) => <Link key={item.href} href={item.href} className="text-sm text-[#e1e3e0] transition-colors hover:text-white">{item.label}</Link>)}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-6 text-[11px] leading-5 text-[#b6c0c9] sm:flex-row sm:items-center sm:justify-between">
          <span>© Elevate Academy · <strong className="font-semibold text-[#efe8d8]">Demo / Concept Website</strong></span>
          <span>Designed &amp; Developed as a concept project by <strong className="font-semibold text-[#efe8d8]">Trivexa Digital Solution</strong></span>
        </div>
        <p className="mt-4 text-[10px] leading-5 text-[#8998a7]">All institute, course and progress content is fictional and shown for concept purposes only.</p>
      </div>
    </footer>
  );
}

function ButtonLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return <Link href={href} className={`button-lift inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold ${light ? 'border border-[#89939b] text-[#223650] hover:bg-[#e6e2d8]' : 'bg-[#3478b9] text-white hover:bg-[#285f97]'}`}>{children}<ArrowRight size={16} /></Link>;
}

function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className={`mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.2em] ${light ? 'text-[#df9a83]' : 'text-[#bb604d]'}`}><span className={`h-px w-7 ${light ? 'bg-[#df9a83]' : 'bg-[#bb604d]'}`} />{children}</div>;
}

function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: ReactNode; copy: string }) {
  return <section className="relative overflow-hidden bg-[#e9e9df]">
    <div className="hero-grid absolute inset-0 opacity-50" />
    <div className="relative mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <SectionLabel>{eyebrow}</SectionLabel>
      <h1 className="font-display max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-.055em] text-[#223650] sm:text-6xl">{title}</h1>
      <p className="mt-6 max-w-2xl text-base leading-7 text-[#586575] sm:text-lg sm:leading-8">{copy}</p>
    </div>
  </section>;
}

function CourseCard({ course, compact = false }: { course: typeof courses[number]; compact?: boolean }) {
  const Icon = course.icon;
  return <article className="group flex h-full flex-col border-t border-[#c9c9bf] pt-5">
    <div className="mb-8 flex items-start justify-between">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eae2d3] text-[#bb604d]"><Icon size={22} strokeWidth={1.7} /></span>
      <span className="font-mono text-xs text-[#8a9299]">{course.number}</span>
    </div>
    <h3 className="font-display max-w-[280px] text-[23px] font-extrabold leading-tight tracking-[-.04em] text-[#223650]">{course.title}</h3>
    <p className="mt-3 text-sm leading-6 text-[#687380]">{course.summary}</p>
    {!compact && <div className="mt-5 space-y-2.5">{course.topics.slice(0, 3).map((topic) => <div key={topic} className="flex items-start gap-2 text-[12px] leading-5 text-[#4b5b6a]"><Check size={14} className="mt-0.5 shrink-0 text-[#528170]" />{topic}</div>)}</div>}
    <Link href={`/courses/${course.id}`} className="mt-auto inline-flex items-center gap-2 pt-7 text-[13px] font-bold text-[#b95744]">View Details <ArrowRight className="transition-transform group-hover:translate-x-1" size={15} /></Link>
  </article>;
}

function Home() {
  return <main className="page-enter">
    <section className="relative overflow-hidden bg-[#f1eee4]">
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-6 px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:grid-cols-[1.03fr_.97fr] lg:px-12 lg:pb-20 lg:pt-[4.5rem]">
        <div className="relative z-10 max-w-[620px]">
          <SectionLabel>Purposeful learning, built around you</SectionLabel>
          <h1 className="font-display text-[clamp(3rem,5vw,4.5rem)] font-extrabold leading-[.97] tracking-[-.075em] text-[#223650]">Learn Better.<br />Prepare Smarter.<br /><span className="text-[#2f6fae]">Achieve More.</span></h1>
          <p className="mt-7 max-w-[500px] text-[16px] leading-7 text-[#596675] sm:text-[18px] sm:leading-8">Structured learning, expert guidance and a focused preparation environment designed for ambitious students.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/courses">Explore Courses</ButtonLink>
            <ButtonLink href="/contact" light>Enquire Now</ButtonLink>
          </div>
          <div className="mt-10 flex items-center gap-3 border-t border-[#d8d5ca] pt-5 text-xs font-medium text-[#647080]">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#e1e7dd] text-[#4e7969]"><CheckCircle2 size={16} /></span>
            Student-centred support. Progress without promises.
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[600px] lg:-mr-5 lg:max-w-none">
          <div className="absolute -right-2 top-[10%] h-[70%] w-[70%] rounded-[48%] bg-[#d8ded2] sm:right-4" />
          <div className="relative aspect-[1.12/1] overflow-hidden rounded-[35%_35%_12%_12%] border border-[#d8d6ca] bg-[#e2e2d9] shadow-[0_22px_60px_rgba(40,54,67,.10)]">
            <img src={studyIllustration} alt="Original editorial illustration of a student studying at a desk, surrounded by ideas and open pages" className="h-full w-full object-cover" />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-white/60 bg-[#f8f6ef]/90 px-4 py-3 shadow-sm backdrop-blur-sm sm:bottom-7 sm:left-7">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#243852] text-white"><NotebookPen size={17} /></span>
              <div><div className="text-[10px] font-bold uppercase tracking-[.13em] text-[#a45141]">A thoughtful way forward</div><div className="mt-1 text-xs font-semibold text-[#263950]">Learn · Practise · Reflect</div></div>
            </div>
          </div>
          <div className="absolute -right-1 top-[14%] grid h-14 w-14 place-items-center rounded-full border border-[#c6c5b9] bg-[#f5f0e4] text-[#b85a47] sm:right-0 sm:h-[68px] sm:w-[68px]"><Sparkles size={22} /></div>
        </div>
      </div>
      <a href="#approach" className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#7c858d] lg:flex">Scroll to explore <ArrowDown size={13} /></a>
    </section>

    <section aria-label="Learning commitments" className="border-y border-[#d8d6ca] bg-[#faf8f2]">
      <div className="mx-auto grid max-w-[1240px] gap-0 px-5 py-3 sm:px-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
        {[
          { icon: GraduationCap, label: 'Expert-led learning' },
          { icon: BookOpen, label: 'Structured curriculum' },
          { icon: FileText, label: 'Regular assessments' },
          { icon: MessageCircle, label: 'Student-focused support' },
        ].map(({ icon: Icon, label }) => <div key={label} className="flex items-center gap-3 border-b border-[#e5e2d8] py-4 text-sm font-semibold text-[#465568] last:border-b-0 sm:px-3 sm:odd:border-r lg:border-b-0 lg:border-r lg:py-5 lg:last:border-r-0">
          <Icon size={18} aria-hidden="true" className="shrink-0 text-[#3478b9]" />
          <span>{label}</span>
        </div>)}
      </div>
    </section>

    <section id="approach" className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.85fr_1.15fr] lg:gap-20 lg:px-12 lg:py-28">
      <div><SectionLabel>The Elevate approach</SectionLabel><h2 className="font-display max-w-md text-4xl font-extrabold leading-[1.08] tracking-[-.055em] text-[#223650] sm:text-5xl">Good preparation changes how learning feels.</h2></div>
      <div className="grid gap-8 sm:grid-cols-2">
        {[{ icon: Compass, title: 'A clear route', copy: 'Break big goals into manageable learning steps, with a plan students can understand and follow.' }, { icon: Focus, title: 'Deeper understanding', copy: 'Make concepts make sense before moving on to speed, strategy or exam technique.' }, { icon: MessageCircle, title: 'Room to ask', copy: 'Create space for questions, misconceptions and the confidence that comes from being heard.' }, { icon: PenLine, title: 'Practice with purpose', copy: 'Use thoughtful practice and feedback to spot what is working and what needs attention.' }].map(({ icon: Icon, title, copy }, i) => <article key={title} className="border-t border-[#d1d0c7] pt-5"><div className="flex items-center justify-between"><Icon size={20} className="text-[#bd5d49]" /><span className="font-mono text-[10px] text-[#a4a7a2]">0{i + 1}</span></div><h3 className="mt-5 font-display text-xl font-extrabold tracking-[-.03em] text-[#243852]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#67717c]">{copy}</p></article>)}
      </div>
    </section>

    <section className="bg-[#e6e8df]">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div><SectionLabel>Learning pathways</SectionLabel><h2 className="font-display max-w-xl text-4xl font-extrabold leading-tight tracking-[-.05em] text-[#223650] sm:text-5xl">A strong start for the next step.</h2></div>
          <Link href="/courses" className="inline-flex items-center gap-2 text-sm font-bold text-[#b95744]">View all course details <ArrowUpRight size={16} /></Link>
        </div>
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4">{courses.map((course) => <CourseCard key={course.id} course={course} compact />)}</div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-[#223650] text-[#f8f4e9]">
      <div className="absolute -right-20 -top-40 h-[450px] w-[450px] rounded-full border border-white/10" /><div className="absolute -right-2 -top-24 h-[310px] w-[310px] rounded-full border border-white/10" />
      <div className="relative mx-auto grid max-w-[1240px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-12 lg:py-24">
        <div><SectionLabel light>Focused on student progress</SectionLabel><h2 className="font-display max-w-lg text-4xl font-extrabold leading-[1.08] tracking-[-.055em] sm:text-5xl">Progress is more than a score.</h2><p className="mt-5 max-w-lg text-sm leading-7 text-[#c7d0d5]">We care about the learning habits and understanding that make progress meaningful and sustainable.</p><p className="mt-5 text-[10px] font-bold uppercase tracking-[.14em] text-[#dc9a83]">Illustrative concept · not a report of real student outcomes</p></div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[['Clarity', 'Concepts feel connected, not memorised in isolation.'], ['Consistency', 'A steady routine makes preparation less overwhelming.'], ['Confidence', 'Students know what they understand and what to ask next.'], ['Independence', 'Better strategies help learners take ownership of study.']].map(([title, text], i) => <article key={title} className={`border border-white/15 bg-white/[.045] p-5 ${i === 1 || i === 2 ? 'sm:translate-y-5' : ''}`}><span className="text-[10px] font-mono text-[#dd9a83]">0{i + 1}</span><h3 className="mt-5 font-display text-xl font-bold">{title}</h3><p className="mt-2 text-xs leading-5 text-[#c0cbd0]">{text}</p></article>)}
        </div>
      </div>
    </section>
    <ClosingCta />
  </main>;
}

function ClosingCta() {
  return <section className="mx-auto flex max-w-[1240px] flex-col gap-6 px-5 py-16 sm:px-8 sm:py-20 md:flex-row md:items-center md:justify-between lg:px-12 lg:py-24"><div><SectionLabel>Your next step</SectionLabel><h2 className="font-display max-w-2xl text-3xl font-extrabold tracking-[-.05em] text-[#223650] sm:text-4xl">A conversation can be a good place to begin.</h2></div><ButtonLink href="/contact">Enquire Now</ButtonLink></section>;
}

function About() {
  return <main className="page-enter">
    <PageIntro eyebrow="About Elevate" title={<>Make room for <span className="text-[#bd5d49]">better learning.</span></>} copy="Elevate Academy is a fictional coaching institute concept for students who want thoughtful guidance, stronger understanding and a more intentional approach to exam preparation." />
    <section className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:gap-24 lg:px-12 lg:py-28">
      <div><SectionLabel>Our mission</SectionLabel><h2 className="font-display text-4xl font-extrabold leading-[1.08] tracking-[-.055em] text-[#223650] sm:text-5xl">Help every learner find their way into the work.</h2></div>
      <div className="space-y-5 text-[15px] leading-8 text-[#5c6874]"><p>Ambition matters. So does having a clear path through the hard parts. Our concept for Elevate is grounded in teaching that makes space for questions, shows how ideas connect and gives students useful ways to practise.</p><p>We believe confidence grows from understanding—not from empty promises. That means helping a student see the next step, make sense of feedback and build study habits that can last beyond a single exam.</p><div className="border-l-2 border-[#c65e49] bg-[#ece9df] px-5 py-4 font-display text-lg font-bold leading-7 text-[#273b52]">“Teach for understanding. Prepare with purpose. Keep the student at the centre.”</div></div>
    </section>
    <section className="bg-[#223650] text-[#f8f4e9]">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <SectionLabel light>Teaching philosophy</SectionLabel><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><h2 className="font-display max-w-lg text-4xl font-extrabold leading-tight tracking-[-.05em] sm:text-5xl">Patient when it’s new. Precise when it matters.</h2>
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">{[{ icon: BookOpen, title: 'Start with why', text: 'Anchor new ideas in clear explanations and useful examples.' }, { icon: MessageCircle, title: 'Invite questions', text: 'Treat curiosity as part of learning, not a detour from it.' }, { icon: FileText, title: 'Practise deliberately', text: 'Move from guided examples to independent application.' }, { icon: ShieldCheck, title: 'Reflect honestly', text: 'Use feedback to choose a practical next step.' }].map(({ icon: Icon, title, text }) => <article key={title} className="border-t border-white/20 pt-5"><Icon size={20} className="text-[#dc9a83]" /><h3 className="mt-4 font-display text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#c4cdd2]">{text}</p></article>)}</div>
        </div>
      </div>
    </section>
    <section className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-24">
      <div><SectionLabel>A considered environment</SectionLabel><h2 className="font-display max-w-lg text-4xl font-extrabold leading-tight tracking-[-.055em] text-[#223650]">Serious about learning. Human about the learner.</h2></div>
      <div className="grid grid-cols-2 gap-3">{[{ icon: GraduationCap, title: 'Individual attention', text: 'Notice where each learner is starting from.' }, { icon: Target, title: 'Clear objectives', text: 'Make each session purposeful and focused.' }, { icon: PanelTop, title: 'Structured learning', text: 'Build understanding in a thoughtful sequence.' }, { icon: Sparkles, title: 'Room to grow', text: 'Value curiosity and steady improvement.' }].map(({ icon: Icon, title, text }) => <div key={title} className="min-h-40 bg-[#e8e7de] p-4 sm:p-6"><Icon size={20} className="text-[#bd5d49]" /><h3 className="mt-6 text-sm font-bold text-[#243852]">{title}</h3><p className="mt-2 text-xs leading-5 text-[#687380]">{text}</p></div>)}</div>
    </section>
    <div className="mx-auto max-w-[1240px] px-5 pb-16 sm:px-8 lg:px-12"><div className="border border-[#d9d8cf] bg-[#f1eee4] p-5 text-xs leading-6 text-[#66717d] sm:p-6"><strong className="text-[#233850]">Concept notice.</strong> Elevate Academy is fictional. This site does not represent an operating institute, verified educators, real student outcomes or an active admissions programme.</div></div>
    <ClosingCta />
  </main>;
}

function Courses() {
  return <main className="page-enter">
    <PageIntro eyebrow="Learning pathways" title={<>Find a direction.<br /><span className="text-[#bd5d49]">Build understanding.</span></>} copy="Explore fictional programme concepts designed around academic foundations, competitive exam preparation and the study skills that support both." />
    <section className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mb-12 grid gap-5 md:grid-cols-[1fr_auto] md:items-end"><div><SectionLabel>Programme concepts</SectionLabel><h2 className="font-display max-w-2xl text-3xl font-extrabold tracking-[-.05em] text-[#223650] sm:text-4xl">A focused starting point for different goals.</h2></div><p className="max-w-sm text-xs leading-5 text-[#77808a]">Programme names and details are illustrative only. No courses are currently offered through this concept website.</p></div>
      <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">{courses.map((course) => <CourseCard key={course.id} course={course} />)}</div>
    </section>
    <section className="bg-[#e6e8df]"><div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.9fr_1.1fr] lg:px-12 lg:py-24"><div><SectionLabel>What learning can include</SectionLabel><h2 className="font-display max-w-lg text-4xl font-extrabold leading-tight tracking-[-.05em] text-[#223650]">A rhythm built to support real understanding.</h2></div><div className="space-y-0">{[['01', 'Understand', 'Make the underlying ideas clear before applying them.'], ['02', 'Practise', 'Strengthen understanding through well-chosen questions.'], ['03', 'Review', 'Notice patterns, revisit gaps and make the next plan.']].map(([n, title, copy]) => <div key={n} className="grid grid-cols-[50px_1fr] gap-4 border-t border-[#c8cbc1] py-5"><span className="font-mono text-xs text-[#bd5d49]">{n}</span><div><h3 className="font-display text-lg font-extrabold text-[#243852]">{title}</h3><p className="mt-1 text-sm text-[#67717c]">{copy}</p></div></div>)}</div></div></section>
    <ClosingCta />
  </main>;
}

function CourseDetails() {
  const [, params] = useRoute('/courses/:courseId');
  const course = courses.find((item) => item.id === params?.courseId);

  if (!course) return <NotFound />;
  const Icon = course.icon;

  return <main className="page-enter">
    <PageIntro eyebrow="Course detail · Demo concept" title={<>{course.title}</>} copy={course.summary} />
    <section className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-12 lg:py-24">
      <div>
        <SectionLabel>Who it is for</SectionLabel>
        <div className="flex items-start gap-4 border-t border-[#d1d0c7] pt-5">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#eae2d3] text-[#bb604d]"><Icon size={22} /></span>
          <p className="text-sm leading-7 text-[#586575]">{course.audience}</p>
        </div>
        <div className="mt-8 border-l-2 border-[#c65e49] bg-[#ece9df] px-5 py-4 text-xs leading-6 text-[#66717d]">
          <strong className="text-[#233850]">Concept notice.</strong> This is a fictional programme example. No course or enrolment is currently offered through this website.
        </div>
      </div>
      <div>
        <SectionLabel>Learning features</SectionLabel>
        <div className="space-y-0 border-t border-[#d1d0c7]">
          {course.topics.map((topic, index) => <div key={topic} className="grid grid-cols-[42px_1fr] gap-4 border-b border-[#deddd4] py-5">
            <span className="font-mono text-xs text-[#bb604d]">0{index + 1}</span>
            <p className="text-sm font-semibold leading-6 text-[#465568]">{topic}</p>
          </div>)}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <ButtonLink href={`/contact?course=${course.id}`}>Enquire Now</ButtonLink>
          <Link href="/courses" className="inline-flex items-center gap-2 text-sm font-bold text-[#b95744]"><ArrowRight className="rotate-180" size={16} /> All courses</Link>
        </div>
      </div>
    </section>
  </main>;
}

function Achievements() {
  const steps = [
    { icon: FileText, title: 'Regular assessments', text: 'Check understanding at useful moments with practice designed to guide learning.' },
    { icon: BookOpen, title: 'Performance tracking', text: 'Notice patterns across topics and identify where focused revision may help.' },
    { icon: MessageCircle, title: 'Doubt-solving sessions', text: 'Make room to revisit difficult ideas and work through questions with guidance.' },
    { icon: Target, title: 'Personalized guidance', text: 'Shape practical next steps around each learner’s goals and areas for development.' },
  ];
  return <main className="page-enter">
    <PageIntro eyebrow="Student progress · Demo concept" title={<>Focused on Student<br /><span className="text-[#2f6fae]">Progress</span></>} copy="This concept website does not claim real ranks, results or student outcomes. Instead, explore the learning practices designed to make progress visible and meaningful." />
    <section className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><SectionLabel>A progress framework</SectionLabel><h2 className="font-display max-w-sm text-4xl font-extrabold leading-tight tracking-[-.055em] text-[#223650]">Make each next step easier to see.</h2><p className="mt-5 text-sm leading-7 text-[#687380]">Progress is not one number. It can show up in a question answered independently, a strategy that starts to stick or a learner who knows how to plan their next revision.</p><div className="mt-7 inline-flex items-center gap-2 border border-[#d5d2c8] bg-[#f0ede4] px-3 py-2 text-[10px] font-bold uppercase tracking-[.12em] text-[#8b5b4f]"><Sparkles size={14} /> Illustrative concept · not real results</div></div>
          <div className="relative space-y-0 border-l border-[#c8cbc1] pl-7 sm:pl-10">{steps.map(({ icon: Icon, title, text }, i) => <article key={title} className="relative grid gap-4 border-b border-[#deddd4] py-5 sm:grid-cols-[52px_1fr] sm:gap-6"><span className="absolute -left-[35px] top-6 grid h-4 w-4 place-items-center rounded-full border-[3px] border-[#f8f6ef] bg-[#bd5d49] sm:-left-[48px]" /><span className="font-mono text-xs text-[#bd5d49]">0{i + 1}</span><div><div className="flex items-center gap-3"><Icon size={19} className="text-[#bd5d49]" /><h3 className="font-display text-xl font-extrabold text-[#243852]">{title}</h3></div><p className="mt-2 text-sm leading-6 text-[#67717c]">{text}</p></div></article>)}</div>
      </div>
    </section>
    <section className="bg-[#223650] text-[#f8f4e9]"><div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[1fr_auto] md:items-center lg:px-12"><div><SectionLabel light>What we value</SectionLabel><h2 className="font-display max-w-xl text-3xl font-extrabold tracking-[-.05em] sm:text-4xl">Effort is important. So is knowing where it goes.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-[#c2cbd1]">Focused guidance, honest reflection and consistent practice help students make sense of their own development.</p></div><Link href="/about" className="inline-flex items-center gap-2 text-sm font-bold text-[#e5a18a]">Our teaching philosophy <ArrowRight size={16} /></Link></div></section>
    <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 lg:px-12"><p className="border-l-2 border-[#bd5d49] pl-4 text-xs leading-6 text-[#77808a]">No pass rates, scores, student counts, rankings or awards are presented here. All content describes a fictional concept rather than verified performance.</p></div>
    <ClosingCta />
  </main>;
}

function Contact() {
  const initialCourse = new URLSearchParams(window.location.search).get('course') ?? '';
  const [success, setSuccess] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [values, setValues] = useState({ name: '', email: '', phone: '', course: initialCourse, message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const update = (field: keyof typeof values, value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }));
    setSuccess(false);
    if (attempted) setErrors((previous) => ({ ...previous, [field]: '' }));
  };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAttempted(true);
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!values.email.trim()) next.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Enter an email address in a valid format.';
    if (values.phone && !/^[+\d\s().-]{7,}$/.test(values.phone)) next.phone = 'Enter a valid phone number or leave this field blank.';
    if (!values.course) next.course = 'Please choose a course of interest.';
    if (!values.message.trim()) next.message = 'Please add a short message.';
    setErrors(next);
    if (Object.keys(next).length === 0) setSuccess(true);
  };
  const fieldClass = 'mt-2 w-full rounded-xl border border-[#d4d4ca] bg-[#fbfaf6] px-4 py-3.5 text-sm text-[#243852] placeholder:text-[#9ba1a2] focus:border-[#bd5d49] focus:outline-none focus:ring-2 focus:ring-[#bd5d49]/15';
  return <main className="page-enter">
    <PageIntro eyebrow="Get in touch" title={<>Let’s talk about <span className="text-[#bd5d49]">what’s next.</span></>} copy="Share what you are working towards and what kind of support you are looking for. This fictional concept form demonstrates the enquiry experience; it will not send or store your information." />
    <section className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[.72fr_1.28fr] lg:gap-20 lg:px-12 lg:py-24">
      <aside className="lg:pt-2"><SectionLabel>A useful first step</SectionLabel><h2 className="font-display max-w-sm text-3xl font-extrabold leading-tight tracking-[-.05em] text-[#223650] sm:text-4xl">Tell us a little about your goals.</h2><p className="mt-5 max-w-sm text-sm leading-7 text-[#687380]">Whether you have a course in mind or are still exploring, a few details help frame the conversation.</p>
        <div className="mt-9 space-y-5 border-t border-[#d8d6cc] pt-6">{[{ icon: MessageCircle, title: 'Start with a question', text: 'There is no need to have everything figured out.' }, { icon: Compass, title: 'Explore the options', text: 'Course details are concept examples, not active enrolment.' }, { icon: ShieldCheck, title: 'Demo-only form', text: 'Your details stay in this page and are not submitted.' }].map(({ icon: Icon, title, text }) => <div key={title} className="flex gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#e8e6dc] text-[#bd5d49]"><Icon size={18} /></span><div><h3 className="text-sm font-bold text-[#243852]">{title}</h3><p className="mt-1 text-xs leading-5 text-[#74808a]">{text}</p></div></div>)}</div>
      </aside>
      <form onSubmit={submit} noValidate className="border border-[#deddd4] bg-[#f3f1e9] p-5 sm:p-8 lg:p-10">
        <div className="mb-7 border-b border-[#d8d6cc] pb-5"><div className="text-[10px] font-bold uppercase tracking-[.18em] text-[#bd5d49]">Enquiry form</div><p className="mt-2 text-xs text-[#707b83]">Fields marked with * are required.</p></div>
        <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
          <Field id="name" label="Name" required error={errors.name}><input id="name" name="name" autoComplete="name" className={fieldClass} placeholder="Your name" value={values.name} onChange={(e) => update('name', e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} /></Field>
          <Field id="email" label="Email" required error={errors.email}><input id="email" name="email" type="email" autoComplete="email" className={fieldClass} placeholder="you@example.com" value={values.email} onChange={(e) => update('email', e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} /></Field>
          <Field id="phone" label="Phone (optional)" error={errors.phone}><input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} placeholder="Your phone number" value={values.phone} onChange={(e) => update('phone', e.target.value)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined} /></Field>
          <Field id="course" label="Course Interested In" required error={errors.course}><select id="course" name="course" className={`${fieldClass} appearance-none`} value={values.course} onChange={(e) => update('course', e.target.value)} aria-invalid={!!errors.course} aria-describedby={errors.course ? 'course-error' : undefined}><option value="">Choose an area</option>{courses.map((course) => <option key={course.id} value={course.id}>{course.title}</option>)}<option value="not-sure">I’m still exploring</option></select></Field>
          <div className="sm:col-span-2"><Field id="message" label="Message" required error={errors.message}><textarea id="message" name="message" rows={4} className={`${fieldClass} resize-y`} placeholder="What would you like support with?" value={values.message} onChange={(e) => update('message', e.target.value)} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} /></Field></div>
        </div>
        <div aria-live="polite" className="mt-5">{success && <div className="flex items-start gap-3 border border-[#91b4a1] bg-[#e5eee6] p-4 text-sm text-[#305e4c]"><CheckCircle2 size={19} className="mt-0.5 shrink-0" /><div><strong className="block">Thanks for sharing.</strong><span className="mt-1 block text-xs leading-5">Your details were not sent or stored. This is an on-page demo confirmation for the Elevate Academy concept.</span></div></div>}</div>
        <button type="submit" className="button-lift mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#3478b9] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#285f97] sm:w-auto">Submit enquiry <ArrowRight size={16} /></button>
        <p className="mt-4 max-w-lg text-[10px] leading-5 text-[#858d91]">Demo / Concept Website — this form is not connected to an institute or enquiry service.</p>
      </form>
    </section>
  </main>;
}

function Field({ id, label, required, error, children }: { id: string; label: string; required?: boolean; error?: string; children: ReactNode }) {
  return <div><label htmlFor={id} className="text-xs font-bold text-[#293d53]">{label}{required && <span aria-hidden="true" className="ml-1 text-[#b95744]">*</span>}</label>{children}{error && <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-semibold text-[#a13f35]">{error}</p>}</div>;
}

function NotFound() {
  return <main className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-start justify-center px-5 py-20 sm:px-8"><SectionLabel>Page not found</SectionLabel><h1 className="font-display text-5xl font-extrabold tracking-[-.06em] text-[#223650]">This isn’t the right path.</h1><p className="mt-4 text-[#687380]">The page may have moved. Let’s get you back to the starting point.</p><div className="mt-7"><ButtonLink href="/">Return home</ButtonLink></div></main>;
}

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    const pathname = location.split(/[?#]/, 1)[0];
    const course = courses.find((item) => pathname === `/courses/${item.id}`);
    const pages: Record<string, { title: string; description: string }> = {
      '/': {
        title: 'Elevate Academy | Learn Better. Prepare Smarter.',
        description: 'A modern concept website for a fictional coaching institute focused on structured learning, thoughtful preparation and student progress.',
      },
      '/about': {
        title: 'About | Elevate Academy',
        description: 'Discover the fictional Elevate Academy concept, its student-centered mission, teaching approach and learning philosophy.',
      },
      '/courses': {
        title: 'Courses | Elevate Academy',
        description: 'Explore fictional course concepts for academic foundations, competitive exam preparation, senior secondary learning and focused revision.',
      },
      '/results': {
        title: 'Student Progress | Elevate Academy',
        description: 'Learn how the Elevate Academy concept supports student progress through assessments, performance tracking, doubt-solving and guidance.',
      },
      '/achievements': {
        title: 'Student Progress | Elevate Academy',
        description: 'Learn how the Elevate Academy concept supports student progress through assessments, performance tracking, doubt-solving and guidance.',
      },
      '/contact': {
        title: 'Enquire | Elevate Academy',
        description: 'Share a demo enquiry with the fictional Elevate Academy concept. The form confirms on this page and does not send or store information.',
      },
    };
    const metadata = course
      ? {
          title: `${course.title} | Courses | Elevate Academy`,
          description: `${course.summary} This is a fictional course concept, not an active programme.`,
        }
      : pages[pathname] ?? {
          title: 'Page Not Found | Elevate Academy',
          description: 'The requested page could not be found on this fictional coaching institute concept website.',
        };

    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', metadata.description);
  }, [location]);

  return <><Header /><Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/courses" component={Courses} />
    <Route path="/courses/:courseId" component={CourseDetails} />
    <Route path="/achievements" component={Achievements} />
    <Route path="/results" component={Achievements} />
    <Route path="/contact" component={Contact} />
    <Route component={NotFound} />
  </Switch><Footer /></>;
}

function App() {
  return <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter>;
}

export default App;