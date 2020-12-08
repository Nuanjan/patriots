import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Jersy from '../../../Resources/images/pats-jersey.jpg';

const PromoAnimation = () => {
    return (
        <div className="promotion_animation">
            <div className="left">
                <Zoom>
                <div>
                    <span style={{color: '#192841'}}>Win a</span>
                    <span style={{color: '#192841'}}>Jersy</span>
                </div>
                </Zoom>
            </div>
            <div className="right">
                <Zoom>
                    <div style={{background:`url(${Jersy}) no-repeat`}}>

                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default PromoAnimation;