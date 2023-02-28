export interface IRenderer {
  canvas?: HTMLCanvasElement
}

export default class Renderer {
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;

  constructor({ canvas }: IRenderer = {}) {
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
}