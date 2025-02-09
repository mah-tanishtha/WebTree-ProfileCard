import React, { useEffect, useState } from 'react'
import '../components/styles/ProfileCard.css'


const ProfileCard = () => {
    const [profileData, setProfileData] = useState(null);

    const fetchData = async () => {
        try {
            const result = await fetch("https://randomuser.me/api/?page=1&results=1&seed=abc");
            console.log("Raw Response:", result);

            const response = await result.json();
            console.log("Fetched Data:", response);

            return response.results[0]; 
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    };

    useEffect(() => {
        const getData = async () => {
            const data = await fetchData();
            if (data) {
                setProfileData(data);
            }
        };

        getData(); 
    }, []);

    return (
        <div className='main-container font-bold' >
            
            {
                profileData ? (
                    <div className='profile-box-container'>
                        <div className='image-container'>
                            <img className='image-css' src={profileData.picture.large} style={{height:"100%"}}/>
                            {
                                console.log("prpr",profileData.picture.thumbnail)
                            }
                        </div>
                        <div className='info-container flex flex-col'>
                            <div className='flex'>
                                <p>{profileData.name.first} {profileData.name.last}</p>
                                
                            </div>
                            <div>
                                <p>{profileData.gender}</p>
                            </div>
                            <div>
                                {profileData.cell}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}



        </div>
    )
}

export default ProfileCard
