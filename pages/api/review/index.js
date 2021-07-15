import connectDB from "../../../middleware/mongodb";
import Review from "../../../model/review";

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        const reviews = await Review.find();

        return res.status(200).send(reviews);
      } catch (err) {
        return res.status(500).send(err);
      }

    case "POST":
      const review = req.body;
      const slug = review.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");

      const newReview = new Review({
        ...review,
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
