import Loader from "react-loader-spinner";

const LoadingSpinner = ({ label }) => {
  return (
    <div className="w-ful h-full flex flex-col justify-center items-center">
      <Loader type="Audio" color="#1F2937" height={250} width={250} />
      <h2 className="text-3xl font-semibold">{label}</h2>
    </div>
  );
};

export default LoadingSpinner;
