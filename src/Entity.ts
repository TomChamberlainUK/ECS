import type { Component } from './components';

/**
 * A class representing _something_ in the game engine.
 * This could be anything — a rock, an enemy spaceship, a player controller etc.
 * What an entity represents is built through its components. How it behaves is dictated by systems.
 */
export default class Entity {
  public id: number;
  private components: Record<string, Component>;

  /**
   * Create an Entity.
   */
  constructor() {
    this.id = generateUniqueId();
    this.components = {};
  }

  /**
   * Assigns a specific component and its relevant data to the entity.
   * @param component The component to be added.
   */
  addComponent(component: Component) {
    this.components[component.name] = component;
  }

  /**
   * Unassigns a specific component and its relevant data from the entity.
   * @param name The indentifying name of the component.
   */
  removeComponent(name: string) {
    delete this.components[name];
  }

  /**
   * Checks if a specific component has been assigned to the entity.
   * @param name The indentifying name of the component.
   * @returns {boolean}
   */
  hasComponent(name: string) {
    return Boolean(this.components[name]);
  }
  
  /**
   * Checks if multiple specific components have been assigned to the entity.
   * @param names The indentifying names of the components.
   * @returns {boolean}
   */
  hasComponents(...names: string[]) {
    return names.every(name => Boolean(this.components[name]));
  }

  /**
   * Gets a specific component that has been assigned to the entity.
   * @param name The indentifying name of the component.
   * @returns {Component|undefined} The component if found, or undefined or not.
   */
  getComponent(name: string) {
    return this.components[name];
  }
}

let uniqueId = 0;
function generateUniqueId() {
  return uniqueId++;
}