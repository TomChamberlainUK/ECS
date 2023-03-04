import Entity from '~/Entity';
import Renderer from './Renderer';

type System = (entities: Entity[], renderer: Renderer) => void;

/**
 * Props type for Scene class.
 */
export interface IScene {
  /** The entities of the scene. */
  entities: Entity[],
  /** Systems to be used in the scene. */
  systems: System[]
}

/**
 * Class representing a scene in the game.
 * This is a collection of entities and systems that should interact with each other.
 */
export default class Scene implements IScene {
  public entities: Entity[];
  public systems: System[];

  /**
   * Creates a scene.
   * @param props - Properties passed to the scene.
   */
  constructor({
    entities = [],
    systems = []
  }: Partial<IScene> = {}) {
    this.entities = entities;
    this.systems = systems;
  }

  /**
   * Adds an entity to this scene.
   * @param entity - The entity to add.
   */
  addEntity(entity: Entity) {
    this.entities.push(entity);
  }

  /**
   * Adds a system to this scene.
   * @param system - The system to add.
   */
  addSystem(system: System) {
    this.systems.push(system);
  }
}