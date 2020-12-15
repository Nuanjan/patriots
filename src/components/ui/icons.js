import React from 'react';
import { Link }  from 'react-router-dom';
import patriots from '../../Resources/images/logos/roy-boy-logo.png'

export const PatsLogo = (props) => {
    const template = <div
    className="img_cover"
    style={{
        width: props.width,
        height: props.height,
        background: `url(${patriots}) no-repeat`
    }}
    ></div>

    if(props.link) {
        return (
            <Link to={props.linkTo} className="link_logo">
                {template}
            </Link>
        )
    }else {
        return template
    }
}