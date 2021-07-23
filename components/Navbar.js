import Link from "next/link";
import Image from "next/image";
import Logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full h-16 px-2 bg-gray-700">
      <div className="container h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="block relative h-full md:h-12 w-32 md:w-36">
            <Image
              src={Logo}
              alt=""
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </a>
        </Link>
        <Link href="/review/create-review">
          <a className="md:text-lg font-medium px-3 py-1 rounded bg-transparent text-gray-200 border-2 border-gray-200">
            Create Review
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
