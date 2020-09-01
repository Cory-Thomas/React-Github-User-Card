import React from 'react';

export default function Followers({userFollowers}){
    console.log(userFollowers)
    return(
        <div>
            {userFollowers.map(follower => {
                return (
                    <div>
                        <img src={follower.avatar_url} alt='follower' />
                        <div>{follower.name}</div>
                    </div>
                )
            })}
        </div>
    )
}