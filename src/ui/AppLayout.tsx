import { Link, NavLink, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-neutral-950/80 backdrop-blur">
        <nav className="section flex items-center justify-between h-16">
          <Link to="/" className="font-extrabold tracking-tight text-xl">
            <span className="text-brand">Baile</span> do Gonzaga
          </Link>
          <div className="flex items-center gap-2">
            <NavItem to="/">Início</NavItem>
            <NavItem to="/integrantes">A Banda</NavItem>
            <NavItem to="/fotos">Fotos</NavItem>
            <NavItem to="/contato">Contato</NavItem>
            <a className="btn-primary" href="https://wa.me/5511989490162?text=Oi%20Gengibre!%20Quero%20fechar%20um%20Baile%20do%20Gonzaga." target="_blank" rel="noreferrer">
              Fechar um baile
            </a>
          </div>
        </nav>
      </header>
      <main><Outlet /></main>
      <footer className="border-t border-zinc-800">
        <div className="section py-10 text-sm text-zinc-400 flex flex-col md:flex-row items-center md:justify-between gap-3">
          <p>© {new Date().getFullYear()} Baile do Gonzaga.</p>
          <p className="opacity-80">Caravana que leva o forró <b>completo</b> para qualquer lugar.</p>
        </div>
      </footer>
    </div>
  );
}
function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return <NavLink to={to} className={({isActive})=>`btn-ghost ${isActive?'bg-zinc-800':''}`}>{children}</NavLink>;
}
