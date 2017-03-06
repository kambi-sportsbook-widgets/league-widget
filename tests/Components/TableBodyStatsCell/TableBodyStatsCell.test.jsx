/* eslint-env jest */
import React, { Children } from 'react';
import TableBodyStatsCell from '../../../src/js/Components/TableBodyStatsCell/TableBodyStatsCell';
import ReactTestUtils from 'react-addons-test-utils';

let renderer;

jest.mock('kambi-widget-core-library', () => ({
   translationModule: {
      getTranslation: (key) => `Translated: "${key}"`
   }
}));

describe('TableBodyStatsCell DOM rendering', () => {
   beforeEach(() => {
      renderer = ReactTestUtils.createRenderer();
   });

   it('renders correctly without value', () => {
      expect(renderer.render(
         <TableBodyStatsCell column={{name: 'Test stat name', className: 'test-stat-name'}} />
      )).toMatchSnapshot();
   });

   it('renders correctly with value', () => {
      expect(renderer.render(
         <TableBodyStatsCell column={{name: 'Test stat name', className: 'test-stat-name'}}>5</TableBodyStatsCell>
      )).toMatchSnapshot();
   });

});
