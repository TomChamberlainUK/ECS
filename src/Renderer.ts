import { ITransform2D, IRenderCircle } from '~/components';

/**
 * Props type for Renderer class.
 */
export interface IRenderer {
  /** The canvas to render to. */
  canvas: HTMLCanvasElement;
  /** The rendering context. */
  ctx: CanvasRenderingContext2D;
}

/**
 * Class representing a renderer for the game.
 */
export default class Renderer implements IRenderer {
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;

  /**
   * Creates a renderer.
   * @param props - Properties passed to the renderer.
   */
  constructor({ canvas }: Partial<Omit<IRenderer, 'ctx'>> = {}) {
    if (canvas) {
      this.setCanvas(canvas);
    }
  }

  /**
   * Sets the canvas.
   * @param canvas - The canvas to set.
   */
  setCanvas(canvas: HTMLCanvasElement) {
    const renderingContext = canvas.getContext('2d');
    if (renderingContext === null) {
      throw new Error('Couldn\'t get rendering context from canvas');
    }
    this.canvas = canvas;
    this.ctx = renderingContext;
    this.resizeCanvas();
    window.addEventListener('resize', this.resizeCanvas.bind(this));
  }

  /**
   * Resizes canvas rendering to match the DOM.
   */
  resizeCanvas() {
    if (!this.canvas) return;
    const devicePixelRatio = window.devicePixelRatio ?? 1;
    this.canvas.width = this.canvas.scrollWidth * devicePixelRatio;
    this.canvas.height = this.canvas.scrollHeight * devicePixelRatio;
  }

  /**
   * Renders a circle.
   * @param props - Where and how to render the circle.
   */
  renderCircle({ position, rotation, scale, radius, fillColor, strokeColor }: ITransform2D & IRenderCircle) {
    this.ctx.save();
    this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);

    this.ctx.save();
    this.ctx.translate(position.x, position.y);
    this.ctx.rotate(rotation);
    this.ctx.scale(scale.x, scale.y);
    this.ctx.beginPath();

    this.ctx.arc(0, 0, radius, 0, Math.PI * 2);
    this.ctx.closePath();

    if (fillColor) {
      this.ctx.fillStyle = fillColor;
      this.ctx.fill();
    }

    if (strokeColor) {
      this.ctx.strokeStyle = strokeColor;
      this.ctx.stroke();
    }

    this.ctx.restore();

    this.ctx.restore();

  }
}