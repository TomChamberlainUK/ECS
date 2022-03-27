import Scene from '@/Scene';
import Entity from '@/Entity';

describe('Scene', () => {

  it('Can be instanciated with systems', () => {
    const mockSystem = jest.fn();
    const scene = new Scene({
      systems: [mockSystem]
    });
    expect(scene.systems).toContain(mockSystem);
  });

  it('Allows systems to be added', () => {
    const mockSystem = jest.fn();
    const scene = new Scene();
    scene.addSystem(mockSystem);
    expect(scene.systems).toContain(mockSystem);
  });

  it('Can be instanciated with entities', () => {
    const entity = new Entity();
    const scene = new Scene({
      entities: [entity]
    });
    expect(scene.entities).toContain(entity);
  });

  it('Allows entities to be added', () => {
    const entity = new Entity();
    const scene = new Scene();
    scene.addEntity(entity);
    expect(scene.entities).toContain(entity);
  });

});