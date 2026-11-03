import { useEffect, useState } from "react";
import {
  ArrowUpRight, ArrowRight, Menu, X, Workflow, Scan, ShieldCheck,
  Sparkles, Bot, Activity, ChevronDown, Check, MoveUpRight
} from "lucide-react";

const features = [
  { icon: Workflow, n: "01", title: "Workflows that move", text: "Connect the tools your team already uses. Let intelligent systems handle the hand-offs, follow-ups and repeatable work." },
  { icon: Scan, n: "02", title: "Clarity at every step", text: "See what is happening, what needs attention and where your next opportunity is, without chasing updates." },
  { icon: ShieldCheck, n: "03", title: "People stay in control", text: "Human approval, clear permissions and useful visibility are built into the process from day one." }
];

const steps = [
  ["01", "Understand", "We map the work that slows your team down and find the right place to begin."],
  ["02", "Design", "We shape a practical automation plan around your goals, tools and people."],
  ["03", "Activate", "We build, test and connect your workflow with clear checkpoints."],
  ["04", "Improve", "Measure the impact, learn from real use and keep making the system better."]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", challenge: "Operations and repetitive work" });

  useEffect(() => {
    const onScroll = () => document.body.classList.toggle("scrolled", window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark"><span /></span>
          <span>AUTONOMY<span className="brand-dot">.</span></span>
        </a>
        <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21}/> : <Menu size={21}/>}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#platform" onClick={closeMenu}>Platform</a>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#plan" onClick={closeMenu}>Proposed plan</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Start a conversation <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot" /> INTELLIGENCE THAT WORKS WITH YOU</div>
            <h1>Make room for<br/><em>what matters.</em></h1>
            <p className="hero-lede">We turn complex, repetitive work into intelligent workflows, so people can spend less time managing tasks and more time moving ideas forward.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Build your plan <ArrowUpRight size={17}/></a>
              <a className="text-link" href="#platform">Explore the platform <ArrowRight size={16}/></a>
            </div>
            <div className="hero-proof"><div className="proof-line" /><span>DESIGNED AROUND PEOPLE. POWERED BY INTELLIGENCE.</span></div>
          </div>

          <div className="hero-visual" aria-label="Abstract animated workflow illustration">
            <div className="visual-topline"><span>LIVE SYSTEM MAP</span><span><i/> ALL SYSTEMS NOMINAL</span></div>
            <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
            <div className="orbit-core"><div className="core-inner"><Bot size={35}/><span>AI CORE</span></div></div>
            <div className="node node-top"><Workflow size={17}/><span>WORKFLOWS</span></div>
            <div className="node node-left"><Activity size={17}/><span>INSIGHTS</span></div>
            <div className="node node-right"><ShieldCheck size={17}/><span>CONTROL</span></div>
            <div className="node node-bottom"><Sparkles size={17}/><span>OUTCOMES</span></div>
            <div className="orbit-caption caption-left">INPUT <b>→</b> INTELLIGENCE</div>
            <div className="orbit-caption caption-right">HUMAN <b>+</b> MACHINE</div>
            <div className="visual-footer"><span>01 / SYSTEM OVERVIEW</span><span>ALWAYS IN MOTION <span className="tiny-pulse">●</span></span></div>
          </div>
          <div className="hero-index"><span>01</span><span className="index-rule"/><span>INTRODUCTION</span></div>
        </section>

        <section className="ticker" aria-label="Our principles">
          <div className="ticker-track">
            {Array.from({length: 2}).map((_, i) => <div className="ticker-group" key={i}>
              <span>LESS FRICTION</span><b>✳</b><span>MORE MOMENTUM</span><b>✳</b><span>HUMAN BY DESIGN</span><b>✳</b><span>INTELLIGENCE IN ACTION</span><b>✳</b>
            </div>)}
          </div>
        </section>

        <section className="platform section-wrap" id="platform">
          <div className="section-heading">
            <div><div className="eyebrow">01 / THE PLATFORM</div><h2>Good systems make<br/><em>great work possible.</em></h2></div>
            <p>Autonomy is a practical bridge between your people, your processes and the technology that helps them work better.</p>
          </div>
          <div className="feature-grid">
            {features.map(({icon: Icon, n, title, text}) => <article className="feature-card" key={n}>
              <div className="feature-meta"><span>{n} / CAPABILITY</span><Icon size={19}/></div>
              <h3>{title}</h3><p>{text}</p><div className="card-arrow"><ArrowUpRight size={18}/></div>
            </article>)}
          </div>
        </section>

        <section className="approach" id="approach">
          <div className="section-wrap approach-inner">
            <div className="approach-intro">
              <div className="eyebrow">02 / HOW WE WORK</div>
              <h2>From friction<br/>to <em>flow.</em></h2>
              <p>No black boxes. No technology for technology's sake. Just a thoughtful path from your current reality to a better way of working.</p>
              <a href="#contact" className="text-link">Talk through your workflow <ArrowUpRight size={16}/></a>
            </div>
            <div className="steps-list">
              {steps.map(([n, title, text]) => <div className="step" key={n}>
                <span className="step-number">{n}</span><div><h3>{title}</h3><p>{text}</p></div><MoveUpRight size={18} className="step-icon"/>
              </div>)}
            </div>
          </div>
        </section>

        <section className="plan section-wrap" id="plan">
          <div className="eyebrow">03 / A PROPOSED PLAN</div>
          <div className="plan-heading"><h2>A clear first move.<br/><em>A smarter next chapter.</em></h2><p>A focused starting point gives us room to prove value, learn quickly and build with confidence.</p></div>
          <div className="plan-card">
            <div className="plan-main">
              <div className="plan-label"><span className="pulse-dot"/> SUGGESTED STARTING ENGAGEMENT</div>
              <h3>Workflow<br/><em>discovery sprint</em></h3>
              <p>Begin with one high-impact workflow. Understand it deeply, design a better version and define what success should look like.</p>
              <a className="button button-primary" href="#contact">Discuss this plan <ArrowUpRight size={17}/></a>
            </div>
            <div className="plan-details">
              <div className="detail-row"><span>PHASE 01</span><div><b>Discover</b><small>Map current processes, tools and pain points.</small></div><span>WEEK 01</span></div>
              <div className="detail-row"><span>PHASE 02</span><div><b>Design</b><small>Prioritise opportunities and define the future workflow.</small></div><span>WEEK 02</span></div>
              <div className="detail-row"><span>PHASE 03</span><div><b>Prototype</b><small>Validate a working concept with your team.</small></div><span>WEEK 03</span></div>
              <div className="detail-row"><span>PHASE 04</span><div><b>Roadmap</b><small>Agree next steps, measures and ownership.</small></div><span>WEEK 04</span></div>
              <div className="plan-note"><Check size={15}/> A practical proposal, tailored after our first conversation.</div>
            </div>
          </div>
          <p className="disclaimer">Indicative structure only. Scope, timeline and deliverables will be shaped around your needs.</p>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="contact-copy">
              <div className="eyebrow">04 / START A CONVERSATION</div>
              <h2>Let's make work<br/><em>work better.</em></h2>
              <p>Tell us what you are trying to improve. We will come back with a thoughtful first step, not a sales script.</p>
              <div className="contact-aside"><span className="contact-orb"><ArrowUpRight size={22}/></span><span>ONE GOOD CONVERSATION<br/>CAN CHANGE THE WAY YOU WORK.</span></div>
            </div>
            <form className="contact-form" onSubmit={submit}>
              {submitted ? <div className="success-state"><div className="success-icon"><Check size={24}/></div><h3>Thank you.</h3><p>Your details have been captured in this demo. Connect the form to your email or backend to receive real submissions.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Send another message <ArrowRight size={15}/></button></div> : <>
                <div className="form-heading"><span>YOUR FIRST STEP</span><span>01 — 04</span></div>
                <label>Your name<input required value={form.name} onChange={e => setForm({...form, name:e.target.value})} placeholder="How should we address you?"/></label>
                <label>Work email<input required type="email" value={form.email} onChange={e => setForm({...form, email:e.target.value})} placeholder="you@company.com"/></label>
                <label>Company <span className="optional">OPTIONAL</span><input value={form.company} onChange={e => setForm({...form, company:e.target.value})} placeholder="Where do you work?"/></label>
                <label>What would you like to improve?
                  <div className="select-wrap"><select value={form.challenge} onChange={e => setForm({...form, challenge:e.target.value})}>
                    <option>Operations and repetitive work</option><option>Customer experience</option><option>Data and reporting</option><option>Team collaboration</option><option>Exploring AI and automation</option><option>Something else</option>
                  </select><ChevronDown size={16}/></div>
                </label>
                <button className="button button-primary submit-button" type="submit">Send an enquiry <ArrowUpRight size={17}/></button>
                <p className="form-privacy">Your information is only used to respond to your enquiry.</p>
              </>}
            </form>
          </div>
        </section>
      </main>
      <footer className="footer section-wrap">
        <a className="brand" href="#top"><span className="brand-mark"><span/></span><span>AUTONOMY<span className="brand-dot">.</span></span></a>
        <span className="footer-note">INTELLIGENCE THAT GIVES PEOPLE ROOM TO DO MORE.</span>
        <a href="#top" className="back-top">BACK TO TOP ↑</a>
        <span className="copyright">© 2026 AUTONOMY. ALL RIGHTS RESERVED.</span>
      </footer>
    </div>
  );
}

export default App;
