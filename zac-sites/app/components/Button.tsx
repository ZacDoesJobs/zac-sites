import Link from "next/link";
export default function Button({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href}
            className="inline-flex items-center rounded-xl px-5 py-3 text-sm font-medium
                 bg-pink-500 text-white hover:bg-pink-600 transition-shadow shadow-md">
            {children}
        </Link>
    );
}
