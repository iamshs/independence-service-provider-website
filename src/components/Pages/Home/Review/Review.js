import React from 'react';
import './Review.css'

const Review = ({review}) => {
const {name,ratings,reviews} =review

    return (
        <div className='review'>
          <h3 className=' lg-ms-2 p-1 my-3'>Review by:{name}</h3> 
         <p className=' lg-ms-2 p-1  my-3'>Review:{ reviews }</p>
        <p className=' lg-ms-2 p-1  my-3'>Ratings:<small>{ratings} star</small></p>
        </div>
    );
};

export default Review;