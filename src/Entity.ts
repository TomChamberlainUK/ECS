import type { CBaseComponent } from './components';

/**
 * A class representing _something_ in the game engine.
 * This could be anything — a rock, an enemy spaceship, a player controller etc.
 * What an entity represents is built through its components. How it behaves is dictated by systems.
 */
export default class Entity {
  public id: number;
  private components: Record<string, CBaseComponent>;

  /**
   * Create an Entity.
   */
  constructor() {
    this.id = generateUniqueId();
    this.components = {};
  }

  /**
   * Assigns a specific component and its relevant data to the entity.
   * @param component - The component to be added.
   */
  addComponent<T extends CBaseComponent>(component: T) {
    this.components[component.name] = component;
  }

  /**
   * Unassigns a specific component and its relevant data from the entity.
   * @param name - The indentifying name of the component.
   */
  removeComponent(name: string) {
    delete this.components[name];
  }

  /**
   * Checks if a specific component has been assigned to the entity.
   * @param name - The indentifying name of the component.
   */
  hasComponent(name: string) {
    return Boolean(this.components[name]);
  }
  
  /**
   * Checks if multiple specific components have been assigned to the entity.
   * @param names - The indentifying names of the components.
   */
  hasComponents(...names: string[]) {
    return names.every(name => Boolean(this.components[name]));
  }

  /**
   * Gets a specific component that has been assigned to the entity.
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