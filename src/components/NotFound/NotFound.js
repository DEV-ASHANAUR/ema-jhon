import React from 'react';
import './NotFound.css';
const NotFound = () => {
    const img = 'https://www.designbolts.com/wp-content/uploads/2016/06/404-error-page-not-found-2016-designs-22.jpg';
    return (
        <div className="not-found">
            <img className='img-fluid' src={img} alt='..' />
        </div>
    );
};

export default NotFound;