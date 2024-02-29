import Button from "../elements/Button";
import MerchandiseMenuCard from "../elements/MerchandiseMenuCard";
import MerchandiseCard from "../elements/MerchandiseCard";

// Imported Png or Svg
import HeroPng from "../assets/images/hero.png";
import ExampleImagePng from "../assets/images/example-image.png";
import TwoPeopleIconSvg from "../assets/svg/two-people-icon.svg";
import CheckIconSvg from "../assets/svg/check-icon.svg";
import RocketIconSvg from "../assets/svg/rocket-icon.svg";
import StarIconSvg from "../assets/svg/star-icon.svg";
import ClockIconSvg from "../assets/svg/clock-icon.svg"

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="py-24 flex justify-between gap-32">
          <div className="hero-images w-1/2 relative">
            <img
              src={HeroPng}
              alt="hero.png"
              className="rounded-3xl overflow-hidden"
            />
            <div className="pop-up-2 bg-primary-white rounded-md p-4 absolute top-10 -left-20">
              <div className="flex gap-3 items-center">
                <div className="">
                  <img
                    src={CheckIconSvg}
                    alt="check-icon.svg"
                    className="p-3 bg-primary-grey rounded-md justify-self-center"
                  />
                </div>
                <h3 className="font-inter font-medium text-primary-black">
                  Trusted Music Platform
                </h3>
              </div>
            </div>
            <div className="pop-up-2 pb-3 pt-6 bg-primary-white rounded-3xl w-48 absolute bottom-6 -right-20">
              <div className="px-4">
                <div className="flex justify-center pb-3">
                  <img
                    src={TwoPeopleIconSvg}
                    alt="two-people-icon.svg"
                    className="p-3 bg-primary-grey rounded-full justify-self-center"
                  />
                </div>
                <h2 className="font-inter text-center font-semibold">
                  Connection
                </h2>
                <h3 className="font-inter text-center font-medium text-primary-black">
                  Connect with Music Enthusiast
                </h3>
              </div>
            </div>
          </div>
          <div className="hero-narative w-1/2 relative">
            <h1 className="font-inter font-bold text-6xl leading-tight pb-3">
              The Best Place Where find The needs of Music
            </h1>
            <h5 className="font-inter leading-relaxed pb-10 text-gray-500">
              Feztive is a dynamic startup that caters to music lovers and fans
              alike. With their motto "best place to find the music needs,"
              Feztive has made it their mission to become the go-to platform for
              event tickets and merchandise related to fandoms. From concert
              tickets and exclusive merchandise to meet-and-greet sessions and
              VIP experiences, Feztive provides a one-stop-shop for all things
              fandom-related.
            </h5>
            <div className="absolute bottom-0">
              <Button placeholder="Explore Now" isGradient />
            </div>
          </div>
        </div>
      </section>
      <section className="merchandise">
        <div className="grid gap-y-9">
          <div className="merchandise-menu">
            <h2 className=" font-semibold text-primary-music-jazz pb-5">
              Merchandise Menu
            </h2>
            <div className="flex gap-x-4">
              <MerchandiseMenuCard
                logo={RocketIconSvg}
                title="Sell Merchandise"
                isBlue
              />
              <MerchandiseMenuCard
                logo={StarIconSvg}
                title="Purchased Merchandise"
              />
            </div>
          </div>
          <div className="suggested-merchandise">
            <h3 className=" font-semibold pb-5">Suggested Merchandise</h3>
            <div className="flex gap-x-4">
              <MerchandiseCard
                image={ExampleImagePng}
                title="Blackpink the show bornpink show fe.... "
                seller="Raihan"
                availableStock={36}
                totalStock={60}
                icon={ClockIconSvg}
              />
              <MerchandiseCard
                image={ExampleImagePng}
                title="Blackpink the show bornpink show fe.... "
                seller="Raihan"
                availableStock={36}
                totalStock={60}
                icon={ClockIconSvg}
              />
              <MerchandiseCard
                image={ExampleImagePng}
                title="Blackpink the show bornpink show fe.... "
                seller="Raihan"
                availableStock={36}
                totalStock={60}
                icon={ClockIconSvg}
              />
              <MerchandiseCard
                image={ExampleImagePng}
                title="Blackpink the show bornpink show fe.... "
                seller="Raihan"
                availableStock={36}
                totalStock={60}
                icon={ClockIconSvg}
              />
            </div>
          </div>
        </div>
      </section>
      <h1 className="">Home</h1>
    </div>
  );
}

export default Home;
