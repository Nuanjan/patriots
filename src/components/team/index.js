import React, { Component } from 'react';
import PlayerCard from '../ui/Card';
import Fade from 'react-reveal/Fade';

import Stripes from '../../Resources/images/stripes.png';
import { firebasePlayers, firebase } from '../../firebase';
import { firebaseLooper } from '../ui/misc';
import { Promise } from 'core-js';

class Theteam extends Component {
    state = {
        loading: true,
        players: []
    }
    componentDidMount() {
        firebasePlayers.once('value').then(snapshot => {
            const players = firebaseLooper(snapshot);
            let promise = [];
            for(let key in players) {
                promise.push(
                    new Promise((resolve, reject) => {
                        firebase.storage().ref('players')
                        .child(players[key].image).getDownloadURL()
                        .then( url => {
                            players[key].url = url;
                            resolve();
                        })
                    })
                )
            }

            Promise.all(promise)
            .then(() => {
                this.setState({
                    loading: false,
                    players
                })
            })
            
        })
    }
    showplayersbyCategory = (category) => (
this.state.players ?
this.state.players.map((player, i) => {
    return player.position === category ?
    <Fade left deley={i*20} key={i}>
        <div className="item">
            <PlayerCard
            number={player.number}
            name={player.name}
            lastname={player.lastname}
            bck={player.url}
            />
        </div>
    </Fade>
    : null
})
: null
    )
    render() {
        return (
            <div className="the_team_container"
            style={{
                background:`url(${Stripes}) repeat`
            }}
            >
                {!this.state.loading
                ? <div>
                    <div className="team_category_wrapper">
                        <div className="title">LB</div>
                        <div className="team_cards">
                           {this.showplayersbyCategory('LB')} 
                        </div>
                    </div>
                    <div className="team_category_wrapper">
                        <div className="title">P</div>
                        <div className="team_cards">
                           {this.showplayersbyCategory('P')} 
                        </div>
                    </div>
                    <div className="team_category_wrapper">
                        <div className="title">QB</div>
                        <div className="team_cards">
                           {this.showplayersbyCategory('QB')} 
                        </div>
                        <div className="team_category_wrapper">
                        <div className="title">WR</div>
                        <div className="team_cards">
                           {this.showplayersbyCategory('WR')} 
                        </div>
                    </div>
                    </div>
                </div>
                : null
            }
                
            </div>
        );
    }
}

export default Theteam;