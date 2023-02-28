import Entity from '~/Entity';
import { CBaseComponent } from '~/components';

describe('Entity', () => {
  describe('When instanciated', () => {
    const entity = new Entity();
    
    it('Should instanciate', () => {  
      expect(entity).toBeInstanceOf(Entity);
    });

    it('Should have a unique ID', () => {
      const otherEntities = Array.from({ length: 5 }, () => new Entity());

      for (const otherEntity of otherEntities) {
        expect(entity.id).not.toEqual(otherEntity.id);
      }
    });
  });

  describe('When instanciated with components', () => {
    const components = Array.from({ length: 5 }, (_, i) => new CBaseComponent({ name: `test-${i}` }));
    const entity = new Entity({ components });

    it('Should set the components', () => {
      for (const { name } of components) {
        expect(entity.hasComponent(name)).toBe(true);
      }
    });
  });

  describe('hasComponent()', () => {
    const entity = new Entity();
    const component = new CBaseComponent({ name: 'added' });
    entity.addComponent(component);

    describe('When passed a string matching an assigned component', () => {
      it('Should return true', () => {
        expect(entity.hasComponent('added')).toBe(true);
      });
    });

    describe('When passed a string not matching an assigned component', () => {
      it('Should return false', () => {
        expect(entity.hasComponent('not-added')).toBe(false);
      });
    });
  });

  describe('hasComponents()', () => {
    const entity = new Entity();
    const components = [
      new CBaseComponent({ name: 'test-a' }),
      new CBaseComponent({ name: 'test-b' }),
    ];

    entity.addComponents(components);

    describe('When passed strings matching assigned components', () => {
      it('Should return true', () => {
        expect(entity.hasComponents('test-a', 'test-b')).toBe(true);
      });
    });

    describe('When passed strings not matching assigned components', () => {
      it('Should return false', () => {
        expect(entity.hasComponents('test-c', 'test-d')).toBe(false);
      });
    });

    describe('When passed strings where some match assigned components', () => {
      it('Should return false', () => {
        expect(entity.hasComponents('test-a', 'test-d')).toBe(false);
      });
    });
  });

  describe('addComponent()', () => {
    const entity = new Entity();
    const component = new CBaseComponent({ name: 'test' });

    entity.addComponent(component);

    it('Should add a component', () => {
      expect(entity.hasComponent('test')).toBe(true);
    });
  });

  describe('addComponents()', () => {
    const entity = new Entity();
    const components = Array.from({ length: 5 }, (_, i) => new CBaseComponent({ name: `test-${i}` }));

    entity.addComponents(components);

    it('Should add multiple components', () => {
      for (const { name } of components) {
        expect(entity.hasComponent(name)).toBe(true);
      }
    });
  });

  describe('removeComponent()', () => {
    const entity = new Entity();
    const component = new CBaseComponent({ name: 'test' });

    entity.addComponent(component);

    describe('When passed the name of a matching component', () => {
      entity.removeComponent('test');

      it('Should remove that component from this entity', () => {
        expect(entity.hasComponent('test')).toBe(false);
      });
    });
  });

  describe('removeComponents()', () => {
    const entity = new Entity();
    const components = [
      new CBaseComponent({ name: 'test-a' }),
      new CBaseComponent({ name: 'test-b' }),
    ];

    entity.addComponents(components);

    describe('When passed the names of a matching components', () => {
      entity.removeComponents('test-a', 'test-b');

      it('Should remove those components from this entity', () => {
        expect(entity.hasComponents('test-a', 'test-b')).toBe(false);
      });
    });
  });
});