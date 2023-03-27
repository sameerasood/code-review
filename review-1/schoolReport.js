class SchoolReport {
  constructor(grades) {
    if (typeof grades !== "string") {
      throw new Error("Grades must be a string");
    }
    this.grades = grades.split(", ");
    this.green = 0;
    this.amber = 0;
    this.red = 0;
  }

  getGrades() {
    return this.grades;
  }

  countGrades() {
    this.grades.forEach((grade) => {
      if (grade === "Green") {
        this.green += 1;
      } else if (grade === "Amber") {
        this.amber += 1;
      } else {
        this.red += 1;
      }
    });
  }

  greenCount() {
    return `Green: ${this.green}`;
  }

  amberCount() {
    return `Amber: ${this.amber}`;
  }

  redCount() {
    return `Red: ${this.red}`;
  }

  reportCard() {
    const result =
      this.greenCount() + " " + this.amberCount() + " " + this.redCount();
    console.log(result);
    return result;
  }
}

module.exports = SchoolReport;
grades = "Red, Red, Amber, Amber, Green, Gred, Red, Amber, Green";
schoolReport = new SchoolReport(grades);
schoolReport.countGrades();
schoolReport.reportCard();
