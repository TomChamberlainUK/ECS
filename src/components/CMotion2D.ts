import { CBaseComponent  } from './CBaseComponent';

/**
 * Interface for a Motion2D component.
 */
export interface IMotion2D {
  /** Determines an entities linear force. */
  force: number;
  /** Determines an entities torque or rotational force. */
  torque: number;
}

/**
 * Motion2D Component class.
 * Determines an entities force and torque.
 * When applied to a kinetic entity with a mass this will affect its linear and angular acceleration.
 */
export class CMotion2D extends CBaseComponent implements IMotion2D {
  force: number;
  torque: number;

  /**
   * Constructs a Motion2D component.
   * @param props - Properties passed to the component.
   */
  constructor({
    force = 1,
    torque = 1
  }: Partial<IMotion2D> = {}) {
    super({ name: 'CMotion2D' });
    this.force = force;
    this.torque = torque;
  }
}