import FormInput from "../../components/FormInput";

const CreateReview = () => {
  return (
    <main className="container mx-auto py-8 px-2">
      <h1 className="text-4xl font-medium mb-8">Create a review</h1>
      <form className="w-full flex" method="post">
        <div className="w-7/12 mr-6">
          <FormInput type="text" id="title" label="Title" />
          <FormInput type="text" id="author" label="Author" />
          <FormInput type="text" id="album" label="Album" />
          <FormInput type="text" id="band" label="Band" />
          <FormInput type="text" id="genre" label="Genre" />
        </div>
        <div className="w-full my-4">
          <label htmlFor="content" className="block text-xl font-medium mb-2">
            Content
          </label>
          <textarea
            className="w-full h-5/6 px-4 py-2 rounded-lg border-2 border-gray-400 text-lg text-gray-800 outline-none focus:border-gray-900"
            id="content"
          />
        </div>
      </form>
    </main>
  );
};

export default CreateReview;
