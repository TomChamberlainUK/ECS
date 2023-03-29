import { CMotion2D } from '~/components';

describe('CDescribe2D', () => {
  describe('When instanciated', () => {
    const cMotion2D = new CMotion2D();

    it('Should instanciate', () => {
      expect(cMotion2D).toBeInstanceOf(CMotion2D);
    });

    it('Should have a force', () => {
      expect(cMotion2D.force).toBe(1);
    });

    it('Should have a torque', () => {
      expect(cMotion2D.torque).toBe(1);
    });
  });

  describe('When instanciated with a force', () => {
    const cMotion2D = new CMotion2D({ force: 10 });

    it('Should set that force', () => {
      expect(cMotion2D.force).toBe(10);
    });
  });

  describe('When instanciated with a torque', () => {
    const cMotion2D = new CMotion2D({ torque: 10 });

    it('Should set that torque', () => {
      expect(cMotion2D.torque).toBe(10);
    });
  });
});