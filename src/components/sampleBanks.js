// Import Howler for audio (https://github.com/goldfire/howler.js)
import { Howl } from 'howler';

// Sample banks - volume is for display and slider position only (volume is declared in howl variables below, and updated by chanVolumeUpdatefunction)
const bankA = [
    {sampleID: 'Kick', url: "https://staticserver.craigharrison.dev/drumMachineSamples/punchyKick.mp3", volume: 0.8}, 
    {sampleID: 'Closed Hat', url: "https://staticserver.craigharrison.dev/drumMachineSamples/closedHat.mp3", volume: 0.6}, 
    {sampleID: 'Open Hat', url: "https://staticserver.craigharrison.dev/drumMachineSamples/openHat.mp3", volume: 0.55}, 
    {sampleID: 'Snare', url: "https://staticserver.craigharrison.dev/drumMachineSamples/snare.mp3", volume: 0.8},  
    {sampleID: 'High Conga', url: "https://staticserver.craigharrison.dev/drumMachineSamples/highConga.mp3", volume: 0.5},  
    {sampleID: "Low Conga", url: "https://staticserver.craigharrison.dev/drumMachineSamples/lowConga.mp3", volume: 0.5}, 
    {sampleID: 'Shaker', url: "https://staticserver.craigharrison.dev/drumMachineSamples/shaker1.mp3", volume: 0.4},
    {sampleID: 'Cowbell', url: "https://staticserver.craigharrison.dev/drumMachineSamples/cowbell.mp3", volume: 0.4}
];

// Load in samples
let track1 = new Howl({
    src: [bankA[0].url],
    volume: 0.8,
    preload: true
});
let track2 = new Howl({
    src: [bankA[1].url],
    volume: 0.6,
    preload: true
});
let track3 = new Howl({
    src: [bankA[2].url],
    volume: 0.55,
    preload: true
});
let track4 = new Howl({
    src: [bankA[3].url],
    volume: 0.8,
    preload: true
});
let track5 = new Howl({
    src: [bankA[4].url],
    volume: 0.5,
    preload: true
});
let track6 = new Howl({
    src: [bankA[5].url],
    volume: 0.5,
    preload: true
});
let track7 = new Howl({
    src: [bankA[6].url],
    volume: 0.4,
    preload: true
});
let track8 = new Howl({
    src: [bankA[7].url],
    volume: 0.4,
    preload: true
});

// Key array for sample volume update
const channelKey = [track1, track2, track3, track4, track5, track6, track7, track8];

// Function to update channel volume
function chanVolumeUpdate(selectedPad, newVolume) {
    channelKey[selectedPad].volume(newVolume); // Used for sample volume
    bankA[selectedPad].volume = newVolume; // Used for display
};

export {bankA, track1, track2, track3, track4, track5, track6, track7, track8, chanVolumeUpdate};