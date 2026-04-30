
import Image from 'next/image';
import data from '../../../../public/data.json';
import { toast } from 'react-toastify';
import Books from '@/Components/Books';

export const generateStaticParams = () => {
  return data.map(book => ({ id: String(book.id) }));
};

const BookDetails = async ({ params }) => {
  const { id } = await params;
  const book = data.find(book => String(book.id) === id);


  return (
    <div className='my-20 lg:w-[80%] w-[90%] mx-auto gap-20 '>
   <Books book={book}></Books>
    </div>
  );
};

export default BookDetails;