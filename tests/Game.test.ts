import Game from '~/Game';
import Scene from '~/Scene';

describe('Game', () => {

  it('Should instanciate correctly when passed no arguments', () => {

    const game = new Game();

    expect(game).toEqual({
      isRunning: false,
      currentScene: null
    });

  });

  it('Should instanciate correctly when passed a currentScene argument', () => {

    const game = new Game({
      currentScene: new Scene
    });

    expect(game).toEqual({
      isRunning: false,
      currentScene: new Scene()
    });

  });

  it('Can set and get current scene', () => {

    const game = new Game();
    const scene = new Scene();

    game.setCurrentScene(new Scene());

    expect(game.getCurrentScene()).toEqual(scene);

  });

  it('Should not start if current scene is not set', () => {

    const game = new Game();
    game.start();

    expect(game.isRunning).toBe(false);

  });

  it('Should be able to start, run systems, and stop', () => {

    const game = new Game();
    const scene = new Scene();

    // Mock a system to later check if it gets called
    const mockSystem = jest.fn();

    // Check that the game is running during the loop
    function testGameIsRunningSystem() {
      expect(game.isRunning).toBe(true);
    }

    // Quit the game loop to prevent call stack errors
    function quitGameSystem() {
      game.stop();
    }

    // Add all systems to the scene
    scene.addSystem(mockSystem);
    scene.addSystem(testGameIsRunningSystem);
    scene.addSystem(quitGameSystem);

    // Set the current scene and start game
    game.setCurrentScene(scene);
    game.start();

    expect(mockSystem).toHaveBeenCalled();
    expect(game.isRunning).toBe(false);
    
  });

});