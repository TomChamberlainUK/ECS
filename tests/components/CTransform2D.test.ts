import { CTransform2D } from '~/components';
import { Vector2D } from '~/maths';

describe('CTransform', () => {
  describe('When instanciated', () => {
    const transformComponent = new CTransform2D();

    it('Should instanciate', () => {
      expect(transformComponent).toBeInstanceOf(CTransform2D);
    });
  
    it('Should have an identifiable name', () => {
      expect(transformComponent.name).toBe('transform2d');
    });
  
    it('Should have a 2D vector position', () => {
      expect(transformComponent.position).toBeInstanceOf(Vector2D);
      expect(transformComponent.position.x).toEqual(0);
      expect(transformComponent.position.y).toEqual(0);
    });

    it('Should have a scalar rotation', () => {
      expect(transformComponent.rotation).toEqual(expect.any(Number));
      expect(transformComponent.rotation).toEqual(0);
    });

    it('Should have a 2D vector scale', () => {
      expect(transformComponent.scale).toBeInstanceOf(Vector2D);
      expect(transformComponent.scale.x).toEqual(1);
      expect(transformComponent.scale.y).toEqual(1);
    });
  });

  describe('When instanciated with a position', () => {
    const transformComponent = new CTransform2D({
      position: {
        x: 10,
        y: 10
      }
    });

    it('Should have that position', () => {
      expect(transformComponent.position.x).toEqual(10);
      expect(transformComponent.position.y).toEqual(10);
    });
  });

  describe('When instanciated with a rotation', () => {
    const transformComponent = new CTransform2D({
      rotation: 10
    });

    it('Should have that rotation', () => {
      expect(transformComponent.rotation).toEqual(10);
    });
  });

  describe('When instanciated with a scale', () => {
    const transformComponent = new CTransform2D({
      scale: {
        x: 10,
        y: 10
      }
    });

    it('Should have that scale', () => {
      expect(transformComponent.scale.x).toEqual(10);
      expect(transformComponent.scale.y).toEqual(10);
    });
  });
});