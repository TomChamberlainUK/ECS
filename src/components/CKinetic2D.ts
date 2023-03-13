import { Vector2D } from '~/maths';
import { CBaseComponent } from './CBaseComponent';

/**
 * Interface for a Kinetic2D component.
 */
export interface IKinetic2D {
  /** Determines an entities velocity. */
  velocity: Vector2D,
  /** Determines an entities acceleration. */
  acceleration: Vector2D
}

/**
 * Kinetic2D Component class.
 * Determines an entities velocity and acceleration.
 */
export class CKinetic2D extends CBaseComponent implements IKinetic2D {
  velocity: Vector2D;
  acceleration: Vector2D;

  /**
   * Constructs a Kinetic2D component.
   * @param props - Properties passed to the component.
   */
  constructor({
    velocity = new Vector2D({ x: 0, y: 0 }),
    acceleration = new Vector2D({ x: 0, y: 0 })
  }: Partial<IKinetic2D> = {}) {
    super({ name: 'CKinetic2D' });
    this.velocity = velocity;
    this.acceleration = acceleration;
  }
}