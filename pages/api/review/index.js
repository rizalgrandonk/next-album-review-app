import connectDB from "../../../middleware/mongodb";
import Review from "../../../model/review";

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        const reviews = await Review.find().sort("-createdAt");

        return res.status(200).send(reviews);
      } catch (err) {
        return res.status(500).send(err);
      }

    case "POST":
      const uploadedReview = req.body;
      let slug = uploadedReview.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");

      const reviews = await Review.find();

      const similarReview = reviews.filter(
        (review) =>
          review.title.toLowerCase() === uploadedReview.title.toLowerCase()
      );

      if (similarReview.length > 0) {
        slug = `${slug}-${similarReview.length + 1}`;
      }

      const newReview = new Review({
        ...uploadedReview,
        slug,
        createdAt: new Date().toISOString(),
      });

      try {
        await newReview.save();

        return res.status(201).send(newReview);
      } catch (err) {
        return res.status(500).send(err);
      }

    default:
      return res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
