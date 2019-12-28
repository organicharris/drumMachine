import React from 'react';

class Master extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            volumeControl: 0.8
        }

        // Function binding
        this.volumeChange = this.volumeChange.bind(this);        
    }

    volumeChange(e) {
        let usableVolume = e.target.value / 100;
        this.setState({
            volumeControl: usableVolume
        });
    }

    render() {
        return(
            <div>
                <div id="volumeSlider">
                    <input type="range" min="0" max="100" value={Math.round(this.state.volumeControl * 100)} onChange={this.volumeChange} id="volume-control"></input>
                    <div id="volumeDisplay">volume: {Math.round(this.state.volumeControl * 100)}</div>
                </div>
            </div>
        )
    }
}

export default Master;