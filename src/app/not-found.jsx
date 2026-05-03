import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='animate-pulse flex items-center justify-center flex-col h-screen space-y-5'>
            <h1 className='text-3xl'>404 Not Found</h1>
            <Link className='btn btn-primary' href={'/'}>Go Home</Link>
        </div>
    );
};

export default NotFoundPage;