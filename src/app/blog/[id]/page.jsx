"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // If you are using Next.js routing

const Details = ({ params }) => {
  const [blogDetails, setBlogDetails] = useState(null);
  const router = useRouter(); // Hook for navigating programmatically

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => res.json())
      .then((data) => setBlogDetails(data));
  }, [params.id]);

  const handleBackToHome = () => {
    router.push("/"); // Navigate to the home page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-4">
      {blogDetails ? (
        <div className="card bg-white w-full max-w-md shadow-xl rounded-lg overflow-hidden">
          {/* Header */}
          <div className="card-header bg-indigo-600 text-white p-4 text-center">
            <h2 className="text-xl font-bold">📝 Blog Details</h2>
          </div>

          {/* Body */}
          <div className="card-body p-6">
            <h2 className="card-title text-2xl font-bold text-indigo-700 mb-4">
              📖 {blogDetails.title}
            </h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              ✍️ <strong>Content:</strong> {blogDetails.body}
            </p>
            <p className="text-gray-700 mb-2">
              🆔 <strong>Blog ID:</strong> {blogDetails.id}
            </p>
            <p className="text-gray-700">
              👤 <strong>User ID:</strong> {blogDetails.userId}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-6 py-4 border-t border-gray-200">
            <div className="text-2xl text-indigo-600 cursor-pointer hover:text-indigo-700 transition">
              🔄 Refresh
            </div>
            <div className="text-2xl text-red-500 cursor-pointer hover:text-red-600 transition">
              ❤️ Favorite
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="text-center pb-4">
            <button
              onClick={handleBackToHome}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg transition duration-300"
            >
              Back to Home
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-700 text-lg font-medium">
          🔄 Loading blog details...
        </div>
      )}
    </div>
  );
};

export default Details;
