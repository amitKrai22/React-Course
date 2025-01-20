import React, { useEffect, useState } from "react";
// import { useLoaderData} from "react-router-dom";


function Github(){
    // const data = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/amitKrai22')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            setData(data)

        })
    }, [])
    return (
        <div className="text-center m-4 bg-gray-600 text-white text-3xl p-4">Github follower: {data.followers}
        <img src={data.avatar_url} alt="git img" width={300}/>
        </div>
    )
}



// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/amitKrai22')
//     return response.json()
// }

export default Github ;

