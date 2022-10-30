import Game from '~/Game';
import Renderer from '~/Renderer';
import Scene from '~/Scene';

describe('Game', () => {

  describe('Scene', () => {
    it('Should allow setting and getting of current scene', () => {

      const game = new Game();
      const scene = new Scene();
  
      game.setCurrentScene(new Scene());
  
      expect(game.getCurrentScene()).toBeInstanceOf(Scene);
      expect(game.getCurrentScene()).toEqual(scene);
  
    });
  });

  describe('Renderer', () => {
    it('Should allow setting and getting of a renderer', () => {

      const game = new Game();
      const renderer = new Renderer();

      game.setRenderer(renderer);
  
      expect(game.getRenderer()).toBeInstanceOf(Renderer);
      expect(game.getRenderer()).toEqual(renderer);
    });
  });

  describe('The game loop', () => {
    it('Should start', () => {
      const spyRequestAnimationFrame = jest.spyOn(window, 'requestAnimationFrame');

      const game = new Game();
      game.start();
      expect(spyRequestAnimationFrame).toHaveBeenCalled();
    });

    it.todo('Should stop');
  });
});