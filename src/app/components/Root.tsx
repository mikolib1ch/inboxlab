import { Link, Outlet, useLocation } from "react-router";

import { Menu, X, Settings } from "lucide-react";
import { useState, useEffect } from "react";

export function Root() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  // Check for unread emails in localStorage (same logic as Inbox)
  useEffect(() => {
    function checkUnread() {
      let unread = false;
      try {
        // Get hardcoded emails' read state
        const readMap =
          JSON.parse(localStorage.getItem("inboxReadMap") || "{}") || {};
        // Get user emails
        const localMsgs = JSON.parse(
          localStorage.getItem("inboxMessages") || "[]",
        );
        // Check hardcoded emails (ids 1,2,3)
        for (let id of [1, 2, 3]) {
          if (!readMap[id]) {
            unread = true;
            break;
          }
        }
        // Check user emails
        if (!unread) {
          if (
            Array.isArray(localMsgs) &&
            localMsgs.some((msg) => msg && msg.read === false)
          ) {
            unread = true;
          }
        }
      } catch {}
      setHasUnread(unread);
    }
    checkUnread();
    // Listen for storage changes
    window.addEventListener("storage", checkUnread);
    // Poll every 2s in case storage event doesn't fire
    const interval = setInterval(checkUnread, 2000);
    return () => {
      window.removeEventListener("storage", checkUnread);
      clearInterval(interval);
    };
  }, []);

  const navItems = [
    { path: "/", label: "Dashboard" },
    { path: "/inbox", label: "Inbox" },
    { path: "/badge-gallery", label: "Badge Gallery" },
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
              <span
                className="text-lg"
                style={{
                  fontFamily: '"Press Start 2P", system-ui',
                  fontWeight: 400,
                }}
              >
                inbox
              </span>
              <span
                className="text-2xl"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                lab
              </span>
            </div>
          </div>
          <Link
            to="/settings"
            className="w-10 h-10 border-2 border-black bg-[#ec78b8] flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <Settings size={20} className="text-white" />
          </Link>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:static w-64 bg-white border-l-2 border-r-2 border-b-2 border-black h-[calc(100vh-4rem)] transition-transform duration-300 z-20`}
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
                <span
                  className="font-mono text-sm flex items-center gap-2"
                  style={
                    item.label === "Inbox"
                      ? {
                          fontFamily: '"Press Start 2P", system-ui',
                          fontWeight: 400,
                        }
                      : {}
                  }
                >
                  {item.label}
                  {item.label === "Inbox" && hasUnread && (
                    <span className="w-2 h-2 bg-[#ec78b8] rounded-full inline-block ml-1" />
                  )}
                </span>
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
