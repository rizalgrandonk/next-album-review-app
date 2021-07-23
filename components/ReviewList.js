import useSWR from "swr";
import ReviewItem from "./ReviewItem";
import LoadingSpinner from "./LoadingSpinner";

const ReviewList = () => {
  const { data: reviews, mutate } = useSWR("/api/review");
  if (!reviews) {
    return <LoadingSpinner label="Loading Content" />;
  } else {
    return (
      <div className="flex flex-wrap items-stretch justify-start">
        {reviews.map((review) => (
          <ReviewItem review={review} key={review._id} deleted={mutate} />
        ))}
      </div>
    );
  }
};

export default ReviewList;
