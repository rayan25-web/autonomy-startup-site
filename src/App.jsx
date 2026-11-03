import React, { useEffect, useState } from "react";
import SketchPoster from "./SketchPoster.jsx";
import ItalianStreetScene from "./ItalianStreetScene.jsx";
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
  return <ItalianStreetScene />;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const scene = document.querySelector(".global-scene");

    const handleScroll = () => {
      if (scene) {
        scene.style.setProperty(
          "--parallax-y",
          `${window.scrollY * 0.12}px`
        );
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const elements = document.querySelectorAll(
      ".hero h1, .hero-lede, .eyebrow, h2, .feature-card, .step, .plan-card, .contact-form, .manifesto-bottom"
    );

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      elements.forEach((element) => {
        element.classList.add("scroll-reveal");
        observer.observe(element);
      });

      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", handleScroll);
      };
    }

    elements.forEach((element) => element.classList.add("is-visible"));

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const founder = document.querySelector(".founder-copy");
    if (!founder) return;

    if (!("IntersectionObserver" in window)) {
      founder.classList.add("founder-rain-active");
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries.some(entry => entry.isIntersecting)) {
        founder.classList.add("founder-rain-active");
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    observer.observe(founder);
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <div className="global-scene">
        <WarehouseScene />
      </div>
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

      <section className="manifesto section-wrap">
        <SketchPoster variant="manifesto" />
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
        <SketchPoster variant="platform" />
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
        <SketchPoster variant="approach" />
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
        <SketchPoster variant="plan" />
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

      {/* PEOPLE FIRST */}
      <section className="people-first section-wrap" id="people">
        <SketchPoster variant="people" />
        <div className="eyebrow"><span className="eyebrow-dot" /> OUR HUMAN PROMISE</div>

        <div className="people-heading">
          <h2>
            TECHNOLOGY<br />
            SHOULD MAKE<br />
            <span>ROOM FOR PEOPLE.</span>
          </h2>
          <p>
            We believe the future of automation should be measured
            not only by efficiency, but by how much better it makes
            everyday working life.
          </p>
        </div>

        <div className="human-grid">
          <article>
            <span>01 / EMPLOYMENT</span>
            <h3>Progress should include people.</h3>
            <p>
              Our goal is to automate repetitive work while helping
              people develop new skills, take on more valuable
              responsibilities and grow alongside technology.
            </p>
          </article>

          <article>
            <span>02 / TRUST</span>
            <h3>Trust is part of the technology.</h3>
            <p>
              Employees deserve transparency. They should know
              where automation is used, what it can access and
              when a human is responsible for a decision.
            </p>
          </article>

          <article>
            <span>03 / WORKER LIFE</span>
            <h3>Make work more human.</h3>
            <p>
              Fewer repetitive tasks. Less unnecessary pressure.
              More time for problem-solving, creativity, collaboration
              and a healthier relationship with work.
            </p>
          </article>

          <article>
            <span>04 / JOB SECURITY</span>
            <h3>Build people up, not out.</h3>
            <p>
              Automation should be introduced responsibly.
              Where roles change, businesses should invest in
              retraining, new opportunities and meaningful human
              involvement rather than treating job losses as progress.
            </p>
          </article>
        </div>

      </section>

      <div className="people-statement">
        <span>OUR BELIEF / 001</span>
        <p>“THE FUTURE OF WORK MUST HAVE ROOM FOR EVERYONE.”</p>
      </div>

      {/* FOUNDER */}
      <section className="founder-section" id="founder">
        <SketchPoster variant="founder" />
        <div className="founder-inner section-wrap">

          <div className="founder-visual">
            <div className="founder-frame">
             <img
  className="founder-photo"
  src="/founder.png"
  alt="Mohammed Rayan Afzal, Founder of Autonomy"
/>
              <span>THE PERSON BEHIND THE IDEA</span>
              <div className="founder-visual-bottom">
                <span>VISION / 2026</span>
                <span>HUMAN FIRST.</span>
              </div>
            </div>
            <div className="founder-index">FOUNDER / 001</div>
          </div>

          <div className="founder-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" /> A NOTE FROM THE FOUNDER
            </div>

            <h2>
              BUILDING<br />
              A FUTURE<br />
              <span>WORTH WORKING IN.</span>
            </h2>

            <p className="founder-lede">
              I believe technology should give people more
              possibilities, not take their possibilities away.
            </p>

            <p>
              Autonomy begins with a simple question:
              What if businesses could become more capable
              without making the people behind them less important?
            </p>

            <p>
              I want to build intelligent systems that respect
              the people who use them. Systems that earn trust,
              improve everyday work and help businesses grow
              while keeping human potential at the centre.
            </p>

            <div className="founder-signature">
              <span className="signature-line"></span>
              <span>MOHAMMED RAYAN AFZAL · FOUNDER & CEO</span>
            </div>
          </div>

        </div>
      </section>
      <section className="contact-section" id="contact">
        <SketchPoster variant="contact" />
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


















