import { Sidebar } from "@/components/Sidebar";
import { RepositoryList } from "@/components/RepositoryList";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const Index = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`flex min-h-screen bg-white ${
        isMobile ? "flex-col" : "flex-row"
      }`}
    >
      {/* Sidebar or Header for Mobile */}
      {isMobile ? (
        <div>
          <header className="fixed top-0 left-0 w-full bg-blue-600 p-4 text-black shadow-md z-20">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <h1 className="text-lg font-bold">Code Ant AI</h1>
              <button
                className="bg-blue-800 p-2 rounded-md"
                onClick={toggleMenu}
              >
                Menu
              </button>
            </div>

            {menuOpen && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg z-10">
                <ul className="p-4">
                  <li className="py-2 border-b">
                    <a href="#repositories">Repositories</a>
                  </li>
                  <li className="py-2 border-b">
                    <a href="#ai-code-review">AI Code Review</a>
                  </li>
                  <li className="py-2 border-b">
                    <a href="#cloud-security">Cloud Security</a>
                  </li>
                  <li className="py-2 border-b">
                    <a href="#how-to-use">How to Use</a>
                  </li>
                  <li className="py-2 border-b">
                    <a href="#settings">Settings</a>
                  </li>
                  <li className="py-2 border-b">
                    <a href="#support">Support</a>
                  </li>
                  <li className="py-2 border-b">
                    <a href="#logout">Logout</a>
                  </li>
                </ul>
              </div>
            )}
          </header>
        </div>
      ) : (
        <Sidebar />
      )}

      {/* Repository List */}
      <main
        className={`flex-1 ${
          isMobile ? "pt-[64px]" : "" // Add padding-top for mobile to account for header height
        }`}
      >
        <RepositoryList />
      </main>
    </div>
  );
};

export default Index;
