import React, { useEffect, useMemo, useState } from 'react'
import UsersAPI from '../../api/users';
import UserItem from '../UserItem/UserItem'
import styles from './style.module.css'

const Users = ({search}) => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getUsers = async () => {
            const data = await UsersAPI.getUsers()
            setUsers(data);
            setLoading(false)
        };
        getUsers();
    }, []);

    const usersSearched = useMemo(() => {
        if(users) {
            return users.filter(user => isIncludeSymbols(user))
        } else {
            return users;
        }
    }, [search, users]);

    function isIncludeSymbols(obj) {
        return obj.name.toLowerCase().includes(search.toLowerCase()) ||
        obj.username.toLowerCase().includes(search.toLowerCase())
    }
    return (
        <div className={styles.wrapper}>
            {
                loading 
                ? <p>Загрузка</p>
                : usersSearched.map(user => <UserItem user={user} key={user.id}/>)
            }
        </div>
    )
}

export default Users