"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

 const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleForm=async(data)=>{
const { data:res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});
console.log(res)
  }

    return (
        <div className='flex justify-center my-20'>
      <form onSubmit={handleSubmit(handleForm)}>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend text-center text-2xl">Login</legend>

  <label className="label">Email</label>
  <input  {...register("email", { required: 'Email field is required' })} type="email" className="input" placeholder="Email" />
{errors.email && <p className='text-red-400'>{errors.email.message}</p>}

  <label className="label">Password</label>
  <input {...register("password", { required: 'Password field is required' })} type="password" className="input" placeholder="Password" />
{errors.password && <p className='text-red-400'>{errors.password.message}</p>}


  <button className="btn btn-neutral mt-4">Login</button>
  <p className='text-center mt-5 text-[16px]'>Don't have an account? <Link className='text-red-400 font-medium hover:underline underline-offset-4' href={'/signUp'}>Register</Link></p>
</fieldset>
      </form>
        </div>
    );
};

export default LoginPage;