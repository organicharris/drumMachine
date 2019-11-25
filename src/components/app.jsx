import React from 'react';

// import sample arrays
import { bankA } from './sampleBanks.js';
import { bankB } from './sampleBanks.js';

// import css
import '../styles/drumMachine.css'
import '../styles/main.css'
import '../styles/animations.css'

// import font awesome icons

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            sampleBank: bankA,
            sampleObject: 10, // initial placeholder "---"
            volumeControl: 0.8,
            // classes for buttons
            buttonQ: "drum-pad",
            buttonW: "drum-pad",
            buttonE: "drum-pad",
            buttonA: "drum-pad",
            buttonS: "drum-pad",
            buttonD: "drum-pad",
            buttonZ: "drum-pad",
            buttonX: "drum-pad",
            buttonC: "drum-pad"
        }

        // binding
        this.handleKeyPress = this.handleKeyPress.bind(this);  
        this.padTrigger = this.padTrigger.bind(this);  
        this.volumeChange = this.volumeChange.bind(this);
    }

    // event listener for key press
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress)
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
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

    // sample play function
    samplePlayer(key) {
        const keyArr = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"]; // avoids null errors
        if (keyArr.includes(key)) {
            document.getElementById(this.state.sampleBank[0] + "-" + key).currentTime = 0; // sets back to zero for quick repeat
            document.getElementById(this.state.sampleBank[0] + "-" + key).volume = this.state.volumeControl;
            document.getElementById(this.state.sampleBank[0] + "-" + key).play();
        }
    }

    // Selects object number based on keyCode
    handleKeyPress(e) {
        const keyArr = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
        // if part of array, use function and set display, else placeholder for other key presses
        if (keyArr.includes(String.fromCharCode(e.keyCode))) {
            this.samplePlayer(String.fromCharCode(e.keyCode));
            this.setState ({
                sampleObject: (keyArr.indexOf(String.fromCharCode(e.keyCode)) + 1)  
            });
            // switch statement to light buttons
            switch (e.keyCode) {
                case 81:
                    this.setState ({
                        buttonQ: "drum-pad active"
                    })
                    setTimeout(() => {
                        this.setState({
                            buttonQ: "drum-pad"
                        });
                    }, 90)
                    break;
                case 87:
                    this.setState ({
                        buttonW: "drum-pad active"
                    })
                    setTimeout(() => {
                        this.setState({
                            buttonW: "drum-pad"
                        });
                    }, 90)
                    break;
                case 69:
                    this.setState ({
                        buttonE: "drum-pad active"
                    })
                    setTimeout(() => {
                        this.setState({
                            buttonE: "drum-pad"
                        });
                    }, 90)
                    break;
                case 65:
                    this.setState ({
                        buttonA: "drum-pad active"
                    })
                    setTimeout(() => {
                        this.setState({
                            buttonA: "drum-pad"
                        });
                    }, 90)    
                    break;
                case 83:
                    this.setState ({
                        buttonS: "drum-pad active"
                    })
                    setTimeout(() => {
                        this.setState({
                            buttonS: "drum-pad"
                        });
                    }, 90)
                    break;
                case 68:
                    this.setState ({
                        buttonD: "drum-pad active"
                    })
                    setTimeout(() => {
                        this.setState({
                            buttonD: "drum-pad"
                        });
                    }, 90)
                    break;
                case 90:
                    this.setState ({
                        buttonZ: "drum-pad active"
                    })
                    setTimeout(() => {
                        this.setState({
                            buttonZ: "drum-pad"
                        });
                    }, 90)
                    break;
                case 88:
                    this.setState ({
                        buttonX: "drum-pad active"
                    })
                    setTimeout(() => {
                        this.setState({
                            buttonX: "drum-pad"
                        });
                    }, 90)
                    break;
                case 67:
                    this.setState ({
                        buttonC: "drum-pad active"
                    })
                    setTimeout(() => {
                        this.setState({
                            buttonC: "drum-pad"
                        });
                    }, 90)
                    break;
                default:
                    break;
            }
        } else {
            this.setState ({
                sampleObject: 10
            });
        };        
    } 

    padTrigger(e) {
        // pass audio clip to be played into function and trigger
        const keyArr = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
        this.samplePlayer(e.target.value);
        this.setState({
            sampleObject: (keyArr.indexOf(e.target.value) + 1)
        });
    }

    volumeChange(e) {
        let usableVolume = e.target.value / 100;
        this.setState({
            volumeControl: usableVolume
        });
    }

    render() {
        return (
            <div id="main">
                <div id="drum-machine">
                <div id="title"><a href="https://craigharrison.dev/" title="Craig Harrison" target="_blank" rel="noopener noreferrer">craigharrison.dev</a></div>
                    <div id="display">
                        {this.state.sampleBank[this.state.sampleObject].sampleID}
                    </div>
                    <div id="controls">
                        <div id="pads">
                            {/* Two audio links are included on each object as both have to be loaded initially */}
                            <button className={this.state.buttonQ} id="padQ" type="button" onClick={this.padTrigger} value="Q">Q<audio src={bankA[1].url} id="bank-A-Q" type="audio/mpeg"></audio><audio src={bankB[1].url} id="bank-B-Q" type="audio/mpeg"></audio></button>
                            <button className={this.state.buttonW} id="padW" type="button" onClick={this.padTrigger} value="W">W<audio src={bankA[2].url} id="bank-A-W" type="audio/mpeg"></audio><audio src={bankB[2].url} id="bank-B-W" type="audio/mpeg"></audio></button>
                            <button className={this.state.buttonE} id="padE" type="button" onClick={this.padTrigger} value="E">E<audio src={bankA[3].url} id="bank-A-E" type="audio/mpeg"></audio><audio src={bankB[3].url} id="bank-B-E" type="audio/mpeg"></audio></button>
                            <button className={this.state.buttonA} id="padA" type="button" onClick={this.padTrigger} value="A">A<audio src={bankA[4].url} id="bank-A-A" type="audio/mpeg"></audio><audio src={bankB[4].url} id="bank-B-A" type="audio/mpeg"></audio></button>
                            <button className={this.state.buttonS} id="padS" type="button" onClick={this.padTrigger} value="S">S<audio src={bankA[5].url} id="bank-A-S" type="audio/mpeg"></audio><audio src={bankB[5].url} id="bank-B-S" type="audio/mpeg"></audio></button>
                            <button className={this.state.buttonD} id="padD" type="button" onClick={this.padTrigger} value="D">D<audio src={bankA[6].url} id="bank-A-D" type="audio/mpeg"></audio><audio src={bankB[6].url} id="bank-B-D" type="audio/mpeg"></audio></button>
                            <button className={this.state.buttonZ} id="padZ" type="button" onClick={this.padTrigger} value="Z">Z<audio src={bankA[7].url} id="bank-A-Z" type="audio/mpeg"></audio><audio src={bankB[7].url} id="bank-B-Z" type="audio/mpeg"></audio></button>
                            <button className={this.state.buttonX} id="padX" type="button" onClick={this.padTrigger} value="X">X<audio src={bankA[8].url} id="bank-A-X" type="audio/mpeg"></audio><audio src={bankB[8].url} id="bank-B-X" type="audio/mpeg"></audio></button>
                            <button className={this.state.buttonC} id="padC" type="button" onClick={this.padTrigger} value="C">C<audio src={bankA[9].url} id="bank-A-C" type="audio/mpeg"></audio><audio src={bankB[9].url} id="bank-B-C" type="audio/mpeg"></audio></button>
                        </div>
                        <div id="master">
                            <div id="volumeSlider">
                                <input type="range" min="0" max="100" value={Math.round(this.state.volumeControl * 100)} onChange={this.volumeChange} id="volume-control"></input>
                                <div id="volume-display">{Math.round(this.state.volumeControl * 100)}</div>
                            </div>
                            <div id="bankSelect">
                                {/* Switches sample bank and displays bank */}
                                <button className="bankButton" type="button" onClick={this.bankSelect}>Switch bank</button>
                                <div id="bankDisplay">Sample-{this.state.sampleBank[0]}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )        
    }
}

export default App;