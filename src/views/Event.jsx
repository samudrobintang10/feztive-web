import Button from "../elements/Button";
import MerchandiseMenuCard from "../elements/MerchandiseMenuCard";
import MerchandiseCard from "../elements/MerchandiseCard";

// Imported Library
import { faArrowRight, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// Imported Png or Svg
import RocketIconSvg from "../assets/svg/rocket-icon.svg";
import StarIconSvg from "../assets/svg/star-icon.svg";
import ContentOnePng from "../assets/images/content1.png";
import ClockIconSvg from "../assets/svg/clock-icon.svg";

// Imported JSON for Example
import MerchandiseJson from "../assets/json/merchandise.json";
import EventCard from "../elements/EventCard";

function Event() {
  return (
    <div className="event">
      <div className="grid gap-y-9 py-24">
        <div className="merchandise-menu">
          <h2 className=" font-semibold text-primary-music-jazz pb-5">
            Event Menu
          </h2>
          <div className="flex gap-x-4">
            <MerchandiseMenuCard
              logo={RocketIconSvg}
              title="Owned Event"
              isBlue
            />
            <MerchandiseMenuCard logo={StarIconSvg} title="Purchased Event" />
          </div>
        </div>
        <div className="event-container flex gap-x-4">
          <div className="event-menu w-7/12 bg-primary-white p-3 rounded-2xl">
            <EventCard
              image={ContentOnePng}
              icon={ClockIconSvg}
              remainingTicket={20}
              isActive
            />
            <div className="py-5">
              <div className="h-[1px] bg-tertiary-grey"></div>
            </div>
            <EventCard
              image={ContentOnePng}
              icon={ClockIconSvg}
              remainingTicket={20}
            />
            <div className="py-5">
              <div className="h-[1px] bg-tertiary-grey"></div>
            </div>
            <EventCard
              image={ContentOnePng}
              icon={ClockIconSvg}
              remainingTicket={20}
            />
          </div>
          <div className="cta-purchase w-5/12 p-6 rounded-2xl bg-primary-white grid gap-y-6 h-fit">
            <div className="rounded-full border border-primary-grey w-full flex justify-between items-center">
              <h3 className="font-inter pl-6">Price</h3>
              <div className="py-4 px-6 bg-primary-blue bg-opacity-5 rounded-r-full">
                <h3 className=" font-semibold font-inter text-primary-blue">
                  Rp 4.999.999
                </h3>
              </div>
            </div>
            <div className="event-detail">
              <h3 className="font-semibold font-inter">Event Detail</h3>
            </div>
            <Button isGradient placeholder={"Purchase Now"} isBig/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
