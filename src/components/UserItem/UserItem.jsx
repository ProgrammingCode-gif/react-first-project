import React from 'react'
import styles from './style.module.css';

const UserItem = ({user}) => {
  return (
    <div className={styles.wrapper}>
        <h2>Name: {user.name}</h2>
        <h3>Username: {user.username}</h3>
        <p>Email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
        <p>Website: <a href={user.website}>{user.website}</a></p>
    </div>
  )
}

export default UserItem