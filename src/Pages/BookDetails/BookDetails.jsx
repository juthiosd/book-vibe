import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const {id} = useParams();
    console.log('id',id);
    const bookData = useLoaderData();
     console.log('bookdata',bookData)


 const book = bookData.find(book => (book.bookId) === parseInt(id));
 
   console.log('book',book);
    

    return (
        <div className='max-w-full mx-auto mt-10'>
            <div className="card card-side bg-base-100 shadow-sm">
  {/*img section*/}
   <div className='md:w-full flex justify-cenetr item-center p-6'>
     <img
      src={book.image}
      alt={book.bookName}
      className='w-full max-w-sm object-contain'/>
      
   </div>
  
  <div className="card-body">
    <h2 className="card-title">{book.bookName}</h2>
    <p>By: {book.author}</p>
    <p>{book.category}</p>
    <p>review:{book.review}</p>

    {/*tags*/}
    <div className='flex item-center gap-2 flex-wrap mt-3'>
        <p className='font-semibold'>tags:</p>
        {book.tags?.map(tag =>(
            <p
                key={tag}
                className="text-green-600 bg-green-100 rounded-2xl px-3 py-1">
                    #{tag}
            </p>
        ))}
       

    </div>
    <p>Number of pages:{book.totalpages}</p>
    <p>publisher:{book.author}</p>
    <p>year of publisher: {book.yearOfpublishing}</p>
     

    <div className="card-actions justify-end mt-5">
    <button className="btn btn-primary">Read</button>
      <button className="btn btn-primary">Wishlist</button>
    </div>
  </div>
</div>
</div>
    );
};

export default BookDetails;