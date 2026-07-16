import {
  contacts,
  education,
  experience,
  navLinks,
  projects,
  work,
} from "./data";

function Nav() {
  return (
    <nav className="nav">
      <div className="container nav__inner">
        <a href="#about" className="nav__logo">
          DK.
        </a>
        <div className="nav__links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="nav__cta">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="about" className="hero">
      <div className="container hero__grid">
        <div>
          <div className="eyebrow">Kyiv, Ukraine · Remote-friendly</div>
          <h1 className="hero__title">
            Daniel
            <br />
            Kovalenko
          </h1>
          <p className="hero__lead">
            Web developer building modern, reliable interfaces with a focus on
            quality, structure, and measurable results.
          </p>
          <div className="hero__tags">
            <span className="tag">Front-end architecture</span>
            <span className="tag">Design systems</span>
          </div>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Get in touch
            </a>
            <a href="#projects" className="btn btn--ghost">
              View projects
            </a>
          </div>
        </div>
        <div className="hero__visual">
          {/* Replace this div with your photo: an img tag with class hero__photo */}
          <div className="hero__photo" />
          <div className="hero__caption">Portfolio — 2026</div>
        </div>
      </div>
    </header>
  );
}

function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="section__head">
      <span className="section__num">{num}</span>
      <h2 className="section__title">{title}</h2>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead num="01" title="Experience" />
        {experience.map((item) => (
          <div key={item.period} className="row">
            <div className="row__period">{item.period}</div>
            <div>
              <h3 className="row__title">{item.title}</h3>
              <p className="row__desc">{item.description}</p>
              <div className="chips">
                {item.chips.map((chip) => (
                  <span key={chip} className="chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <div className="section__head section__head--split">
          <div className="section__head" style={{ marginBottom: 0 }}>
            <span className="section__num">02</span>
            <h2 className="section__title">Projects</h2>
          </div>
          <span className="section__note">Selected work, 2021 — 2026</span>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <div key={project.num} className="card">
              <div className="card__top">
                <h3 className="card__title">{project.title}</h3>
                <span className="card__num">{project.num}</span>
              </div>
              <p className="card__desc">{project.description}</p>
              <div className="card__role">
                <span>Role — </span>
                {project.role}
              </div>
              <div className="card__tools">
                {project.tools.map((tool) => (
                  <span key={tool} className="tool">
                    {tool}
                  </span>
                ))}
              </div>
              <a href="#contact" className="card__link">
                Details →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHead num="03" title="Work" />
        <div className="work">
          {work.map((item) => (
            <div key={item.company} className="work__block">
              <div className="work__top">
                <h3 className="work__company">{item.company}</h3>
                <span className="work__period">{item.period}</span>
              </div>
              <div className="work__role">{item.role}</div>
              <div className="work__divider" />
              <ul className="work__duties">
                {item.duties.map((duty) => (
                  <li key={duty}>{duty}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <SectionHead num="04" title="Education" />
        {education.map((item) => (
          <div key={item.period} className="row">
            <div className="row__period">{item.period}</div>
            <div>
              <h3 className="row__title">{item.title}</h3>
              <div className="row__field">{item.field}</div>
              <p className="row__desc" style={{ marginBottom: 0 }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionHead num="05" title="Contact" />
        <div className="contact__grid">
          <form
            className="form"
            action={`mailto:${contacts.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="form__row">
              <input type="text" name="name" required placeholder="Name" />
              <input type="email" name="email" required placeholder="Email" />
            </div>
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" required placeholder="Message" rows={4} />
            <button type="submit" className="form__submit">
              Send
            </button>
          </form>
          <div className="contact__info">
            <p className="contact__lead">
              Open to freelance projects and full-time roles. The fastest way
              to reach me is email — I usually respond within 24 hours.
            </p>
            <div className="contact__rows">
              <div className="contact__row">
                <span className="contact__label">Email</span>
                <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
              </div>
              <div className="contact__row">
                <span className="contact__label">Phone</span>
                <a href={contacts.phoneHref}>{contacts.phone}</a>
              </div>
              <div className="contact__row">
                <span className="contact__label">Social</span>
                <div className="contact__social">
                  {contacts.social.map((item) => (
                    <a key={item.label} href={item.href}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="contact__status">Kyiv · UTC+2 · Available now</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© 2026 Daniel Kovalenko</span>
        <a href="#about">Back to top ↑</a>
      </div>
    </footer>
  );
}

export function Portfolio() {
  return (
    <>
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Work />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
