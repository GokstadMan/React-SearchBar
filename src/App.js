import './App.css';
import React from 'react';
import SearchBar from './Components/SearchBar';
// import BookData from "./Book.json";
import CarData from "./Cars.json";
// import MovieData from "./Movies.json";
import "./Components/SearchBar.css"

function App() {
  return (
    <div className='App'>
      <h1>React SearchBar</h1>
      <SearchBar placeholder="Title..." data={CarData}/>
    </div>
  );
}

export default App;
