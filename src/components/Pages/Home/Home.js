import React,{useEffect, useState} from 'react';
import Banner from './Banner/Banner';
import Service from './Service/Service';

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
             {
                 services.map(service=><Service
                 key={service.id}
                 service={service}
                 ></Service>)
             }
         </div>
        </div>
    );
};

export default Home;