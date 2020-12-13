import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
class Countdown extends Component {
    state= {
        deadline: 'Dec, 25, 2020',
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    }

    getCountdown(deadline){
        // get deadline and today state and manipulate 
        // if < 0 that mean the date pass 
        const time = Date.parse(deadline) - Date.parse(new Date());
        if(time < 0) {
            console.log('Date Passed')
        } else {
            // Vanilla JS
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor(time/(1000*60*60*24));

            //ES6 syntax
            this.setState({
                days,
                hours,
                minutes,
                seconds
            })
        }
    }
    componentDidMount() {
        // set the time of the trigger this function every 1 second
        setInterval(() => this.getCountdown(this.state.deadline), 1000)
    }
    render() {
        return (
            <Slide left delay={1000}>
<div className="countdown_wrapper">
                <div className="countdown_top">
                    event start in
                </div>
                <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className="countdown_time">
                            {this.state.days}
                        </div>
                        <div className="countdown_tag">
                            Days
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            {this.state.hours}
                        </div>
                        <div className="countdown_tag">
                           Hours
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            {this.state.minutes}
                        </div>
                        <div className="countdown_tag">
                            Minutes
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            {this.state.seconds}
                        </div>
                        <div className="countdown_tag">
                            Seconds
                        </div>
                    </div>

                </div>
            </div>
            </Slide>
            
        );
    }
}

export default Countdown;