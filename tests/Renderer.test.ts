import Renderer from '~/Renderer';

describe('Renderer', () => {
  it('Should instanciate', () => {
    const renderer = new Renderer();
    expect(renderer).toBeInstanceOf(Renderer);
  });

  describe('canvas', () => {
    it('Should set and get a canvas', () => {
      const renderer = new Renderer();
      const canvas = document.createElement('canvas');
      renderer.setCanvas(canvas);
      expect(renderer.getCanvas()).toEqual(canvas);
    });

    it('Should set the width and height attributes to equal width and height', () => {
      const renderer = new Renderer();
      const canvas = document.createElement('canvas');
      jest.spyOn(canvas, 'scrollWidth', 'get').mockReturnValueOnce(100);
      jest.spyOn(canvas, 'scrollHeight', 'get').mockReturnValueOnce(100);
      renderer.setCanvas(canvas);
      expect(renderer.getCanvas()?.width).toBe(100);
      expect(renderer.getCanvas()?.height).toBe(100);
    });

    it('Should set the width and height attributes to equal width and height when the browser is resized', () => {
      const renderer = new Renderer();
      const canvas = document.createElement('canvas');
      jest.spyOn(canvas, 'scrollWidth', 'get').mockReturnValueOnce(100);
      jest.spyOn(canvas, 'scrollHeight', 'get').mockReturnValueOnce(100);
      renderer.setCanvas(canvas);
      expect(renderer.getCanvas()?.width).toBe(100);
      expect(renderer.getCanvas()?.height).toBe(100);
      jest.spyOn(canvas, 'scrollWidth', 'get').mockReturnValueOnce(300);
      jest.spyOn(canvas, 'scrollHeight', 'get').mockReturnValueOnce(300);
      window.dispatchEvent(new Event('resize'));
      expect(renderer.getCanvas()?.width).toBe(300);
      expect(renderer.getCanvas()?.height).toBe(300);
    });

    it('Should set (when setting canvas) and get a 2d rendering context', () => {
      const renderer = new Renderer();
      const canvas = document.createElement('canvas');
      renderer.setCanvas(canvas);
      expect(renderer.getContext()).toBeInstanceOf(CanvasRenderingContext2D);
    });
  });
});