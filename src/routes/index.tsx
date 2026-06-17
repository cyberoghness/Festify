import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Festify 2026 — Register. Perform. Shine." },
      { name: "description", content: "Register for Festify 2026 at Springfield Institute of Technology. Three days of competitions, performances, and campus culture." },
      { property: "og:title", content: "Festify 2026 — Register. Perform. Shine." },
      { property: "og:description", content: "Register for Festify 2026 at Springfield Institute of Technology." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: FestifyLanding,
});

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScv6vGhxLsSx8rWLpojuArlLpvTT5cDt-BsZ9DPx9hnJoTONA/formResponse";

const FIELD = {
  fullName: "entry.1511605327",
  course: "entry.961816764",
  roll: "entry.2006689263",
  phone: "entry.899847331",
  email: "entry.2017240946",
  category: "entry.1371094542",
  participation: "entry.991110847",
  teamName: "entry.1265966529",
  confirm: "entry.335093963",
} as const;

const CATEGORIES = ["Singing", "Dancing", "Drama", "Photography", "Quiz", "Debate", "Coding Competition", "Art & Craft"];

function FestifyLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <PastEvents />
        <Gallery />
        <WhyParticipate />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#events", label: "Events" },
    { href: "#gallery", label: "Gallery" },
    { href: "#reviews", label: "Reviews" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-xl font-bold tracking-tight">
          Fest<span className="text-primary">ify</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#register" className="hidden sm:inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary-dark transition-colors">
            Register Now
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-border">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="container-page py-3 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a onClick={() => setOpen(false)} href={l.href} className="block py-2 text-sm text-muted-foreground hover:text-foreground">{l.label}</a>
              </li>
            ))}
            <li><a onClick={() => setOpen(false)} href="#register" className="block py-2 text-sm font-semibold text-primary">Register Now</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface to-background" />
      <div className="container-page pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT */}
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Festify 2026 · Registrations Open
            </span>
            <h1 className="mt-5 font-display text-[30px] sm:text-[36px] lg:text-[56px] leading-[1.05] font-bold text-foreground">
              Showcase Your Talent.
              <br />
              <span className="text-primary">Compete. Create. Celebrate.</span>
            </h1>
            <p id="about" className="mt-5 text-base lg:text-lg text-muted-foreground max-w-xl">
              Join Festify 2026, a three-day celebration of creativity, competition, innovation, and campus culture. Participate in exciting events, meet talented students, and make unforgettable memories.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-background p-6 shadow-card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Festify 2026</p>
                  <p className="mt-1 font-display text-lg font-semibold">Springfield Institute of Technology</p>
                </div>
                <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-primary">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                </div>
              </div>
              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Event Dates</p>
                  <p className="mt-1 text-sm font-semibold">12 – 14 September 2026</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Registration Deadline</p>
                  <p className="mt-1 text-sm font-semibold">9 September 2026</p>
                </div>
              </div>
            </div>

            <div id="events" className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { v: "2000+", l: "Participants" },
                { v: "20+", l: "Colleges" },
                { v: "8", l: "Event Categories" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-border bg-background p-4 text-center transition-all hover:-translate-y-0.5 hover:shadow-card">
                  <div className="font-display text-xl sm:text-2xl font-bold text-primary">{s.v}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — REGISTRATION FORM */}
          <div className="reveal lg:sticky lg:top-24">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [participation, setParticipation] = useState("Solo");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    const required = ["fullName", "course", "roll", "phone", "email", "category", "participation"];
    required.forEach((k) => {
      if (!String(fd.get(k) ?? "").trim()) errs[k] = "Required";
    });
    const email = String(fd.get("email") ?? "");
    if (email && !/^\S+@\S+\.\S+$/.test(email)) errs.email = "Invalid email";
    const phone = String(fd.get("phone") ?? "");
    if (phone && !/^[\d\s+\-()]{7,}$/.test(phone)) errs.phone = "Invalid phone";
    if (participation === "Group" && !String(fd.get("teamName") ?? "").trim()) errs.teamName = "Required";
    if (!fd.get("confirm")) errs.confirm = "Please confirm";

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);

    const body = new FormData();
    body.append(FIELD.fullName, String(fd.get("fullName") ?? ""));
    body.append(FIELD.course, String(fd.get("course") ?? ""));
    body.append(FIELD.roll, String(fd.get("roll") ?? ""));
    body.append(FIELD.phone, String(fd.get("phone") ?? ""));
    body.append(FIELD.email, String(fd.get("email") ?? ""));
    body.append(FIELD.category, String(fd.get("category") ?? ""));
    body.append(FIELD.participation, String(fd.get("participation") ?? ""));
    if (participation === "Group") body.append(FIELD.teamName, String(fd.get("teamName") ?? ""));
    body.append(FIELD.confirm, "I confirm that the information provided above is accurate and I agree to follow the event rules and regulations.");

    try {
      await fetch(GOOGLE_FORM_URL, { method: "POST", mode: "no-cors", body });
    } catch {
      // no-cors response is opaque; ignore
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div id="register" className="rounded-2xl border border-border bg-background p-8 sm:p-10 shadow-elevated text-center">
        <div className="mx-auto h-14 w-14 rounded-full bg-success/10 grid place-items-center text-2xl">🎉</div>
        <h3 className="mt-5 font-display text-2xl font-bold">Registration Successful!</h3>
        <p className="mt-2 text-muted-foreground">Thank you for registering for Festify 2026. We look forward to seeing you at the event.</p>
        <button
          onClick={() => { setSubmitted(false); formRef.current?.reset(); setParticipation("Solo"); }}
          className="mt-6 inline-flex items-center justify-center rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:bg-surface transition-colors"
        >
          Register Another Participant
        </button>
      </div>
    );
  }

  return (
    <form
      id="register"
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-background p-6 sm:p-8 shadow-elevated"
    >
      <div className="mb-6">
        <h2 className="font-display text-2xl font-bold">Register for Festify</h2>
        <p className="mt-1 text-sm text-muted-foreground">Complete the form below to reserve your spot.</p>
      </div>
      <div className="grid gap-4">
        <Field name="fullName" label="Full Name" placeholder="Enter your full name" error={errors.fullName} />
        <div className="grid sm:grid-cols-2 gap-4">
          <Field name="course" label="Course Name" placeholder="Enter your course name" error={errors.course} />
          <Field name="roll" label="Roll Number" placeholder="Enter roll number" error={errors.roll} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field name="phone" type="tel" label="Phone Number" placeholder="Enter phone number" error={errors.phone} />
          <Field name="email" type="email" label="Email Address" placeholder="Enter email address" error={errors.email} />
        </div>
        <div>
          <Label htmlFor="category">Event Category</Label>
          <select id="category" name="category" required defaultValue="" className={selectCls(!!errors.category)}>
            <option value="" disabled>Select a category</option>
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.category && <ErrText>{errors.category}</ErrText>}
        </div>
        <div>
          <Label>Participation Type</Label>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {["Solo", "Duet", "Group"].map((opt) => (
              <label key={opt} className={`cursor-pointer rounded-lg border px-3 py-2.5 text-center text-sm font-medium transition-all ${participation === opt ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-foreground/30"}`}>
                <input
                  type="radio"
                  name="participation"
                  value={opt}
                  checked={participation === opt}
                  onChange={() => setParticipation(opt)}
                  className="sr-only"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
        {participation === "Group" && (
          <Field name="teamName" label="Team Name" placeholder="Enter team name" error={errors.teamName} />
        )}
        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input type="checkbox" name="confirm" className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary" />
          <span>I confirm that the information provided above is accurate and I agree to follow the event rules and regulations.</span>
        </label>
        {errors.confirm && <ErrText>{errors.confirm}</ErrText>}

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 w-full inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-dark hover:-translate-y-0.5 disabled:opacity-60 disabled:translate-y-0"
        >
          {submitting ? "Submitting..." : "Register Now"}
        </button>
        <p className="text-center text-xs text-muted-foreground">Your details are securely submitted. We never spam.</p>
      </div>
    </form>
  );
}

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return <label htmlFor={htmlFor} className="block text-sm font-medium text-foreground">{children}</label>;
}
function ErrText({ children }: { children: React.ReactNode }) {
  return <p className="mt-1 text-xs text-red-600">{children}</p>;
}
const inputCls = (err: boolean) =>
  `mt-1.5 w-full rounded-lg border ${err ? "border-red-400" : "border-border"} bg-background px-3.5 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all`;
const selectCls = (err: boolean) => inputCls(err) + " appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%236B7280%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-no-repeat bg-[right_12px_center] pr-9";

function Field({ name, label, placeholder, type = "text", error }: { name: string; label: string; placeholder: string; type?: string; error?: string }) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <input id={name} name={name} type={type} placeholder={placeholder} required className={inputCls(!!error)} />
      {error && <ErrText>{error}</ErrText>}
    </div>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function PastEvents() {
  const events = [
    { t: "Rhythm Rush 2024", d: "An electrifying inter-college dance competition.", s: "650 Registrations", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=900&q=70" },
    { t: "CodeStorm 2024", d: "24-hour hackathon with builders from across the country.", s: "400 Participants", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=70" },
    { t: "Lens Legends", d: "Photography exhibition showcasing the best student work.", s: "300 Entries", img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=900&q=70" },
    { t: "Voice Arena", d: "Spirited debates on the issues that matter today.", s: "150 Speakers", img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=70" },
  ];
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="container-page">
        <SectionHeading eyebrow="Highlights" title="Past Event Highlights" subtitle="A glimpse at what our community has built together." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((e) => (
            <article key={e.t} className="group overflow-hidden rounded-2xl border border-border bg-background shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
              <div className="aspect-[4/3] overflow-hidden bg-surface">
                <img src={e.img} alt={e.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{e.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.d}</p>
                <p className="mt-3 text-xs font-semibold text-primary">{e.s}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=70", h: "tall", a: "Performance on stage" },
    { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=70", h: "short", a: "Conference crowd" },
    { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=70", h: "short", a: "Concert lights" },
    { src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=70", h: "tall", a: "Workshop session" },
    { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=70", h: "short", a: "Group celebration" },
    { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=70", h: "tall", a: "Awards ceremony" },
    { src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=800&q=70", h: "short", a: "Live music" },
    { src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=70", h: "tall", a: "Dance performance" },
  ];
  return (
    <section id="gallery" className="py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading eyebrow="Gallery" title="Moments From Previous Editions" subtitle="The energy, the people, the memories." />
        <div className="mt-12 columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <div key={i} className="break-inside-avoid overflow-hidden rounded-xl border border-border bg-surface">
              <img
                src={img.src}
                alt={img.a}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-500 hover:scale-105 ${img.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyParticipate() {
  const items = [
    { icon: "🏆", t: "Win Exciting Prizes", d: "Cash prizes, gadgets, and goodies across every category." },
    { icon: "🎤", t: "Showcase Your Talent", d: "Perform on a real stage in front of a live audience." },
    { icon: "🤝", t: "Meet Students From Other Colleges", d: "Build connections that last well beyond the festival." },
    { icon: "📁", t: "Build Your Portfolio", d: "Win certificates and entries that elevate your résumé." },
  ];
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="container-page">
        <SectionHeading eyebrow="Why Festify" title="Why Participate" subtitle="More than an event — a launchpad." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.t} className="rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-card">
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-2xl grid place-items-center">{i.icon}</div>
              <h3 className="mt-4 font-display text-lg font-semibold">{i.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { n: "Riya Verma", r: "Photography Winner", q: "The registration process was smooth and the event organization was excellent." },
    { n: "Aditya Singh", r: "Hackathon Participant", q: "One of the best college events I have attended." },
    { n: "Kritika Mehta", r: "Dance Team Captain", q: "Our team had an amazing experience from registration to final performance." },
    { n: "Harsh Raj", r: "Quiz Finalist", q: "Professional management and excellent event execution." },
  ];
  return (
    <section id="reviews" className="py-16 lg:py-24">
      <div className="container-page">
        <SectionHeading eyebrow="Testimonials" title="What Participants Say" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <figure key={r.n} className="rounded-2xl border border-border bg-background p-6 shadow-card">
              <div className="text-primary" aria-label="5 stars">★★★★★</div>
              <blockquote className="mt-3 text-sm text-foreground">"{r.q}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 grid place-items-center font-semibold text-primary">{r.n[0]}</div>
                <div>
                  <div className="text-sm font-semibold">{r.n}</div>
                  <div className="text-xs text-muted-foreground">{r.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    { q: "Can I participate in multiple events?", a: "Yes. You can register for multiple categories as long as the schedules don't conflict." },
    { q: "Is registration free?", a: "Registration is free for most events. A few specialized competitions may carry a small fee, mentioned on the event page." },
    { q: "Can I register as a group?", a: "Absolutely. Select 'Group' in the registration form and provide your team name." },
    { q: "How will I receive event updates?", a: "All updates will be sent to the email address and phone number you provide at registration." },
    { q: "What documents should I bring?", a: "Carry a printed copy of your confirmation along with a valid college ID card on event days." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-16 lg:py-24 bg-surface">
      <div className="container-page max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-background">
          {qs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium">{item.q}</span>
                  <span className={`text-primary transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                {isOpen && <div className="px-5 pb-5 -mt-1 text-sm text-muted-foreground">{item.a}</div>}
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <a href="#register" className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition-colors">
            Register for Festify 2026
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page py-12 grid gap-10 md:grid-cols-3">
        <div>
          <a href="#top" className="font-display text-xl font-bold">Fest<span className="text-primary">ify</span></a>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">A three-day celebration of creativity, competition and campus culture.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground">About</a></li>
            <li><a href="#events" className="hover:text-foreground">Events</a></li>
            <li><a href="#gallery" className="hover:text-foreground">Gallery</a></li>
            <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="mailto:events@festify.edu" className="hover:text-foreground">events@festify.edu</a></li>
            <li>+91 98765 43210</li>
          </ul>
          <div className="mt-4 flex gap-3">
            {["Instagram", "Facebook", "LinkedIn"].map((s) => (
              <a key={s} href="#" aria-label={s} className="h-9 w-9 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <span className="text-xs font-semibold">{s[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page py-5 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <p>© 2026 Festify. All rights reserved.</p>
          <p>Springfield Institute of Technology</p>
        </div>
      </div>
    </footer>
  );
}

// Avoid unused import warning
void useEffect;