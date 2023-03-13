import { Vector2D } from '~/maths';

describe('Vector2D', () => {
  describe('When constructed with an object', () => {
    const vector = new Vector2D({ x: 1, y: 2 });

    it('Should instanciate with correct x and y values', () => {
      expect(vector.x).toEqual(1);
      expect(vector.y).toEqual(2);
    });
  });

  describe('When constructed with two numbers', () => {
    const vector = new Vector2D(1, 2);

    it('Should instanciate with correct x and y values', () => {
      expect(vector.x).toEqual(1);
      expect(vector.y).toEqual(2);
    });
  });

  describe('When constructed with no arguments', () => {
    const vector = new Vector2D();

    it('Should instanciate with x and y values equal to 0', () => {
      expect(vector.x).toEqual(0);
      expect(vector.y).toEqual(0);
    });
  });
});

describe('Vector2D.add()', () => {
  describe('When passed two vectors', () => {
    const vectorA = new Vector2D(1, 1);
    const vectorB = new Vector2D(1, 1);
    const vectorAdded = Vector2D.add(vectorA, vectorB);

    it('Should return a new vector with added x and y values', () => {
      expect(vectorAdded.x).toBe(2);
      expect(vectorAdded.y).toBe(2);
    });
  });
});