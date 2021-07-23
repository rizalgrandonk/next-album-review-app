import { useState } from "react";
import { useRouter } from "next/router";
import FormInput from "./FormInput";
import LoadingSpinner from "./LoadingSpinner";
import FileBase from "react-file-base64";
const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

const ReviewForm = ({ review }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    title: review ? review.title : "",
    author: review ? review.author : "",
    album: review ? review.album : "",
    band: review ? review.band : "",
    genre: review ? review.genre : "",
    selectedFile: review ? review.selectedFile : "",
  });
  const [content, setContent] = useState(review ? review.content : "");

  const router = useRouter();

  const createReview = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fetch("/api/review/", {
        method: "POST",
        body: JSON.stringify({ ...data, content }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      router.push("/");
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  const updateReview = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fetch(`/api/review/${review.slug}`, {
        method: "PUT",
        body: JSON.stringify({ ...data, content }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      router.push("/");
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingSpinner label="Please Wait, Uploading Content" />;
  } else {
    return (
      <form
        className="w-full flex"
        method="post"
        onSubmit={review ? updateReview : createReview}
      >
        <div className="w-7/12 mr-6">
          <FormInput
            type="text"
            id="title"
            label="Title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
          <FormInput
            type="text"
            id="author"
            label="Author"
            value={data.author}
            onChange={(e) => setData({ ...data, author: e.target.value })}
          />
          <FormInput
            type="text"
            id="album"
            label="Album"
            value={data.album}
            onChange={(e) => setData({ ...data, album: e.target.value })}
          />
          <FormInput
            type="text"
            id="band"
            label="Band"
            value={data.band}
            onChange={(e) => setData({ ...data, band: e.target.value })}
          />
          <FormInput
            type="text"
            id="genre"
            label="Genre"
            value={data.genre}
            onChange={(e) => setData({ ...data, genre: e.target.value })}
          />
          <div className="w-full my-4">
            <label className="block text-xl font-medium mb-2">
              Cover Image
            </label>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setData({ ...data, selectedFile: base64 })
              }
            />
          </div>
        </div>
        <div className="w-full my-4 flex flex-col">
          <label htmlFor="content" className="block text-xl font-medium mb-2">
            Content
          </label>
          <ReactQuill
            theme="snow"
            value={content}
            defaultValue={review ? review.content : ""}
            onChange={setContent}
          ></ReactQuill>

          <button
            type="submit"
            className="text-center my-8 text-xl font-medium py-2 rounded bg-gray-800 text-gray-200 hover:bg-gray-600"
          >
            {review ? "Update" : "Create"}
          </button>
        </div>
      </form>
    );
  }
};

export default ReviewForm;
