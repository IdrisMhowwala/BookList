import React ,{useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const {books} = useContext(BookContext);
    return (
        <div className="navbar navbar-dark bg-dark">
            <h2 className="text-white mt-2 text-center">Welcome To The Book Reading App</h2>
            <p className="text-white mt-3 font-weight-bold">Currently You have {books.length} books to read.</p>    
        </div>
    );
};

export default Navbar;