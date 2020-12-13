import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Jersy from '../../../Resources/images/pats-party.jpg';

const PromoAnimation = () => {
    return (
        <div className="promotion_animation">
            <div className="left">
                <Zoom>
                <div>
                    <span style={{color: '#192841'}}>Join a</span>
                    <span style={{color: '#192841'}}>Party</span>
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