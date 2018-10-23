
import React, { Component } from 'react';

import './Counter.css';

export default class Counter extends Component {

    render () {
        return (
            <div className="content-counter">

                <div id="counter" className="counter-wrapper"> 

                    <div id="days" className="time-content">
                        <h2 className="days-number content-number days">12</h2>
                        <span className="days-text time-text"> Days </span>
                    </div>

                    <div id="hours" className="time-content time-counter">
                        <h2 className="time-content-number content-number hours">12</h2>
                        <span className="time-text"> Hours </span>
                    </div>

                    <div id="minutes" className="time-content time-counter">
                        <h2 className="time-content-number content-number minutes">10</h2>
                        <span className="time-text">Minuts  </span>
                    </div>

                    <div id="seconds" className="time-content time-counter">
                        <h2 className="time-content-number content-number seconds">1</h2>
                        <span className="time-text">Seconds  </span>
                    </div>

                </div> 

            </div>
        );
    }

}