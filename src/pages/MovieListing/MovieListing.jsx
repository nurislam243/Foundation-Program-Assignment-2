import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import MovieCard from "../../component/MovieCard/MovieCard";
import MovieModal from "../../component/MovieModal/MovieModal";
import LoadingSpinner from "../../component/LoadingSpinner";
const MovieListing = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // All Shows Fetch
  const fetchAllShows = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.tvmaze.com/shows");
      const data = await res.json();
      setMovies(data.slice(0, 20));
    } catch (error) {
      console.error("Error fetching shows:", error);
    } finally {
      setLoading(false);
    }
  };

  // Search Shows Fetch
  const searchShows = async (query) => {
    if (!query.trim()) {
      fetchAllShows();
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
      const data = await res.json();
      setMovies(data.map((item) => item.show));
    } catch (error) {
      console.error("Error searching shows:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllShows();
  }, []);


  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        searchShows(searchQuery);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const handleSeeDetails = (movie) => {
    setSelectedMovie(movie);
    document.getElementById("movie_details_modal").showModal();
  };

  return (
    <div className="bg-[#030e1a] min-h-screen text-white py-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Search Bar */}
        <div className="relative flex items-center w-full max-w-2xl mx-auto">
          <FiSearch className="absolute left-4 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0b1929] border border-slate-700 text-white rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-primary/60 shadow-inner text-sm md:text-base placeholder-gray-400"
          />
        </div>

        {/* Loading Spinner */}
        {loading && <LoadingSpinner></LoadingSpinner>}

        {/* Movie Cards Grid */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onSeeDetails={handleSeeDetails}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && movies.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">No movies found matching your search.</p>
          </div>
        )}
      </div>

      {/* Modal Component */}
      <MovieModal selectedMovie={selectedMovie} />
    </div>
  );
};

export default MovieListing;