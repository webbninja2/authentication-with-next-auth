import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function Signin() {

  const router = useRouter()
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password
    });

    if (result.error) {
      alert("Your creditanls is not match please try again")
      console.log(result.error);
    } else {
      alert("Successfully signed in")
      router.push('/profile')
    }
  };


///login with google 
const handleGoogleLogin = async () => {
  try {
    const result = await signIn('google', { callbackUrl: "/profile" });
  } catch (error) {
    console.error('An error occurred:', error);
  }
};
  console.log('session', session);






  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h6>Email: test1@yopmail.com </h6>
          <h6>Password: password </h6>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.email && (
              <span className="text-red-600 text-sm">{errors.email.message}</span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.password && (
              <span className="text-red-600 text-sm">{errors.password.message}</span>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="mt-6">
          <button
            onClick={() => handleGoogleLogin()}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
