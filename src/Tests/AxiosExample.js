import React, { useState } from 'react'
import Axios from 'axios'

function AxiosExample() {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    const getData = () => {
        Axios.get("https://reqres.in/api/users/2").then(
            (response) => {
                console.log(response.data);
                setData(JSON.stringify(response.data));
                setCount(() => (count+1));
            } 
        )
    }

  return (
    <div>
    <h1>AxiosExample</h1>
    <button onClick={getData}> Click to make get Req</button> 
    <h2>{count}</h2>
    <h3>{data[count]}</h3>   
    </div>
  )
}

export default AxiosExample