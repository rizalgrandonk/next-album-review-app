import ReviewItem from "./ReviewItem";

const ReviewList = ({ reviews }) => {
  return (
    <div className="flex flex-wrap items-center">
      {reviews.map((review) => (
        <ReviewItem review={review} key={review._id} />
      ))}
    </div>
  );
};

export default ReviewList;
