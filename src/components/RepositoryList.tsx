import { useState } from "react";
import { Menu, X, Circle } from "lucide-react";

const repositories = [
  {
    name: "design-system",
    language: "React",
    size: "7320 KB",
    updatedAt: "1 day ago",
    visibility: "Public",
  },
  {
    name: "codeant-ci-app",
    language: "JavaScript",
    size: "5871 KB",
    updatedAt: "2 days ago",
    visibility: "Private",
  },
  {
    name: "analytics-dashboard",
    language: "Python",
    size: "4521 KB",
    updatedAt: "5 days ago",
    visibility: "Private",
  },
  {
    name: "mobile-app",
    language: "Swift",
    size: "3096 KB",
    updatedAt: "3 days ago",
    visibility: "Public",
  },
  {
    name: "e-commerce-platform",
    language: "Java",
    size: "6210 KB",
    updatedAt: "6 days ago",
    visibility: "Private",
  },
  {
    name: "blog-website",
    language: "HTML/CSS",
    size: "1876 KB",
    updatedAt: "4 days ago",
    visibility: "Public",
  },
  {
    name: "social-network",
    language: "PHP",
    size: "5432 KB",
    updatedAt: "7 days ago",
    visibility: "Private",
  },
];

const languageColors: Record<string, string> = {
  React: "#61dafb",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Swift: "#ffac45",
  Java: "#b07219",
  "HTML/CSS": "#e34c26",
  PHP: "#4F5D95",
};

export const RepositoryList = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <div className="bg-gray-800 text-white w-64 flex-shrink-0">
        <div className="p-6">
          <h2 className="text-2xl font-bold">CodeAnt AI</h2>
          <select
            className="mt-4 bg-gray-700 text-white p-2 rounded-lg w-full"
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
      </div> */}

      {/* Main Content */}
      <div className="flex-1">
        <div className="bg-white shadow p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              Repositories <span className="text-sm text-gray-500">(33 total repositories)</span>
            </h1>
            <div className="flex gap-4">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
                Refresh All
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Add Repository
              </button>
            </div>
          </div>

          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Search Repositories"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="p-6 space-y-4">
          {repositories.map((repo) => (
            <div
              key={repo.name}
              className="flex justify-between items-center p-4 bg-white border rounded-lg hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <Circle
                  className="w-4 h-4"
                  style={{ color: languageColors[repo.language] }}
                  fill="currentColor"
                />
                <span className="font-medium text-gray-900">{repo.name}</span>
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded ${
                    repo.visibility === "Public"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {repo.visibility}
                </span>
                <span className="text-sm text-gray-600">{repo.language}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>{repo.size}</span>
                <span>Updated {repo.updatedAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
