import React, { useState } from 'react'
import Axios from 'axios'

function AxiosExample() {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    const handleClick = () => {
      getData();
      setCount(() => (count+1));
      console.log(data);
    }

    async function getData() {
      try {
         let res = await Axios.get("https://reqres.in/api/users/2");
          if(res.status == 200){
              // test for status you want, etc
              console.log(res.status)
              setData(JSON.stringify(res.data));
          }    
      }
      catch (err) {
          console.error(err);
      }
  }

  return (
    <div>
    <h1>AxiosExample</h1>
    <button onClick={handleClick}> Click to make get Req</button> 
    <h2>{count}</h2>
    <h3>{data[count]}</h3>   
    </div>
  )
}

export default AxiosExample