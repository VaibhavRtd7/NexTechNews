import React, { useEffect } from 'react'
// import { useGlobalContext } from '../context';

const Stories = () =>  {
   
    let API = "https://hn.algolia.com/api/v1/search?";
     
    const fetchApiData = async (url) => {

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

        } catch (error) {
            console.log("Error : ", error)
        }

    }

    useEffect( () => {
        fetchApiData(API);
    })


    return (
    <>  
        <h1  className="text-center text-2xl font-bold "> My Tech News Post</h1>
    </>
    );
    
}

export default Stories


