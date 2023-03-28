import type Scene from '~/core/Scene';
import type Renderer from '~/core/Renderer';
import type { Input } from '~/input';

/**
 * Props type for Game class.
 */
export interface IGame {
  /** The currently active scene. */
  currentScene?: Scene;
  /** The renderer for the game. */
  renderer?: Renderer;
  /** The input for the user to interact with the game. */
  input?: Input;
}

/**
 * A class representing the game itself.
 * Defines how entities and systems within a scene interact, and how they are rendered.
 */
export default class Game implements IGame {
  currentScene?: Scene;
  renderer?: Renderer;
  input?: Input;
  isRunning: boolean;

  /**
   * Creates a game.
   * @param props - Properties passed to the game.
   */
  constructor({ currentScene, renderer, input }: IGame = {}) {
    this.currentScene = currentScene;
    this.renderer = renderer;
    this.input = input;
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
    if (!this.isRunning || !this.currentScene) return;

    const { currentScene: { entities, systems }, renderer, input } = this;

    systems.forEach(system => {
      system(entities, { renderer, input });
    });

    requestAnimationFrame(() => this.loopStep());
  }
}