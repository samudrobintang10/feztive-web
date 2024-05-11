import { Link, useLocation } from "react-router-dom";



function NavTab({
  placeholder,
  href,
  isComingSoon,
  onClick,
  isSecondary,
  isDropdown
}) {
  const canvas = [];

  // Knowing the location of the url
  const location = useLocation();

  if (location.pathname === href) {
    canvas.push("font-bold");
    if (isSecondary) {
      canvas.push("text-white");
    } else {
      canvas.push("text-primary-orange");
    }
  } else {
    canvas.push("font-medium");
    if (isSecondary) {
      canvas.push("text-white");
    } else {
      canvas.push("text-black");
    }
  }

  return (
    <Link
      to={href}
      style={{ pointerEvents: isComingSoon ? "none" : "" }}
      className="flex items-center gap-2"
      onClick={onClick}
    >
      <h5
        className={canvas
          .join(" ")
          .concat(" ", !isDropdown && "hover:text-primary-orange")}
      >
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
