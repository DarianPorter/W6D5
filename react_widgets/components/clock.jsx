import React from 'react';
// import styles from "../stylesheets/clock.css";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        let date = new Date();
        this.state = {
            "time": {
                    "hours": date.getHours(),
                     "minutes": date.getMinutes(),
                     "seconds": date.getSeconds(),
                     "milliseconds": date.getMilliseconds()
            },

            "date": {
                    "day": date.getDate(),
                     "month": date.getMonth(),
                     "year": date.getFullYear()
            }
        };
        this.clockHandle = null;
        this.tick = this.tick.bind(this);
    }
    componentDidMount () {
        this.clockHandle = setInterval(this.tick, 100);
    }

    tick() {
        this.setState( {"time": {
            "hours": new Date().getHours(),
            "minutes": new Date().getMinutes(),
            "seconds": new Date().getSeconds(),
            "milliseconds": new Date().getMilliseconds()}
        }) 
    }

    render() {
        // debugger
        const timeObj = this.state.time;
        const dateObj = this.state.date;
        const timer = <h4>Time: {timeObj.hours % 12} : {timeObj.minutes} : {timeObj.seconds} : {timeObj.milliseconds}</h4>
        const date = <h4>Date: {dateObj.month}-{dateObj.day}-{dateObj.year}  </h4>
        return (
            
            <div className="clock">
                <h1>Darian's Double-Dope Clock</h1>
                {timer}
                {date}
            </div>
        );
    }
}

export default Clock;