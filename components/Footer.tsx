import { FaHeart, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-center p-10 mt-20 text-gray-700">
      <div className="social-icons mb-3 text-center text-4xl text-gray-400">
        <Link
          title="Facebook Community"
          href={`https://www.facebook.com/Nomelette/`}
        >
          <FaFacebookSquare className="inline m-1 hover:text-black" />
        </Link>
        <Link
          title="Source Code"
          href="https://github.com/mikeyhogarth/nomelette.co.uk"
        >
          <FaGithubSquare className="inline m-1 hover:text-black" />
        </Link>
      </div>
      <strong>Nomelette</strong> {new Date().getFullYear()} :: Made with
      <FaHeart className="inline mx-1" />
      by Mikey and Laura.
      <Link href="/privacy" className="privacy-statement block hover:underline">
        Privacy statement
      </Link>
    </footer>
  );
}
