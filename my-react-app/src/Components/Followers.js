import React from 'react';

export default function Followers({followers}){
    console.log(followers)
    return(
        <div className='followers'>
            {followers.map(follower => {
                return (
                    <div className="follower">
                        <img src={follower.avatar_url} alt='follower' />
                        <div>Github name: {follower.login}</div>
                        <div><p>GH link: <a href={follower.url}>{follower.url}</a></p></div>
                    </div>
                )
            })}
        </div>
    )
}