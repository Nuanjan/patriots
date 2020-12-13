import React, { Component } from 'react';
import PlayerCard from '../ui/Card';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.css';

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
                    <div className="team_category_wrapper">
                        <div className="title">P</div>
                        <div className="team_cards">
                           {this.showplayersbyCategory('P')} 
                        </div>
                    </div>
                    <div className="team_category_wrapper">
                        <div className="title">OL</div>
                        <div className="team_cards">
                           {this.showplayersbyCategory('OL')} 
                        </div>
                    </div>
                    <div className="team_category_wrapper">
                        <div className="title">CB</div>
                        <div className="team_cards">
                           {this.showplayersbyCategory('CB')} 
                        </div>
                    </div>
                    <div className="team_category_wrapper">
                        <div className="title">C</div>
                        <div className="team_cards">
                           {this.showplayersbyCategory('C')} 
                        </div>
                    </div>
                    <div className="team_category_wrapper">
                        <div className="title">TE</div>
                        <div className="team_cards">
                           {this.showplayersbyCategory('TE')} 
                        </div>
                    </div>
                    <div className="team_category_wrapper">
                        <div className="title">DB</div>
                        <div className="team_cards">
                           {this.showplayersbyCategory('DB')} 
                        </div>
                    </div>
                    <div className="team_category_wrapper">
                        <div className="title">DL</div>
                        <div className="team_cards">
                           {this.showplayersbyCategory('DL')} 
                        </div>
                    </div>
                    <div className="team_category_wrapper">
                        <div className="title">LS</div>
                        <div className="team_cards">
                           {this.showplayersbyCategory('LS')} 
                        </div>
                    </div>
                    <div className="team_category_wrapper">
                        <div className="title">K</div>
                        <div className="team_cards">
                           {this.showplayersbyCategory('K')} 
                        </div>
                    </div>
                    <div className="team_category_wrapper">
                        <div className="title">RB</div>
                        <div className="team_cards">
                           {this.showplayersbyCategory('RB')} 
                        </div>
                    </div>
                    <div className="team_category_wrapper">
                        <div className="title">FB</div>
                        <div className="team_cards">
                           {this.showplayersbyCategory('FB')} 
                        </div>
                    </div>
                    <div className="team_category_wrapper">
                        <div className="title">DT</div>
                        <div className="team_cards">
                           {this.showplayersbyCategory('DT')} 
                        </div>
                    </div>
                    <div className="team_category_wrapper">
                        <div className="title">DE</div>
                        <div className="team_cards">
                           {this.showplayersbyCategory('DE')} 
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