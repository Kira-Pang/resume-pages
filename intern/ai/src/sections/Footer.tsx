export default function Footer() {
  return (
    <footer className="py-8 bg-[var(--morandi-dark)] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-[var(--morandi-dark-text-secondary)]">
          © 2026 庞筱妍. All rights reserved.
        </p>
        <p className="font-body text-xs text-[var(--morandi-dark-text-secondary)]">
          产品运营实习生 · 澳门大学
        </p>
      </div>
    </footer>
  );
}
