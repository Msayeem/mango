import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <div className='flex justify-center my-20'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend text-center text-2xl">Login</legend>

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" />

  <button className="btn btn-neutral mt-4">Login</button>
  <p className='text-center mt-5 text-[16px]'>Don't have an account? <Link className='text-red-400 font-medium hover:underline underline-offset-4' href={'/signUp'}>Register</Link></p>
</fieldset>
        </div>
    );
};

export default LoginPage;