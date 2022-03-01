import { useState, useEffect } from 'react'



function useFetch(url) {

const [data, setData] = useState("");
const [error, setError] = useState(null)

useEffect(()=>{
    if (!url){return}
    
  async function getDefinition() {
    try {
      const response = await fetch(url, {
        headers: { Accept: "application/json" },
      });
      const data = await response.json();
      setData(data);
      setError(null);
    } catch (error) {
      setError(error);
      setData(null);
    }
  }
  
  getDefinition();
    
    }, [url]);

  return (
    {data, error}
  )
}

export default useFetch