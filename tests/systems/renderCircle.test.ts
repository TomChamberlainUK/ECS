import Entity from '~/core/Entity';
import Renderer from '~/core/Renderer';
import { CRenderCircle, CTransform2D } from '~/components';
import { renderCircle } from '~/systems';

describe('renderCircle()', () => {
  describe('When passed an entity with CTransform2D and CRenderCircle components', () => {
    const entity = new Entity();
    entity.addComponent(new CRenderCircle());
    entity.addComponent(new CTransform2D());

    const canvas = document.createElement('canvas');
    const renderer = new Renderer({ canvas });

    it('Should render', () => {
      jest.spyOn(renderer, 'renderCircle');

      renderCircle([entity], renderer);

      expect(renderer.renderCircle).toHaveBeenCalled();
    });
  });

  describe('When passed an entity without CTransform2D and CRenderCircle components', () => {
    const entity = new Entity();

    const canvas = document.createElement('canvas');
    const renderer = new Renderer({ canvas });

    it('Should not render', () => {
      jest.spyOn(renderer, 'renderCircle');

      renderCircle([entity], renderer);

      expect(renderer.renderCircle).not.toHaveBeenCalled();
    });
  });
});