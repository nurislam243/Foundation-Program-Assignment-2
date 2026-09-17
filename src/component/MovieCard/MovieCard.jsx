import { FaStar, FaCalendarAlt } from "react-icons/fa";

const MovieCard = ({ movie, onSeeDetails }) => {
  return (
    <div className="bg-[#0b1929] border border-slate-800 rounded-2xl p-4 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 shadow-lg">
      {/* Poster Image */}
      <div className="w-full h-72 rounded-xl overflow-hidden bg-slate-900 mb-4">
        <img
          src={
            movie.image?.medium ||
            "https://i.ibb.co.com/wZr4Fq1s/no-image-found-360x260.png"
          }
          alt={movie.name}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Movie Details */}
      <div className="space-y-2 flex-grow">
        <h3 className="text-lg font-semibold text-white truncate">
          {movie.name}
        </h3>
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <span className="flex items-center gap-1 text-amber-400 font-medium">
            <FaStar className="text-xs" />
            {movie.rating?.average || "N/A"}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-xs" />
            {movie.premiered ? movie.premiered.split("-")[0] : "N/A"}
          </span>
        </div>
      </div>

      {/* See Details Button */}
      <button
        onClick={() => onSeeDetails(movie)}
        className="btn btn-primary bg-primary hover:bg-primary/70 text-white border-none rounded-xl w-full mt-4 normal-case font-medium text-sm"
      >
        See Details
      </button>
    </div>
  );
};

export default MovieCard;
