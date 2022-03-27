import Scene from '@/Scene';

type ConstructorProps = {
  currentScene?: Scene;
}

export default class Game {
  public isRunning: boolean;
  public currentScene: Scene | null;

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

  private step() {

    // Don't run if there's no scene available
    if (!this.currentScene) {
      this.stop();
      return;
    }

    // Don't run if isRunning is falsey
    if (!this.isRunning) return;

    // Run all systems
    for (const system of this.currentScene.systems) {
      system();
    }

    // Recursively call
    this.step();

  }

}