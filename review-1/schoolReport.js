class SchoolReport {
  constructor(grades) {
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
}

module.exports = SchoolReport;
