import React, { useEffect, useRef, useState } from 'react'
import styles from './style.module.css'

const SearchBar = ({ onChange, onClick }) => {

  const [search, setSearch] = useState('');

  return (
    <div className={styles.wrapper}>
      <input value={search} onChange={(e) => setSearch(e.target.value)} className={styles.searchBar} type="text" />
      <button onClick={() => onClick(search)} className={styles.btn}>Найти</button>
    </div>
  )
}

export default SearchBar