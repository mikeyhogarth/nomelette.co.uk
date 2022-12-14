import Link from "next/link";
import Image from "next/image";
import homepageImage1 from "../public/media/images/homepage1.jpg";
import homepageImage2 from "../public/media/images/homepage2.jpg";
import homepageImage3 from "../public/media/images/homepage3.jpg";
import Metadata from "../components/Metadata";
import { FaCookieBite, FaCheese, FaHamburger } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Metadata title="The recipes of Sheila Hogarth" />

      <div className="flex justify-evenly mt-10">
        <Image
          className="rounded-full"
          style={{ height: "300px" }}
          src={homepageImage1}
          alt="Image representing home cooking"
          width={300}
          height={300}
        />

        <Image
          className="rounded-full hidden md:inline"
          style={{ height: "300px" }}
          src={homepageImage2}
          alt="Image representing home cooking"
          width={300}
          height={300}
        />
        <Image
          className="rounded-full hidden xl:inline"
          style={{ height: "300px" }}
          src={homepageImage3}
          alt="Image representing home cooking"
          width={300}
          height={300}
        />
      </div>
      <div className="text-center">
        <h2 className="font-brand text-primary lowercase tracking-tight text-6xl ">
          Nomelette
        </h2>
        <p className="text-4xl font-extrabold ">
          The recipes of Sheila Hogarth
        </p>

        <p className="md:px-20 my-10 text-xl">
          Welcome to over 40 years of classic family recipes created by
          Cumbria&apos;s renowned home cook Sheila Hogarth. Nomelette is full of
          traditional recipes from warming casseroles to delicious puddings.
        </p>

        <div className="mb-14">
          <Link href="/recipes" className="btn m-2">
            Browse Recipes
          </Link>
          <Link href="/about" className="btn btn-secondary m-2">
            What is Nomelette?
          </Link>
        </div>
        <FaCookieBite className="inline-block text-primary text-4xl" />
        <FaCheese className="inline-block text-primary text-4xl mx-20" />
        <FaHamburger className="inline-block text-primary text-4xl" />
      </div>
    </>
  );
}
