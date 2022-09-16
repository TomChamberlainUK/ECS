import { Component } from '~/components/index';

describe('Component', () => {

  const component = new Component();

  it('When instanciating a root component it should have a blank name', () => {
    expect(component.name).toBe('');
  });

});