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

  describe('renderCircle()', () => {
    describe('When called with both a fillColor and strokeColor', () => {
      const renderer = new Renderer({ canvas: document.createElement('canvas') });

      jest.spyOn(renderer.canvas, 'scrollWidth', 'get').mockReturnValueOnce(100);
      jest.spyOn(renderer.canvas, 'scrollHeight', 'get').mockReturnValueOnce(100);

      renderer.resizeCanvas();

      jest.spyOn(renderer.ctx, 'save');
      jest.spyOn(renderer.ctx, 'restore');
      jest.spyOn(renderer.ctx, 'translate');
      jest.spyOn(renderer.ctx, 'rotate');
      jest.spyOn(renderer.ctx, 'beginPath');
      jest.spyOn(renderer.ctx, 'closePath');
      jest.spyOn(renderer.ctx, 'arc');
      jest.spyOn(renderer.ctx, 'fill');
      jest.spyOn(renderer.ctx, 'stroke');

      renderer.renderCircle({
        position: { x: 1, y: 1 },
        rotation: 0,
        scale: { x: 1, y: 1 },
        radius: 10,
        fillColor: 'white',
        strokeColor: 'red'
      });

      it('Should save the current rendering context', () => {
        expect(renderer.ctx.save).toBeCalled();
      });

      it('Should begin rendering at the canvas\'s center', () => {
        expect(renderer.ctx.translate).toBeCalledWith(50, 50);
      });

      it('Should translate according to the circles position vector', () => {
        expect(renderer.ctx.translate).toBeCalledWith(1, 1);
      });

      it('Should rotate according to the circles rotation value', () => {
        expect(renderer.ctx.rotate).toBeCalledWith(0);
      });

      it('Should scale according to the circles scale vector', () => {
        expect(renderer.ctx.scale).toBeCalledWith(1, 1);
      });

      it('Should draw the path of a circle according to the circle\'s radius', () => {
        expect(renderer.ctx.beginPath).toBeCalled();
        expect(renderer.ctx.arc).toBeCalledWith(0, 0, 10, 0, Math.PI * 2);
        expect(renderer.ctx.closePath).toBeCalled();
      });

      it('Should fill the path', () => {
        expect(renderer.ctx.fill).toBeCalled();
      });

      it('Should apply a stroke to the path', () => {
        expect(renderer.ctx.stroke).toBeCalled();
      });

      it('Should restore the original rendering context', () => {
        expect(renderer.ctx.restore).toBeCalled();
      });
    });

    describe('When called without a fillColor', () => {
      const renderer = new Renderer({ canvas: document.createElement('canvas') });

      jest.spyOn(renderer.ctx, 'fill');
      
      renderer.renderCircle({
        position: { x: 1, y: 1 },
        rotation: 0,
        scale: { x: 1, y: 1 },
        radius: 10,
        strokeColor: 'red'
      });

      it('Should not fill the path', () => {
        expect(renderer.ctx.fill).not.toBeCalled();
      });
    });

    describe('When called without a strokeColor', () => {
      const renderer = new Renderer({ canvas: document.createElement('canvas') });

      jest.spyOn(renderer.ctx, 'stroke');
      
      renderer.renderCircle({
        position: { x: 1, y: 1 },
        rotation: 0,
        scale: { x: 1, y: 1 },
        radius: 10,
        fillColor: 'white'
      });

      it('Should not apply a stroke to the path', () => {
        expect(renderer.ctx.stroke).not.toBeCalled();
      });
    });
  });
});