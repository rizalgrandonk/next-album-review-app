import useSWR from "swr";
import { useRouter } from "next/router";
import Meta from "../../components/Meta";
import styles from "./Review.module.css";
import LoadingSpinner from "../../components/LoadingSpinner";

const Review = () => {
  const router = useRouter();
  const slug = router.query.slug;

  const { data: review } = useSWR(`/api/review/${slug}`);

  if (!review) {
    return <LoadingSpinner label="Loading Content" />;
  } else {
    return (
      <>
        <Meta title={review.title} />
        <section>
          <div
            className="w-full h-64 md:h-96 bg-cover bg-center"
            style={{
              backgroundImage: `url(${review.selectedFile})`,
            }}
          ></div>
          <div className="container mx-auto py-8 px-6 md:px-16">
            <div className="w-full flex flex-col md:flex-row justify-between items-start border-b-2 border-gray-300 pb-6">
              <div>
                <h1 className="text-3xl md:text-5xl font-semibold mb-6 text-gray-800">
                  {review.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-700 my-1">
                  A review by{" "}
                  <span className="font-semibold">{review.author}</span>
                </p>
              </div>
              <div>
                <p className="md:text-lg md:text-right font-medium my-1">
                  {review.album}
                </p>
                <span className="text-sm md:text-base inline-block font-medium mr-2 my-1 px-3 rounded text-gray-200 bg-gray-800">
                  {review.band}
                </span>
                <span className="text-sm md:text-base inline-block font-medium mr-2 my-1 px-3 rounded text-gray-200 bg-gray-800">
                  {review.genre}
                </span>
              </div>
            </div>

            <div
              className={`${styles.content} pt-2 md:px-48`}
              dangerouslySetInnerHTML={{ __html: review.content }}
            />
          </div>
        </section>
      </>
    );
  }
};

export default Review;
