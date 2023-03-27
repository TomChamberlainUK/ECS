import userEvent from '@testing-library/user-event';
import { Keyboard } from '~/input';

describe('Keyboard', () => {
  describe('When instanciated', () => {
    const keyboard = new Keyboard();

    it('Should instanciate', () => {
      expect(keyboard).toBeInstanceOf(Keyboard);
    });
  });

  describe('listenForKeys()', () => {
    const user = userEvent.setup();
    const keyboard = new Keyboard();
    keyboard.listenForKeys();

    describe('When a key is not pressed', () => {
      it('That key should not be tracked in pressed keys', () => {
        expect(keyboard.keys['KeyA']).toBeFalsy();
      });
    });

    describe('When a key is pressed', () => {
      it('That key should be tracked in pressed keys', async () => {
        await user.keyboard('[KeyA>]');
        expect(keyboard.keys['KeyA']).toBe(true);
        await user.keyboard('[/KeyA]');
      });
    });

    describe('When a key has stopped being pressed', () => {
      it('That key should not be tracked in pressed keys', async () => {
        await user.keyboard('[KeyA]');
        expect(keyboard.keys['KeyA']).toBeFalsy();
      });
    });
  });

  describe('stopListeningForKeys()', () => {
    const user = userEvent.setup();
    const keyboard = new Keyboard();
    keyboard.listenForKeys();
    keyboard.stopListeningForKeys();

    describe('When a key is pressed', () => {
      it('That key should be not be tracked in pressed keys', async () => {
        await user.keyboard('[KeyA>]');
        expect(keyboard.keys['KeyA']).toBeFalsy();
        await user.keyboard('[/KeyA]');
      });
    });
  });
});