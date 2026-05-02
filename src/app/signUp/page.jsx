"use client"
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/compat/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SignUpPage = () => {


 const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleForm=async(data)=>{
const { data:res, error } = await authClient.signUp.email({
    name: data.name, // required
    email: data.email, // required
    password: data.password, // required
    image: data.photo,
    
});
if(error){
  toast.error('Registration failed')
}

  }

    return (
      <div className='flex justify-center my-20'>
      <form onSubmit={handleSubmit(handleForm)}>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend text-center text-2xl">Register</legend>

  <label className="label">Name</label>
  <input  {...register("name", { required: 'Name field is required' })} type="text" className="input" placeholder="Name" />
{errors.name && <p className='text-red-400'>{errors.name.message}</p>}
  
  <label className="label">Email</label>
  <input  {...register("email", { required: 'Email field is required' })} type="email" className="input" placeholder="Email" />
{errors.email && <p className='text-red-400'>{errors.email.message}</p>}
  
  <label className="label">Photo-url</label>
  <input  {...register("photo", { required: 'Photo-url field is required' })} type="text" className="input" placeholder="Photo-url" />
{errors.photo && <p className='text-red-400'>{errors.photo.message}</p>}
  

  <label className="label">Password</label>
  <input {...register("password", { required: 'Password field is required' })} type="password" className="input" placeholder="Password" />
{errors.password && <p className='text-red-400'>{errors.password.message}</p>}


  <button className="btn btn-primary mt-4">Register</button>
  
</fieldset>
      </form>
        </div>
    );
};

export default SignUpPage;