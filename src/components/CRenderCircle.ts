import { CBaseComponent } from './CBaseComponent';

/**
 * Interface for a renderable circle component.
 */
export interface IRenderCircle {
  /** Determines a renderable radius for an entity. */
  radius: number,
  /** Determines what color to render for the shape's fill - Accepts any HTML safe color string. */
  fillColor?: string,
  /** Determines what color to render for the shape's stroke - Accepts any HTML safe color string. */
  strokeColor?: string
}

/**
 * Renderable circle component class.
 * Determines how an entity is rendered.
 */
export class CRenderCircle extends CBaseComponent implements IRenderCircle {
  radius: number;
  fillColor?: string;
  strokeColor?: string;

  /**
   * Constructs a renderable circle component.
   */
  constructor({
    radius = 16,
    fillColor = 'white',
    strokeColor
  }: Partial<IRenderCircle> = {}) {
    super({ name: 'CRenderCircle'});
    this.radius = radius;
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
  }
}