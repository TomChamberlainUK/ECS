import Entity from '~/Entity';

type System = (entities: Entity[], deltaTime: number) => void;

type ConstructorProps = {
  entities?: Entity[],
  systems?: System[]
}

export default class Scene {
  public entities: Entity[];
  public systems: System[];

  constructor({ entities, systems }: ConstructorProps = {}) {
    this.entities = entities ?? [];
    this.systems = systems ?? [];
  }

  addEntity(entity: Entity) {
    this.entities.push(entity);
  }

  addSystem(system: System) {
    this.systems.push(system);
  }
}