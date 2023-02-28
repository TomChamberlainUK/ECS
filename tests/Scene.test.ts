import Scene from '~/Scene';
import Entity from '~/Entity';

describe('Scene', () => {
  describe('When instanciated', () => {
    it('Should instanciate', () => {
      const scene = new Scene();

      expect(scene).toBeInstanceOf(Scene);
    });
  });

  describe('When instanciated with entities', () => {
    it('Should set entities', () => {
      const entities = Array.from({ length: 5 }, () => new Entity());
      const scene = new Scene({ entities });

      expect(scene.entities).toBe(entities);
    });
  });

  describe('When instanciated with systems', () => {
    it('Should set systems', () => {
      const systems = Array.from({ length: 5 }, () => jest.fn());
      const scene = new Scene({ systems });

      expect(scene.systems).toBe(systems);
    });
  });

  describe('addEntity()', () => {
    it('Should add an entity', () => {
      const scene = new Scene();
      const entity = new Entity();

      scene.addEntity(entity);

      expect(scene.entities).toContain(entity);
    });
  });

  describe('addSystem()', () => {
    it('Should add a system', () => {
      const scene = new Scene();
      const system = jest.fn();

      scene.addSystem(system);

      expect(scene.systems).toContain(system);
    });
  });
});