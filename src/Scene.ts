import Entity from "@/Entity";

type ConstructorProps = {
  entities?: Entity[],
  systems?: (() => void)[]
}

export default class Scene {
  public entities: Entity[];
  public systems: (() => void)[];

  constructor({ entities, systems }: ConstructorProps = {}) {
    this.entities = entities ?? [];
    this.systems = systems ?? [];
  }

  addEntity(entity: Entity) {
    this.entities.push(entity);
  }

  addSystem(system: () => void) {
    this.systems.push(system);
  }
}