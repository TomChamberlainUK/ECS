import Entity from '~/core/Entity';
import Game from '~/core/Game';
import Renderer from '~/core/Renderer';
import { Input } from '~/input';
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

  describe('When instanciated with an input', () => {
    it('Should set the input', () => {
      const input = new Input();
      const game = new Game({ input });
      expect(game.input).toBeInstanceOf(Input);
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

    it('Should call the current scenes systems', () => {
      const entity = new Entity();
      const system = jest.fn();
      const currentScene = new Scene({
        entities: [entity],
        systems: [system]
      });
      const renderer = new Renderer();
      const input = new Input();
      const game = new Game({ currentScene, renderer, input });
      game.start();
      expect(system).toBeCalledWith([entity], { renderer, input });
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