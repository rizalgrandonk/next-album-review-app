import Link from "next/link";
import moment from "moment";

const ReviewItem = ({ review, deleted }) => {
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
    <div className="flex flex-col rounded shadow-xl w-96 h-3/4 mb-10 mx-4 bg-white overflow-hidden">
      <div
        className="h-48 w-full bg-cover bg-center relative"
        style={{
          backgroundImage: `url("${review.selectedFile}")`,
        }}
      >
        <span className="block w-full h-full bg-gray-800 opacity-40"></span>
        <div className="group inline-block absolute top-0 right-0">
          <button className=" text-gray-100 py-1 px-3 bg-transparent font-medium rounded inline-flex items-center">
            <svg
              className="fill-current h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          <ul className="absolute right-1 top-9 hidden text-gray-700 pt-1 group-hover:block">
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
      <div className=" p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm leading-5 font-medium text-teal-600">
            {review.genre}
          </p>
          <Link href={`/review/${review.slug}`}>
            <a className="block">
              <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                {review.title}
              </h3>
            </a>
          </Link>
        </div>
        <div className="mt-2">
          <Link href={`/review/${review.slug}`}>
            <a className="text-teal-400 hover:text-teal-900 text-sm transition duration-150 ease-in-out">
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
        </div>
        <div className="mt-6">
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
