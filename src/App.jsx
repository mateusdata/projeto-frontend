import { useEffect, useState } from 'react';
import axios from "axios";

function App() {
  const [users, setUser] = useState([]);
useEffect(()=>{
  axios.get("http://localhost:3001/").then((respose)=>{
    console.log(respose);
    setUser(respose?.data);
    setUser(respose?.data);
  })
},[])

  return (
    <div className="bg-white flex items-center justify-center flex-col ">
      <h1 className="text-2xl">
       Projeto academia
      </h1>
      {users.map((item)=>(
        <div key={item.id}> 
          <p>{item?.id}</p>
          <p>{item?.name}</p>
          <p>{item?.email}</p>
          <p>{item?.password}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
