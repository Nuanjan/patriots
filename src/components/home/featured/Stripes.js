import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";

class Stripes extends Component {
  state = {
    stripes: [
      {
        background: "red",
        left: "20%",
        top: "-30%",
        rotate: "25",
        delay: 0,
      },
      {
        background: "white",
        left: "32%",
        top: "-30%",
        rotate: "25",
        delay: 200,
      },
      {
        background: "red",
        left: "44%",
        top: "-30%",
        rotate: "25",
        delay: 400,
      },
      {
        background: "white",
        left: "56%",
        top: "-30%",
        rotate: "25",
        delay: 600,
      },
    ],
  };
  showStripes = () =>
    this.state.stripes.map((stripe, i) => (
      <Animate
        key={i}
        show={true}
        start={{
          background: "white",
          opacity: 0,
          left: 0,
          rotate: 0,
          top: 0,
        }}
        enter={{
          background: [stripe.background],
          opacity: [1],
          left: [stripe.left],
          rotate: [stripe.rotate],
          top: [stripe.top],
          bottom: [stripe.bottom],
          timing: { delay: stripe.delay, duration: 200, ease: easePolyOut },
          events: {
            end() {
              console.log("animation finish");
            },
          },
        }}
      >
        {({ opacity, left, rotate, top, background, bottom }) => {
          return (
            <div
              className="stripe"
              style={{
                background,
                opacity,
                position: "absolute",
                top,
                left,
                transform: `rotate(${rotate}deg)`,
              }}
            ></div>
          );
        }}
      </Animate>
    ));
  render() {
    return <div className="featured_stripes">{this.showStripes()}</div>;
  }
}

export default Stripes;
