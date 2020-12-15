import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { PatsLogo } from '../ui/icons';
import { Link }  from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div className="wrap_head">
            <AppBar
            position="fixed"
            style={{
                width: '100%',
                backgroundColor:'#98c5e9',
                boxShadow: 'none',
                padding: '5px 0',
                borderBottom: '2px solid #00285e',

            }}
            >
                <Toolbar
                style={{display:'flex'}}>
                    <div style={{flexGrow: 0}}>
                        <div className="header_logo">
                                <PatsLogo 
                                link={true}
                                linkTo="/"
                                width="10em"
                                height="4em"
                                />

                        </div>
                    </div>
                    <Link to="/the_team">
                        <Button color="inherit" className="header_button">The Team</Button>
                    </Link>
                    <Link to ="/the_matches">
                     <Button color="inherit" className="header_button">Matches</Button>
                    </Link>
                    <Link to ="/sign_in">
                     <Button color="inherit" className="header_button">ROY?</Button>
                    </Link>

                </Toolbar>

            </AppBar>
            </div>
        );
    }
}

export default Header;