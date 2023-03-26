class SchoolReport {
  constructor(grades) {
    this.grades = grades.split(", ");
    this.greenCount = 0;
    this.amberCount = 0;
    this.redCount = 0;
  }

  getGrades() {
    return this.grades;
  }

  countGrades() {
    this.grades.forEach((grade) => {
      if (grade === "Green") {
        this.greenCount += 1;
      } else if (grade === "Amber") {
        this.amberCount += 1;
      } else {
        this.redCount += 1;
      }
    });
  }

  reportCard() {
    return `Green: ${this.greenCount}`;
  }
}

module.exports = SchoolReport;
