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
                backgroundColor:'#98c5e9',
                boxShadow: 'none',
                marginLeft: '50px',
                padding: '10px 0',
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
                                width="6em"
                                height="3em"
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
                     <Button color="inherit" className="header_button">admin?</Button>
                    </Link>

                </Toolbar>

            </AppBar>
            </div>
        );
    }
}

export default Header;