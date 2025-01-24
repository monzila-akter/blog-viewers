"use client";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // If you are using Next.js routing

const Details = ({ params }) => {
  const unwrappedParams = use(params);
  const [blogDetails, setBlogDetails] = useState(null);
  const router = useRouter(); // Hook for navigating programmatically

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${unwrappedParams.id}`)
      .then((res) => res.json())
      .then((data) => setBlogDetails(data));
  }, [unwrappedParams.id]);

  const handleBackToHome = () => {
    router.push("/"); // Navigate to the home page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {blogDetails ? (
        <div className="card bg-white w-96 shadow-lg rounded-lg overflow-hidden">
          <div className="card-header bg-indigo-600 text-white p-4 text-center">
            <h2 className="text-xl font-bold">📝 Blog Details</h2>
          </div>
          <div className="card-body p-4">
            <h2 className="card-title text-lg font-bold mb-2">
              📖 Title: {blogDetails.title}
            </h2>
            <p className="text-gray-700 mb-2">
              ✍️ <strong>Body:</strong> {blogDetails.body}
            </p>
            <p className="text-gray-700 mb-2">
              🆔 <strong>Blog ID:</strong> {blogDetails.id}
            </p>
            <p className="text-gray-700">
              👤 <strong>User ID:</strong> {blogDetails.userId}
            </p>
          </div>

          {/* Icons side by side */}
          <div className="flex justify-center space-x-4 py-4">
            <div className="text-2xl cursor-pointer">🔄</div>
            <div className="text-2xl cursor-pointer">❤️</div>
          </div>

          {/* Back to Home button */}
          <div className="text-center pb-4">
            <button
              onClick={handleBackToHome}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Back to Home
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500">
          🔄 Loading blog details...
        </div>
      )}
    </div>
  );
};

export default Details;
