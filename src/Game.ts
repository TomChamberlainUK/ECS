import type Scene from '~/Scene';
import type Renderer from '~/Renderer';

/**
 * Props type for Game class.
 */
export interface IGame {
  /** The currently active scene. */
  currentScene?: Scene;
  /** The renderer for the game. */
  renderer?: Renderer;
}

/**
 * A class representing the game itself.
 * Defines how entities and systems within a scene interact, and how they are rendered.
 */
export default class Game implements IGame {
  currentScene?: Scene;
  renderer?: Renderer;
  isRunning: boolean;

  /**
   * Creates a game.
   * @param props - Properties passed to the game. 
   */
  constructor({ currentScene, renderer }: IGame = {}) {
    this.currentScene = currentScene;
    this.renderer = renderer;
    this.isRunning = false;
  }

  /**
   * Starts the game.
   */
  start() {
    this.isRunning = true;
    this.loopStep();
  }

  /**
   * Stops the game.
   */
  stop() {
    this.isRunning = false;
  }

  private loopStep() {
    if (!this.isRunning || !this.currentScene || !this.renderer) return;

    const { currentScene: { entities, systems }, renderer } = this;

    systems.forEach(system => {
      system(entities, renderer);
    });

    requestAnimationFrame(() => this.loopStep());
  }
}