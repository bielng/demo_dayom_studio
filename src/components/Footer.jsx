import { Logo, Twitter, Facebook, LinkedIn } from "./Icons.jsx";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-ink-200">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <Logo />
            <span className="font-semibold text-ink-900">Dayom Lab</span>
          </div>
          <p className="mt-4 text-sm text-ink-500 max-w-xs leading-relaxed">
            Building open NLP infrastructure and datasets for South Sudan's under
            represented languages.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:col-span-2 md:justify-self-end">
          <div>
            <p className="text-sm font-semibold text-ink-900 mb-3">Product</p>
            <ul className="space-y-2 text-sm text-ink-500">
              <li><a href="#datasets" className="hover:text-ink-900 transition">Datasets</a></li>
              <li><a href="#models" className="hover:text-ink-900 transition">Models</a></li>
              <li><a href="#" className="hover:text-ink-900 transition">API Access</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-900 mb-3">Company</p>
            <ul className="space-y-2 text-sm text-ink-500">
              <li><a href="#about" className="hover:text-ink-900 transition">About Us</a></li>
              <li><a href="#initiatives" className="hover:text-ink-900 transition">Initiatives</a></li>
              <li><a href="#contact" className="hover:text-ink-900 transition">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-200">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-500 text-center sm:text-left">
          <p>Copyright © {new Date().getFullYear()} Dayom Lab. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Twitter" className="hover:text-ink-900 transition"><Twitter /></a>
            <a href="#" aria-label="Facebook" className="hover:text-ink-900 transition"><Facebook /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-ink-900 transition"><LinkedIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
