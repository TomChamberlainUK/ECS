import { CBaseComponent } from '~/components';

describe('Component', () => {
  describe('When instanciating with a name', () => {
    const component = new CBaseComponent({ name: 'test' });
    
    it('Should assign that name', () => {
      expect(component.name).toBe('test');
    });
  });
});