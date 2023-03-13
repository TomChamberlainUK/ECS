import Entity from '~/core/Entity';
import Renderer from '~/core/Renderer';
import { CKinetic2D, CTransform2D } from '~/components';
import { kinetic2D } from '~/systems';

describe('kinetic2D()', () => {
  describe('When passed an entity with CKinetic2D and CTransform2D components', () => {
    const entity = new Entity();

    entity.addComponent(new CTransform2D({
      position: { x: 1, y: 1 }
    }));
    entity.addComponent(new CKinetic2D({
      velocity: { x: 1, y: 1 },
      acceleration: { x: 1, y: 1 }
    }));

    const cKinetic2D = entity.getComponent<CKinetic2D>('kinetic2d');
    const cTransform2D = entity.getComponent<CTransform2D>('transform2d');

    const canvas = document.createElement('canvas');
    const renderer = new Renderer({ canvas });

    kinetic2D([entity], renderer);

    it('Should increase the entity\'s velocity by its acceleration', () => {
      expect(cKinetic2D.velocity.x).toBe(2);
      expect(cKinetic2D.velocity.y).toBe(2);
    });

    it('Should increase the entity\'s position by its velocity', () => {
      expect(cTransform2D.position.x).toBe(3);
      expect(cTransform2D.position.y).toBe(3);
    });
  });

  describe('When passed an entity without a CKinetic2D component', () => {
    const entity = new Entity();

    entity.addComponent(new CTransform2D({
      position: { x: 1, y: 1 }
    }));

    const cTransform2D = entity.getComponent<CTransform2D>('transform2d');

    const canvas = document.createElement('canvas');
    const renderer = new Renderer({ canvas });

    kinetic2D([entity], renderer);

    it('Should not change position', () => {
      expect(cTransform2D.position.x).toBe(1);
      expect(cTransform2D.position.y).toBe(1);
    });
  });
});