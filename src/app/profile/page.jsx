"use client";

import { useEffect } from "react";
import { UserData } from "../context/UserProvider";
import { redirect } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const { user, isAuth } = UserData();
  console.log(user);

  useEffect(() => {
    if (!isAuth) {
      redirect("/signin");
    }
  }, [isAuth]);

  return (
    <div className="flex justify-center items-center min-h-screen flex-col bg-gradient-to-br from-purple-100 to-indigo-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700 text-center">
        Welcome to Your Profile
      </h1>
      {user && (
        <div className="flex flex-col items-center mb-8">
          <img
            className="rounded-full w-28 h-28 mb-4 border-4 border-indigo-500 shadow-md"
            src={user.picture || "/user.png"}
            alt="User Profile"
          />
          <p className="text-lg font-semibold text-gray-700">{user.email}</p>
          <p className="text-lg text-gray-600">{user.given_name}</p>
        </div>
      )}
      <Link
        href="/"
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Page;
