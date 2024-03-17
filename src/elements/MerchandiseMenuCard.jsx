// The default of the color Card Icon is Orange
function MerchandiseMenuCard({ logo, title, isBlue }) {
  const canvas = ["p-6 rounded-full w-fit relative items-center"];
  const brush = [];
  if (isBlue) {
    brush.push("bg-gradient-to-r from-primary-blue to-secondary-blue");
  } else {
    brush.push(
      "bg-gradient-to-r from-primary-music-jazz to-primary-light-orange"
    );
  }
  return (
    <div className="grid gap-y-3 px-6 py-3 rounded-md bg-primary-white min-w-64">
      <div className={canvas.join(" ").concat(" ", brush.join(" "))}>
        <img
          src={logo}
          alt="mini-logo-card.svg"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <h3>{title}</h3>
    </div>
  );
}

export default MerchandiseMenuCard;
