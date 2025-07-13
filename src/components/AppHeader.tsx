import { Link, useLocation } from "@tanstack/react-router";

export default function AppHeader() {
  const location = useLocation();

  const isReports = location.pathname.includes("report");

  return (
    <header className="bg-gray-100 border-b border-gray-300 py-3 px-6 mb-6">
      <nav className="flex items-center gap-2 text-sm text-gray-600">
        <Link
          to="/"
          className={`hover:underline ${
            !isReports ? "font-semibold text-blue-600" : ""
          }`}
        >
          Gallery
        </Link>

        <span>/</span>

        <Link
          to="/report"
          className={`hover:underline ${
            isReports ? "font-semibold text-blue-600" : ""
          }`}
        >
          Report
        </Link>
      </nav>
    </header>
  );
}
