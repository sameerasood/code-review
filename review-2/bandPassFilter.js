class BandPassFilter {
  constructor(soundwave, lowerRange = 40, upperRange = 1000) {
    this.soundwave = soundwave;
    this.lowerRange = lowerRange;
    this.upperRange = upperRange;
    this.filteredSoundWave = [];
  }

  getSoundwave() {
    this.soundwave.map((frequency) => {
      if (frequency < this.lowerRange) {
        frequency = this.lowerRange;
      } else if (frequency > this.upperRange) {
        frequency = this.upperRange;
      }
      this.filteredSoundWave.push(frequency);
    });
    return this.filteredSoundWave;
  }
}

module.exports = BandPassFilter;
