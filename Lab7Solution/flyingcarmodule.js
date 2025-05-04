import Car from "./carmodule.js";

class FlyingCar extends Car {
  constructor(model, year) {
    super(model, year);
    this.canFly = true;
  }

  toString() {
    return `${super.toString()}, I Can Fly`;
  }
}

export default FlyingCar;
