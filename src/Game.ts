import type Scene from '~/Scene';
import type Renderer from '~/Renderer';

/**
 * Props type for Game class.
 */
export type GameProps = {
  /**
   * The currently active scene.
   */
  currentScene?: Scene;
  /**
   * The renderer for the game.
   */
  renderer?: Renderer;
}

/**
 * A class representing the game itself.
 * Defines how entities and systems within a scene interact, and how they are rendered.
 */
export default class Game {
  /**
   * The currently active scene.
   */
  currentScene: Scene | undefined;
  /**
   * The renderer for the game.
   */
  renderer: Renderer | undefined;
  /**
   * Whether or not the game is running.
   */
  isRunning: boolean;

  /**
   * Creates a game.
   * @param props - Properties passed to the game. 
   */
  constructor({ currentScene, renderer }: GameProps = {}) {
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