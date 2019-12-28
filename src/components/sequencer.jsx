import React from 'react';

import '../styles/sequencer.css';

class Sequencer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // Sequencer pads
            pad1Class: "nonActivePadA",
            pad2Class: "nonActivePadB",
            pad3Class: "nonActivePadB",
            pad4Class: "nonActivePadB",
            pad5Class: "nonActivePadA",
            pad6Class: "nonActivePadB",
            pad7Class: "nonActivePadB",
            pad8Class: "nonActivePadB",
            pad9Class: "nonActivePadA",
            pad10Class: "nonActivePadB",
            pad11Class: "nonActivePadB",
            pad12Class: "nonActivePadB",
            pad13Class: "nonActivePadA",
            pad14Class: "nonActivePadB",
            pad15Class: "nonActivePadB",
            pad16Class: "nonActivePadB",
            seqPads: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            // Play controls
            play: false,
            pause: false,
            stop: true
        }

        // Binding for functions
        this.padTrigger = this.padTrigger.bind(this);
    }

    padTrigger(event) {
        
    }

    render() {
        return(
            <div id="sequencer">
                <button type="button" className={this.state.pad1Class} value="0" onClick={this.padTrigger}></button>
                <button type="button" className={this.state.pad2Class} value="1" onClick={this.padTrigger}></button>
                <button type="button" className={this.state.pad3Class} value="2" onClick={this.padTrigger}></button>
                <button type="button" className={this.state.pad4Class} value="3" onClick={this.padTrigger}></button>
                <button type="button" className={this.state.pad5Class} value="4" onClick={this.padTrigger}></button>
                <button type="button" className={this.state.pad6Class} value="5" onClick={this.padTrigger}></button>
                <button type="button" className={this.state.pad7Class} value="6" onClick={this.padTrigger}></button>
                <button type="button" className={this.state.pad8Class} value="7" onClick={this.padTrigger}></button>
                <button type="button" className={this.state.pad9Class} value="8" onClick={this.padTrigger}></button>
                <button type="button" className={this.state.pad10Class} value="9" onClick={this.padTrigger}></button>
                <button type="button" className={this.state.pad11Class} value="10" onClick={this.padTrigger}></button>
                <button type="button" className={this.state.pad12Class} value="11" onClick={this.padTrigger}></button>
                <button type="button" className={this.state.pad13Class} value="12" onClick={this.padTrigger}></button>
                <button type="button" className={this.state.pad14Class} value="13" onClick={this.padTrigger}></button>
                <button type="button" className={this.state.pad15Class} value="14" onClick={this.padTrigger}></button>
                <button type="button" className={this.state.pad16Class} value="15" onClick={this.padTrigger}></button>
            </div>
        )
    }
}

export default Sequencer;