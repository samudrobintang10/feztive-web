import { Link, useLocation } from "react-router-dom";

function NavTab({ placeholder, href, isComingSoon }) {
  const canvas = [];

  // Knowing the location of the url
  const location = useLocation();

  if (location.pathname === href) {
    canvas.push("font-bold");
    canvas.push("text-primary-orange");
  } else {
    canvas.push("font-medium");
  }

  return (
    <Link to={href} style={{ pointerEvents: isComingSoon ? "none" : "" }} className="flex items-center gap-2">
      <h5 className={canvas.join(" ").concat(" ", "hover:text-primary-orange")}>
        {placeholder}
      </h5>
      {isComingSoon && (
        <div className=" bg-primary-music-jazz rounded p-1">
          <h6 className="text-primary-white font-bold">Coming Soon</h6>
        </div>
      )}
    </Link>
  );
}

export default NavTab;
