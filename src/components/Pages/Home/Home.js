import React,{useEffect, useState} from 'react';
import Banner from './Banner/Banner';
import Service from './Service/Service';
import './Home.css'

const Home = () => {
    const [services,setServices]= useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
         <Banner></Banner>

         {/* showing--services */}
         <div>
         <h1 className='text-center my-5'>Our Services</h1>
            <div className="service-container mx-auto">
            {
                 services.map(service=><Service
                 key={service.id}
                 service={service}
                 ></Service>)
             }
            </div>
         </div>
        </div>
    );
};

export default Home;