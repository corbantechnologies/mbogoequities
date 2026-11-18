/* eslint-disable @next/next/no-img-element */

const services = [
  {
    title: "Business Management",
    text: "End-to-end oversight of day-to-day operations so leadership can focus on strategy and growth.",
  },
  {
    title: "Strategy & Advisory",
    text: "Clear, practical strategy built on a thorough understanding of your market, people and resources.",
  },
  {
    title: "Financial Management",
    text: "Budgeting, reporting and financial controls that bring discipline and visibility to every shilling.",
  },
  {
    title: "Operations & Process",
    text: "Streamlined workflows and systems that reduce cost, remove friction and improve delivery.",
  },
  {
    title: "Governance & Compliance",
    text: "Board support, policies and regulatory alignment that protect the organization and its stakeholders.",
  },
  {
    title: "People & Administration",
    text: "Human resource structures, administration and performance frameworks that support lasting results.",
  },
];

const steps = [
  { title: "Assess", text: "We study the organization, its goals and the challenges in front of it." },
  { title: "Plan", text: "We agree on priorities, a clear roadmap and measurable outcomes." },
  { title: "Implement", text: "We manage execution alongside your team with steady, accountable delivery." },
  { title: "Review", text: "We measure, report and refine to sustain performance over time." },
];

const sectors = [
  "Small & Medium Enterprises",
  "Corporates",
  "Non-Profit Organizations",
  "Family Businesses",
  "Real Estate",
  "Agriculture",
  "Professional Services",
  "Retail & Trade",
];

const reasons = [
  {
    title: "Local insight",
    text: "Rooted in Kenya, we understand the business environment, regulation and culture our clients operate in.",
  },
  {
    title: "Integrity first",
    text: "We act with discretion, transparency and accountability in every engagement we take on.",
  },
  {
    title: "Measured results",
    text: "Our work is judged by outcomes: stronger operations, sound finances and sustainable growth.",
  },
];

const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#sectors", label: "Sectors" },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
  const year = 2026;

  return (
    <>
      <header className="header">
        <div className="container">
          <a href="#top" className="header-logo" aria-label="Mbogo Equities home">
            <img src="/mainBlack.png" alt="Mbogo Equities" />
          </a>
          <nav className="nav">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Management Services · Kenya</p>
            <h1>Structured management for organizations that intend to last.</h1>
            <p>
              Mbogo Equities partners with businesses, companies and organizations to strengthen how they are run,
              from strategy and finance to operations and governance.
            </p>
            <div className="hero-actions">
              <a href="#services" className="btn btn-solid">
                Our Services
              </a>
              <a href="#about" className="btn btn-ghost">
                About Us
              </a>
            </div>
          </div>
        </section>

        <div className="stats">
          <div className="container">
            <div className="stat">
              <strong>Strategy</strong>
              <span>Clear direction</span>
            </div>
            <div className="stat">
              <strong>Finance</strong>
              <span>Sound controls</span>
            </div>
            <div className="stat">
              <strong>Operations</strong>
              <span>Efficient delivery</span>
            </div>
            <div className="stat">
              <strong>Governance</strong>
              <span>Lasting accountability</span>
            </div>
          </div>
        </div>

        <section className="section" id="about">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">About Us</p>
                <h2>A trusted management partner.</h2>
              </div>
              <p>
                We bring structure, experience and discipline to organizations at every stage, helping them operate
                with confidence and clarity.
              </p>
            </div>
            <div className="about-grid">
              <div>
                <p>
                  Mbogo Equities Ltd is a Kenyan management services firm. We work with business owners, boards and
                  executive teams to manage, organize and improve the organizations they lead.
                </p>
                <p>
                  Whether a growing enterprise needs dependable management, an established company needs sharper
                  operations, or an organization needs stronger governance, we provide the expertise and steady hand
                  to get it done.
                </p>
              </div>
              <div className="about-panel">
                <h3>What we stand for</h3>
                <ul>
                  <li>Professionalism in every engagement</li>
                  <li>Confidentiality and trust</li>
                  <li>Practical, results-driven solutions</li>
                  <li>Long-term partnerships with our clients</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Services</p>
                <h2>Management services built around your organization.</h2>
              </div>
              <p>
                Engage us for a single function or for complete management support. Every engagement is tailored to
                the scale and needs of the client.
              </p>
            </div>
            <div className="service-grid">
              {services.map((s, i) => (
                <article className="service" key={s.title}>
                  <span className="num">{pad(i + 1)}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="approach">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Our Approach</p>
                <h2>A disciplined process, from first assessment to lasting results.</h2>
              </div>
              <p>We follow a clear and consistent method so clients always know where things stand.</p>
            </div>
            <div className="steps">
              {steps.map((s, i) => (
                <div className="step" key={s.title}>
                  <span className="num">{pad(i + 1)}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section sectors" id="sectors">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Who We Serve</p>
                <h2>Supporting organizations across sectors.</h2>
              </div>
              <p>
                Our clients range from owner-led enterprises to established companies and non-profit organizations.
              </p>
            </div>
            <div className="sector-list">
              {sectors.map((s) => (
                <div key={s}>{s}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="why">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Why Mbogo Equities</p>
                <h2>Experience you can rely on.</h2>
              </div>
            </div>
            <div className="why-grid">
              {reasons.map((r) => (
                <div key={r.title}>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band">
          <div className="container">
            <h2>Well-managed organizations build lasting value. We help you build yours.</h2>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <img src="/mainBlack.png" alt="Mbogo Equities" />
              <p>Professional management services for businesses, companies and organizations in Kenya.</p>
            </div>
            <nav className="footer-nav">
              {nav.map((n) => (
                <a key={n.href} href={n.href}>
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="footer-bottom">
            <span>© {year} Mbogo Equities Ltd. All rights reserved.</span>
            <span>Kenya</span>
          </div>
        </div>
      </footer>
    </>
  );
}
