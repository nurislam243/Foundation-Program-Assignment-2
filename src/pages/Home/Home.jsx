import { Link } from "react-router";
import { FiSearch } from "react-icons/fi";

const Home = () => {
  return (
    <div
      className="hero min-h-[85vh] relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/N6Mkpm3X/wp12389567-4k-cinema-wallpapers.webp')",
      }}
    >
      <div className="hero-overlay bg-slate-950/70"></div>

      {/* Content */}
      <div className="hero-content justify-start w-full max-w-7xl  text-white z-10">
        <div className="max-w-xl space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Discover <br />
            Amazing <span className="text-primary">Movies</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed">
            Explore and discover your favorite movies from around the world.
          </p>

          <div>
            <Link
              to="/movies"
              className="btn btn-primary rounded-xl shadow-lg flex items-center gap-2 w-fit text-base px-8"
            >
              <FiSearch className="text-base sm:text-xl" />
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
