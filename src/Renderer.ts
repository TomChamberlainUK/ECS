export default class Renderer {
  private canvas: HTMLCanvasElement | null;
  private ctx: CanvasRenderingContext2D | null;

  constructor() {
    this.canvas = null;
    this.ctx = null;
  }

  setCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.canvas.width = canvas.scrollWidth;
    this.canvas.height = canvas.scrollHeight;
    this.ctx = this.canvas.getContext('2d');
  }

  getCanvas() {
    return this.canvas;
  }

  getContext() {
    return this.ctx;
  }
}