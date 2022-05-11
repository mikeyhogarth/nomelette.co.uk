import { FaHeart, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-center p-10 mt-20 text-gray-700">
      <div className="mb-3 text-center text-4xl text-gray-400">
        <Link href={`https://www.facebook.com/Nomelette/`}>
          <a title="Facebook Community">
            <FaFacebookSquare className="inline m-1 hover:text-black" />
          </a>
        </Link>
        <Link href="https://github.com/mikeyhogarth/nomelette.co.uk">
          <a title="Source Code">
            <FaGithubSquare className="inline m-1 hover:text-black" />
          </a>
        </Link>
      </div>
      <strong>Nomelette</strong> {new Date().getFullYear()} :: Made with
      <FaHeart className="inline mx-1" />
      by Mikey and Laura.
      <div>
        <Link href="/privacy">
          <a className="hover:underline">Privacy statement</a>
        </Link>
      </div>
    </footer>
  );
}
