"use client";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

const Signin = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100">
      <LoginLink
        className="px-8 py-4 bg-indigo-600 text-white text-3xl font-bold rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg transition duration-300"
        postLoginRedirectURL="/"
      >
        Sign In
      </LoginLink>
    </div>
  );
};

export default Signin;
