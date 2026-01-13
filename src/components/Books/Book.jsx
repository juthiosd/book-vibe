import React from 'react';
import { FaRegStar } from "react-icons/fa";
import{Link} from 'react-router'

const Book = ({ book }) => {
    console.log('book', book);
    return (
       
        <Link to={`/book/${book.bookId}`}>
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className='bg-gray-200 p-2'>
                    <img
                        src={book.image}
                        alt="Book" className='w-20 h-30' />
                </figure>
                <div className='card-body'>
                    <div className='flex gap-2 flex-warp'>
                        {book.tags.map(tag => (
                            <p
                                key={tag}
                                className='text-green-600 bg-green-100 rounded-2xl px-3 py-1 text-xl'
                            >
                                {tag}
                            </p>
                        ))}
                    </div>
                </div>

                <h2 className="card-title">{book.bookName}</h2>
                <p>By: {book.publisher} </p>
                <hr className='border-dashed'></hr>


                <div className='flex w-full justify-between'>
                    <p>{book.category}</p>
                    <div className='flex items-center gap-1'>
                        <p className=''>{book.rating}</p>
                        <FaRegStar />
                    </div>
                </div>


            </div>
        </div>
        </Link>
    

    );
};

export default Book;