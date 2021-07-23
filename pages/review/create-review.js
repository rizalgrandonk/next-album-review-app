import ReviewForm from "../../components/ReviewForm";

const CreateReview = () => {
  return (
    <section className="container mx-auto py-12 px-3">
      <h1 className="text-3xl md:text-4xl font-medium mb-8">Create a review</h1>
      <ReviewForm review={false} />
    </section>
  );
};

export default CreateReview;
