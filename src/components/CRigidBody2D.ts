import { CBaseComponent } from './CBaseComponent';

/**
 * Interface for a RigidBody2D component.
 */
export interface IRigidBody2D {
  /** Determines an entities mass. For use in physics calculations. */
  mass: number;
}

/**
 * RigidBody2D Component class.
 * Represents the physical properties of an entity in 2D space.
 */
export class CRigidBody2D extends CBaseComponent implements IRigidBody2D {
  mass: number;

  /**
   * Constructs a RigidBody2D component.
   * @param props - Properties passed to the component.
   */
  constructor({
    mass = 1
  }: Partial<IRigidBody2D> = {}) {
    super({ name: 'CRigidBody2D' });
    this.mass = mass;
  }
}