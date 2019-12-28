import React from 'react';

// import sample arrays
import { bankA } from './sampleBanks.js';
import { bankB } from './sampleBanks.js';

import '../styles/drumPads.css';

class DrumPads extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sampleBank: bankA,
            sampleObject: 10, // initial placeholder "---"
            // classes for pads
            pad1: "drum-pad",
            pad2: "drum-pad",
            pad3: "drum-pad",
            pad4: "drum-pad",
            pad5: "drum-pad",
            pad6: "drum-pad",
            pad7: "drum-pad",
            pad8: "drum-pad",
            pad9: "drum-pad"
        }

        // Function binding
        this.padTrigger = this.padTrigger.bind(this);  
    }

    padTrigger(e) {

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
    
    
        

    render() {
        return (
            <div>
                <div id="pads">
                    <button className={this.state.pad1} id="pad1" type="button" onClick={this.padTrigger} value="1">
                        <div className="letter">{this.state.sampleBank[1].sampleID}</div>
                    </button>
                    <button className={this.state.pad2} id="pad2" type="button" onClick={this.padTrigger} value="2">
                        <div className="letter">{this.state.sampleBank[2].sampleID}</div>
                    </button>
                    <button className={this.state.pad3} id="pad3" type="button" onClick={this.padTrigger} value="3">
                        <div className="letter">{this.state.sampleBank[3].sampleID}</div>
                    </button>
                    <button className={this.state.pad4} id="pad4" type="button" onClick={this.padTrigger} value="4">
                        <div className="letter">{this.state.sampleBank[4].sampleID} </div>
                    </button>
                    <button className={this.state.pad5} id="pad5" type="button" onClick={this.padTrigger} value="5">
                        <div className="letter">{this.state.sampleBank[5].sampleID}</div>
                    </button>
                    <button className={this.state.pad6} id="pad6" type="button" onClick={this.padTrigger} value="6">
                        <div className="letter">{this.state.sampleBank[6].sampleID}</div>
                    </button>
                    <button className={this.state.pad7} id="pad7" type="button" onClick={this.padTrigger} value="7">
                        <div className="letter">{this.state.sampleBank[7].sampleID}</div>
                    </button>
                    <button className={this.state.pad8} id="pad8" type="button" onClick={this.padTrigger} value="8">
                        <div className="letter">{this.state.sampleBank[8].sampleID}</div>
                    </button>
                    <button className={this.state.pad9} id="pad9" type="button" onClick={this.padTrigger} value="9">
                        <div className="letter">{this.state.sampleBank[9].sampleID}</div>
                    </button>
                </div>

                <div id="bankSelect">
                    {/* Switches sample bank and displays bank */}
                    <button id="bankButton" type="button" onClick={this.bankSelect}>Switch bank</button>
                    <div id="bankDisplay">sample-{this.state.sampleBank[0]}</div>
                </div>
                
            </div>
        )
    }
}

export default DrumPads;