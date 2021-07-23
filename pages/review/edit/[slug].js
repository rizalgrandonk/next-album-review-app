import ReviewForm from "../../../components/ReviewForm";

const EditReview = ({ review }) => {
  return (
    <section className="container mx-auto py-12 px-2">
      <h1 className="text-4xl font-medium mb-8">Edit review</h1>
      <ReviewForm review={review} />
    </section>
  );
};

export default EditReview;

export async function getServerSideProps(context) {
  const { slug } = context.params;

  try {
    const res = await fetch(`http://localhost:3000/api/review/${slug}`);
    const review = await res.json();

    return {
      props: { review },
    };
  } catch (err) {
    console.log(err);

    context.res.statusCode = 302;
    context.res.setHeader("Location", `/`);
    return {
      notFound: true,
    };
  }
}
