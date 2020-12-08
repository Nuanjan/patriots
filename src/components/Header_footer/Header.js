import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { PatsLogo } from '../ui/icons';
import { Link }  from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <AppBar
            position="fixed"
            style={{
                backgroundColor:'#98c5e9',
                boxShadow: 'none',
                padding: '10px 0',
                borderBottom: '2px solid #00285e'

            }}
            >
                <Toolbar
                style={{display:'flex'}}>
                    <div style={{flexGrow: 1}}>
                        <div className="header_logo">
                                <PatsLogo 
                                link={true}
                                linkTo="/"
                                width="160px"
                                height="80px"
                                />

                        </div>
                    </div>
                    <Link to="/the_team">
                        <Button color="inherit">The Team</Button>
                    </Link>
                    <Link to ="/the_matches">
                     <Button color="inherit">Matches</Button>
                    </Link>
                    <Link to ="/sign_in">
                     <Button color="inherit">admin?</Button>
                    </Link>

                </Toolbar>

            </AppBar>
        );
    }
}

export default Header;