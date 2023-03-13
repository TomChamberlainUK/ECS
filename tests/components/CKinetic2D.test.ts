import { CKinetic2D } from '~/components';
import { Vector2D } from '~/maths';

describe('CTransform', () => {
  describe('When instanciated', () => {
    const kineticComponent = new CKinetic2D();

    it('Should instanciate', () => {
      expect(kineticComponent).toBeInstanceOf(CKinetic2D);
    });
  
    it('Should have an identifiable name', () => {
      expect(kineticComponent.name).toBe('kinetic2d');
    });
  
    it('Should have a 2D vector velocity of 0, 0', () => {
      expect(kineticComponent.velocity).toBeInstanceOf(Vector2D);
      expect(kineticComponent.velocity.x).toEqual(0);
      expect(kineticComponent.velocity.y).toEqual(0);
    });

    it('Should have a 2D vector acceleration of 0, 0', () => {
      expect(kineticComponent.acceleration).toBeInstanceOf(Vector2D);
      expect(kineticComponent.acceleration.x).toEqual(0);
      expect(kineticComponent.acceleration.y).toEqual(0);
    });
  });

  describe('When instanciated with a velocity', () => {
    const kineticComponent = new CKinetic2D({
      velocity: {
        x: 10,
        y: 10
      }
    });

    it('Should have that velocity', () => {
      expect(kineticComponent.velocity.x).toEqual(10);
      expect(kineticComponent.velocity.y).toEqual(10);
    });
  });

  describe('When instanciated with an acceleration', () => {
    const kineticComponent = new CKinetic2D({
      acceleration: {
        x: 10,
        y: 10
      }
    });

    it('Should have that acceleration', () => {
      expect(kineticComponent.acceleration.x).toEqual(10);
      expect(kineticComponent.acceleration.y).toEqual(10);
    });
  });
});