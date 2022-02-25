import { useState, useEffect } from 'react'



function useFetch(url) {

const [data, setData] = useState('')
const [error, setError] = useState(null)

useEffect(()=>{
    if (!url){return}
    
    fetch(url, {
    headers: {Accept: "application/json" },
    })
    .then((res) => res.json())
    .then(data => {
            setData(data);
            setError(null);
    })
    .catch((err)=>{
            setError(err);
            setData(null);
    });
    
    }, [url]);

  return (
    {data, error}
  )
}

export default useFetch