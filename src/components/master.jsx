import React from 'react';

// Import samples and sequence, along with padArr as key
import { bankA } from './sampleBanks.js';
import { sequence } from './sequence.js';
import { seqPadArr } from './padArrays.js';

// import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";
import { faStop } from "@fortawesome/free-solid-svg-icons";

// Import Howler for audio (https://github.com/goldfire/howler.js)
import { Howl } from 'howler';

// CSS
import '../styles/volumeControl.css';
import '../styles/sequencerLights.css';
import '../styles/master.css';

class Master extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            volumeControl: 0.8,
            tempo: 1.2,
            // Play controls
            playing: false,
            playPauseButtton: "playControl",
            stopButton: "playControl stopButtonActive",
            playHead: 0,
            // Sequencer light classes
            seqPad1: "redLight redLightOn",
            seqPad2: "redLight",
            seqPad3: "redLight",
            seqPad4: "redLight",
            seqPad5: "redLight",
            seqPad6: "redLight",
            seqPad7: "redLight",
            seqPad8: "redLight",
            seqPad9: "redLight",
            seqPad10: "redLight",
            seqPad11: "redLight",
            seqPad12: "redLight",
            seqPad13: "redLight",
            seqPad14: "redLight",
            seqPad15: "redLight",
            seqPad16: "redLight"
        }

        // Function binding
        this.volumeChange = this.volumeChange.bind(this); 
        this.sampleVolChange = this.sampleVolChange.bind(this);
        this.tempoChange = this.tempoChange.bind(this);  
        this.playControl = this.playControl.bind(this); 
        this.operateSequencer = this.operateSequencer.bind(this);   
        this.sequenceLights = this.sequenceLights.bind(this); 
        this.sequenceSounds = this.sequenceSounds.bind(this);
    }

    volumeChange(e) {
        this.setState({
            volumeControl: e.target.value / 100
        });
    }

    sampleVolChange(e) {
        bankA[this.props.selectedPad].volume = e.currentTarget.value / 100;
        this.setState({
            // Refreshes DOM
        });
    }

    tempoChange(e) {
        this.setState({
            tempo: e.target.value /100
        });
    }

    playControl(e) {
        switch(e.currentTarget.value) {
            case "playPause":
                if (!this.state.playing) { // If not playing, start and change to green
                    this.setState({
                        playing: true,
                        playPauseButtton: "playControl playButtonActive",
                        stopButton: "playControl" 
                    });
                } else { // If playing, pause and change to yellow
                    this.setState({
                        playing: false,
                        playPauseButtton: "playControl pauseButtonActive"
                    })
                }
                this.operateSequencer();
                break;
            
            case "stop":
                this.setState({
                    playing: false,
                    playPauseButtton: "playControl",
                    stopButton: "playControl stopButtonActive"
                });
                this.operateSequencer();
                break;
            
            case "RTZ":
                this.setState({
                    playHead: 0,
                    seqPad1: "redLight redLightOn",
                    seqPad2: "redLight",
                    seqPad3: "redLight",
                    seqPad4: "redLight",
                    seqPad5: "redLight",
                    seqPad6: "redLight",
                    seqPad7: "redLight",
                    seqPad8: "redLight",
                    seqPad9: "redLight",
                    seqPad10: "redLight",
                    seqPad11: "redLight",
                    seqPad12: "redLight",
                    seqPad13: "redLight",
                    seqPad14: "redLight",
                    seqPad15: "redLight",
                    seqPad16: "redLight"
                });
                break;

            default:
                break;
        };
    }

    operateSequencer() {
            setTimeout(() => { // Uses timeout and call function again instead of loop
                if (this.state.playing) {
                    this.sequenceLights();
                    this.sequenceSounds();
                    if (this.state.playHead < 15) { // If less than 15, increment
                        this.setState({
                            playHead: this.state.playHead + 1
                        });
                    } else { // If 15, set back to zero to start loop again
                        this.setState({
                            playHead: 0
                        });
                    }
                    this.operateSequencer(); // Call function after next timeout
                } else { // If not playing, keep the playHead position
                    this.setState({
                        playHead: this.state.playHead
                    });
                };
            }, (60 / this.state.tempo) * 2.5);
    }

    sequenceLights() {
        if(this.state.playHead === 0) {
            this.setState({
                seqPad1: "redLight redLightOn",
                seqPad16: "redLight"
            });
        } else {
            this.setState({
                [seqPadArr[this.state.playHead]]: "redLight redLightOn",
                [seqPadArr[this.state.playHead - 1]]: "redLight"
            });
        }
    }

    sequenceSounds() {
        // Load in samples
        var track1 = new Howl({
            src: [bankA[0].url],
            volume: bankA[0].volume,
            preload: true
        });
        var track2 = new Howl({
            src: [bankA[1].url],
            volume: bankA[1].volume,
            preload: true
        });
        var track3 = new Howl({
            src: [bankA[2].url],
            volume: bankA[2].volume,
            preload: true
        });
        var track4 = new Howl({
            src: [bankA[3].url],
            volume: bankA[3].volume,
            preload: true
        });
        var track5 = new Howl({
            src: [bankA[4].url],
            volume: bankA[4].volume,
            preload: true
        });
        var track6 = new Howl({
            src: [bankA[5].url],
            volume: bankA[5].volume,
            preload: true
        });
        var track7 = new Howl({
            src: [bankA[6].url],
            volume: bankA[6].volume,
            preload: true
        });
        var track8 = new Howl({
            src: [bankA[7].url],
            volume: bankA[7].volume,
            preload: true
        });

        // Trigger samples
        if (sequence[0][this.state.playHead] === 1) {
            track1.play();
        }
        if (sequence[1][this.state.playHead] === 1) {
            track2.play();
        }
        if (sequence[2][this.state.playHead] === 1) {
            track3.play();
        }
        if (sequence[3][this.state.playHead] === 1) {
            track4.play();
        }
        if (sequence[4][this.state.playHead] === 1) {
            track5.play();
        }
        if (sequence[5][this.state.playHead] === 1) {
            track6.play();
        }
        if (sequence[6][this.state.playHead] === 1) {
            track7.play();
        }
        if (sequence[7][this.state.playHead] === 1) {
            track8.play();
        }
    }

    render() {
        return(
            <div>
                <div id="master">
                    <div id="volumeSlider" className="slider">
                        <input type="range" min="0" max="100" value={Math.round(this.state.volumeControl * 100)} onChange={this.volumeChange} id="volume-control"></input>
                        <div id="volumeDisplay" className="display">master vol: {Math.round(this.state.volumeControl * 100)}%</div>
                    </div>
                    <div id="sampleVolSlider" className="slider">
                        <input type="range" min="0" max="100" value={Math.round(bankA[this.props.selectedPad].volume * 100)} onChange={this.sampleVolChange} id="sampleVolControl"></input>
                        <div id="chanVolDisplay" className="display">channel volume: {Math.round(bankA[this.props.selectedPad].volume * 100)}%</div>
                    </div>
                    <div id="tempoSlider" className="slider">
                        <input type="range" min="60" max="240" value={Math.round(this.state.tempo * 100)} onChange={this.tempoChange} id="tempoContol"></input>
                        <div id="tempoDisplay" className="display">tempo: {Math.round(this.state.tempo * 100)}</div>
                    </div>
                    <div id="playControls">
                        <button type="button" className={this.state.playPauseButtton} id="playPauseButton" value="playPause" onClick={this.playControl}><FontAwesomeIcon icon={faPlay}/> <FontAwesomeIcon icon={faPause}/></button>
                        <button type="button" className="playControl" id="returnToZeroButton" value="RTZ" onClick={this.playControl}><FontAwesomeIcon icon={faStepBackward}/></button>
                        <button type="button" className={this.state.stopButton} id="stopButton" value="stop" onClick={this.playControl}><FontAwesomeIcon icon={faStop}/></button>
                    </div>
                </div>

                <div id="sequencerLights">
                    <div className={this.state.seqPad1} id="light1"></div>
                    <div className={this.state.seqPad2} id="light2"></div>
                    <div className={this.state.seqPad3} id="light3"></div>
                    <div className={this.state.seqPad4} id="light4"></div>
                    <div className={this.state.seqPad5} id="light5"></div>
                    <div className={this.state.seqPad6} id="light6"></div>
                    <div className={this.state.seqPad7} id="light7"></div>
                    <div className={this.state.seqPad8} id="light8"></div>
                    <div className={this.state.seqPad9} id="light9"></div>
                    <div className={this.state.seqPad10} id="light10"></div>
                    <div className={this.state.seqPad11} id="light11"></div>
                    <div className={this.state.seqPad12} id="light12"></div>
                    <div className={this.state.seqPad13} id="light13"></div>
                    <div className={this.state.seqPad14} id="light14"></div>
                    <div className={this.state.seqPad15} id="light15"></div>
                    <div className={this.state.seqPad16} id="light16"></div>
                </div>
                
            </div>
        )
    }
}

export default Master;