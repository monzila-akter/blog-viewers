"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaIdBadge, FaUser } from "react-icons/fa";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="container mx-auto px-4">
      {/* Heading Section */}
      <div className="mt-12 lg:mt-16 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-indigo-700">
          BlogNest – Discover and Explore Blogs Effortlessly
        </h2>
        <p className="w-full md:w-1/2 text-center mx-auto text-gray-700 mt-4">
          BlogNest is your ultimate platform for reading and discovering blogs.  
          Enjoy insightful posts, connect with authors, and dive into a world of knowledge today!
        </p>
      </div>

      {/* Blogs Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-20">
        {blogs.length > 0 &&
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="card bg-gradient-to-r from-purple-100 to-indigo-100 shadow-lg rounded-xl p-6 flex flex-col hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Blog Title */}
              <h2 className="card-title text-2xl font-bold text-gray-800 mb-3">
                {blog.title}
              </h2>

              {/* Blog Content */}
              <figure className="text-gray-600 mb-4">
                <p>
                  {blog.body
                    .slice(0, 150)
                    .concat("...")}{" "}
                  {/* Shortened preview */}
                </p>
              </figure>

              {/* Blog Details */}
              <div className="card-body mt-2 flex mb-6 text-sm text-gray-600">
                <p className="flex-1 flex items-center gap-2">
                  <FaIdBadge className="text-indigo-500" /> Blog Id: {blog.id}
                </p>
                <p className="flex-1 flex items-center gap-2">
                  <FaUser className="text-indigo-500" /> User ID: {blog.userId}
                </p>
              </div>

              {/* View Details Button */}
              <div className="card-actions justify-end mt-auto">
                <Link
                  href={`/blog/${blog.id}`}
                  className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition duration-200"
                >
                  🔍 View Details
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blogs;
