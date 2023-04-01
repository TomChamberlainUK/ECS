import { CRigidBody2D } from '~/components';

describe('CRigidBody2D', () => {
  describe('When instanciated', () => {
    const cRigidBody2D = new CRigidBody2D();

    it('Should instanciate', () => {
      expect(cRigidBody2D).toBeInstanceOf(CRigidBody2D);
    });

    it('Should have a indentifiable name of CRigidBody2D', () => {
      expect(cRigidBody2D.name).toBe('CRigidBody2D');
    });

    it('Should have a mass', () => {
      expect(cRigidBody2D.mass).toBe(1);
    });
  });

  describe('When instanciated with a mass', () => {
    const cRigidBody2D = new CRigidBody2D({ mass: 10 });

    it('Should set that mass', () => {
      expect(cRigidBody2D.mass).toBe(10);
    });
  });
});