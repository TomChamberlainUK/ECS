import Entity from '~/core/Entity';
import Game from '~/core/Game';
import Renderer from '~/core/Renderer';
import Scene from '~/core/Scene';

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

    it('Should call the current scenes systems with entities passed as an argument', () => {
      const entity = new Entity();
      const system = jest.fn();
      const scene = new Scene({
        entities: [entity],
        systems: [system]
      });
      const renderer = new Renderer();
      const game = new Game({ currentScene: scene, renderer });
      game.start();
      expect(system).toBeCalledWith([entity], renderer);
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