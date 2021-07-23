import ReviewForm from "../../components/ReviewForm";

const CreateReview = () => {
  return (
    <section className="container mx-auto py-12 px-2">
      <h1 className="text-4xl font-medium mb-8">Create a review</h1>
      <ReviewForm />
    </section>
  );
};

export default CreateReview;
