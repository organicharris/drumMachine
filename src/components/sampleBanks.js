const bankA = [
    "bank A",
    {
        keyCode: 81,
        keyTrigger: 'Q',
        sampleID: 'Hit 1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    }, {
        keyCode: 87,
        keyTrigger: 'W',
        sampleID: 'Hit 2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    }, {
        keyCode: 69,
        keyTrigger: 'E',
        sampleID: 'Hit 3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    }, {
        keyCode: 65,
        keyTrigger: 'A',
        sampleID: 'Hit 4',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    }, {
        keyCode: 83,
        keyTrigger: 'S',
        sampleID: 'Clap',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    }, {
        keyCode: 68,
        keyTrigger: 'D',
        sampleID: 'Open HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    }, {
        keyCode: 90,
        keyTrigger: 'Z',
        sampleID: "Kick & Hat",
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    }, {
        keyCode: 88,
        keyTrigger: 'X',
        sampleID: 'Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    }, {
        keyCode: 67,
        keyTrigger: 'C',
        sampleID: 'Closed HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }, {
        // last entry acts as placeholder
        sampleID: "--"
    }
];

const bankB = [
    "bank B",
    {
        keyCode: 81,
        keyTrigger: 'Q',
        sampleID: 'Chord 1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    }, {
        keyCode: 87,
        keyTrigger: 'W',
        sampleID: 'Chord 2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    }, {
        keyCode: 69,
        keyTrigger: 'E',
        sampleID: 'Chord 3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    }, {
        keyCode: 65,
        keyTrigger: 'A',
        sampleID: 'Shaker',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    }, {
        keyCode: 83,
        keyTrigger: 'S',
        sampleID: 'Open HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    }, {
        keyCode: 68,
        keyTrigger: 'D',
        sampleID: 'Closed HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    }, {
        keyCode: 90,
        keyTrigger: 'Z',
        sampleID: 'Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    }, {
        keyCode: 88,
        keyTrigger: 'X',
        sampleID: 'Rim Shot',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    }, {
        keyCode: 67,
        keyTrigger: 'C',
        sampleID: 'Snare',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }, {
        // last entry acts as placeholder
        sampleID: "--"
    }
];

module.exports.bankA = bankA;
module.exports.bankB = bankB;