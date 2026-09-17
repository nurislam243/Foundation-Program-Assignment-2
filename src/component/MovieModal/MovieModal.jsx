import { FaStar, FaCalendarAlt, FaTimes } from "react-icons/fa";

const MovieModal = ({ selectedMovie }) => {
  return (
    <dialog
      id="movie_details_modal"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box bg-[#0b1929] text-white border border-slate-800 p-0 overflow-hidden max-w-2xl relative">
        {/* Top Right Close Button [ X ] */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle bg-slate-900/80 text-white border-none absolute right-3 top-3 z-10 hover:bg-slate-800">
            ✕
          </button>
        </form>

        {selectedMovie && (
          <div>
            {/* Backdrop / Large Poster */}
            <div className="w-full h-64 bg-slate-900 relative">
              <img
                src={
                  selectedMovie.image?.original ||
                  selectedMovie.image?.medium ||
                  "https://via.placeholder.com/600x300?text=No+Backdrop"
                }
                alt={selectedMovie.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1929] via-transparent to-transparent"></div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-white">
                {selectedMovie.name}
              </h2>

              {/* Rating & Release Date */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                  <FaStar /> Rating: {selectedMovie.rating?.average || "N/A"}
                </span>
                <span>|</span>
                <span className="flex items-center gap-1.5">
                  <FaCalendarAlt /> Release: {selectedMovie.premiered || "N/A"}
                </span>
                {selectedMovie.genres?.length > 0 && (
                  <>
                    <span>|</span>
                    <span className="text-primary">
                      {selectedMovie.genres.join(", ")}
                    </span>
                  </>
                )}
              </div>

              {/* Overview / Summary */}
              <div className="space-y-1">
                <h4 className="font-semibold text-gray-200">Overview:</h4>
                <div
                  className="text-gray-300 text-sm leading-relaxed max-h-40 overflow-y-auto pr-2"
                  dangerouslySetInnerHTML={{
                    __html:
                      selectedMovie.summary || "No description available.",
                  }}
                />
              </div>

              {/* Bottom Close Button */}
              <div className="modal-action pt-2">
                <form method="dialog">
                  <button className="btn bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 rounded-xl px-5 flex items-center gap-2">
                    <FaTimes /> Close
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal Backdrop (Click outside to close) */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default MovieModal;
