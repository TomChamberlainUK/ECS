import Game from '~/Game';
import Renderer from '~/Renderer';
import Scene from '~/Scene';

describe('Game', () => {
  describe('When instanciated', () => {
    it('Should instanciate', () => {
      const game = new Game();
      expect(game).toBeInstanceOf(Game);
    });
  });

  describe('When instanciated with a renderer', () => {
    it('Should set the renderer', () => {
      const renderer = new Renderer();
      const game = new Game({ renderer });
      expect(game.renderer).toBeInstanceOf(Renderer);
    });
  });

  describe('When instanciated with a scene', () => {
    it('Should set the currentScene', () => {
      const currentScene = new Scene();
      const game = new Game({ currentScene });
      expect(game.currentScene).toBeInstanceOf(Scene);
    });
  });

  describe('start()', () => {
    it('Should start running the game', () => {
      const game = new Game();
      game.start();
      expect(game.isRunning).toBe(true);
    });
  });

  describe('stop()', () => {
    it('Should stop a running game', () => {
      const game = new Game();
      game.start();
      expect(game.isRunning).toBe(true);
      game.stop();
      expect(game.isRunning).toBe(false);
    });
  });
});