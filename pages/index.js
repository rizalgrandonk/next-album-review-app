import ReviewList from "../components/ReviewList";

export default function Home() {
  return (
    <section className="container mx-auto py-8 px-2">
      <h1 className="text-2xl md:text-4xl font-medium mb-8">
        Find Reviews of The Latest Released Albums
      </h1>
      <ReviewList />
    </section>
  );
}
