import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {
    const[books, setBooks] = useState([]);

    useEffect(() =>{
        fetch('../../../public/bookdata.json')
        .then(res => res.json())
        .then(data => setBooks(data))

    },[])
    console.log('books',books);


    return (
        <div className='my-5'>
            <p className='text-center text-3xl font-bold'>Books</p>
            <div className='grid grid-cols-3 gap-3 mt-5'>
             {
            books.map(book => <Book key={book.bookId}book={book}></Book>)
        }
        </div>

        </div>
       
    );
};

export default Books;