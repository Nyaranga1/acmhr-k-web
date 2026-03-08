import { useState, useEffect } from 'react'
import logo from './assets/logo.png'

/* ─────────────────────────────────────────
   🚧 MAINTENANCE MODE
   Set to false when ready to go live
───────────────────────────────────────── */
const MAINTENANCE_MODE = true

function MaintenancePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #001219 0%, #005F73 60%, #0A9396 100%)' }}>
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(10,147,150,0.15)_0%,transparent_70%)] pointer-events-none"/>

      <div className="relative max-w-lg mx-auto">
        {/* Logo */}
        <img src={logo} alt="ACMHR-K" className="w-24 h-24 rounded-full object-contain mx-auto mb-8 opacity-90" />

        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-teal-light text-[0.72rem] font-bold tracking-widest uppercase px-5 py-1.5 rounded-full mb-7">
          🚧 Under Maintenance
        </span>

        {/* Heading */}
        <h1 className="font-serif text-3xl md:text-5xl text-white font-normal leading-tight mb-4">
          ACMHR-K Website<br />
          <span className="text-teal-light">Under Maintenance</span>
        </h1>

        {/* Message */}
        <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto">
          We are updating our <strong className="text-white">2026 Training Program</strong> materials and making improvements to the site. Please check back shortly.
        </p>

        {/* Contact card */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-8 py-6 mb-8">
          <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-3">For urgent inquiries</p>
          <a href="mailto:info@acmhr-k.org" className="text-teal-light text-lg font-semibold hover:text-white transition-colors">
            info@acmhr-k.org
          </a>
          <div className="mt-2 text-white/50 text-sm">+254 702 551785</div>
        </div>

        <a href="https://www.facebook.com/share/1CgRtLCPQ9/" target="_blank" rel="noreferrer"
  className="bg-white/10 hover:bg-teal/40 border border-white/15 text-white/60 hover:text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200">
  Facebook
</a>
<a href="https://www.linkedin.com/company/the-cardio-metabolic-care-and-research-foundation-of-kenya/" target="_blank" rel="noreferrer"
  className="bg-white/10 hover:bg-teal/40 border border-white/15 text-white/60 hover:text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200">
  LinkedIn
</a>
      

        {/* Footer note */}
        <p className="text-white/25 text-xs mt-10">
          © {new Date().getFullYear()} ACMHR-K · Alliance for Cardio-Metabolic Health and Research · Kenya
        </p>
      </div>
    </div>
  )
}

const NAV_LINKS = [
  { label: 'Home',        id: 'home' },
  { label: 'About',       id: 'about' },
  { label: 'Team',        id: 'team' },
  { label: 'Research',    id: 'research' },
  { label: 'Governance',  id: 'governance' },
  { label: 'Partnership', id: 'partnership' },
  { label: 'Events',      id: 'events' },
  { label: 'Gallery',     id: 'gallery' },
  { label: 'FAQs',        id: 'faqs' },
  { label: 'Contact',     id: 'contact' },
]

const STATS = [
  { num: '5',   label: 'Board Members' },
  { num: '7',   label: 'Strategic Objectives' },
  { num: '10+', label: 'Regional Partners' },
  { num: '2025',label: 'Year Founded' },
]

const TEAM = [
  { name: 'Dr. Simon Okomo Aloo',  role: 'Chairperson',   detail: 'PhD Candidate, Monash University',              emoji: '👨‍🔬' },
  { name: 'Stephen Nyaranga',      role: 'IT Lead',        detail: 'Asst. Lecturer & Head of IT, Vatel Rwanda',     emoji: 'Stephen' },
  { name: 'Silas Ambundo',         role: 'Treasurer',      detail: 'Teacher, Gititu Secondary School',              emoji: '👨‍💻' },
  { name: 'Monica Nduta',          role: 'Secretary',      detail: 'Nutritionist, Kitui County',                    emoji: '👩‍🏫' },
]

const PROGRAMS = [
  { icon: '🔬', title: 'Interdisciplinary Research',         desc: 'Support and conduct studies that inform national health policy and clinical practices across Kenya.' },
  { icon: '📢', title: 'Public Awareness & Health Literacy', desc: 'Empower communities with knowledge on healthy lifestyles, nutrition, and early screening for cardio-metabolic conditions.' },
  { icon: '⚖️', title: 'Advocacy',                          desc: 'Promote accessible and affordable healthcare services for cardio-metabolic patients nationwide.' },
  { icon: '🎓', title: 'Capacity Building',                  desc: 'Organize workshops, conferences, and professional trainings on cardio-metabolic health for practitioners and researchers.' },
  { icon: '🤝', title: 'Networking & Partnerships',          desc: 'Collaborate with government, academia, and civil society to scale health solutions across Kenya and East Africa.' },
  { icon: '🏘️', title: 'Community Programs',                 desc: 'Implement local projects focused on lifestyle modification, screening, and treatment support at the grassroots level.' },
  { icon: '🌍', title: 'International Collaboration',        desc: 'Build ties with global organizations working on cardio-metabolic health to bring best practices to Kenya.' },
]

const VALUES = [
  { icon: '🎯', title: 'Integrity & Accountability' },
  { icon: '🤝', title: 'Collaboration & Partnership' },
  { icon: '💡', title: 'Innovation & Scientific Excellence' },
  { icon: '⚖️', title: 'Equity & Inclusion' },
  { icon: '🌱', title: 'Community Empowerment' },
]

const MEMBERSHIP_TYPES = [
  { type: 'Ordinary Members',  desc: "Individuals committed to ACMHR-K's mission and values." },
  { type: 'Corporate Members', desc: 'Institutions or organizations supporting ACMHR-K programs and research.' },
  { type: 'Honorary Members',  desc: 'Distinguished individuals recognized for contributions to health and research.' },
]

const PARTNERS = [
  'Karatina University', 'County Departments of Health',
  'Monash University Research Partners', 'Local & International NGOs',
]

const FAQS = [
  { q: "What is ACMHR-K's main goal?",         a: "To promote prevention, early detection, and management of cardio-metabolic diseases in Kenya through research, education, and advocacy." },
  { q: "Who can become a member?",              a: "Any individual or organization aligned with ACMHR-K's mission of advancing cardio-metabolic health." },
  { q: "How do I apply for membership?",        a: "Submit an application to the Secretariat with a proposer and seconder from existing members (Clause 6.4 of the Constitution)." },
  { q: "Are there membership fees?",            a: "Details of fees, if applicable, are set by the Board and communicated to members annually." },
  { q: "Can students or volunteers join?",      a: "Yes. ACMHR-K actively encourages student and volunteer engagement in research and community programs." },
  { q: "What types of partnerships do you accept?", a: "Academic, clinical, NGO, corporate, and government collaborations that advance cardio-metabolic health." },
  { q: "How often are general meetings held?",  a: "Once per year (Annual General Meeting) and as needed for special meetings as per the Constitution." },
  { q: "How can I support ACMHR-K?",            a: "Join as a member, partner in a project, volunteer for outreach, or donate to support research and community programs." },
]

const TRAINING_SCHEDULE = [
  { day: 'Day 1', title: 'Burden, Trends, and Trajectories of Cardiometabolic Illnesses in Kenya', focus: 'Current prevalence, population risk patterns, and future projections' },
  { day: 'Day 2', title: 'The Gut–Heart Connection: Microbiota and Cardiometabolic Health', focus: 'Role of gut microbiota in obesity, diabetes, and cardiovascular diseases' },
  { day: 'Day 3', title: 'Nutrition and Metabolic Wellness: From Food to Function', focus: 'Functional foods, dietary interventions, and nutritional modulation of metabolic health' },
  { day: 'Day 4', title: 'Herbal Medicine and Metabolic Health', focus: 'Leveraging African medicinal plants to manage metabolic conditions' },
  { day: 'Day 5', title: 'Lipids and Cardiovascular Risk', focus: 'Lipid dysregulation in cardiovascular diseases' },
  { day: 'Day 6', title: 'Translating Research into Policy and Practice', focus: 'Policy dialogue and innovation for improved cardiometabolic outcomes' },
]

const PARTICIPANTS = [
  'Aurelle', 'Hajara', 'Jeremiah', 'Jodelle', 'Ramadhani', 'Regis', 'Richard', 'Stephen',
]

/* ─── ANNOUNCEMENT BAR ─── */
function AnnouncementBar() {
  return (
    <div className="bg-teal-dark text-white text-center py-2.5 px-4 text-xs font-medium tracking-wide z-50 relative">
      🎓 ACMHR-K 2026 Ambassador Training Program Sessions: Feb 7 – 28, 2026 —{' '}
      <a href="#events" className="text-gold font-bold hover:underline ml-1">View Program →</a>
    </div>
  )
}

/* ─── NAVBAR ─── */
function Navbar({ active, setActive }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActive(id)
  }

  return (
    <nav className={`sticky top-0 z-40 bg-white/97 backdrop-blur-md border-b border-black/[0.07] transition-shadow duration-200 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[70px]">
        <button onClick={() => scrollTo('home')} className="flex items-center gap-3 group">
          <img src={logo} alt="ACMHR-K Logo" className="w-11 h-11 rounded-full object-contain" />
          <div className="text-left leading-tight">
            <div className="font-serif text-lg text-teal-dark leading-none">ACMHR-K</div>
            <div className="text-[0.62rem] text-gray-400 tracking-wide">Alliance for CMH & Research · Kenya</div>
          </div>
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`px-3 py-1.5 rounded-md text-[0.82rem] font-medium transition-all duration-150 ${
                  active === id ? 'text-teal bg-teal/10' : 'text-gray-700 hover:text-teal hover:bg-teal/7'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button onClick={() => scrollTo('contact')} className="bg-teal text-white px-5 py-2 rounded-lg text-[0.82rem] font-semibold transition-all duration-150 hover:bg-teal-dark hover:-translate-y-0.5">
            Join Us
          </button>
        </div>

        <button className="lg:hidden flex flex-col gap-1.5 p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-navy transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}/>
          <span className={`block w-6 h-0.5 bg-navy transition-all ${open ? 'opacity-0' : ''}`}/>
          <span className={`block w-6 h-0.5 bg-navy transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}/>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-black/[0.07] px-6 py-4 flex flex-col gap-1 shadow-lg">
          {NAV_LINKS.map(({ label, id }) => (
            <button key={id} onClick={() => scrollTo(id)} className="text-left px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:text-teal hover:bg-teal/7 transition-colors">
              {label}
            </button>
          ))}
          <button onClick={() => scrollTo('contact')} className="mt-2 bg-teal text-white px-4 py-2.5 rounded-lg text-sm font-semibold">Join Us</button>
        </div>
      )}
    </nav>
  )
}

/* ─── HERO ─── */
function Hero({ setActive }) {
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setActive(id) }
  return (
    <section id="home" className="min-h-[88vh] flex items-center justify-center text-center px-6 py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgba(0,18,25,0.90) 0%, rgba(0,95,115,0.70) 55%, rgba(10,147,150,0.50) 100%), url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1800&q=80") center/cover no-repeat' }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(10,147,150,0.12)_0%,transparent_60%)] pointer-events-none"/>
      <div className="relative max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-teal-light text-[0.75rem] font-bold tracking-widest uppercase px-5 py-1.5 rounded-full mb-7">
          🇰🇪 Registered Non-Profit · Kenya · Est. 2025
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-white leading-[1.12] mb-6 font-normal">
          Alliance for <em className="not-italic text-teal-light">Cardio-Metabolic</em><br />
          Health and Research<br />
          <span className="text-3xl md:text-4xl">Kenya (ACMHR-K)</span>
        </h1>
        <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-3 font-light leading-relaxed">
          Championing prevention, research, and advocacy for cardio-metabolic health across Kenya.
        </p>
        <p className="text-white/60 text-sm max-w-lg mx-auto mb-10 font-light">
          Promoting prevention and early detection of cardio-metabolic diseases including diabetes, hypertension, obesity, and cardiovascular conditions.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button onClick={() => scrollTo('contact')} className="btn-primary text-sm px-8 py-3.5">Join Our Network</button>
          <button onClick={() => scrollTo('research')} className="btn-outline-white text-sm px-8 py-3.5">Explore Research →</button>
          <button onClick={() => scrollTo('contact')} className="bg-gold/90 hover:bg-gold text-navy font-bold px-8 py-3.5 rounded-lg text-sm transition-all duration-200 hover:-translate-y-0.5">Partner With Us</button>
        </div>
      </div>
    </section>
  )
}

/* ─── STATS ─── */
function StatsBar() {
  return (
    <div className="bg-navy py-9 px-6 flex flex-wrap justify-center gap-0">
      {STATS.map(({ num, label }, i) => (
        <div key={label} className={`text-center px-10 md:px-14 py-2 ${i < STATS.length - 1 ? 'border-r border-white/10' : ''}`}>
          <div className="font-serif text-[2.2rem] text-teal-light leading-none mb-1.5">{num}</div>
          <div className="text-[0.72rem] text-white/45 uppercase tracking-widest">{label}</div>
        </div>
      ))}
    </div>
  )
}

/* ─── ABOUT ─── */
function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#f4f9f9]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-full h-[400px] rounded-2xl bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center overflow-hidden">
              <img src={logo} alt="ACMHR-K" className="w-52 h-52 object-contain opacity-30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-8">
                <div className="font-serif text-2xl mb-3 font-normal">Est. 2nd September 2025</div>
                <div className="text-white/75 text-sm leading-relaxed">Registered under the Non-Governmental Organizations Coordination Act of 1990</div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-gold rounded-2xl px-6 py-4 shadow-xl text-center">
              <div className="font-serif text-2xl text-navy leading-none">NGO</div>
              <div className="text-[0.65rem] text-navy/70 font-bold uppercase tracking-wider mt-1">Registered & Accredited</div>
            </div>
          </div>
          <div>
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title">A National Platform<br/>for Health Action</h2>
            <div className="bg-teal/8 border-l-4 border-teal rounded-r-xl px-5 py-4 mb-5">
              <p className="font-serif text-lg text-teal-dark italic font-normal leading-snug">"A Kenya free from preventable cardio-metabolic diseases."</p>
              <p className="text-xs text-gray-400 mt-1 font-semibold uppercase tracking-wide">Our Vision</p>
            </div>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">ACMHR-K is a national non-governmental organization dedicated to promoting research, awareness, and advocacy for cardio-metabolic health in Kenya.</p>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed"><strong className="text-navy font-semibold">Our Mission:</strong> To promote prevention, research, and accessible healthcare for cardio-metabolic wellness in Kenya and beyond.</p>
            <div className="space-y-3">
              {VALUES.map(({ icon, title }) => (
                <div key={title} className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-teal-light/30 rounded-xl flex items-center justify-center text-base flex-shrink-0">{icon}</div>
                  <span className="text-sm font-semibold text-navy">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── TEAM ─── */
function Team() {
  return (
    <section id="team" className="py-24 px-6 bg-navy">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-teal-light text-xs font-bold tracking-widest uppercase mb-3">The People Behind the Work</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-normal mb-3">Board of Directors</h2>
          <p className="text-white/50 text-sm max-w-lg mx-auto">A multidisciplinary board providing strategic leadership and oversight.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {TEAM.map(({ name, role, detail, emoji }) => (
            <div key={name} className="text-center group">
              <div className="w-full aspect-square rounded-full bg-gradient-to-br from-teal-dark to-teal mx-auto mb-4 flex items-center justify-center text-4xl border-3 border-teal-light/20 group-hover:border-teal-light/50 transition-all duration-300">
                {emoji}
              </div>
              <h4 className="font-serif text-white text-sm font-normal mb-1 leading-tight">{name}</h4>
              <div className="text-teal-light text-[0.68rem] font-bold uppercase tracking-wider mb-1">{role}</div>
              <div className="text-white/40 text-[0.7rem] leading-tight">{detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── RESEARCH ─── */
function Research() {
  return (
    <section id="research" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <span className="section-tag">What We Do</span>
        <h2 className="section-title">Research & Programs</h2>
        <p className="text-gray-400 text-sm max-w-xl mb-12 leading-relaxed">Our work is guided by 7 strategic objectives spanning prevention, research, digital health, and community engagement.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROGRAMS.map(({ icon, title, desc }, i) => (
            <div key={title} className="card group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal to-teal-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl"/>
              <div className="w-12 h-12 bg-[#f4f9f9] rounded-xl flex items-center justify-center text-2xl mb-5">{icon}</div>
              <div className="text-[0.65rem] text-teal font-bold uppercase tracking-widest mb-1">Objective {i + 1}</div>
              <h3 className="font-serif text-lg text-navy font-normal mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── GOVERNANCE ─── */
function Governance() {
  return (
    <section id="governance" className="py-24 px-6 bg-[#f4f9f9]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <span className="section-tag">Structure</span>
            <h2 className="section-title">Governance & Membership</h2>
            <div className="space-y-4">
              {[
                { title: 'Board of Directors', desc: 'Provides strategic leadership and oversight (5–9 members). Sets policy direction and ensures accountability.' },
                { title: 'The Secretariat', desc: 'Headed by the CEO, handles day-to-day management, program implementation, and external communications.' },
                { title: 'General Assembly', desc: 'The supreme decision-making body comprising all members. Meets annually for the AGM.' },
              ].map(({ title, desc }, i) => (
                <div key={title} className="flex gap-4 items-start bg-white rounded-xl p-5 border border-black/[0.05] shadow-sm">
                  <div className="w-9 h-9 bg-teal rounded-xl text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</div>
                  <div>
                    <h4 className="text-sm font-bold text-navy mb-1">{title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="section-tag">Join ACMHR-K</span>
            <h3 className="font-serif text-2xl text-navy font-normal mb-6">Membership Categories</h3>
            <div className="space-y-4 mb-8">
              {MEMBERSHIP_TYPES.map(({ type, desc }) => (
                <div key={type} className="bg-white rounded-xl p-5 border border-black/[0.05] shadow-sm">
                  <div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-full bg-teal"/><h4 className="text-sm font-bold text-navy">{type}</h4></div>
                  <p className="text-xs text-gray-400 leading-relaxed pl-4">{desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-teal rounded-2xl p-6 text-white">
              <h4 className="font-serif text-lg font-normal mb-2">How to Join</h4>
              <p className="text-white/80 text-xs leading-relaxed mb-4">Interested individuals or institutions can apply through the Secretariat. Each application must be proposed and seconded by existing members.</p>
              <ul className="space-y-1.5 text-xs text-white/70">
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> Participate in decision-making & annual meetings</li>
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> Access research, advocacy, and capacity-building programs</li>
                <li className="flex items-center gap-2"><span className="text-gold">✓</span> Promote ACMHR-K's mission and contribute professionally</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── PARTNERSHIP ─── */
function Partnership() {
  return (
    <section id="partnership" className="py-24 px-6 bg-navy">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-teal-light text-xs font-bold tracking-widest uppercase mb-3">Collaborate With Us</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-normal mb-4">Partnership & Network</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {[
            { icon: '📊', title: 'Joint Research & Data Analysis', desc: 'Co-create studies and share data to advance evidence-based health solutions.' },
            { icon: '🏥', title: 'Public Health Outreach & Screenings', desc: 'Partner on community screenings and health education campaigns across Kenya.' },
            { icon: '🎓', title: 'Capacity Building & Exchange', desc: 'Collaborate on professional training, fellowships, and knowledge-sharing programs.' },
            { icon: '📜', title: 'Policy Advocacy & Technical Support', desc: 'Work together to advocate for better cardio-metabolic health policies at national level.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors duration-200">
              <div className="text-2xl mb-3">{icon}</div>
              <h4 className="text-white font-semibold text-sm mb-2">{title}</h4>
              <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h4 className="font-serif text-white text-lg font-normal mb-6 text-center">Current Collaborators</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {PARTNERS.map(p => (
              <span key={p} className="bg-teal/20 text-teal-light border border-teal/20 text-xs font-semibold px-5 py-2 rounded-full">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── EVENTS ─── */
function Events() {
  const [tab, setTab] = useState('overview')

  return (
    <section id="events" className="py-24 px-6 bg-[#f4f9f9]">
      <div className="max-w-5xl mx-auto">
        <span className="section-tag">2026 Program</span>
        <h2 className="section-title">Ambassador Training Program</h2>

        {/* Status banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-6 py-4 mb-10 flex items-center gap-4">
          <span className="text-2xl">🔒</span>
          <div>
            <p className="text-amber-800 font-bold text-sm">Applications are now closed</p>
            <p className="text-amber-700 text-xs mt-0.5">Following a rigorous review, participants have been selected for the 2026 cohort. Schedules and Zoom links will be uploaded here soon.</p>
          </div>
        </div>

        {/* Key info cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: '📅', label: 'Duration', val: 'Feb 7 – 28, 2026' },
            { icon: '💻', label: 'Mode', val: 'Online via Zoom' },
            { icon: '🎓', label: 'Sessions', val: '6 Sessions' },
            { icon: '🏛️', label: 'Graduation', val: 'Nairobi, March 2026' },
          ].map(({ icon, label, val }) => (
            <div key={label} className="bg-white rounded-xl p-5 border border-black/[0.05] shadow-sm text-center">
              <div className="text-2xl mb-2">{icon}</div>
              <div className="text-[0.65rem] text-gray-400 uppercase tracking-widest font-bold mb-1">{label}</div>
              <div className="text-sm font-bold text-navy">{val}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'schedule', label: 'Session Schedule' },
            { id: 'participants', label: 'Participants' },
            { id: 'highlights', label: 'Program Highlights' },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-150 ${
                tab === id ? 'bg-teal text-white' : 'bg-white text-gray-500 border border-gray-200 hover:border-teal hover:text-teal'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tab: Overview */}
        {tab === 'overview' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-7 border border-black/[0.05] shadow-sm">
              <h3 className="font-serif text-xl text-navy font-normal mb-2">About the Program</h3>
              <div className="w-10 h-0.5 bg-teal mb-4"/>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                The ACMHR-K 2026 Ambassador Training Program (1st Edition) aims to enhance the prevention and management of cardiometabolic diseases by building professional capacity across three key pillars: <strong className="text-navy">science, nutrition, and public health.</strong>
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Six interactive sessions will be delivered by leading international and Kenyan experts via Zoom, covering the burden of cardiometabolic diseases in Kenya, health policy, gut microbiota, nutrition, and African medicinal herbs.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Upon completion, participants receive a <strong className="text-navy">Certificate of Completion</strong> and are officially recognized as <strong className="text-navy">ACMHR-K Ambassadors</strong> at a graduation ceremony in Nairobi.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-teal rounded-2xl p-6 text-white">
                <h4 className="font-serif text-lg font-normal mb-3">Theme</h4>
                <p className="text-white/90 text-sm italic leading-relaxed">"Building Capacity for Prevention, Management, Innovation, and Research in Cardiometabolic Health"</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-black/[0.05] shadow-sm">
                <h4 className="font-semibold text-navy text-sm mb-3">Program Highlights</h4>
                <ul className="space-y-2 text-xs text-gray-500">
                  {[
                    'Expert-led live sessions via Zoom',
                    'Interactive discussions & Q&A with speakers',
                    'International research perspectives',
                    'Certificate of Completion & Physical Graduation in Nairobi',
                    'Recognition as ACMHR-K Ambassador',
                    'Possible internet bundle support for selected participants',
                    'FREE — no participant fees',
                  ].map(h => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="text-teal font-bold mt-0.5">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Schedule */}
        {tab === 'schedule' && (
          <div className="bg-white rounded-2xl border border-black/[0.05] shadow-sm overflow-hidden">
            <div className="bg-teal px-6 py-4">
              <h3 className="font-serif text-white text-lg font-normal">Session Schedule — Feb 7–28, 2026</h3>
              <p className="text-white/70 text-xs mt-1">2 sessions per week · Online via Zoom · Zoom links coming soon</p>
            </div>
            <div className="divide-y divide-black/[0.05]">
              {TRAINING_SCHEDULE.map(({ day, title, focus }, i) => (
                <div key={day} className="flex gap-5 px-6 py-5 hover:bg-[#f4f9f9] transition-colors">
                  <div className="w-14 flex-shrink-0 text-center">
                    <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center mx-auto">
                      <span className="text-teal font-bold text-xs">{i + 1}</span>
                    </div>
                    <div className="text-[0.6rem] text-gray-400 mt-1 font-bold uppercase">{day}</div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy mb-1">{title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{focus}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 bg-amber-50 border-t border-amber-100">
              <p className="text-amber-700 text-xs font-medium">📎 Zoom links and exact session times will be shared with selected participants via email and posted here.</p>
            </div>
          </div>
        )}

        {/* Tab: Participants */}
        {tab === 'participants' && (
          <div>
            <div className="bg-white rounded-2xl p-7 border border-black/[0.05] shadow-sm mb-6">
              <h3 className="font-serif text-xl text-navy font-normal mb-2">Selected Participants — 2026 Cohort</h3>
              <div className="w-10 h-0.5 bg-teal mb-4"/>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Following a rigorous review of numerous applications, we are proud to announce the selected participants for our 2026 training program. These individuals will represent the future of cardiovascular and metabolic health and research in Kenya on the global stage.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {PARTICIPANTS.map((name) => (
                  <div key={name} className="text-center group">
                    <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-teal/20 to-teal/5 border-2 border-teal/10 group-hover:border-teal/30 transition-all duration-200 flex items-center justify-center mb-3 overflow-hidden">
                      <img
                        src={`/photos/${name}.jpg`}
                        alt={name}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
                      />
                      <div className="w-full h-full hidden items-center justify-center text-3xl">👤</div>
                    </div>
                    <p className="text-sm font-semibold text-navy">{name}</p>
                    <p className="text-xs text-teal font-bold uppercase tracking-wide">2026 Ambassador</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy rounded-2xl p-7 text-white">
              <h4 className="font-serif text-lg font-normal mb-3">Our Distinguished Speakers</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                ACMHR-K has carefully invited speakers with extensive experience in relevant fields to ensure participants are not only well trained, but also gain valuable opportunities to network and interact with internationally renowned experts. Speaker profiles will be published here soon.
              </p>
              <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Cardiometabolic Medicine', 'Nutritional Science', 'Gut Microbiota Research', 'Public Health Policy', 'Herbal Medicine', 'Cardiovascular Research'].map(field => (
                  <div key={field} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white/60 text-center">{field}</div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab: Highlights */}
        {tab === 'highlights' && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-black/[0.05] shadow-sm">
              <h3 className="font-serif text-xl text-navy font-normal mb-4">Eligibility Criteria</h3>
              <ul className="space-y-3 text-sm text-gray-500">
                {[
                  'Open to Kenyan students and professionals in health sciences (medicine, public health, nutrition, biomedical sciences)',
                  'Must have or be pursuing a diploma or higher degree in a relevant field',
                  'Must have a stable internet connection',
                  'Must be available to attend ALL sessions to receive certificate',
                  'Must be available to travel to Nairobi for the graduation ceremony',
                  'Priority given to those with demonstrated interest in cardiometabolic health',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-teal text-[0.6rem] font-bold">{i+1}</span>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <div className="bg-teal rounded-2xl p-6 text-white">
                <h4 className="font-serif text-lg font-normal mb-3">Benefits to Participants</h4>
                <ul className="space-y-2 text-xs text-white/80">
                  {[
                    'Up-to-date knowledge in cardiometabolic health, nutrition, and public health',
                    'Network with professionals and researchers in the field',
                    'Certificate of Completion and ACMHR-K Ambassador title',
                    'Preferential consideration for future ACMHR-K workshops and leadership roles',
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-gold">✓</span><span>{b}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-black/[0.05] shadow-sm">
                <h4 className="font-semibold text-navy text-sm mb-3">Target & Selection</h4>
                <p className="text-xs text-gray-500 leading-relaxed">20 participants selected based on the quality of their applications. Gender and professional balance taken into consideration. Shortlisted candidates received confirmation by 12th January 2026.</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex-1 bg-teal/10 rounded-lg p-3 text-center">
                    <div className="font-serif text-2xl text-teal">20</div>
                    <div className="text-[0.6rem] text-gray-400 uppercase tracking-wide font-bold">Participants</div>
                  </div>
                  <div className="flex-1 bg-gold/10 rounded-lg p-3 text-center">
                    <div className="font-serif text-2xl text-gold-dark">Free</div>
                    <div className="text-[0.6rem] text-gray-400 uppercase tracking-wide font-bold">No Fees</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

/* ─── GALLERY ─── */
function Gallery() {
  const placeholders = [
    { cat: 'Community Health Screenings', desc: 'Health screening events in local communities' },
    { cat: 'Research Workshops & Conferences', desc: 'Academic and clinical training sessions' },
    { cat: 'Awareness Campaigns', desc: 'Public education drives on cardiometabolic health' },
    { cat: 'Team & Partner Events', desc: 'Collaborative events with partner organizations' },
    { cat: 'Ambassador Training 2026', desc: 'Annual cohort capacity-building program' },
    { cat: 'Community Outreach', desc: 'Grassroots programs in underserved counties' },
  ]
  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <span className="section-tag">Visual Impact</span>
        <h2 className="section-title">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map(({ cat, desc }, i) => (
            <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden relative group cursor-pointer"
              style={{ background: `linear-gradient(${135 + i * 15}deg, ${i % 2 === 0 ? '#005F73' : '#0A9396'} 0%, ${i % 3 === 0 ? '#001219' : '#0D2B35'} 100%)` }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/30 text-5xl">📷</div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
                <p className="text-white font-semibold text-xs">{cat}</p>
                <p className="text-white/70 text-[0.65rem] mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── FAQs ─── */
function FAQs() {
  const [open, setOpen] = useState(null)
  return (
    <section id="faqs" className="py-24 px-6 bg-[#f4f9f9]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-tag">Have Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map(({ q, a }, i) => (
            <div key={i} className="bg-white rounded-xl border border-black/[0.06] shadow-sm overflow-hidden">
              <button className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors" onClick={() => setOpen(open === i ? null : i)}>
                <span className="text-sm font-semibold text-navy">{q}</span>
                <span className={`text-teal text-xl font-light flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-black/[0.05] pt-4">{a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CONTACT ─── */
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = async (e) => {
    e.preventDefault(); setLoading(true)
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setSent(true)
      else alert('Please email info@acmhr-k.org directly.')
    } catch { alert('Please email info@acmhr-k.org directly.') }
    setLoading(false)
  }
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Contact Us</h2>
            {[
              { icon: '📧', label: 'Email', val: 'info@acmhr-k.org' },
              { icon: '📞', label: 'Phone', val: '+254 702 551 785' },
              { icon: '📍', label: 'Address', val: 'Karatina, Kenya — Head Office\nP.O. Box 2344–00900, Kiambu' },
              { icon: '🕐', label: 'Hours', val: 'Monday – Friday: 8:00am – 5:00pm EAT' },
            ].map(({ icon, label, val }) => (
              <div key={label} className="flex gap-4 items-start mb-5">
                <div className="w-10 h-10 bg-[#f4f9f9] rounded-xl flex items-center justify-center text-lg flex-shrink-0">{icon}</div>
                <div>
                  <div className="text-[0.7rem] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{label}</div>
                  <div className="text-sm text-navy font-medium whitespace-pre-line">{val}</div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="font-serif text-xl text-navy font-normal mb-6">Send Us a Message</h3>
            {sent ? (
              <div className="bg-teal/10 border border-teal/30 rounded-xl p-8 text-center">
                <div className="text-3xl mb-3">✅</div>
                <p className="text-teal-dark font-semibold">Thank you! We'll be in touch within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1.5">Full Name *</label>
                    <input name="name" required value={form.name} onChange={handle} placeholder="John Doe" className="w-full border-[1.5px] border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1.5">Email *</label>
                    <input name="email" type="email" required value={form.email} onChange={handle} placeholder="you@example.com" className="w-full border-[1.5px] border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">Subject *</label>
                  <select name="subject" required value={form.subject} onChange={handle} className="w-full border-[1.5px] border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors bg-white">
                    <option value="" disabled>Select a topic…</option>
                    <option>General Enquiry</option>
                    <option>Membership Application</option>
                    <option>Research Collaboration</option>
                    <option>Partnership Proposal</option>
                    <option>Training Program</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">Message *</label>
                  <textarea name="message" required rows={5} value={form.message} onChange={handle} placeholder="Tell us how we can help…" className="w-full border-[1.5px] border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors resize-none" />
                </div>
                <button type="submit" disabled={loading} className="w-full bg-teal text-white py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-teal-dark disabled:opacity-60">
                  {loading ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA BANNER ─── */
function CTABanner({ setActive }) {
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setActive(id) }
  return (
    <div className="bg-gradient-to-r from-teal-dark via-teal to-teal py-20 px-6 text-center">
      <h2 className="font-serif text-3xl md:text-4xl text-white font-normal mb-4">Ready to Make a Difference?</h2>
      <p className="text-white/75 text-sm max-w-md mx-auto mb-8 leading-relaxed">Join ACMHR-K as a member, collaborator, or partner and help shape the future of cardio-metabolic health in Kenya.</p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button onClick={() => scrollTo('contact')} className="btn-white">Join the Alliance</button>
        <button onClick={() => scrollTo('partnership')} className="btn-outline-white">Partner With Us</button>
      </div>
    </div>
  )
}

/* ─── FOOTER ─── */
function Footer({ setActive }) {
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setActive(id) }
  return (
    <footer className="bg-navy text-white/55 pt-16 pb-8 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.08] mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="ACMHR-K" className="w-12 h-12 rounded-full object-contain" />
              <div>
                <div className="font-serif text-white text-base">ACMHR-K</div>
                <div className="text-[0.65rem] text-white/35">Alliance for CMH & Research · Kenya</div>
              </div>
            </div>
            <p className="text-[0.82rem] text-white/40 leading-relaxed mb-5 max-w-xs">A registered non-profit committed to improving cardio-metabolic health through research, education, and community action. Est. 2nd September 2025.</p>
          </div>
          <div>
            <h5 className="text-[0.7rem] font-bold tracking-widest uppercase text-white mb-4">Organisation</h5>
            {[['About', 'about'], ['Team', 'team'], ['Governance', 'governance'], ['Events', 'events'], ['FAQs', 'faqs']].map(([l, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="block text-[0.83rem] text-white/45 hover:text-teal-light mb-2.5 transition-colors">{l}</button>
            ))}
          </div>
          <div>
            <h5 className="text-[0.7rem] font-bold tracking-widest uppercase text-white mb-4">Contact</h5>
            <p className="text-[0.83rem] mb-2"><a href="mailto:info@acmhr-k.org" className="text-teal-light hover:underline">info@acmhr-k.org</a></p>
            <p className="text-[0.83rem] mb-2">+254 702 551 785</p>
            <p className="text-[0.83rem] leading-relaxed">Karatina, Kenya<br/>P.O. Box 2344–00900, Kiambu</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-[0.73rem] text-white/25">
          <span>© {new Date().getFullYear()} ACMHR-K. All Rights Reserved.</span>
          <span>Registered under the NGO Coordination Act (1990)</span>
        </div>
      </div>
    </footer>
  )
}

/* ─── ROOT ─── */
export default function ACMHRKWebsite() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }) },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => sections.forEach(s => observer.unobserve(s))
  }, [])

  if (MAINTENANCE_MODE) return <MaintenancePage />

  return (
    <div className="font-sans antialiased">
      <AnnouncementBar />
      <Navbar active={active} setActive={setActive} />
      <Hero setActive={setActive} />
      <StatsBar />
      <About />
      <Team />
      <Research />
      <Governance />
      <Partnership />
      <Events />
      <Gallery />
      <FAQs />
      <CTABanner setActive={setActive} />
      <Contact />
      <Footer setActive={setActive} />
    </div>
  )
}
