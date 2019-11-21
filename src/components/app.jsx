import React from 'react';

// import sample arrays
import { bankA } from './sampleBanks.js';
import { bankB } from './sampleBanks.js';

// import css

// import font awesome icons

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            sampleBank: bankA,
            sampleObject: 10
        }

        // binding
        this.handleKeyPress = this.handleKeyPress.bind(this);    
    }

    // event listener for key press
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress)
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress)
    }

    // selects sample bank
    bankSelect = () => {
        if (this.state.sampleBank === bankA) {
            this.setState ({
                sampleBank: bankB
            });
        } else {
            this.setState ({
                sampleBank: bankA
            });
        };
    }

    // Selects object number based on keyCode
    handleKeyPress(e) {
        // keeps default if invalid key is pressed
        let arrIndex = 10;
        switch (e.keyCode) {
            case 81:
                arrIndex = 1;
                break;
            case 87:
                arrIndex = 2;
                break;
            case 69:
                arrIndex = 3;
                break;
            case 65:
                arrIndex = 4;
                break;
            case 83:
                arrIndex = 5;
                break;
            case 68:
                arrIndex = 6;
                break;
            case 90:
                arrIndex = 7;
                break;
            case 88:
                arrIndex = 8;
                break;
            case 67:
                arrIndex = 9;
                break;
            default:
                break;
        }
        this.setState ({
            sampleObject: arrIndex
        });
    }

    drumTrigger = () => {
        // pass audio clip to be played into function and trigger
    }


    render() {
        return (
            <div id="drum-machine">
                <div id="display">
                    {this.state.sampleBank[this.state.sampleObject].sampleID}                    
                </div>
                <div id="pads">
                    <button className="drum-pad" id="" type="button" onClick={this.drumTrigger} value="Q">Q<audio id="qAudio"><source src={this.state.sampleBank[1].url} type="audio/mpeg"></source></audio></button>
                    <button className="drum-pad" id="" type="button" onClick={this.drumTrigger} value="W">W<audio id="qAudio"><source src={this.state.sampleBank[2].url} type="audio/mpeg"></source></audio></button>
                    <button className="drum-pad" id="" type="button" onClick={this.drumTrigger} value="E">E<audio id="qAudio"><source src={this.state.sampleBank[3].url} type="audio/mpeg"></source></audio></button>
                    <button className="drum-pad" id="" type="button" onClick={this.drumTrigger} value="A">A<audio id="qAudio"><source src={this.state.sampleBank[4].url} type="audio/mpeg"></source></audio></button>
                    <button className="drum-pad" id="" type="button" onClick={this.drumTrigger} value="S">S<audio id="qAudio"><source src={this.state.sampleBank[5].url} type="audio/mpeg"></source></audio></button>
                    <button className="drum-pad" id="" type="button" onClick={this.drumTrigger} value="D">D<audio id="qAudio"><source src={this.state.sampleBank[6].url} type="audio/mpeg"></source></audio></button>
                    <button className="drum-pad" id="" type="button" onClick={this.drumTrigger} value="Z">Z<audio id="qAudio"><source src={this.state.sampleBank[7].url} type="audio/mpeg"></source></audio></button>
                    <button className="drum-pad" id="" type="button" onClick={this.drumTrigger} value="X">X<audio id="qAudio"><source src={this.state.sampleBank[8].url} type="audio/mpeg"></source></audio></button>
                    <button className="drum-pad" id="" type="button" onClick={this.drumTrigger} value="C">C<audio id="qAudio"><source src={this.state.sampleBank[9].url} type="audio/mpeg"></source></audio></button>
                </div>
                <div id="bankSelect">
                    {/* Switches sample bank and displays bank */}
                    <button className="bankButton" type="button" onClick={this.bankSelect}>Switch sample bank</button>
                    <div id="bankDisplay">Sample {this.state.sampleBank[0]}</div>
                </div>
            </div>
        )
    }
}

export default App;