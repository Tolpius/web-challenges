import type ShapeModel from "../models/ShapeModel";
class circleShape implements ShapeModel {
  protected radius: number;
  #type = "Circle";
  get type() {
    return this.#type;
  }
  constructor(radius: number) {
    this.radius = radius;
  }
  describe() {
    return "this is a circle";
  }
}

class squareShape implements ShapeModel {
  protected side: number;
  #type = "Square";
  get type() {
    return this.#type;
  }
  constructor(side: number) {
    this.side = side;
  }
  describe() {
    return "this is a Square";
  }
}


export default class shapeFactory{
    public static createShape(type: "circle" | "square", size:number): ShapeModel {
        switch (type.toLowerCase()) {
            case "circle":
                return new circleShape(size);
            case "square":
                return new squareShape(size);
            default:
                throw new Error(`Unsupported shape: ${type}`)
        }
    }
}