import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

class Stripes extends Component {
    state={
        stripes: [
            {background: 'red',
            left:70,
            rotate:25,
            top:-10,
            delay:0
            },
            {background: 'white',
            left:180,
            rotate:25,
            top:-30,
            delay:200
        },
            {background: 'red',
            left:290,
            rotate:25,
            top:-30,
            delay:400
        },
        {background: 'white',
            left:400,
            rotate:25,
            top:-30,
            delay:600
        }
        ]
    }
    showStripes = () => (
        this.state.stripes.map((stripe, i) => (
           <Animate
           key={i}
           show={true}
           start={{
               background:'white',
               opacity:0,
               left:0,
               rotate:0,
               top:0
        }}
           enter={{
               background:[stripe.background],
               opacity:[1],
               left:[stripe.left],
               rotate:[stripe.rotate],
               top:[stripe.top],
               timing: {delay:stripe.delay,duration:200,ease:easePolyOut},
               events:{
                   end(){
                        console.log('animation finish')
                   }
               }
        }}
           >
               {({opacity, left,rotate, top, background}) => {
                   return(
                    <div
                    className="stripe"
                    style={{
                        background,
                        opacity,
                        transform: `rotate(${rotate}deg) translate(${left}%, ${top}em)`
                    }}
                    ></div>
                   );
               }}
           </Animate> 
        ))
    )
    render() {
        return (
            <div className="featured_stripes">
                {this.showStripes()}
            </div>
        );
    }
}

export default Stripes;