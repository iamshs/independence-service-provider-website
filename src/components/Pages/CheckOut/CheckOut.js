import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const {Id}=useParams()
    return (
        <div>
           <h1>This is checkout of id:{Id}</h1> 
        </div>
    );
};

export default CheckOut;