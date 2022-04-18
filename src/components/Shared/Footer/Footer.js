import React from 'react';
import './Footer.css'


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    // let copy = React.string({js|©|js});
    return (
        <footer className='text-center mt-5 mb-1 fw-bolder footer-style '>
          <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> {year} Wild Life
        </footer>
    );
};

export default Footer;