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
        <h2 className="text-xl lg:text-2xl font-bold text-gray-800">
          BlogNest – Discover and Explore Blogs Effortlessly
        </h2>
        <p className="w-full md:w-1/2 text-center mx-auto text-gray-600 mt-4">
          BlogNest makes browsing and reading blogs simple, secure, and
          seamless. Explore detailed posts with ease!
        </p>
      </div>

      {/* Blogs Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-20">
        {blogs.length > 0 &&
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="card bg-white shadow-lg rounded-lg p-6 flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              {/* Blog Title */}
              <h2 className="card-title text-2xl font-semibold text-gray-800 mb-3">
                {blog.title}
              </h2>

              {/* Blog Content */}
              <figure className="text-gray-700 mb-4">
                <p>{blog.body.slice(0, 150)}...</p> {/* Shortened preview */}
              </figure>

              {/* Blog Details */}
              <div className="card-body mt-2 flex mb-6 text-sm text-gray-500">
                <p className="flex-1 flex items-center gap-2">
                  <FaIdBadge /> Blog Id: {blog.id}
                </p>
                <p className="flex-1 flex items-center gap-2">
                  <FaUser /> User ID: {blog.userId}
                </p>
              </div>

              {/* View Details Button */}
              <div className="card-actions justify-end mt-auto">
                <Link
                  href={`/blog/${blog.id}`}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
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
