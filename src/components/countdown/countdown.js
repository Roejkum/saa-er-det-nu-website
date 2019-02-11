import React from 'react'

export default class Countdown extends React.Component {
    state = {
        counter: ''
    }

    componentWillMount() {
        // Set the date we're counting down to
        const countDownDate = new Date("Feb 19, 2019 12:00:00").getTime();

        const updateTime = () => {
            const self = this;
            // Get todays date and time
            const now = new Date().getTime();
            // Find the distance between now and the count down date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            const newCounter = (days + "d " + hours + "t "
            + minutes + "m " + seconds + "s ");

            self.setState({ counter: newCounter });
        }
        updateTime();

        // Update the count down every 1 second
        const timer = setInterval(() => {
            updateTime();

        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const counter = this.state.counter;
        let countEl;

        if( counter ) {
            countEl = <h3 className="yellow-text fade-in">{this.state.counter}</h3>;
        } else {
            countEl = '';
        }
    
        return (
            <>
            {countEl}
            </>
        );
    }
}