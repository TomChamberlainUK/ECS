import type Scene from '~/Scene';
import type Renderer from '~/Renderer';

export type IGame = {
  currentScene?: Scene,
  renderer?: Renderer
}

export default class Game {
  currentScene: Scene | undefined;
  renderer: Renderer | undefined;
  isRunning: boolean;

  constructor({ currentScene, renderer }: IGame = {}) {
    this.currentScene = currentScene;
    this.renderer = renderer;
    this.isRunning = false;
  }

  start() {
    this.isRunning = true;
    this.loopStep();
  }

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