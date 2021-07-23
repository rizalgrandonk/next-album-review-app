import { useRouter } from "next/router";
import useSWR from "swr";
import ReviewForm from "../../../components/ReviewForm";
import LoadingSpinner from "../../../components/LoadingSpinner";

const EditReview = () => {
  const router = useRouter();
  const slug = router.query.slug;

  const { data: review } = useSWR(`/api/review/${slug}`);

  return (
    <section className="container mx-auto py-12 px-3">
      <h1 className="text-3xl md:text-4xl font-medium mb-8">Edit review</h1>
      {!review ? <LoadingSpinner /> : <ReviewForm review={review} />}
    </section>
  );
};

export default EditReview;

// export async function getServerSideProps(context) {
//   const { slug } = context.params;

//   try {
//     const res = await fetch(
//       `https://albumreview.vercel.app/api/review/${slug}`
//     );
//     const review = await res.json();

//     return {
//       props: { review },
//     };
//   } catch (err) {
//     console.log(err);

//     context.res.statusCode = 302;
//     context.res.setHeader("Location", `/`);
//     return {
//       notFound: true,
//     };
//   }
// }
