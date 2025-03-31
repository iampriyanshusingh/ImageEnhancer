import Loading from "./Loading";

const ImagePreview = (props) => {
  // Function to handle image download
  const handleDownload = () => {
    if (props.enhanced) {
      const link = document.createElement("a");
      link.href = props.enhanced;
      link.download = "enhanced_image.jpg"; // Set the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
      {/* Original Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col items-center">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2 w-full">
          Original Image
        </h2>
        <div className="flex items-center justify-center w-full h-[300px] p-4 bg-gray-200">
          {props.uploaded ? (
            <img
              src={props.uploaded}
              alt="Original"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          ) : (
            <span className="text-gray-500">No Image Selected</span>
          )}
        </div>
      </div>

      {/* Enhanced Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col items-center">
        <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2 w-full">
          Enhanced Image
        </h2>
        <div className="flex items-center justify-center w-full h-[300px] p-4 bg-gray-200">
          {props.loading ? (
            <Loading />
          ) : props.enhanced ? (
            <img
              src={props.enhanced}
              alt="Enhanced"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          ) : (
            <span className="text-gray-500">No Enhanced Image</span>
          )}
        </div>

        {/* Download Button (Only Shows If Enhanced Image Exists) */}
        {props.enhanced && !props.loading && (
          <button
            onClick={handleDownload}
            className="my-4 cursor-pointer bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg shadow-md transition"
          >
            Download Enhanced Image
          </button>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
