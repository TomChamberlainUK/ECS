/**
 * Interface for Input.
 */
export interface IInput {
  /** Tracks currently pressed keys */
  keys: Record<string, boolean>
}

/**
 * Class representing an input device used to manipulate the game.
 */
export default class Input implements IInput {
  keys: Record<string, boolean>;

  /**
   * Creates a new Input.
   */
  constructor() {
    this.keys = {};
  }
}