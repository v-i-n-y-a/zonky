import React from 'react';
import 'core-js/modules/es6.promise';
import Layout from '../js/pages/Layout';
import loanJSON from './loanJSON';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('<Layout  />', () => {
  describe('fetch', () => {
    let origFetch = global.fetch;

    afterEach(() => {
      if (global.fetch !== origFetch) {
        global.fetch = origFetch;
      }
    });

    const mockFetch = response => {
      global.fetch = (url, options) => {
        let promise = new Promise((resolve, reject) => {
          resolve(response);
        });
        return promise;
      };
    };

    it('Layout renders correctly', () => {
      mockFetch(JSON.stringify(loanJSON));
      const component = renderer.create(<Layout />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });
});
