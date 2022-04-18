import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import Service from './Service/Service';
import './Home.css'
import Review from './Review/Review';

const Home = () => {
    //service state and data
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    //reviews state and data
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <Banner></Banner>

            {/* showing--services */}
            <div>
                <h1 style={{ color: '#F4BB44' }} className='text-center my-5'>Our Services</h1>
                <div className="container">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
            <div>
                <h1 style={{ color: '#F4BB44' }} className='text-center my-5'>Customer Reviews</h1>
                <div className="container">
                    {
                        reviews.map(review=><Review
                        key={review.id}
                        review={review}
                        ></Review>)

                    }
                </div>
            </div>
        </div>
    );
};

export default Home;