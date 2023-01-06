import { Component } from '~/components';

describe('Component', () => {

  it('Should allow a name to be assigned when instanciating', () => {
    const component = new Component({ name: 'test' });
    expect(component.name).toBe('test');
  });

});