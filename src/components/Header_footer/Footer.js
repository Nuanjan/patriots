import React from 'react';
import { PatsLogo } from '../ui/icons';

const Footer = () => {
    return (
        <footer className="bck_red">
            <div className="footer_logo">
                <PatsLogo
                width='160px'
                height='80px'
                link={true}
                linkTo="/"
                 />
            </div>
            <div className="footer_discl">
                Patriots 2020.All rights reserved
            </div>
        </footer>
    );
};

export default Footer;