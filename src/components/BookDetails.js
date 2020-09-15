import React,{useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({book}) => {
    const {dispatch} = useContext(BookContext);
    const remove=()=>{
        dispatch({type:'REMOVE_BOOK',id:book.id});
    }
    return (
        <li className="card p-3 m-2" onClick={remove}>
            <div className="h5 text-warning">Title: {book.title}</div>
            <div className="h5 text-success">Author: {book.author}</div>
        </li>
    );
};

export default BookDetails;