import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, img, description } = service
    return (
        
          
            <div className="service">
                <img className='w-100 lg-p-1  rounded' src={img} alt="" />
                <h3 className=' lg-ms-2  my-3'>{name}</h3>
                <h1 className='lg-ms-2 lg-my-2'>Price:{price}</h1>
                <p  className='lg-ms-2 lg-my-2'>{description}</p>

                <button className='rounded w-100  '>CheckOut</button>
            </div>

       
    );
};

export default Service;