import Entity from '~/core/Entity';
import Renderer from '~/core/Renderer';
import { CRenderCircle, CTransform2D } from '~/components';
import { renderCircle } from '~/systems';

describe('renderCircle()', () => {
  describe('When passed no renderer', () => {
    const entity = new Entity();

    jest.spyOn(entity, 'hasComponents');

    renderCircle([entity], {});

    it('Should not iterate over entities', () => {
      expect(entity.hasComponents).not.toHaveBeenCalled();
    });
  });

  describe('When passed a renderer', () => {
    describe('When passed an entity with CTransform2D and CRenderCircle components', () => {
      const entity = new Entity();
      entity.addComponent(new CRenderCircle());
      entity.addComponent(new CTransform2D());

      const canvas = document.createElement('canvas');
      const renderer = new Renderer({ canvas });

      jest.spyOn(renderer, 'renderCircle');
  
      renderCircle([entity], { renderer });

      it('Should render', () => {
        expect(renderer.renderCircle).toHaveBeenCalled();
      });
    });

    describe('When passed an entity without CTransform2D and CRenderCircle components', () => {
      const entity = new Entity();
      const canvas = document.createElement('canvas');
      const renderer = new Renderer({ canvas });

      jest.spyOn(renderer, 'renderCircle');

      renderCircle([entity], { renderer });

      it('Should not render', () => {
        expect(renderer.renderCircle).not.toHaveBeenCalled();
      });
    });
  });
});