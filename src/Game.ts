import type Scene from '~/Scene';
import type Renderer from '~/Renderer';

type ConstructorProps = {
  currentScene?: Scene;
}

export default class Game {
  private isRunning: boolean;
  private currentScene: Scene | null;
  private renderer: Renderer | null;

  constructor({ currentScene }: ConstructorProps = {}) {
    this.isRunning = false;
    this.currentScene = currentScene ?? null;
    this.renderer = null;
  }

  start() {
    this.isRunning = true;
    this.loopStep();
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

  private loopStep() {
    if (!this.isRunning) return;
    requestAnimationFrame(() => this.loopStep());
  }
}