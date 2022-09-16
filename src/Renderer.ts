export default class Renderer {
  private canvas: HTMLCanvasElement | null;
  private ctx: CanvasRenderingContext2D | null;

  constructor() {
    this.canvas = null;
    this.ctx = null;
  }

  setCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.resizeCanvas();
    window.addEventListener('resize', this.resizeCanvas.bind(this));
    this.ctx = this.canvas.getContext('2d');
  }

  getCanvas() {
    return this.canvas;
  }

  getContext() {
    return this.ctx;
  }

  private resizeCanvas() {
    if (!this.canvas) return;
    this.canvas.width = this.canvas.scrollWidth;
    this.canvas.height = this.canvas.scrollHeight;
  }
}