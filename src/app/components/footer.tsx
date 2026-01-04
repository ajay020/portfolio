export default function Footer() {
    return (
        <footer className="border-t border-slate-800 mt-24">
            <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-slate-500 flex justify-between">
                <span>© {new Date().getFullYear()} Ajay</span>
                <span>Built with Next.js</span>
            </div>
        </footer>
    );
}
