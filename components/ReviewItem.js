import Link from "next/link";
import moment from "moment";
import { useRef } from "react";

const ReviewItem = ({ review, deleted }) => {
  const dropdownRef = useRef();

  const togleDropdown = () => {
    dropdownRef.current.classList.toggle("hidden");
    dropdownRef.current.classList.toggle("block");
  };

  const deleteReview = async (e) => {
    e.preventDefault();
    try {
      await fetch(`/api/review/${review.slug}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      deleted();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col rounded shadow-xl w-96 mb-10 mx-4 bg-white overflow-hidden">
      <div
        className="h-52 w-full bg-cover bg-center relative"
        style={{
          backgroundImage: `url("${review.selectedFile}")`,
        }}
        onClick={togleDropdown}
      >
        <span className="block w-full h-full bg-gray-800 opacity-40"></span>
        <div className="inline-block absolute top-0 right-0">
          <button className=" text-gray-100 py-1 px-3 bg-transparent font-medium rounded inline-flex items-center">
            <svg
              className="fill-current h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          <ul
            ref={dropdownRef}
            className="absolute hidden right-1 top-9 text-gray-700 pt-1 dropdown"
          >
            <li className="">
              <Link href={`/review/edit/${review.slug}`}>
                <a className=" bg-gray-100 hover:bg-gray-400 font-medium py-1 px-2 block whitespace-no-wrap">
                  Edit
                </a>
              </Link>
            </li>
            <li className="">
              <button
                className=" bg-gray-100 hover:bg-gray-400 font-medium py-1 px-2 block whitespace-no-wrap"
                onClick={deleteReview}
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-52 md:h-60 p-4 md:p-6 flex flex-col justify-between">
        <div>
          <p className="inline-block mb-1 pr-2 border-r-2 border-gray-700 text-sm leading-5 font-medium text-teal-600">
            {review.genre}
          </p>
          <p className="inline-block mb-1 pl-2 border-l-2 text-sm leading-5 font-medium text-teal-600">
            {review.band}
          </p>
          <Link href={`/review/${review.slug}`}>
            <a className="block">
              <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                {review.title}
              </h3>
            </a>
          </Link>
        </div>
        <div className="mt-6">
          <Link href={`/review/${review.slug}`}>
            <a className="block mb-4 text-teal-400 hover:text-teal-900 text-sm transition duration-150 ease-in-out">
              Read more
              <svg
                className="chev inline-block ml-1 w-2 h-2 stroke-2 stroke-current"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
              >
                <g fillRule="evenodd">
                  <path d="M1 1l4 4-4 4"></path>
                </g>
              </svg>
              <svg
                className="arr hidden hover:inline-block ml-1 w-2 h-2 stroke-2 stroke-current"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
              >
                <g fillRule="evenodd">
                  <path d="M0 5h7"></path>
                  <path d="M4 1l4 4-4 4"></path>
                </g>
              </svg>
            </a>
          </Link>
          <p className="text-sm leading-5 font-medium text-gray-900">
            {review.author}
          </p>
          <div className="flex text-sm leading-5 text-gray-500">
            <time dateTime="2020-03-16">
              {moment(review.createdAt).fromNow()}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
