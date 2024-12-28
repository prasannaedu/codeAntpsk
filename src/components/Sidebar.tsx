import { Home, Shield, Settings, HelpCircle, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, Circle } from "lucide-react";
const menuItems = [
  { icon: Home, label: "Repositories", path: "/" },
  { icon: Shield, label: "Cloud Security", path: "/security" },
  { icon: HelpCircle, label: "How to Use", path: "/help" },
  { icon: Settings, label: "Settings", path: "/settings" },
];
const repositories = [
  {
    name: "design-system",
    language: "Swift",
    size: "7,723 KB",
    updatedAt: "1 day ago",
  },
  {
    name: "codeant-ci-app",
    language: "JavaScript",
    size: "5,871 KB",
    updatedAt: "2 days ago",
  },
  {
    name: "analytics-dashboard",
    language: "Python",
    size: "8,421 KB",
    updatedAt: "5 days ago",
  },
  {
    name: "mobile-app",
    language: "Swift",
    size: "2,358 KB",
    updatedAt: "5 days ago",
  },
  {
    name: "e-commerce-platform",
    language: "Java",
    size: "6,125 KB",
    updatedAt: "6 days ago",
  },
];

const languageColors: Record<string, string> = {
  Swift: "#ffac45",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
}
export const Sidebar = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen">
  {/* Sidebar */}
  <div className="bg-white text-black w-64 flex-shrink-0">
        <div className="p-6">
          <h2 className="text-2xl font-bold">CodeAnt AI</h2>
          <select
            className="mt-4 bg-white text-black border-2 p-2 rounded-lg w-full"
            defaultValue="UtkarshDhairyaPanwar"
          >
            <option value="UtkarshDhairyaPanwar">UtkarshDhairyaPanwar</option>
          </select>
          <ul className="mt-8 space-y-4">
            <li className="hover:text-gray-300 cursor-pointer">Repositories</li>
            <li className="hover:text-gray-300 cursor-pointer">AI Code Review</li>
            <li className="hover:text-gray-300 cursor-pointer">Cloud Security</li>
            <li className="hover:text-gray-300 cursor-pointer">How to Use</li>
            <li className="hover:text-gray-300 cursor-pointer">Settings</li>
            <li className="hover:text-gray-300 cursor-pointer">Support</li>
            <li className="hover:text-gray-300 cursor-pointer">Logout</li>
          </ul>
        </div>
      </div>

  {/* Main Content */}
  {/* <div className="flex-1 flex flex-col bg-gray-100">
    <header className="bg-white shadow-md p-4 md:hidden">
      <h1 className="text-lg font-bold">Repositories</h1>
    </header>
    <main className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Repositories</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Add Repository
        </button>
      </div>
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search repositories..."
          className="w-full px-4 py-2 bg-white border border-gray-300 text-gray-900 rounded-lg placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="space-y-4">
        {repositories.map((repo) => (
          <div
            key={repo.name}
            className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Circle
                className="w-3 h-3"
                style={{ color: languageColors[repo.language] }}
                fill="currentColor"
              />
              <span className="font-medium text-gray-900">{repo.name}</span>
              <span className="text-sm text-gray-600">{repo.language}</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>{repo.size}</span>
              <span>Updated {repo.updatedAt}</span>
            </div>
          </div>  
        ))}
      </div>
    </main>
  </div> */}
</div>

  );
};