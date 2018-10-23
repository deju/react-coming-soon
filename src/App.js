import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Counter from './components/Counter';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    componentDidMount () {
        document.getElementById('preloader').style.display = 'none';
    }

    renderParticle () {
        return (
            <Particles
                className="app-particle"
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
            />
        );
    }

    render() {
        return (
            <div className="app">
                <div className="app-root">
                    <div className="app-particle__container">
                        {this.renderParticle()}
                    </div>
                    <div className="app-container">
                        <div className="app-logo"><img src={logo} alt="logo" /></div>
                        <div className="centered">Comming soon...</div>
                        <Counter />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
