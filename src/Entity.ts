import type { CBaseComponent } from './components';

/**
 * Interface for Entity class.
 */
export interface IEntity {
  components?: CBaseComponent[];
}

/**
 * A class representing _something_ in the game engine.
 * This could be anything — a rock, an enemy spaceship, a player controller etc.
 * What an entity represents is built through its components. How it behaves is dictated by systems.
 */
export default class Entity {
  id: number;
  private components: Record<string, CBaseComponent>;

  /**
   * Creates an Entity.
   */
  constructor({ components }: IEntity = {}) {
    this.id = generateUniqueId();
    this.components = {};

    if (components) {
      this.addComponents(components);
    }
  }

  /**
   * Adds a component to this entity.
   * @param component - The component to be added.
   */
  addComponent<T extends CBaseComponent>(component: T) {
    this.components[component.name] = component;
  }

  /**
   * Adds multiple components to this entity.
   * @param component - The components to be added.
   */
  addComponents<T extends CBaseComponent>(components: T[]) {
    for (const component of components) {
      this.addComponent(component);
    }
  }

  /**
   * Removes a component from this entity.
   * @param name - The indentifying name of the component.
   */
  removeComponent(name: string) {
    delete this.components[name];
  }

  /**
   * Removes multiple components from this entity.
   * @param name - The indentifying name of the component.
   */
  removeComponents(...names: string[]) {
    for (const name of names) {
      this.removeComponent(name);
    }
  }

  /**
   * Checks if this entity has a component.
   * @param name - The indentifying name of the component.
   */
  hasComponent(name: string) {
    return Boolean(this.components[name]);
  }
  
  /**
   * Checks if this entity has multiple components.
   * @param names - The indentifying names of the components.
   */
  hasComponents(...names: string[]) {
    return names.every(name => Boolean(this.components[name]));
  }

  /**
   * Gets a component from this entity.
   * @param name - The indentifying name of the component.
   */
  getComponent(name: string) {
    return this.components[name];
  }
}

let uniqueId = 0;
function generateUniqueId() {
  return uniqueId++;
}