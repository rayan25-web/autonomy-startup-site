import React, { useState } from "react";
import {
  ArrowUpRight, ArrowRight, Menu, X, Bot,
  Workflow, ShieldCheck, Scan, Check
} from "lucide-react";


const people = Array.from({ length: 32 }, (_, i) => ({
  x: (i * 37 + 7) % 96,
  y: 57 + ((i * 19) % 34),
  s: 0.65 + ((i * 13) % 55) / 100,
  d: (i % 8) * -0.6
}));

const features = [
  { icon: Workflow, n: "01", title: "Work that flows", text: "Connect the tools your team already uses. Let intelligent systems take care of repetitive operations." },
  { icon: Scan, n: "02", title: "A clearer picture", text: "Understand what is happening across your business without chasing updates or switching between tools." },
  { icon: ShieldCheck, n: "03", title: "People in control", text: "Build reliable systems with human approval, clear permissions and complete visibility." }
];

const steps = [
  ["01", "Understand", "Discover the repetitive work slowing your business down."],
  ["02", "Design", "Create an automation strategy around your goals and existing tools."],
  ["03", "Activate", "Build, connect and test your intelligent workflows."],
  ["04", "Improve", "Measure results and continuously improve your systems."]
];

function WarehouseScene() {
  return (
    <div className="warehouse-scene" aria-label="Animated illustration of an intelligent warehouse">
      <div className="scene-label scene-label-left">AUTONOMOUS SYSTEMS / 001</div>
      <div className="scene-label scene-label-right">HUMAN + MACHINE</div>

      <svg className="warehouse-svg" viewBox="0 0 1100 570" preserveAspectRatio="xMidYMid meet">
        <g className="warehouse-lines" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M30 80 L550 0 L1070 80" />
          <path d="M30 80 V420 M1070 80 V420" />
          <path d="M110 90 V390 M270 65 V410 M830 65 V410 M990 90 V390" />
          <path d="M30 170 H1070 M30 280 H1070 M30 390 H1070" />
          <path d="M30 80 L550 280 L1070 80" opacity=".18" />
          <path d="M30 420 L550 280 L1070 420" opacity=".18" />
          <path d="M180 420 L550 280 L920 420" opacity=".15" />
          <path d="M0 510 H1100" strokeWidth="3" />
        </g>

        <g className="warehouse-shelves" fill="none" stroke="currentColor" strokeWidth="3" opacity=".55">
          <path d="M65 115 H240 V385 H65 Z M65 205 H240 M65 295 H240" />
          <path d="M860 115 H1035 V385 H860 Z M860 205 H1035 M860 295 H1035" />
          <path d="M95 130 H145 V185 H95 Z M165 130 H215 V185 H165 Z" />
          <path d="M95 220 H145 V275 H95 Z M165 220 H215 V275 H165 Z" />
          <path d="M890 130 H940 V185 H890 Z M960 130 H1010 V185 H960 Z" />
          <path d="M890 220 H940 V275 H890 Z M960 220 H1010 V275 H960 Z" />
        </g>

        <g className="robot" stroke="#171717" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M775 365 L800 270 L865 245 L900 290 L880 390" fill="#b8b7b0" />
          <path d="M800 270 L750 190 L780 165 L850 235" fill="#d2d0c8" />
          <path d="M750 190 L710 125 L730 105 L780 165" fill="#b8b7b0" />
          <circle cx="720" cy="115" r="25" fill="#e7e5dc" />
          <path d="M704 104 L686 78 M736 101 L754 79" fill="none" />
          <path d="M680 78 L665 68 M754 79 L769 67" fill="none" />
          <path d="M850 245 L900 215 L920 235 L880 290" fill="#b8b7b0" />
          <circle cx="870" cy="250" r="12" fill="#eeeae1" />
          <path d="M775 365 L745 425 L805 425 L825 370" fill="#999991" />
          <path d="M850 390 L850 425 L910 425 L880 390" fill="#999991" />
        </g>

        <g className="small-robot" stroke="#444" strokeWidth="3" fill="#c9c8c1">
          <rect x="420" y="355" width="55" height="70" rx="12" />
          <rect x="427" y="330" width="42" height="32" rx="10" />
          <circle cx="440" cy="345" r="4" fill="#222" />
          <circle cx="457" cy="345" r="4" fill="#222" />
          <path d="M430 425 L420 450 M465 425 L475 450" fill="none" />
        </g>

        <g className="crowd">
          {people.map((p, i) => (
            <g key={i} transform={`translate(${p.x * 11},${p.y * 5.2}) scale(${p.s})`}>
              <ellipse cx="0" cy="39" rx="8" ry="3" fill="#777" opacity=".18" />
              <circle cx="0" cy="9" r="5" fill={i % 7 === 0 ? "#aaa99f" : "#f0eee7"} stroke="#777" strokeWidth="1.2" />
              <path d="M-5 17 Q0 13 5 17 L7 32 L-7 32 Z" fill={i % 7 === 0 ? "#aaa99f" : "#dedcd4"} stroke="#777" strokeWidth="1.2" />
              <path d="M-3 32 L-5 39 M3 32 L5 39" fill="none" stroke="#777" strokeWidth="1.5" />
            </g>
          ))}
        </g>

        <g className="scene-floor" fill="none" stroke="#777" strokeWidth="1.5" opacity=".3">
          <path d="M0 510 L550 420 L1100 510" />
          <path d="M160 510 L550 420 L940 510" />
          <path d="M340 510 L550 420 L760 510" />
        </g>
      </svg>

      <div className="scene-caption">A DIFFERENT WAY OF WORKING.</div>
      <div className="scene-coordinate">12° 58' / 77° 35'</div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <nav className="topbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-symbol">A.</span>
          AUTONOMY
        </a>

        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#platform" onClick={closeMenu}>Platform</a>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#plan" onClick={closeMenu}>Getting started</a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </div>
      </nav>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> INTELLIGENCE FOR EVERYDAY WORK</div>

          <h1>
            LET WORK<br />
            <span className="outline-word">MOVE</span><br />
            ITSELF<span className="period">.</span>
          </h1>

          <p className="hero-lede">
            The future of work isn't about doing more.
            It's about making room for what matters.
            We build intelligent systems that make business feel effortless.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="button button-dark">BUILD SOMETHING <ArrowUpRight size={17} /></a>
            <a href="#platform" className="text-link">Explore the idea <ArrowRight size={15} /></a>
          </div>

          <div className="hero-note">
            <span className="note-line" /> LESS REPETITION. MORE POSSIBILITY.
          </div>
        </div>

        <div className="hero-side">
          <div className="hero-stamp">A NEW<br /> KIND OF<br /> WORKPLACE.</div>
          <div className="hero-side-note">SYSTEMS THAT THINK.<br />PEOPLE THAT CREATE.</div>
        </div>

        <div className="hero-index">01 <span /> THE BEGINNING</div>
      </section>

      <section className="scene-section">
        <div className="scene-topline">
          <span>FIG. 001 / THE AUTOMATED WORKPLACE</span>
          <span>OBSERVE THE CHANGE <span className="live-dot" /></span>
        </div>
        <WarehouseScene />
        <div className="scene-bottomline">
          <span>LESS MANUAL WORK</span>
          <span>MORE HUMAN POTENTIAL</span>
        </div>
      </section>

      <section className="manifesto section-wrap">
        <div className="eyebrow"><span className="eyebrow-dot" /> A SIMPLE THOUGHT</div>
        <h2>
          PEOPLE WERE<br />
          NOT BUILT TO<br />
          <span>REPEAT.</span>
        </h2>
        <div className="manifesto-bottom">
          <span className="manifesto-number">02 / WHY AUTONOMY</span>
          <p>Businesses grow. Work gets complicated. Somewhere along the way, people end up spending their days doing things machines could do better. We think there's a better way.</p>
        </div>
      </section>

      <section className="platform section-wrap" id="platform">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot" /> WHAT WE MAKE POSSIBLE</div>
            <h2>GOOD WORK.<br /><span>WITHOUT THE BUSYWORK.</span></h2>
          </div>
          <p>Intelligent automation that fits into your business, not the other way around.</p>
        </div>

        <div className="feature-grid">
          {features.map(({ icon: Icon, n, title, text }) => (
            <article className="feature-card" key={n}>
              <div className="feature-meta"><span>{n} / 03</span><Icon size={23} strokeWidth={1.5} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowUpRight className="card-arrow" size={18} />
            </article>
          ))}
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="approach-inner section-wrap">
          <div className="approach-intro">
            <div className="eyebrow"><span className="eyebrow-dot" /> HOW IT HAPPENS</div>
            <h2>SMALL<br />STEPS.<br /><span>BIG CHANGE.</span></h2>
            <p>We don't automate for the sake of it. We find the right problems, build the right systems and make sure they work for real people.</p>
            <div className="approach-mark">A.</div>
          </div>

          <div className="steps-list">
            {steps.map(([n, title, text]) => (
              <div className="step" key={n}>
                <span className="step-number">{n}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <ArrowUpRight size={18} className="step-arrow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="plan section-wrap" id="plan">
        <div className="eyebrow"><span className="eyebrow-dot" /> A PLACE TO BEGIN</div>
        <div className="plan-card">
          <div className="plan-main">
            <span className="plan-label">THE FIRST STEP / 04 WEEKS</span>
            <h2>LET'S MAKE<br /><span>IT REAL.</span></h2>
            <p>A focused discovery sprint to find your biggest opportunity for intelligent automation.</p>
            <a href="#contact" className="button button-dark">START A CONVERSATION <ArrowUpRight size={16} /></a>
          </div>
          <div className="plan-details">
            {[
              ["WEEK 01", "Understand", "Map your operations and identify friction."],
              ["WEEK 02", "Find the opportunity", "Prioritise workflows with meaningful impact."],
              ["WEEK 03", "Design the system", "Build a clear plan for the first automation."],
              ["WEEK 04", "Present the way forward", "Deliver a practical roadmap and next steps."]
            ].map(([week, title, text]) => (
              <div className="detail-row" key={week}>
                <span>{week}</span><div><b>{title}</b><small>{text}</small></div><Check size={16} />
              </div>
            ))}
            <p className="disclaimer">A proposed starting plan. Scope and timing are agreed together.</p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner section-wrap">
          <div className="contact-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT CHAPTER</div>
            <h2>LET'S MAKE<br />ROOM FOR<br /><span>BETTER.</span></h2>
            <p>Tell us a little about your business and the work you'd like to make simpler. We'll take it from there.</p>
            <div className="contact-aside"><span className="contact-orb"><Bot size={22} /></span> HUMAN IDEAS.<br />INTELLIGENT EXECUTION.</div>
          </div>

          <div className="contact-form">
            {submitted ? (
              <div className="success-state">
                <div className="success-icon"><Check size={23} /></div>
                <h3>Well, that's a start.</h3>
                <p>Your details have been captured in this demo. Connect a form service to receive real enquiries.</p>
                <button className="text-link" onClick={() => setSubmitted(false)}>Send another <ArrowRight size={15} /></button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="form-heading"><span>LET'S GET ACQUAINTED</span><span>01 / 04</span></div>
                <label>Your name<input required name="name" placeholder="What should we call you?" /></label>
                <label>Email address<input required type="email" name="email" placeholder="you@company.com" /></label>
                <label>Company<input name="company" placeholder="Where do you work?" /></label>
                <label>What would you like to improve?
                  <select name="challenge" defaultValue="Operations and repetitive work">
                    <option>Operations and repetitive work</option>
                    <option>Customer experience</option>
                    <option>Internal workflows</option>
                    <option>Data and reporting</option>
                    <option>Something else</option>
                  </select>
                </label>
                <button type="submit" className="button button-dark submit-button">SEND YOUR ENQUIRY <ArrowUpRight size={16} /></button>
                <p className="form-privacy">No noise. Just a thoughtful conversation.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="footer section-wrap">
        <a href="#home" className="brand"><span className="brand-symbol">A.</span> AUTONOMY</a>
        <span className="footer-note">MAKE ROOM FOR WHAT MATTERS.</span>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <div className="copyright">© 2026 AUTONOMY. BUILT FOR A BETTER WAY OF WORKING.</div>
      </footer>
    </main>
  );
}

export default App;
