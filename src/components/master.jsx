import React from 'react';

import '../styles/volumeControl.css';
import '../styles/sequencerLights.css';
import '../styles/master.css';

// import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";
import { faStop } from "@fortawesome/free-solid-svg-icons";

class Master extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            volumeControl: 0.8,
            tempo: 1.2,
            // Play controls
            play: false,
            pause: false,
            playPauseButtton: "playControl",
            stopButton: "playControl stopButtonActive",
            playHead: 0,
            // Sequencer light classes
            redLight1: "redLight",
            redLight2: "redLight",
            redLight3: "redLight",
            redLight4: "redLight",
            redLight5: "redLight",
            redLight6: "redLight",
            redLight7: "redLight",
            redLight8: "redLight",
            redLight9: "redLight",
            redLight10: "redLight",
            redLight11: "redLight",
            redLight12: "redLight",
            redLight13: "redLight",
            redLight14: "redLight",
            redLight15: "redLight",
            redLight16: "redLight"
        }

        // Function binding
        this.volumeChange = this.volumeChange.bind(this); 
        this.tempoChange = this.tempoChange.bind(this);  
        this.playControl = this.playControl.bind(this);     
    }

    volumeChange(e) {
        this.setState({
            volumeControl: e.target.value / 100
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
                if (!this.state.play && !this.state.pause) {
                    this.setState({
                        play: true,
                        playPauseButtton: "playControl playButtonActive",
                        stopButton: "playControl"
                    });
                } else if (this.state.play && !this.state.pause) {
                    this.setState({
                        pause: true,
                        playPauseButtton: "playControl pauseButtonActive"
                    });
                } else { // If play and pause are active
                    this.setState({
                        pause: false,
                        playPauseButtton: "playControl playButtonActive"
                    });
                };
                break;
            
            case "stop":
                this.setState({
                    play: false,
                    pause: false,
                    playPauseButtton: "playControl",
                    stopButton: "playControl stopButtonActive"
                });
                break;
            
            case "RTZ":
                this.setState({
                    playHead: 0
                });
                break;

            default:
                break;
        };
    }

    render() {
        return(
            <div>
                <div id="master">
                    <div id="volumeSlider" className="slider">
                        <input type="range" min="0" max="100" value={Math.round(this.state.volumeControl * 100)} onChange={this.volumeChange} id="volume-control"></input>
                        <div id="volumeDisplay" className="display">volume: {Math.round(this.state.volumeControl * 100)}</div>
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
                    <div className={this.state.redLight1} id="light1"></div>
                    <div className={this.state.redLight2} id="light2"></div>
                    <div className={this.state.redLight3} id="light3"></div>
                    <div className={this.state.redLight4} id="light4"></div>
                    <div className={this.state.redLight5} id="light5"></div>
                    <div className={this.state.redLight6} id="light6"></div>
                    <div className={this.state.redLight7} id="light7"></div>
                    <div className={this.state.redLight8} id="light8"></div>
                    <div className={this.state.redLight9} id="light9"></div>
                    <div className={this.state.redLight10} id="light10"></div>
                    <div className={this.state.redLight11} id="light11"></div>
                    <div className={this.state.redLight12} id="light12"></div>
                    <div className={this.state.redLight13} id="light13"></div>
                    <div className={this.state.redLight14} id="light14"></div>
                    <div className={this.state.redLight15} id="light15"></div>
                    <div className={this.state.redLight16} id="light16"></div>
                </div>
                
            </div>
        )
    }
}

export default Master;