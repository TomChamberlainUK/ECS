import { Input } from '~/input';

describe('Input', () => {
  describe('When instanciated', () => {
    const input = new Input();

    it('Should instanciate', () => {
      expect(input).toBeInstanceOf(Input);
    });

    it('Should set an empty object to track key presses', () => {
      expect(input.keys).toEqual({});
    });
  });
});