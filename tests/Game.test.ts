import Game from '@/Game';
import Scene from '@/Scene';

describe('Game', () => {

  it('Should instanciate', () => {
    const game = new Game();
    expect(game.isRunning).toBe(false);
  });

  it('Can be allocated a scene', () => {
    const game = new Game();
    const scene = new Scene();
    game.currentScene = scene;
    expect(game.currentScene).toBeInstanceOf(Scene);
  });

  it('Should not start if current scene is not set', () => {
    const game = new Game();
    game.start();
    expect(game.isRunning).toBe(false);
  });

  it('Should be able to start, run systems, and stop', () => {
    const game = new Game();
    const scene = new Scene();
    function quitSystem() {
      game.isRunning = false;
    }
    scene.addSystem(quitSystem);
    game.start();
    expect(game.isRunning).toBe(false);
  });

});