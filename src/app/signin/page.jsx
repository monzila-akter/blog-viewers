"use client";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

const Signin = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <LoginLink
        className="px-8 py-2 bg-gray-700 text-white text-4xl font-bold"
        postLoginRedirectURL="/"
      >
        Sign in
      </LoginLink>
    </div>
  );
};

export default Signin;
