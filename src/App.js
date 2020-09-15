import React from 'react';
import './index.css';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className="container">
      <BookContextProvider>
         <Navbar/>
         <BookList/>
         <BookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
