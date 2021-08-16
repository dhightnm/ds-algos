/* eslint-disable no-unused-vars */
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return 'YOU ARE EXPELLED!!!!';
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    const sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }

  static EnrollStudents() {
    return 'ENROLLING STUDENTS!';
  }
}

// const firstStudent = new Student('Colt', 'Steele', 1);
// const secondStudent = new Student('Blue', 'Steele', 2);
