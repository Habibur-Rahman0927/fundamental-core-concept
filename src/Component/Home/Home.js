import React, { useEffect, useState } from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const Home = () => {
    const [likeColor, setLikeColor] = useState('');
    const [users, setUsers] = useState([]);
    const [singleUser, setSingleUser] = useState({});
    const [ramdomUser, setRamdomUser] = useState({});
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));

        // single user
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json())
        .then(data => setSingleUser(data));

        // randomUser
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => setRamdomUser(data.results[0]));
    }, [])
    const handleLike = () =>{
        const color = likeColor ? '':'primary';
        setLikeColor(color)
    }
    return (
        <div>
            <h1>This is Home</h1>
            <ThumbUpAltIcon onClick={handleLike} color={likeColor}></ThumbUpAltIcon>
            <h1>Name : {singleUser.name}</h1>
            <h1>Random user Name: {ramdomUser.name?.title}</h1>{/* ramdomUser.name &&  */}
            <h2>Random user Gender : {ramdomUser.gender}</h2>
            <h2>Random user E-mail : {ramdomUser.email}</h2>
            {
                users.map(user => <li>{user.name}</li>)
            }
        </div>
    );
};

export default Home;