/**
 * Interface for a 2D Vector.
 */
export interface IVector2D {
  /**
   * Scalar value along the x-axis of a cartesian plane.
   */
  x: number,
  /**
   * Scalar value along the y-axis of a cartesian plane.
   */
  y: number
}

/**
 * A class representing a 2D vector.
 * A vector provides direction and magnitude for determining the position of one point in space relative to another.
 */
export class Vector2D implements IVector2D {
  public x: number;
  public y: number;

  /**
   * Creates a 2D vector.
   */
  constructor();
  /**
   * Creates a 2D vector.
   * @param props - The x and y values of the vector.
   */
  constructor({ x, y }: IVector2D);
  /**
   * Creates a 2D vector.
   * @param x - Scalar value along the x-axis of a cartesian plane.
   * @param y - Scalar value along the y-axis of a cartesian plane.
   */
  constructor(x: number, y: number);
  constructor(arg1?: unknown, arg2?: unknown) {
    if (typeof arg1 === 'object') {
      const { x, y } = arg1 as IVector2D;
      this.x = x;
      this.y = y;
    } else if (typeof arg1 === 'number' && typeof arg2 ==='number') {
      this.x = arg1;
      this.y = arg2;
    } else {
      this.x = 0;
      this.y = 0;
    }
  }

  /**
   * Adds two vectors together.
   * @param a - A vector to add.
   * @param b - A vector to add.
   * @returns A new vector that is the sum of the vectors passed.
   */
  static add(a: Vector2D, b: Vector2D) {
    return new Vector2D({
      x: a.x + b.x,
      y: a.y + b.y
    });
  }
}