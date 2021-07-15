import axios from "axios";

import ReviewList from "../components/ReviewList";

export default function Home({ reviews }) {
  return (
    <>
      <h1 className="text-4xl mb-8">
        Find Reviews of The Latest Released Albums
      </h1>
      <ReviewList reviews={reviews} />
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get("http://localhost:3000/api/review");
  const reviews = res.data;

  return {
    props: { reviews },
  };
}
