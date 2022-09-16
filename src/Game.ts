import type Scene from '~/Scene';
import type Renderer from '~/Renderer';

type ConstructorProps = {
  currentScene?: Scene;
}

export default class Game {
  public isRunning: boolean;
  private currentScene: Scene | null;
  private renderer: Renderer | null;

  constructor({ currentScene }: ConstructorProps = {}) {
    this.isRunning = false;
    this.currentScene = currentScene ?? null;
    this.renderer = null;
  }

  start() {
    this.isRunning = true;
    this.step();
  }

  stop() {
    this.isRunning = false;
  }

  setCurrentScene(scene: Scene) {
    this.currentScene = scene;
  }

  getCurrentScene() {
    return this.currentScene;
  }

  setRenderer(renderer: Renderer) {
    this.renderer = renderer;
  }

  getRenderer() {
    return this.renderer;
  }

  private step() {

    const deltaTime = 1 / 60;

    // Don't run if there's no scene available
    if (!this.currentScene) {
      this.stop();
      return;
    }

    // Don't run if isRunning is falsey
    if (!this.isRunning) return;

    // Run all systems
    for (const system of this.currentScene.systems) {
      system(this.currentScene.entities, deltaTime);
    }

    // Recursively call
    this.step();

  }

}