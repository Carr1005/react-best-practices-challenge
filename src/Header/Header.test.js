import React from 'react';
import Header from './Header';


import renderer from 'react-test-renderer';

test('Header test', () => {
  const component = renderer.create(
    <Header></Header>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});