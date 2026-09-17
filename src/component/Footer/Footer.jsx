import { Link } from "react-router";
import { MdOutlineMovieCreation } from "react-icons/md";
import { FaGithub, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#030e1a] text-white py-6 lg:py-7 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left-side: Logo & Copyright */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <Link
            to="/"
            className="text-xl font-bold tracking-wide flex items-center gap-2 text-white"
          >
            <MdOutlineMovieCreation size={26} className="text-primary" />
            <span>MovieExplorer</span>
          </Link>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} MovieExplorer. All rights reserved.
          </p>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center gap-5 text-lg sm:text-xl text-blue-200/80">
          <a
            href="https://github.com/nurislam243"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/md-nur-islam1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/nur.islam.568309/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://youtube.com/@codekink?si=iPoIdwq-jJlUIVHC"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
