import { IVector2D  } from './maths';

export type RendererProps = {
  canvas?: HTMLCanvasElement
}

export default class Renderer {
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;

  constructor({ canvas }: RendererProps = {}) {
    if (canvas) {
      this.setCanvas(canvas);
    }
  }

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

  resizeCanvas() {
    if (!this.canvas) return;
    const devicePixelRatio = window.devicePixelRatio ?? 1;
    this.canvas.width = this.canvas.scrollWidth * devicePixelRatio;
    this.canvas.height = this.canvas.scrollHeight * devicePixelRatio;
  }

  renderCircle({ position, rotation, scale, radius, fillColor, strokeColor }: {
    position: IVector2D,
    rotation: number,
    scale: IVector2D,
    radius: number,
    fillColor: string | false,
    strokeColor: string | false
  }) {
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