/**
 * what we care about:
 *  - it shows a commentBox component
 *  - it shows a commentList component
 */

import { renderComponent, expect } from '../test.helper';
import { App } from '../../client/components/app';

describe('App Component:', () => {
  let component;

  beforeEach(() => {
    const props = { children: [] };
    component = renderComponent(App, null, props);
  });

  it('shows a Header component', () => {
    return expect(component.find('h1')).to.exist;
  });

  it('shows children props', () => {
    console.log(component);
    return expect(component.find('.comment-list')).to.exist;
  });
});


/**
 * what we care about:
 *  - it shows the correct text
 */

/*
// use 'describe' to group together similar tests. 'describe' function conveys
// to other developers that a certain number of tests are related in fashion
// 'describe' takes a first argument of string and second argument of a function
// and inside this function is our specs
describe('App', () => {
  // use 'it' to test a single attribute of a target. 'it' blocks try to make an
  // assertion about a very particular fact about the testing subject
  it('shows the correct text', () => {
    // create an instance of App
    const component = renderComponent(App);
    // use 'expect' to make an 'assertion' about a target. Used for a very particular
    // attribute for our target, in this case the app component
    // expect is a function that have whats called matchers that are chainable functions
    // using jquery chai contain matcher
    expect(component).to.contain('React simple starter');
  });
});
*/
