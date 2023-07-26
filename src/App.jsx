import React, { useState } from "react"
import SearchBar from "./components/SearchBar/SearchBar"
import './assets/styles/App.css'
import Users from "./components/Users/Users"

function App() {
  const [search, setSearch] = useState('');

  function changeSearch(text) {
    setSearch(text);
  }

  return (
    <div>
      <div className="container">
        <div className="searchBar-wrapper">
          <SearchBar onClick={changeSearch} />
        </div>
        <Users search={search}/>
      </div>
    </div>
  )
}

export default App
