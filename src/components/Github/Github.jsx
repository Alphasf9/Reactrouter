import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Alphasf9')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })
    // }, [])

    const data = useLoaderData();

    return (
        <div className='text-center m-4 bg-black text-white p-4 text-3xl'>Github following:{data.following}
            <img src={data.avatar_url} alt="Git picture" width={"200px"} height={"700px"} className='m-4  mx-auto  ' />
            <div className='text-center m-4 bg-black text-white p-4 text-3xl'>Github repositories:{data.public_repos}</div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Alphasf9')
    return response.json()

}
