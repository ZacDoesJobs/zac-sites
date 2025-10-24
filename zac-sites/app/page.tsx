import Image from "next/image";
import Button from "./components/Button";
import Section from "./components/Section";

const services = [
    { title: "Starter One-Pager", features: ["Hero + services + contact", "Mobile-first", "Basic SEO"], price: "From $X" },
    { title: "Business (4–6 pages)", features: ["Services, About, Gallery, FAQ", "Speed & security", "Google Business setup"], price: "From $Y" },
    { title: "Bookings / Shop", features: ["Online bookings or products", "Secure checkout", "Handover video"], price: "From $Z" },
];

const faqs = [
    { q: "How fast can we launch?", a: "Usually 7–10 days after you send content. Rush options available." },
    { q: "Do I own the site?", a: "Yes. You get full admin access and a handover video." },
    { q: "What about ongoing help?", a: "Optional care plans for updates, backups and small edits." },
];

export default function Home() {
    return (
        <main className="max-w-6xl mx-auto px-6 md:px-8">
            {/* Hero */}
            <header className="pt-16 md:pt-24 pb-10 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-white shadow px-3 py-1 text-xs mb-4">
                    <span className="h-2 w-2 rounded-full bg-pink-500" /> Melbourne web design
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                    Websites for people who don’t do tech.
                </h1>
                <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                    I build clean, fast, mobile-first sites for small businesses. Fixed price. Fast turnaround.
                </p>
                <div className="mt-6 flex items-center justify-center gap-3">
                    <Button href="#work">See work</Button>
                    <a href="#contact" className="inline-flex items-center px-5 py-3 text-sm font-medium rounded-xl bg-white border hover:bg-slate-100">
                        Get a quote
                    </a>
                </div>
                <div className="relative mx-auto mt-10 h-72 w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg bg-white">
                    <Image src="/hero-mock.png" alt="Portfolio mock" fill priority className="object-cover" />
                </div>
            </header>

            {/* Trust */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center py-8 border-y">
                {["Fast", "SEO-ready", "Secure", "Easy to edit"].map((t) => (
                    <div key={t} className="text-center text-slate-500 text-sm">{t}</div>
                ))}
            </div>

            {/* Services */}
            <Section id="services" title="Packages that make sense">
                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((s) => (
                        <div key={s.title} className="rounded-2xl bg-white p-6 shadow-sm border">
                            <h3 className="font-semibold text-lg">{s.title}</h3>
                            <ul className="mt-3 space-y-2 text-sm">
                                {s.features.map(f => <li key={f} className="flex gap-2"><span>•</span>{f}</li>)}
                            </ul>
                            <div className="mt-4 font-semibold">{s.price}</div>
                            <div className="mt-4"><Button href="#contact">Choose this</Button></div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Work */}
            <Section id="work" title="Recent work">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <a key={i} href={`/work/project-${i}`} className="group">
                            <div className="relative h-56 rounded-2xl overflow-hidden shadow-sm border bg-white">
                                <Image src={`/work/${i}.jpg`} alt={`Project ${i}`} fill className="object-cover group-hover:scale-105 transition" />
                            </div>
                            <div className="mt-2 font-medium">Project {i}</div>
                            <div className="text-sm text-slate-500">Local business website</div>
                        </a>
                    ))}
                </div>
            </Section>

            {/* Process */}
            <Section title="How it works">
                <ol className="grid md:grid-cols-4 gap-6">
                    {["Quick chat", "Design preview", "Build & review", "Launch & handover"].map((step, idx) => (
                        <li key={step} className="rounded-2xl bg-white p-6 shadow-sm border">
                            <div className="h-8 w-8 rounded-full bg-pink-500 text-white grid place-items-center font-semibold">{idx + 1}</div>
                            <div className="mt-3 font-semibold">{step}</div>
                            <p className="text-sm mt-1">Simple, transparent and collaborative.</p>
                        </li>
                    ))}
                </ol>
            </Section>

            {/* Testimonials */}
            <Section title="What clients say">
                <div className="grid md:grid-cols-3 gap-6">
                    {["Super easy process and a great result.", "Phone calls and bookings increased in week one.", "Fixed-price and on time—love it."].map(t => (
                        <blockquote key={t} className="rounded-2xl bg-white p-6 shadow-sm border">
                            “{t}”
                            <div className="mt-2 text-sm text-slate-500">— Happy client</div>
                        </blockquote>
                    ))}
                </div>
            </Section>

            {/* FAQs */}
            <Section title="FAQs">
                <div className="grid md:grid-cols-3 gap-6">
                    {faqs.map(f => (
                        <div key={f.q} className="rounded-2xl bg-white p-6 shadow-sm border">
                            <div className="font-semibold">{f.q}</div>
                            <p className="text-sm mt-2">{f.a}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Contact */}
            <Section id="contact" title="Tell me about your business">
                <div className="grid md:grid-cols-2 gap-6">
                    <form action="https://formspree.io/f/your-id" method="POST"
                        className="rounded-2xl bg-white p-6 shadow-sm border">
                        <div className="grid gap-4">
                            <input name="name" placeholder="Your name" className="border rounded-lg px-4 py-3" required />
                            <input name="email" placeholder="Email" type="email" className="border rounded-lg px-4 py-3" required />
                            <input name="business" placeholder="Business name" className="border rounded-lg px-4 py-3" />
                            <textarea name="message" placeholder="What do you need?"
                                className="border rounded-lg px-4 py-3 min-h-28" />
                            <button className="rounded-xl px-5 py-3 bg-pink-500 text-white font-medium hover:bg-pink-600">
                                Get a quote
                            </button>
                        </div>
                    </form>
                    <div className="rounded-2xl bg-white p-6 shadow-sm border">
                        <h3 className="font-semibold">Prefer to chat?</h3>
                        <p className="text-sm mt-2">Book a 10-minute call and I’ll suggest 3 homepage ideas.</p>
                        <div className="mt-4"><Button href="https://calendly.com/your-link">Book a call</Button></div>
                        <p className="text-sm mt-6 text-slate-500">ABN available • Melbourne-based • Handover video included</p>
                    </div>
                </div>
            </Section>

            <footer className="py-10 text-center text-sm text-slate-500">
                © {new Date().getFullYear()} Zac. All rights reserved.
            </footer>
        </main>
    );
}
