
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  ChevronDown,
  Clock,
  Gauge,
  Menu,
  ShieldCheck,
  Zap,
  X,
} from "lucide-react";
import "./style.css";

const WHATSAPP_NUMBER = "15551234567"; // Replace with your WhatsApp number

const vehicles = [
  {
    name: "Model 3",
    type: "Electric sedan",
    description:
      "Explore an electric sedan designed for everyday driving, commuting, and longer trips.",
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=85",
    features: ["Everyday practicality", "Minimalist interior", "Electric performance"],
  },
  {
    name: "Model Y",
    type: "Electric SUV",
    description:
      "Explore a versatile electric SUV with extra room for passengers, luggage, and daily activities.",
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=85",
    features: ["Flexible cargo space", "Room for passengers", "Versatile for families"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    model: "",
    state: "",
    budget: "",
    timeline: "",
    contact: "",
    consent: false,
  });

  const update = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const whatsappLink = (message) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const submitForm = (event) => {
    event.preventDefault();

    const message = [
      "Hello! I have a Tesla vehicle inquiry.",
      "",
      `Name: ${form.name}`,
      `Model of interest: ${form.model}`,
      `US state: ${form.state}`,
      `Budget range: ${form.budget || "Not specified"}`,
      `Purchase timeline: ${form.timeline || "Not specified"}`,
      `Preferred contact: ${form.contact}`,
      "",
      "Please share information about available options.",
    ].join("\n");

    setSubmitted(true);
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">E</span>
          <span>
            EV <strong>BUYER GUIDE</strong>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#vehicles" onClick={closeMenu}>Explore vehicles</a>
          <a href="#benefits" onClick={closeMenu}>Why electric</a>
          <a href="#inquiry" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="#inquiry" onClick={closeMenu}>
            Get started <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              <span className="status-dot" /> YOUR ELECTRIC VEHICLE JOURNEY
            </span>

            <h1>
              Find your next
              <br />
              <span>electric drive.</span>
            </h1>

            <p>
              Exploring an electric vehicle? Compare popular Tesla models,
              understand your options, and tell us what you're looking for.
            </p>

            <div className="hero-actions">
              <a className="button button-light" href="#vehicles">
                Explore models <ArrowRight size={18} />
              </a>
              <a className="button button-outline" href="#inquiry">
                Request information
              </a>
            </div>

            <div className="hero-note">
              <ShieldCheck size={17} />
              Independent vehicle inquiry service
            </div>
          </div>

          <div className="hero-image">
            <img
              src={vehicles[0].image}
              alt="Electric vehicle on the road"
            />
            <div className="image-caption">
              <span>MAKE YOUR NEXT MOVE</span>
              <strong>Explore electric mobility</strong>
            </div>
          </div>
        </section>

        <section className="trust-strip" id="benefits">
          <div>
            <BatteryCharging />
            <span>
              <strong>Electric driving</strong>
              <small>Explore EV ownership</small>
            </span>
          </div>
          <div>
            <Gauge />
            <span>
              <strong>Compare your options</strong>
              <small>Find a model that fits</small>
            </span>
          </div>
          <div>
            <Clock />
            <span>
              <strong>Your timeline</strong>
              <small>Plan at your own pace</small>
            </span>
          </div>
        </section>

        <section className="vehicles-section section" id="vehicles">
          <div className="section-heading">
            <div>
              <span className="eyebrow">EXPLORE YOUR OPTIONS</span>
              <h2>Which Tesla fits your life?</h2>
            </div>
            <p>
              Start with two popular models, then tell us which one you would
              like to learn more about.
            </p>
          </div>

          <div className="vehicle-grid">
            {vehicles.map((vehicle) => (
              <article className="vehicle-card" key={vehicle.name}>
                <div className="vehicle-image">
                  <img src={vehicle.image} alt={vehicle.name} loading="lazy" />
                  <span className="vehicle-type">{vehicle.type}</span>
                </div>

                <div className="vehicle-info">
                  <h3>{vehicle.name}</h3>
                  <p>{vehicle.description}</p>

                  <ul>
                    {vehicle.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={16} /> {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    className="text-link"
                    href="#inquiry"
                    onClick={() =>
                      setForm((previous) => ({
                        ...previous,
                        model: vehicle.name,
                      }))
                    }
                  >
                    Ask about {vehicle.name} <ArrowRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="fine-print">
            Specifications, range, pricing, incentives, and availability vary
            by model year, configuration, location, and date. Verify current
            details with Tesla or an authorized seller.
          </p>
        </section>

        <section className="inquiry-section section" id="inquiry">
          <div className="inquiry-copy">
            <span className="eyebrow">LET'S GET STARTED</span>
            <h2>Tell us what you're looking for.</h2>
            <p>
              Share a few details about your vehicle search. When you submit
              the form, WhatsApp will open with your inquiry ready to send.
            </p>

            <div className="contact-points">
              <div>
                <CheckCircle2 />
                <span>Tell us which model interests you.</span>
              </div>
              <div>
                <CheckCircle2 />
                <span>Share your preferred budget and timing.</span>
              </div>
              <div>
                <CheckCircle2 />
                <span>Continue the conversation on WhatsApp.</span>
              </div>
            </div>
          </div>

          <div className="form-card">
            {submitted && (
              <div className="success-message">
                Your inquiry is prepared. Complete sending it in WhatsApp.
              </div>
            )}

            <form onSubmit={submitForm}>
              <div className="form-title">
                <h3>Vehicle inquiry</h3>
                <span>Fields marked * are required</span>
              </div>

              <label>
                Full name *
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </label>

              <div className="form-row">
                <label>
                  Model of interest *
                  <span className="select-wrap">
                    <select
                      name="model"
                      value={form.model}
                      onChange={update}
                      required
                    >
                      <option value="">Select a model</option>
                      <option value="Model 3">Model 3</option>
                      <option value="Model Y">Model Y</option>
                      <option value="Other Tesla model">Other</option>
                    </select>
                    <ChevronDown size={16} />
                  </span>
                </label>

                <label>
                  US state *
                  <input
                    name="state"
                    value={form.state}
                    onChange={update}
                    placeholder="e.g. California"
                    required
                  />
                </label>
              </div>

              <label>
                Approximate budget
                <select name="budget" value={form.budget} onChange={update}>
                  <option value="">Choose a range (optional)</option>
                  <option value="Under $30,000">Under $30,000</option>
                  <option value="$30,000–$40,000">$30,000–$40,000</option>
                  <option value="$40,000–$55,000">$40,000–$55,000</option>
                  <option value="$55,000+">$55,000+</option>
                  <option value="Still exploring">Still exploring</option>
                </select>
              </label>

              <label>
                When are you looking to buy?
                <select
                  name="timeline"
                  value={form.timeline}
                  onChange={update}
                >
                  <option value="">Choose a timeline (optional)</option>
                  <option value="As soon as possible">As soon as possible</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="Within 3 months">Within 3 months</option>
                  <option value="In 3–6 months">In 3–6 months</option>
                  <option value="Just researching">Just researching</option>
                </select>
              </label>

              <label>
                WhatsApp number or email *
                <input
                  name="contact"
                  value={form.contact}
                  onChange={update}
                  placeholder="How can we reach you?"
                  required
                />
              </label>

              <label className="consent-row">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={update}
                  required
                />
                <span>
                  I agree to send these details to the site operator to respond
                  to my vehicle inquiry.
                </span>
              </label>

              <button className="button button-dark submit-button" type="submit">
                Continue to WhatsApp <ArrowRight size={18} />
              </button>

              <p className="privacy-note">
                This form opens WhatsApp; it does not save your information
                directly on this website. Please avoid submitting sensitive
                financial information.
              </p>
            </form>
          </div>
        </section>

        <section className="closing-banner">
          <Zap size={24} />
          <div>
            <h2>Ready to explore electric?</h2>
            <p>Start with your preferred model and your questions.</p>
          </div>
          <a className="button button-light" href="#inquiry">
            Make an inquiry <ArrowRight size={17} />
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">E</span>
          <span>EV <strong>BUYER GUIDE</strong></span>
        </a>

        <p>
          Independent vehicle inquiry service. Not affiliated with, sponsored
          by, or endorsed by Tesla, Inc.
        </p>

        <div className="footer-links">
          <a href="https://www.tesla.com" target="_blank" rel="noreferrer">
            Official Tesla website
          </a>
          <a href="#inquiry">Contact</a>
        </div>

        <small>© {new Date().getFullYear()} EV Buyer Guide</small>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
