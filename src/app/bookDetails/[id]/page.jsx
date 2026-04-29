
import Image from 'next/image';
import data from '../../../../public/data.json';
import { toast } from 'react-toastify';

export const generateStaticParams = () => {
  return data.map(book => ({ id: String(book.id) }));
};

const BookDetails = async ({ params }) => {
  const { id } = await params;
  const book = data.find(book => String(book.id) === id);


  return (
    <div className='my-20 lg:w-[80%] w-[90%] mx-auto flex items-center gap-20 lg:flex-row justify-between flex-col'>
      <div className=''>
        <Image src={book.image_url} className='mx-auto rounded-2xl' width={280} height={280} alt={book.title}></Image>
      </div>

      <div className='text-[20px] space-y-2'>
         <h1 className=''>Title : <span className='font-bold '>{book.title}</span></h1>
        <h1>Author : <span className='font-bold'>{book.author}</span></h1>
        <p>Description : <span className='font-bold'>{book.description}</span></p>
        <h1>Available Quantity : <span className='font-bold'>{book.available_quantity} copies left</span></h1>
        <h1>Category : <span className='font-bold'>{book.category}</span></h1>
      
      </div>
    </div>
  );
};

export default BookDetails;