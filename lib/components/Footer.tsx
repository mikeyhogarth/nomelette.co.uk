import { FaFacebookSquare, FaGithubSquare, FaHeart } from "react-icons/fa";
import Link from "@/components/Link";

export default function Footer() {
  return (
    <footer className="mt-20 w-full bg-gray-100 p-10 text-center text-gray-700">
      <div className="mb-3 text-center text-4xl print:hidden ">
        <Link
          title="Facebook Community"
          href={`https://www.facebook.com/Nomelette/`}
          className="text-gray-400 hover:text-black"
        >
          <FaFacebookSquare className="m-1 inline" />
        </Link>
        <Link
          title="Source Code"
          href="https://github.com/mikeyhogarth/nomelette.co.uk"
          className="text-gray-400 hover:text-black"
        >
          <FaGithubSquare className="m-1 inline" />
        </Link>
      </div>
      <strong>Nomelette</strong> {new Date().getFullYear()} :: Made with
      <FaHeart className="mx-1 inline" />
      by Mikey and Laura.
      <Link
        href="/privacy"
        className="privacy-statement block hover:underline print:hidden"
      >
        Privacy statement
      </Link>
    </footer>
  );
}
