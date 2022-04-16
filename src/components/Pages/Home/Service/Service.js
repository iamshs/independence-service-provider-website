import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, img, description } = service
    return (
        
          
            <div className="service">
                <img className='w-75 m-1 rounded' src={img} alt="" />
                <h3 className=' ms-2 my-3'>{name}</h3>
                <h1 className='ms-2 my-2'>Price:{price}</h1>
                <p  className='ms-2 my-2'>{description}</p>

                <button className='rounded w-100 border-1'>CheckOut</button>
            </div>

       
    );
};

export default Service;