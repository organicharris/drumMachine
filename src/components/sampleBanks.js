const bankA = [
    // First array entry shows name of bank
    "bank-A",
    {sampleID: 'Hit 1', url: './samples/Heater-1.mp3'}, 
    {sampleID: 'Hit 2', url: './samples/Heater-2.mp3'}, 
    {sampleID: 'Hit 3', url: './samples/Heater-3.mp3'}, 
    {sampleID: 'Hit 4', url: './samples/Heater-4_1.mp3'}, 
    {sampleID: 'Open HH', url: './samples/Dsc_Oh.mp3'}, 
    {sampleID: 'Closed HH', url: './samples/Cev_H2.mp3'}, 
    {sampleID: 'Clap', url: './samples/Heater-6.mp3'},  
    {sampleID: "Kick & Hat", url: './samples/Kick_n_Hat.mp3'}, 
    {sampleID: 'Kick', url: './samples/RP4_KICK_1.mp3'},
    {sampleID: "---"} // last entry acts as placeholder
];

const bankB = [
    // First array entry shows name of bank
    "bank-B",
    {sampleID: 'Chord 1', url: './samples/Chord_1.mp3'}, 
    {sampleID: 'Chord 2', url: './samples/Chord_2.mp3'}, 
    {sampleID: 'Chord 3', url: './samples/Chord_3.mp3'}, 
    {sampleID: 'Shaker', url: './samples/Give_us_a_light.mp3'}, 
    {sampleID: 'Open HH', url: './samples/Dry_Ohh.mp3'}, 
    {sampleID: 'Closed HH', url: './samples/Bld_H1.mp3'}, 
    {sampleID: 'Snare', url: './samples/Brk_Snr.mp3'}, 
    {sampleID: 'Rim Shot', url: './samples/side_stick_1.mp3'}, 
    {sampleID: 'Kick', url: './samples/punchy_kick_1.mp3'}, 
    {sampleID: "---"} // last entry acts as placeholder
];

module.exports.bankA = bankA;
module.exports.bankB = bankB;