import React from 'react';

// import component classes
import DrumPads from './drumPads.jsx';
import Master from './master.jsx';

// import css
import '../styles/drumMachine.css';
import '../styles/main.css';
import '../styles/animations.css';
import '../styles/mediaCalls.css';

class App extends React.Component {

    render() {
        return (
            <div id="main">
                <div id="drum-machine">
                <div id="title">Beat Composer</div>
                <div id="website"><a href="https://craigharrison.dev/" title="Craig Harrison" target="_blank" rel="noopener noreferrer">craigharrison.dev</a></div>
                    <div id="controls">
                        <DrumPads />
                        <Master />
                    </div>
                </div>
            </div>
        )        
    }
}

export default App;