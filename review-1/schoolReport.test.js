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
    expect(schoolReport.reportCard()).toEqual("Green: 2");
  });
});
