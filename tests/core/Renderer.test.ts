import Renderer from '~/core/Renderer';

describe('Renderer', () => {
  describe('When instanciated', () => {
    const renderer = new Renderer();

    it('Should instanciate', () => {
      expect(renderer).toBeInstanceOf(Renderer);
    });
  });

  describe('When instanciated with a canvas', () => {
    const canvas = document.createElement('canvas');
    const renderer = new Renderer({ canvas });

    it('Should set the canvas', () => {
      expect(renderer.canvas).toBeInstanceOf(HTMLCanvasElement);
    });

    it('Should set the rendering context', () => {
      expect(renderer.ctx).toBeInstanceOf(CanvasRenderingContext2D);
    });
  });

  describe('setCanvas', () => {
    describe('When passed a canvas', () => {
      const renderer = new Renderer();
      const canvas = document.createElement('canvas');
      renderer.setCanvas(canvas);

      it('Should set the canvas', () => {
        expect(renderer.canvas).toBeInstanceOf(HTMLCanvasElement);
      });
  
      it('Should set the rendering context', () => {
        expect(renderer.ctx).toBeInstanceOf(CanvasRenderingContext2D);
      });
    });

    describe('When passed a canvas that cannot provide a valid rendering context', () => {
      it('Should throw an exception', () => {
        const renderer = new Renderer();
        const canvas = document.createElement('canvas');

        jest.spyOn(canvas, 'getContext').mockReturnValueOnce(null);
        
        expect(() => renderer.setCanvas(canvas)).toThrowError('Couldn\'t get rendering context from canvas');
      });
    });
  });

  describe('resizeCanvas', () => {
    const renderer = new Renderer();
    const canvas = document.createElement('canvas');
    renderer.setCanvas(canvas);
    jest.spyOn(canvas, 'scrollWidth', 'get').mockReturnValueOnce(100);
    jest.spyOn(canvas, 'scrollHeight', 'get').mockReturnValueOnce(100);
    
    describe('When called', () => {
      it('Should set the canvas width and height to match the DOM', () => {
        renderer.resizeCanvas();
        expect(renderer.canvas.width).toBe(100);
        expect(renderer.canvas.height).toBe(100);
      });
    });
  });
});