import Input from './Input';

/**
 * Class representing a keyboard input device used to manipulate the game.
 */
export default class Keyboard extends Input {
  /**
   * Creates a new Keyboard.
   */
  constructor() {
    super();
  }

  /**
   * Starts listening for key press events.
   */
  listenForKeys() {
    window.addEventListener('keydown', this.logKeyPress);
    window.addEventListener('keyup', this.unlogKeyPress);
  }

  /**
   * Stops listening for key press events.
   */
  stopListeningForKeys() {
    window.removeEventListener('keydown', this.logKeyPress);
    window.removeEventListener('keyup', this.unlogKeyPress);
  }

  /**
   * Logs a key press.
   * @param event - Event object from a user interaction with the keyboard.
   */
  private logKeyPress = (event: KeyboardEvent) => {
    this.keys[event.code] = true;
  };

  /**
   * Unlogs a key press.
   * @param event - Event object from a user interaction with the keyboard.
   */
  private unlogKeyPress = (event: KeyboardEvent) => {
    delete this.keys[event.code];
  };
}