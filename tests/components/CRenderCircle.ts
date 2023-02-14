import { CRenderCircle } from '~/components/CRenderCircle';

describe('CRenderCircle', () => {
  describe('When instanciating', () => {
    const renderCircleComponent = new CRenderCircle();

    it('Should instanciate', () => {
      expect(renderCircleComponent).toBeInstanceOf(CRenderCircle);
    });
  
    it('Should have an identifiable name', () => {
      expect(renderCircleComponent.name).toBe('render-circle');
    });
  });
});