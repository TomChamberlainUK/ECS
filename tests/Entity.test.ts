import Entity from '@/Entity';

describe('Entity', () => {

  const entity = new Entity();

  it('When instantiated an entity should have an ID', () => {
    expect(entity.id).not.toBeUndefined();
  });

  it('When multiple entities are instantiated they should all have unique IDs', () => {

    const usedIdsMap = new Map<Entity['id'], boolean>();
    let foundRepeatedId = false;

    for (let i = 0; i < 10; i++) {
      const newEntity = new Entity();
      if (usedIdsMap.has(newEntity.id)) {
        foundRepeatedId = true;
        break;
      } else {
        usedIdsMap.set(newEntity.id, true);
      }
    }

    expect(foundRepeatedId).toBe(false);
  });

});