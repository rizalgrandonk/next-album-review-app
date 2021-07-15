import connectDB from "../../../middleware/mongodb";
import Review from "../../../model/review";

const handler = async (req, res) => {
  const { slug } = req.query;

  switch (req.method) {
    case "GET":
      try {
        const review = await Review.findOne({ slug });

        if (!review) return res.status(404).send(`Review not found`);

        return res.status(200).send(review);
      } catch (err) {
        return res.status(500).send(err);
      }

    case "PUT":
      const data = req.body;
      const newSlug = data.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");

      try {
        const updatedReview = { ...data, slug: newSlug };

        await Review.findOneAndUpdate({ slug }, updatedReview, { new: true });

        return res.send(updatedReview);
      } catch (err) {
        return res.status(500).send(err);
      }

    case "DELETE":
      try {
        await Review.findOneAndRemove({ slug });

        return res.send({ message: "Review deleted" });
      } catch (error) {
        res.status(500).send(err);
      }

    default:
      return res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
