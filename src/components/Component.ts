/**
 * Interface for Component props.
 */
export interface IComponentConstructorProps {
  /**
   * The identifying name for the component.
   */
  name: string;
}

/**
 * Base class for components.
 * Components are the building blocks of an entity.
 * They hold the necessary data for representing certain aspects of an entity, such as a sprite or the color of a particle.
 */
export class Component {
  public name: string;

  /**
   * Create a Component.
   * @param props - Properties passed to the component.
   */
  constructor({ name }: IComponentConstructorProps) {
    this.name = name;
  } 
}