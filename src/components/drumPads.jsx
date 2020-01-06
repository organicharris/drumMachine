import React from 'react';

// import sample arrays, sequence and padArrays (as keys)
import { bankA } from './sampleBanks.js';
import { sequence } from './sequence.js';
import { drumPadArr } from './padArrays.js';
import { seqPadArr } from './padArrays.js';

import '../styles/drumPads.css';
import '../styles/sequencer.css';

class DrumPads extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sampleObject: 13, // initial placeholder "---"
            // classes for pads
            pad1: "drumPad drumPadActive",
            pad2: "drumPad",
            pad3: "drumPad",
            pad4: "drumPad",
            pad5: "drumPad",
            pad6: "drumPad",
            pad7: "drumPad",
            pad8: "drumPad",
            pad9: "drumPad",
            pad10: "drumPad",
            pad11: "drumPad",
            pad12: "drumPad",
            // Sequencer pads
            seqPad1: "seqPad seqPadA",
            seqPad2: "seqPad seqPadA",
            seqPad3: "seqPad seqPadA",
            seqPad4: "seqPad seqPadA",
            seqPad5: "seqPad seqPadB",
            seqPad6: "seqPad seqPadB",
            seqPad7: "seqPad seqPadB",
            seqPad8: "seqPad seqPadB",
            seqPad9: "seqPad seqPadC",
            seqPad10: "seqPad seqPadC",
            seqPad11: "seqPad seqPadC",
            seqPad12: "seqPad seqPadC",
            seqPad13: "seqPad seqPadD",
            seqPad14: "seqPad seqPadD",
            seqPad15: "seqPad seqPadD",
            seqPad16: "seqPad seqPadD",
            selectedPad: 0
        }

        // Function binding
        this.padSelect = this.padSelect.bind(this);
        this.programSequence = this.programSequence.bind(this);  
    }

    padSelect(e) {
        const formerPad = drumPadArr[this.state.selectedPad];
        this.setState({
            selectedPad: e.currentTarget.value,
            [formerPad]: "drumPad",
            [drumPadArr[e.currentTarget.value]]: "drumPad drumPadActive"
        });
        this.colourSequence(e.currentTarget.value);
    }
    
    programSequence(e) {
        // Sets 1 or 0 for each 16th
        if (sequence[this.state.selectedPad][e.currentTarget.value] === 0) {
            sequence[this.state.selectedPad][e.currentTarget.value] = 1
        } else {
            sequence[this.state.selectedPad][e.currentTarget.value] = 0
        };
        this.colourSequence(this.state.selectedPad);
    }

    colourSequence(pad) {
        // Looks through array and changes colour accordingly
        for (let i = 0; i < seqPadArr.length; i++) {
            if (i < 4) {
                if (sequence[pad][i] === 1){
                    this.setState({
                        [seqPadArr[i]]: "seqPad seqPadA seqPadActive"
                    });
                } else {
                    this.setState({
                        [seqPadArr[i]]: "seqPad seqPadA"
                    });
                }
            } else if (i < 8) {
                if (sequence[pad][i] === 1){
                    this.setState({
                        [seqPadArr[i]]: "seqPad seqPadB seqPadActive"
                    });
                } else {
                    this.setState({
                        [seqPadArr[i]]: "seqPad seqPadB"
                    });
                }
            } else if (i < 12) {
                if (sequence[pad][i] === 1){
                    this.setState({
                        [seqPadArr[i]]: "seqPad seqPadC seqPadActive"
                    });
                } else {
                    this.setState({
                        [seqPadArr[i]]: "seqPad seqPadC"
                    });
                }
            } else {
                if (sequence[pad][i] === 1){
                    this.setState({
                        [seqPadArr[i]]: "seqPad seqPadD seqPadActive"
                    });
                } else {
                    this.setState({
                        [seqPadArr[i]]: "seqPad seqPadD"
                    });
                }
            }
        }
    }
        

    render() {
        return (
            <div>
                <div id="pads">
                    <button className={this.state.pad1} id="pad1" type="button" onClick={this.padSelect} value="0">
                        <div className="letter">{bankA[1].sampleID}</div>
                    </button>
                    <button className={this.state.pad2} id="pad2" type="button" onClick={this.padSelect} value="1">
                        <div className="letter">{bankA[2].sampleID}</div>
                    </button>
                    <button className={this.state.pad3} id="pad3" type="button" onClick={this.padSelect} value="2">
                        <div className="letter">{bankA[3].sampleID}</div>
                    </button>
                    <button className={this.state.pad4} id="pad4" type="button" onClick={this.padSelect} value="3">
                        <div className="letter">{bankA[4].sampleID} </div>
                    </button>
                    <button className={this.state.pad5} id="pad5" type="button" onClick={this.padSelect} value="4">
                        <div className="letter">{bankA[5].sampleID}</div>
                    </button>
                    <button className={this.state.pad6} id="pad6" type="button" onClick={this.padSelect} value="5">
                        <div className="letter">{bankA[6].sampleID}</div>
                    </button>
                    <button className={this.state.pad7} id="pad7" type="button" onClick={this.padSelect} value="6">
                        <div className="letter">{bankA[7].sampleID}</div>
                    </button>
                    <button className={this.state.pad8} id="pad8" type="button" onClick={this.padSelect} value="7">
                        <div className="letter">{bankA[8].sampleID}</div>
                    </button>
                    <button className={this.state.pad9} id="pad9" type="button" onClick={this.padSelect} value="8">
                        <div className="letter">{bankA[9].sampleID}</div>
                    </button>
                    <button className={this.state.pad10} id="pad10" type="button" onClick={this.padSelect} value="9">
                        <div className="letter">{bankA[10].sampleID}</div>
                    </button>
                    <button className={this.state.pad11} id="pad11" type="button" onClick={this.padSelect} value="10">
                        <div className="letter">{bankA[11].sampleID}</div>
                    </button>
                    <button className={this.state.pad12} id="pad12" type="button" onClick={this.padSelect} value="11">
                        <div className="letter">{bankA[12].sampleID}</div>
                    </button>
                </div>

                <div id="sequencer">
                    <button type="button" className={this.state.seqPad1} id="seqPad1" value="0" onClick={this.programSequence}>1</button>
                    <button type="button" className={this.state.seqPad2} id="seqPad2" value="1" onClick={this.programSequence}>2</button>
                    <button type="button" className={this.state.seqPad3} id="seqPad3" value="2" onClick={this.programSequence}>3</button>
                    <button type="button" className={this.state.seqPad4} id="seqPad4" value="3" onClick={this.programSequence}>4</button>
                    <button type="button" className={this.state.seqPad5} id="seqPad5" value="4" onClick={this.programSequence}>5</button>
                    <button type="button" className={this.state.seqPad6} id="seqPad6" value="5" onClick={this.programSequence}>6</button>
                    <button type="button" className={this.state.seqPad7} id="seqPad7" value="6" onClick={this.programSequence}>7</button>
                    <button type="button" className={this.state.seqPad8} id="seqPad8" value="7" onClick={this.programSequence}>8</button>
                    <button type="button" className={this.state.seqPad9} id="seqPad9" value="8" onClick={this.programSequence}>9</button>
                    <button type="button" className={this.state.seqPad10} id="seqPad10" value="9" onClick={this.programSequence}>10</button>
                    <button type="button" className={this.state.seqPad11} id="seqPad11" value="10" onClick={this.programSequence}>11</button>
                    <button type="button" className={this.state.seqPad12} id="seqPad12" value="11" onClick={this.programSequence}>12</button>
                    <button type="button" className={this.state.seqPad13} id="seqPad13" value="12" onClick={this.programSequence}>13</button>
                    <button type="button" className={this.state.seqPad14} id="seqPad14" value="13" onClick={this.programSequence}>14</button>
                    <button type="button" className={this.state.seqPad15} id="seqPad15" value="14" onClick={this.programSequence}>15</button>
                    <button type="button" className={this.state.seqPad16} id="seqPad16" value="15" onClick={this.programSequence}>16</button>
                </div>
            </div>
        )
    }
}

export default DrumPads;