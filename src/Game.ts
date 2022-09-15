import Scene from '@/Scene';

type ConstructorProps = {
  currentScene?: Scene;
}

export default class Game {
  public isRunning: boolean;
  private currentScene: Scene | null;

  constructor({ currentScene }: ConstructorProps = {}) {
    this.isRunning = false;
    this.currentScene = currentScene ?? null;
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