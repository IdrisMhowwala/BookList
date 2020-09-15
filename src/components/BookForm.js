import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_BOOK', book: {
                title, author
            }
        });
        setTitle('');
        setAuthor('');

    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col">
                    <input id="book_title" className="form-control" type="text" placeholder="Enter Book Title"
                        onChange={(event) => setTitle(event.target.value)}
                        value={title} required />
                </div>
                <div className="col">
                    <input className="form-control" type="text" placeholder="Enter Author Name"
                        onChange={(event) => setAuthor(event.target.value)}
                        value={author} required />
                </div>
                <div className="col">
                    <input className="btn btn-primary align-middle" type="submit" value="Add Book" />
                </div>
            </div>
        </form>
    );
};

export default BookForm;