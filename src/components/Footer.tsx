import { Link } from "@tanstack/react-router";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="label-mono mb-3">Currently</p>
          <p className="font-display text-3xl leading-tight text-balance">
            Open to research roles in AI evaluation &amp; measurement, conversational AI, and
            language data.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="label-mono mb-3">Navigate</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/projects" className="link-underline">Case Studies</Link></li>
            <li><Link to="/now" className="link-underline">Now</Link></li>
            <li><Link to="/resume" className="link-underline">Résumé</Link></li>
            <li><Link to="/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="label-mono mb-3">Elsewhere</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:emmakhare24@gmail.com" className="link-underline">emmakhare24@gmail.com</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/emma-khare/" target="_blank" rel="noreferrer" className="link-underline">LinkedIn ↗</a>
            </li>
            <li>
              <a href="https://github.com/emma-khare" target="_blank" rel="noreferrer" className="link-underline">GitHub ↗</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6 flex flex-wrap items-center justify-between gap-4">
          <p className="label-mono no-rule">© {year} Emma Khare</p>
          <p className="label-mono no-rule">Available for research roles</p>
        </div>
      </div>
    </footer>
  );
}
