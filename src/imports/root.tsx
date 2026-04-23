import { Link, Outlet, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Root() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Dashboard" },
    { path: "/compose", label: "Compose new message" },
    { path: "/profile", label: "Profile" },
    { path: "/settings", label: "Settings" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[#f6ede4]">
      {/* Header */}
      <header className="bg-white border-b-2 border-black h-16 sticky top-0 z-10">
        <div className="h-full px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 border-2 border-black"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="flex items-baseline gap-1">
              <span className="text-lg" style={{ fontFamily: 'Press Start 2P, monospace' }}>inbox</span>
              <span className="text-2xl" style={{ fontFamily: 'Apricots, cursive' }}>lab</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block w-48 h-8 border-2 border-black bg-[#f6ede4]"></div>
            <div className="w-8 h-8 border-2 border-black bg-[#ec78b8]"></div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:static w-64 bg-white border-r-2 border-black h-[calc(100vh-4rem)] transition-transform duration-300 z-20`}
        >
          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`block p-3 border-2 ${
                  isActive(item.path)
                    ? "bg-[#ec78b8] text-white border-black"
                    : "bg-white text-black border-black hover:bg-[#f6ede4]"
                }`}
              >
                <span className="font-mono text-sm">{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}