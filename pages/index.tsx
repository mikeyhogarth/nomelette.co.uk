import { FaCheese, FaCookieBite, FaHamburger } from "react-icons/fa";
import { Link, Metadata } from "@/components";
import Image from "next/image";
import homepageImage1 from "../public/media/images/homepage1.jpg";
import homepageImage2 from "../public/media/images/homepage2.jpg";
import homepageImage3 from "../public/media/images/homepage3.jpg";

export default function Home() {
  return (
    <>
      <Metadata title="The recipes of Sheila Hogarth" />

      <div className="mt-10 flex justify-evenly">
        <Image
          className="rounded-full"
          style={{ height: "300px" }}
          src={homepageImage1}
          alt="Image representing home cooking"
          width={300}
          height={300}
          priority={true}
        />

        <Image
          className="hidden rounded-full md:inline"
          style={{ height: "300px" }}
          src={homepageImage2}
          alt="Image representing home cooking"
          width={300}
          height={300}
          priority={true}
        />
        <Image
          className="hidden rounded-full xl:inline"
          style={{ height: "300px" }}
          src={homepageImage3}
          alt="Image representing home cooking"
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <div className="mt-10 text-center">
        <h2 className="font-brand text-6xl lowercase tracking-tight text-primary ">
          Nomelette
        </h2>
        <p className="mt-6 text-4xl font-extrabold">
          The recipes of Sheila Hogarth
        </p>

        <p className="my-10 text-xl md:px-20">
          Welcome to over 40 years of classic family recipes created by
          Cumbria&apos;s renowned home cook Sheila Hogarth. Nomelette is full of
          traditional recipes from warming casseroles to delicious puddings.
        </p>

        <div className="mb-14">
          <Link
            href="/recipes"
            className="m-2 inline-block rounded-xl border border-primary bg-primary py-2 px-4 text-xl text-white no-underline hover:brightness-110 md:text-2xl"
          >
            Browse Recipes
          </Link>
          <Link
            href="/about"
            className="m-2 inline-block rounded-xl border border-primary bg-white py-2 px-4 text-xl text-primary no-underline hover:brightness-110 md:text-2xl"
          >
            What is Nomelette?
          </Link>
        </div>
        <FaCookieBite className="inline-block text-4xl text-primary" />
        <FaCheese className="mx-20 inline-block text-4xl text-primary" />
        <FaHamburger className="inline-block text-4xl text-primary" />
      </div>
    </>
  );
}
