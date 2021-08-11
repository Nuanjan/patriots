import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";
import PlayerCard from "../../ui/Card";
import Julian from "../../../Resources/images/players/julian-edelman.png";
class HomeCards extends Component {
  state = {
    cards: [
      {
        bottom: "25%",
        left: 120,
      },
      {
        bottom: "20%",
        left: 90,
      },
      {
        bottom: "15%",
        left: 50,
      },
      {
        bottom: "10%",
        left: "0%",
      },
    ],
  };

  showAnimateCards = () =>
    this.state.cards.map((card, i) => (
      <Animate
        key={i}
        show={this.props.show}
        start={{
          left: 0,
          bottom: 0,
        }}
        enter={{
          left: [card.left],
          bottom: [card.bottom],
          timing: { duration: 500, ease: easePolyOut },
        }}
      >
        {({ left, bottom }) => {
          return (
            <div
              style={{
                position: "absolute",
                left,
                bottom,
              }}
            >
              <PlayerCard
                number="11"
                name="Julian"
                lastname="Edelman"
                bck={Julian}
              />
            </div>
          );
        }}
      </Animate>
    ));
  render() {
    return <div className="home_card_wrapper">{this.showAnimateCards()}</div>;
  }
}

export default HomeCards;
