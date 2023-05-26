import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);
    const fetchData=()=>(
        axios.get("https://jsonplaceholder.typicode.com/users").then(
        (Response)=>{
            setData(Response.data)
        }   
    )
  )
  React.useEffect(()=>{fetchData()},[])
  return (
    <div>
         <Navbar />
         <div className="container">
         <br /> <h4> Employee List</h4>  
        <div className="row">
        <div className="row g-3">
          {data.map((value, index) => {
            return (
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <div className="card ">
                 
                  <div className="card-body">
                    <h5 className="card-title">{value.name}</h5>
                     
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      ID : {value.name}  
                    </li>
                    <li class="list-group-item">Email : {value.username}</li>
                    <li class="list-group-item">
                    <a href="#" class="card-link">View</a>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home