import React from 'react';
import PromoAnimation from './PromoAnimation';
import Enroll from './Enroll';
import Countdown from './Countdown';

const Promotion = () => {
    return (
        <div className="promotion_wrapper" style={{background: '#ffffff'}}>
            <div className="container">
                <PromoAnimation/>
                <Countdown/>
                <Enroll/>
            </div>
        </div>
    );
};

export default Promotion;