import React from 'react';
import Stripes from './Stripes';
import Text from './Text'

const Featured = () => {
    return (
        <div className="featured_wrapper"
        style={{color: 'white',
        paddingTop:"10px"
        }}>
           <Stripes/>
           <Text/>
        </div>
    );
};

export default Featured;