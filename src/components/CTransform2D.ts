import { CBaseComponent } from '~/components';
import { Vector2D } from '~/maths';

/**
 * Interface for a Transform2D component.
 */
export interface ITransform2D {
  /**
   * Determines an entities position.
   */
  position?: Vector2D,
  /**
   * Determines an entities rotation.
   */
  rotation?: number,
  /**
   * Determines an entities scale.
   */
  scale?: Vector2D
}

/**
 * Transform2D Component class.
 * Determines an entities position, rotation, and scale.
 */
export class CTransform2D extends CBaseComponent {
  position: Vector2D;
  rotation: number;
  scale: Vector2D;

  /**
   * Constructs a Transform2D component.
   * @param props - Properties passed to the component.
   */
  constructor({ position, rotation, scale }: ITransform2D = {
    position: { x: 0, y: 0 },
    rotation: 0,
    scale: { x: 0, y: 0 }
  }) {
    super({ name: 'transform2d' });
    this.position = new Vector2D(position ?? { x: 0, y: 0 });
    this.rotation = rotation ?? 0;
    this.scale = new Vector2D(scale ?? { x: 0, y: 0 });
  }
}