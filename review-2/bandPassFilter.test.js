const BandPassFilter = require("./bandPassFilter.js");

describe("BandPassFilter class", () => {
  it("returns the array", () => {
    bandPassFilter = new BandPassFilter([60]);
    expect(bandPassFilter.getSoundwave()).toEqual([60]);
  });

  it("returns array with multiple entries", () => {
    bandPassFilter = new BandPassFilter([60, 40]);
    expect(bandPassFilter.getSoundwave()).toEqual([60, 40]);
  });

  it("returns the modified soundwave with lower range frequency", () => {
    bandPassFilter = new BandPassFilter([60, 50, 20]);
    expect(bandPassFilter.getSoundwave()).toEqual([60, 50, 40]);
  });

  it("returns the modified soundwave with upper range frequency", () => {
    bandPassFilter = new BandPassFilter([60, 50, 1200]);
    expect(bandPassFilter.getSoundwave()).toEqual([60, 50, 1000]);
  });

  it("returns the modified soundwave with both lower and upper frequencies", () => {
    bandPassFilter = new BandPassFilter([60, 20, 1200]);
    expect(bandPassFilter.getSoundwave()).toEqual([60, 40, 1000]);
  });
});
