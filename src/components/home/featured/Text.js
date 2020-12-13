import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import FeaturedPlayer from '../../../Resources/images/featuredPlayer.png'
class Text extends Component {
    animateNumber =() => (
        <Animate
        show={true}
        start={{
            opacity:0,
            rotate:0
        }}
        enter={{
            opacity:[1],
            rotate:[360],
            timing:{duration: 1000, ease: easePolyOut}
        }}
        >
            {({opacity, rotate}) => {
                return (
                    <div className="featured_number"
                    style={{
                        opacity,
                        transform:`translate(8vw, 40%) rotateY(${rotate}deg)`
                    }}>
                            6
                    </div>
                )
            }}
        </Animate>
    );
    animateFirst = () => (
        <Animate
        show={true}
        start={{
            opacity:0,
            x: 503,
            y: 450
        }}
        enter={{
            opacity:[1],
            x: [8],
            y: [400],
            timing:{duration: 500, ease: easePolyOut}
        }}
        >
            {({opacity, x, y}) => {
                return (
                    <div className="featured_first"
                    style={{
                        opacity,
                        transform:`translate(${x}vw, ${y}%)`
                    }}>
                            Super Bowl
                    </div>
                )
            }}
        </Animate>
    );

    animateSecond = () => (
        <Animate
        show={true}
        start={{
            opacity:0,
            x: 503,
            y: 586
        }}
        enter={{
            opacity:[1],
            x: [8],
            y: [520],
            timing:{delay:300,duration: 500, ease: easePolyOut}
        }}
        >
            {({opacity, x, y}) => {
                return (
                    <div className="featured_second"
                    style={{
                        opacity,
                        transform:`translate(${x}vw, ${y}%)`
                    }}>
                            Championships
                    </div>
                )
            }}
        </Animate>
    );
    animatePlayer = () => (
        <Animate
        show={true}
        start={{
            opacity:0,
        }}
        enter={{
            opacity:[1],
            timing:{delay:800,duration: 500, ease: easePolyOut}
        }}
        >
            {({opacity}) => {
                return (
                    <div className="featured_player"
                    style={{
                        opacity,
                        background:`url(${FeaturedPlayer})`,
                        transform:`translate(20vw, 20%)`
                    }}>
                    </div>
                )
            }}
        </Animate> 
    )

    render() {
        return (
            <div className="featured_text">
                {this.animatePlayer()}
                {this.animateNumber()}
                {this.animateFirst()}
                {this.animateSecond()}
                
            </div>
        );
    }
}

export default Text;