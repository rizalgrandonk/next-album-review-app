import axios from "axios";

import ReviewList from "../components/ReviewList";

export default function Home({ reviews }) {
  return (
    <main className="container mx-auto py-8 px-2">
      <h1 className="text-4xl font-medium mb-8">
        Find Reviews of The Latest Released Albums
      </h1>
      <ReviewList reviews={reviews} />
    </main>
  );
}

export async function getStaticProps() {
  try {
    const res = await axios.get("http://localhost:3000/api/review");
    const reviews = res.data;

    return {
      props: { reviews },
    };
  } catch (err) {
    console.log(err);
  }
}
