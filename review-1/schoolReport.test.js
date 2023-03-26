const SchoolReport = require("./schoolReport.js");

describe("class SchoolReport", () => {
  it("returns the string", () => {
    const schoolReport = new SchoolReport("Green, Red, Green");
    expect(schoolReport.getGrades()).toEqual(["Green", "Red", "Green"]);
  });

  it("returns the count of one colour", () => {
    const schoolReport = new SchoolReport("Green, Green");
    expect(schoolReport.getGrades()).toEqual(["Green", "Green"]);
    schoolReport.countGrades();
    expect(schoolReport.greenCount()).toEqual("Green: 2");
  });

  it("returns the count of two colours", () => {
    const schoolReport = new SchoolReport("Amber, Green");
    expect(schoolReport.getGrades()).toEqual(["Amber", "Green"]);
    schoolReport.countGrades();
    expect(schoolReport.amberCount()).toEqual("Amber: 1");
    expect(schoolReport.greenCount()).toEqual("Green: 1");
  });

  it("returns the count of three colours", () => {
    const schoolReport = new SchoolReport("Red, Amber, Green");
    expect(schoolReport.getGrades()).toEqual(["Red", "Amber", "Green"]);
    schoolReport.countGrades();
    expect(schoolReport.amberCount()).toEqual("Amber: 1");
    expect(schoolReport.greenCount()).toEqual("Green: 1");
    expect(schoolReport.redCount()).toEqual("Red: 1");
  });

  it("returns the count of three colours with colour occuring multiple times", () => {
    const schoolReport = new SchoolReport("Red, Amber, Red, Green, Amber");
    expect(schoolReport.getGrades()).toEqual([
      "Red",
      "Amber",
      "Red",
      "Green",
      "Amber",
    ]);
    schoolReport.countGrades();
    expect(schoolReport.amberCount()).toEqual("Amber: 2");
    expect(schoolReport.greenCount()).toEqual("Green: 1");
    expect(schoolReport.redCount()).toEqual("Red: 2");
  });
});
