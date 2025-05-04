class Engine {
  static #count = 0;
  constructor(source) {
    this.source = source;
    if (new.target.name === "Engine")
      throw new Error("You can not make an object from abstract class");
    Engine.#count++;
  }
}

class Car extends Engine {
  constructor(top, left, source) {
    super(source);
    this.top = top;
    this.left = left;
    this.img = document.createElement("img");
    this.img.src = this.source;
    this.img.style.top = this.top + "px";
    this.img.style.left = this.left + "px";
    this.img.style.width = 300 + "px";
    this.img.style.height = 200 + "px";
    this.img.style.position = "absolute";
    document.body.appendChild(this.img);
  }

  moveLeft(value) {
    let leftPos = parseInt(this.img.style.left) || 0;

    if (parseInt(leftPos) > 0) {
      this.img.style.left = parseInt(leftPos) - value + "px";
      console.log("i am in");
    }
  }

  moveRight(value) {
    let leftPos = parseInt(this.img.style.left) || 0;
    let maxRight = window.innerWidth - this.img.offsetWidth;
    this.left = Math.min(maxRight, leftPos + value);
    this.img.style.left = this.left + "px";
  }

  ChangeStyle(styleObject) {
    Object.assign(this.img.style, styleObject);
  }

  set setTop(value) {
    this.top = value;
    this.img.style.top = value + "px";
  }

  set setLeft(value) {
    this.left = value;
    this.img.style.left = value + "px";
  }
}

let car = new Car(400, 270, "1.png");

car.ChangeStyle({
  "border-radius": "10px",
  border: "10px solid black ",
});
