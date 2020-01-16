// Import Howler for audio (https://github.com/goldfire/howler.js)
import { Howl } from 'howler';

export const bankA = [
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
export var track1 = new Howl({
    src: [bankA[0].url],
    volume: bankA[0].volume,
    preload: true
});
export var track2 = new Howl({
    src: [bankA[1].url],
    volume: bankA[1].volume,
    preload: true
});
export var track3 = new Howl({
    src: [bankA[2].url],
    volume: bankA[2].volume,
    preload: true
});
export var track4 = new Howl({
    src: [bankA[3].url],
    volume: bankA[3].volume,
    preload: true
});
export var track5 = new Howl({
    src: [bankA[4].url],
    volume: bankA[4].volume,
    preload: true
});
export var track6 = new Howl({
    src: [bankA[5].url],
    volume: bankA[5].volume,
    preload: true
});
export var track7 = new Howl({
    src: [bankA[6].url],
    volume: bankA[6].volume,
    preload: true
});
export var track8 = new Howl({
    src: [bankA[7].url],
    volume: bankA[7].volume,
    preload: true
});




/*
// Function to update channel volume
function chanVolumeUpdate(selectedPad) {
    switch(selectedPad) {
        case 0:
            export var track1 = new Howl({
                src: [bankA[0].url],
                volume: bankA[0].volume,
                preload: true
            });
            break;
        case 1:
            export var track2 = new Howl({
                src: [bankA[1].url],
                volume: bankA[1].volume,
                preload: true
            });
            break;
        case 2:
            export var track3 = new Howl({
                src: [bankA[2].url],
                volume: bankA[2].volume,
                preload: true
            });
            break;
        case 3:
            export var track4 = new Howl({
                src: [bankA[3].url],
                volume: bankA[3].volume,
                preload: true
            });
            break;
        case 4:
            export var track5 = new Howl({
                src: [bankA[4].url],
                volume: bankA[4].volume,
                preload: true
            });
            break;
        case 5:
            export var track6 = new Howl({
                src: [bankA[5].url],
                volume: bankA[5].volume,
                preload: true
            });
            break;
        case 6:
            export var track7 = new Howl({
                src: [bankA[6].url],
                volume: bankA[6].volume,
                preload: true
            });
            break;
        case 7:
            export var track8 = new Howl({
                src: [bankA[7].url],
                volume: bankA[7].volume,
                preload: true
            });
            break;
        default:
            break;
    };
};
*/