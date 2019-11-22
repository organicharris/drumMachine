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
            sampleObject: 10 // initial placeholder "--"
        }

        // binding
        this.handleKeyPress = this.handleKeyPress.bind(this);  
        this.drumTrigger = this.drumTrigger.bind(this);  
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
        let arrIndex = 10;
        switch (e.keyCode) {
            case 81:
                arrIndex = 1;
                document.getElementById(this.state.sampleBank[0] + "-Q").currentTime = 0; // sets back to zero for quick repeat
                document.getElementById(this.state.sampleBank[0] + "-Q").play();
                break;
            case 87:
                arrIndex = 2;
                document.getElementById(this.state.sampleBank[0] + "-W").currentTime = 0;
                document.getElementById(this.state.sampleBank[0] + "-W").play();
                break;
            case 69:
                arrIndex = 3;
                document.getElementById(this.state.sampleBank[0] + "-E").currentTime = 0;
                document.getElementById(this.state.sampleBank[0] + "-E").play();
                break;
            case 65:
                arrIndex = 4;
                document.getElementById(this.state.sampleBank[0] + "-A").currentTime = 0;
                document.getElementById(this.state.sampleBank[0] + "-A").play();
                break;
            case 83:
                arrIndex = 5;
                document.getElementById(this.state.sampleBank[0] + "-S").currentTime = 0;
                document.getElementById(this.state.sampleBank[0] + "-S").play();
                break;
            case 68:
                arrIndex = 6;
                document.getElementById(this.state.sampleBank[0] + "-D").currentTime = 0;
                document.getElementById(this.state.sampleBank[0] + "-D").play();
                break;
            case 90:
                arrIndex = 7;
                document.getElementById(this.state.sampleBank[0] + "-Z").currentTime = 0
                document.getElementById(this.state.sampleBank[0] + "-Z").play();
                break;
            case 88:
                arrIndex = 8;
                document.getElementById(this.state.sampleBank[0] + "-X").currentTime = 0;
                document.getElementById(this.state.sampleBank[0] + "-X").play();
                break;
            case 67:
                arrIndex = 9;
                document.getElementById(this.state.sampleBank[0] + "-C").currentTime = 0;
                document.getElementById(this.state.sampleBank[0] + "-C").play();
                break;
            default:
                break;
        }
        this.setState ({
            sampleObject: arrIndex
        });
    }

    drumTrigger(e) {
        // pass audio clip to be played into function and trigger
        let arrIndex = 10;
        switch (e.target.value) {
            case "Q":
                arrIndex = 1;
                document.getElementById(this.state.sampleBank[0] + "-Q").currentTime = 0; // sets back to zero for quick repeat
                document.getElementById(this.state.sampleBank[0] + "-Q").play();
                break;
            case "W":
                arrIndex = 2;
                document.getElementById(this.state.sampleBank[0] + "-W").currentTime = 0;
                document.getElementById(this.state.sampleBank[0] + "-W").play();
                break;
            case "E":
                arrIndex = 3;
                document.getElementById(this.state.sampleBank[0] + "-E").currentTime = 0;
                document.getElementById(this.state.sampleBank[0] + "-E").play();
                break;
            case "A":
                arrIndex = 4;
                document.getElementById(this.state.sampleBank[0] + "-A").currentTime = 0;
                document.getElementById(this.state.sampleBank[0] + "-A").play();
                break;
            case "S":
                arrIndex = 5;
                document.getElementById(this.state.sampleBank[0] + "-S").currentTime = 0;
                document.getElementById(this.state.sampleBank[0] + "-S").play();
                break;
            case "D":
                arrIndex = 6;
                document.getElementById(this.state.sampleBank[0] + "-D").currentTime = 0;
                document.getElementById(this.state.sampleBank[0] + "-D").play();
                break;
            case "Z":
                arrIndex = 7;
                document.getElementById(this.state.sampleBank[0] + "-Z").currentTime = 0
                document.getElementById(this.state.sampleBank[0] + "-Z").play();
                break;
            case "X":
                arrIndex = 8;
                document.getElementById(this.state.sampleBank[0] + "-X").currentTime = 0;
                document.getElementById(this.state.sampleBank[0] + "-X").play();
                break;
            case "C":
                arrIndex = 9;
                document.getElementById(this.state.sampleBank[0] + "-C").currentTime = 0;
                document.getElementById(this.state.sampleBank[0] + "-C").play();
                break;
            default:
                break;
        }
        this.setState ({
            sampleObject: arrIndex
        });
    }

    render() {
        return (
            <div id="drum-machine">
                <div id="display">
                    {this.state.sampleBank[this.state.sampleObject].sampleID}                    
                </div>
                <div id="pads">
                    {/* Two audio links are included on each object as both have to be loaded initially */}
                    <button className="drum-pad" id="" type="button" onClick={this.drumTrigger} value="Q">Q<audio id="bank-A-Q" src={bankA[1].url} type="audio/mpeg"></audio><audio id="bank-B-Q" src={bankB[1].url} type="audio/mpeg"></audio></button>
                    <button className="drum-pad" id="" type="button" onClick={this.drumTrigger} value="W">W<audio id="bank-A-W" src={bankA[2].url} type="audio/mpeg"></audio><audio id="bank-B-W" src={bankB[2].url} type="audio/mpeg"></audio></button>
                    <button className="drum-pad" id="" type="button" onClick={this.drumTrigger} value="E">E<audio id="bank-A-E" src={bankA[3].url} type="audio/mpeg"></audio><audio id="bank-B-E" src={bankB[3].url} type="audio/mpeg"></audio></button>
                    <button className="drum-pad" id="" type="button" onClick={this.drumTrigger} value="A">A<audio id="bank-A-A" src={bankA[4].url} type="audio/mpeg"></audio><audio id="bank-B-A" src={bankB[4].url} type="audio/mpeg"></audio></button>
                    <button className="drum-pad" id="" type="button" onClick={this.drumTrigger} value="S">S<audio id="bank-A-S" src={bankA[5].url} type="audio/mpeg"></audio><audio id="bank-B-S" src={bankB[5].url} type="audio/mpeg"></audio></button>
                    <button className="drum-pad" id="" type="button" onClick={this.drumTrigger} value="D">D<audio id="bank-A-D" src={bankA[6].url} type="audio/mpeg"></audio><audio id="bank-B-D" src={bankB[6].url} type="audio/mpeg"></audio></button>
                    <button className="drum-pad" id="" type="button" onClick={this.drumTrigger} value="Z">Z<audio id="bank-A-Z" src={bankA[7].url} type="audio/mpeg"></audio><audio id="bank-B-Z" src={bankB[7].url} type="audio/mpeg"></audio></button>
                    <button className="drum-pad" id="" type="button" onClick={this.drumTrigger} value="X">X<audio id="bank-A-X" src={bankA[8].url} type="audio/mpeg"></audio><audio id="bank-B-X" src={bankB[8].url} type="audio/mpeg"></audio></button>
                    <button className="drum-pad" id="" type="button" onClick={this.drumTrigger} value="C">C<audio id="bank-A-C" src={bankA[9].url} type="audio/mpeg"></audio><audio id="bank-B-C" src={bankB[9].url} type="audio/mpeg"></audio></button>
                </div>
                <div id="bankSelect">
                    {/* Switches sample bank and displays bank */}
                    <button className="bankButton" type="button" onClick={this.bankSelect}>Switch bank</button>
                    <div id="bankDisplay">Sample-{this.state.sampleBank[0]}</div>
                </div>
            </div>
        )        
    }
}

export default App;