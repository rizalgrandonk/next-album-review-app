import axios from "axios";

import Meta from "../../components/Meta";

const Review = ({ review }) => {
  const exert = review.content.split(" ").slice(0, 10).join(" ") + " ...";

  return (
    <>
      <Meta title={review.title} description={exert} />
      <main>
        <div
          className="w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${review.selectedFile})`,
            minHeight: `70vh`,
          }}
        ></div>
        <div className="container mx-auto pt-8 px-4">
          <h1 className="text-5xl font-semibold mb-6 text-gray-800">
            {review.title}
          </h1>
          <p className="text-xl text-gray-700 my-1">
            A review by <span className="font-semibold">{review.author}</span>
          </p>
          <p className="text-lg font-medium my-1">{review.album}</p>
          <span className="inline-block font-medium mr-2 my-1 px-3 rounded text-gray-200 bg-gray-800">
            {review.band}
          </span>
          <span className="inline-block font-medium mr-2 my-1 px-3 rounded text-gray-200 bg-gray-800">
            {review.genre}
          </span>
          <p className="text-lg text-gray-700 my-12 w-11/12">
            {review.content}
          </p>
        </div>
      </main>
    </>
  );
};

export default Review;

export async function getServerSideProps({ query }) {
  const slug = query.slug;

  try {
    const res = await axios.get(`http://localhost:3000/api/review/${slug}`);
    const review = res.data;

    return {
      props: { review },
    };
  } catch (err) {
    console.log(err);
  }
}
