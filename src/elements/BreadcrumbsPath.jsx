import React from "react";
import { Link, useLocation } from "react-router-dom";

function BreadcrumbsPath({ pathnames }) {
  const location = useLocation();
  // const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="flex items-center text-sm">
      {/* Home link */}
      <Link to="/" className="text-black font-semibold hover:underline">
        Home
      </Link>

      {/* Dynamically generate breadcrumb items */}
      {pathnames.map((pathname, index) => {
        const to = pathname.path;

        return (
          <React.Fragment key={to}>
            <span className="text-gray-400 px-2">/</span>
            <Link
              to={to}
              className={`text-gray-400 font-semibold" hover:underline`}
            >
              {pathname.label}
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default BreadcrumbsPath;
