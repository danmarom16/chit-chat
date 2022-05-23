import React, { useState } from 'react'
import Axios from 'axios'

function AxiosExample() {
    const [data, setData] = useState("");

    const getData = () => {
      try {
         Axios.get("https://reqres.in/api/users/2").then(
           (res) => {
            console.log(res);
            setData(res.data.data.first_name)
          }
         )     
      }
      catch (err) {
          console.error(err);
      }
  }

  return (
    <div>
    <h1>AxiosExample</h1>
    <button onClick={getData}> Click to make get Req</button> 
    <h2>{data}</h2>
    </div>
  )
}

export default AxiosExample