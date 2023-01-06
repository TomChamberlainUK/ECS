import Entity from '~/Entity';
import { Component } from '~/components';

describe('Entity', () => {

  it('When instantiated an entity should have an ID', () => {
    const entity = new Entity();
    expect(entity.id).not.toBeUndefined();
  });

  it('When multiple entities are instantiated they should all have unique IDs', () => {

    const usedIdsMap = new Map<Entity['id'], boolean>();
    let foundRepeatedId = false;

    for (let i = 0; i < 10; i++) {
      const entity = new Entity();
      if (usedIdsMap.has(entity.id)) {
        foundRepeatedId = true;
        break;
      } else {
        usedIdsMap.set(entity.id, true);
      }
    }

    expect(foundRepeatedId).toBe(false);
  });

  it('Should be able to be assigned components', () => {
    const entity = new Entity();
    entity.addComponent(new Component({ name: 'test' }));
    expect(entity.hasComponent('test')).toBe(true);
  });

  it('Should allow users to check if the entity has multiple components', () => {
    const entity = new Entity();
    entity.addComponent(new Component({ name: 'testA' }));
    entity.addComponent(new Component({ name: 'testB' }));
    entity.addComponent(new Component({ name: 'testC' }));
    expect(entity.hasComponents('testA', 'testB', 'testC')).toBe(true);
  });

  it('Should allow assigned components to be retrieved', () => {
    const entity = new Entity();
    const testComponent = new Component({ name: 'test' });
    entity.addComponent(testComponent);
    const entityComponent = entity.getComponent('test');
    expect(entityComponent).toBe(testComponent);
  });

  it('Should be able to have components unassigned', () => {
    const entity = new Entity();
    entity.addComponent(new Component({ name: 'test' }));
    entity.removeComponent('test');
    expect(entity.hasComponent('test')).toBe(false);
  });

});