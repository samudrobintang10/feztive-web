import Button from "../elements/Button";
import HeroPng from "../assets/images/hero.png";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="py-24 flex justify-between gap-32">
          <div className="hero-images w-1/2 rounded-3xl overflow-hidden">
            <img src={HeroPng} alt="hero.png" />
          </div>
          <div className="hero-narative w-1/2">
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
            <Button placeholder="Explore Now" />
          </div>
        </div>
      </section>
      <h1 className="">Home</h1>
    </div>
  );
}

export default Home;
