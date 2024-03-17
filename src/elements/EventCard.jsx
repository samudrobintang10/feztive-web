import Button from "./Button";

function EventCard({ image, remainingTicket, icon, isActive }) {
  const brush = [];
  if (isActive) {
    brush.push("bg-quarternary-grey");
  }
  return (
    <div className={"p-5 rounded-xl".concat(" ", brush.join(" "))}>
      <div className="flex gap-x-8">
        <img
          src={image}
          alt="content1.png"
          className="w-[185px] h-[185px] rounded-xl"
        />
        <div className="details flex flex-col justify-between">
          <div className="flex bg-black p-2 rounded-md gap-1 items-center h-fit w-fit">
            <img src={icon} alt="clock-icon.svg" />
            <h6 className="text-primary-white leading-none">9h 22m 25s</h6>
          </div>
          <div className="grid description">
            <h4 className="font-semibold">
              Friday Norebang Ticket Anniversary 30th
            </h4>
            <h6 className=" text-tertiary-grey">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s . . . .
            </h6>
          </div>
          <div className="ticket flex justify-between">
            <div className="ticket-info-remaining">
              <h6 className="font-medium">Remaining ticket</h6>
              <h4 className="font-medium">{remainingTicket} Pcs</h4>
            </div>
            <Button placeholder={"See Detail"} isSmall isBlue />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
