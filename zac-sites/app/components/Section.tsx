export default function Section({ id, title, children }: {
    id?: string; title?: string; children: React.ReactNode;
}) {
    return (
        <section id={id} className="py-16 md:py-24">
            {title && <h2 className="mb-6 text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>}
            <div className="text-slate-600">{children}</div>
        </section>
    );
}
