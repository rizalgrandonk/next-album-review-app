import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-gray-700">
      <div className="container h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-gray-100 text-3xl font-semibold">Abum Reviews</a>
        </Link>
        <ul>
          <li>
            <Link href="/review/create-review">
              <a className="text-lg font-medium px-3 py-1 rounded bg-transparent text-gray-200 border-2 border-gray-200">
                Create Review
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
