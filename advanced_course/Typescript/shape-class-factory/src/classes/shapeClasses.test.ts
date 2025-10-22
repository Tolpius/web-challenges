import shapeFactory from "./shapeClasses";
import type ShapeModel from "../models/ShapeModel";
import {describe, test, expect} from "@jest/globals";

describe("shapeFactory", () => {
  test("should create a circle shape with correct type and description", () => {
    const shape: ShapeModel = shapeFactory.createShape("circle", 5);
    expect(shape.type).toBe("Circle");
    expect(shape.describe()).toBe("this is a circle");
  });

  test("should create a square shape with correct type and description", () => {
    const shape: ShapeModel = shapeFactory.createShape("square", 10);
    expect(shape.type).toBe("Square");
    expect(shape.describe()).toBe("this is a Square");
  });

  test("should throw an error for unsupported shape type", () => {
    expect(() => shapeFactory.createShape("triangle" as any, 5)).toThrow(
      "Unsupported shape: triangle"
    );
  });
});
