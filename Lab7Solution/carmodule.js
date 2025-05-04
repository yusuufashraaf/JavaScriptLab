class Car {
  Model;
  Year;

  constructor(model, year) {
    this.Model = model;
    this.Year = year;
  }

  toString() {
    return `The car model is ${this.Model} and the year is ${this.Year}`;
  }
}

export default Car;
