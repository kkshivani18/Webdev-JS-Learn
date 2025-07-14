import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { usernameState, profileDataState } from './atoms'

export function Assignment5() {
    const [username, setUsername] = useRecoilState(usernameState);
    const [profileData, setProfileData] = useRecoilState(profileData);
    const [error, setError] = useState(null);

    const fetchProfile = async () => {
        setError(null);
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if(!response.ok){
                throw new Error('User not found');
            }
            const data = await response.json();
            setProfileData(data);
        }
        catch (error) {
            setError(error.message);
            setProfileData(null);
        }
    };

    return (
        <div>
            <h1>Github Profile Generator</h1>
            <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Enter Github username'
                />
            <button onClick={fetchProfile}>Fetch Profile</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {profileData && (
                <div> <h2>{profileData.name}</h2> 
                <img src={profileData.avatar_url} 
                alt={`${profileData.name}'s avatar`} width="150" /> <p>{profileData.bio}</p> 
                <a href={profileData.html_url} target="_blank" rel="noopener noreferrer"> 
                    Visit Profile 
                </a> 
                </div>
            )}
        </div>
    )
}





