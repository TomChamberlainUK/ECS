import { CRenderCircle } from '~/components/CRenderCircle';

describe('CRenderCircle', () => {
  describe('When instanciated', () => {
    const renderCircleComponent = new CRenderCircle();

    it('Should instanciate', () => {
      expect(renderCircleComponent).toBeInstanceOf(CRenderCircle);
    });
  
    it('Should have an identifiable name', () => {
      expect(renderCircleComponent.name).toBe('render-circle');
    });

    it('Should have a radius', () => {
      expect(renderCircleComponent.radius).toEqual(expect.any(Number));
    });

    it('Should have a fillColor', () => {
      expect(renderCircleComponent.fillColor).toBe('white');
    });

    it('Should have no strokeColor', () => {
      expect(renderCircleComponent.strokeColor).toBe(false);
    });
  });

  describe('When instanciated with a radius', () => {
    const renderCircleComponent = new CRenderCircle({ radius: 30 });

    it('Should have that radius', () => {
      expect(renderCircleComponent.radius).toEqual(30);
    });
  });

  describe('When instanciated with a fillColor', () => {
    const renderCircleComponent = new CRenderCircle({ fillColor: 'red' });

    it('Should have that fillColor', () => {
      expect(renderCircleComponent.fillColor).toEqual('red');
    });
  });

  describe('When instanciated with a strokeColor', () => {
    const renderCircleComponent = new CRenderCircle({ strokeColor: 'red' });

    it('Should have that strokeColor', () => {
      expect(renderCircleComponent.strokeColor).toEqual('red');
    });
  });
});