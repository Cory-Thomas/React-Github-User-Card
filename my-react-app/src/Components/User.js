import React from 'react';

export default function Followers({user}){
    console.log(user)
    return(
        <div>
            <img src={user.avatar_url} alt='user' />
            <div>{user.name}</div>
        </div>
    )
}