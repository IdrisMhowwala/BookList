import React,{useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails'

const BookList = () => {
    const {books} = useContext(BookContext);
    return books.length?(
        <div className="container bg-light">
            <ul>
                {books.map(book=>{
                    return(<BookDetails book={book} key={book.id}/> );
                })}
            </ul>

        </div>
    ) : (
        <div className="alert alert-danger text-center">No Books to Read :-)</div>
    );
};

export default BookList;