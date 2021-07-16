import Link from "next/link";

const ReviewItem = ({ review }) => {
  const exert = review.content.split(" ").slice(0, 10).join(" ") + " ...";

  return (
    <Link href={`/review/${review.slug}`}>
      <a className="w-72 h-96 m-3 shadow-md rounded-md overflow-hidden transition-all ease-in hover:shadow-lg">
        <div
          className="w-full h-44 bg-cover text-white relative"
          style={{ backgroundImage: `url(${review.selectedFile})` }}
        >
          <span className="block w-full h-full bg-black opacity-40"></span>
          <p className="absolute left-4 top-4 text-xl font-medium capitalize">
            {review.author}
          </p>
        </div>
        <div className="p-3">
          <span className="inline-block text-sm font-medium mr-2 px-3 rounded text-gray-200 bg-gray-800">
            {review.band}
          </span>
          <span className="inline-block text-sm font-medium px-3 rounded text-gray-200 bg-gray-800">
            {review.genre}
          </span>
          <p className="text-2xl font-medium my-4">{review.title}</p>
          <p>{exert}</p>
        </div>
      </a>
    </Link>
  );
};

export default ReviewItem;
