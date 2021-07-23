import Loader from "react-loader-spinner";

const LoadingSpinner = ({ label }) => {
  return (
    <div className="w-ful h-screen flex flex-col justify-center items-center">
      <Loader type="Audio" color="#1F2937" height={250} width={250} />
      <h2 className="text-2xl md:text-3xl text-center font-semibold">
        {label}
      </h2>
    </div>
  );
};

export default LoadingSpinner;
