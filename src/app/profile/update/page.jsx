"use client"
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdatePage = () => {

  const router=useRouter();

 const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

    const handleUpdate=async(data)=>{
 
        await authClient.updateUser({
    image: data.photo,
    name: data.name,
    
    
})
  router.push('/profile')
      toast.success("Profile updated successfully!");

}
  };
  


    return (
         <div className='my-20'>
          <div className='flex justify-center'>
      <form onSubmit={handleSubmit(handleUpdate)}>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend text-center text-2xl">Update</legend>

  <label className="label">New Photo-url</label>
  <input  {...register("photo", { required: 'Photo-url field is required' })} type="text" className="input" placeholder="Photo-url" />
{errors.photo && <p className='text-red-400'>{errors.photo.message}</p>}

  <label className="label">New Name</label>
  <input  {...register("name", { required: 'Name field is required' })} type="text" className="input" placeholder="Name" />
{errors.name && <p className='text-red-400'>{errors.name.message}</p>}


  <button className="btn btn-neutral mt-4">Update</button>
  
</fieldset>
      </form>
        </div>
     
        </div>
    );
};

export default UpdatePage;