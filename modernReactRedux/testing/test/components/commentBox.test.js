/**
 * what we care about:
 *  - has the correct class
 *  - it has a text area
 *  - it has a button
 *  - entering text into the text area updates the text
 *    - it shows text in the textarea
 *    - it clears the input when submitted
 */

import { renderComponent, expect } from '../test.helper';
import CommentBox from '../../client/components/commentBox';

describe('CommentBox', () => {
  // assign our variable to get access to component scope
  let component;

  // runs before any of our 'it' statements and assigns a new instance
  // of commentBox to the component variablefor each 'it' statement
  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has the correct class', () => {
    // using jquery chai class matcher
    return expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    // using jquery method find that selects a css selector and using
    // jquery chai exist matcher
    return expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    // using jquery method and using juqery chai exist matcher
    return expect(component.find('button')).to.exist;
  });

  // when we have two similar spec's that are closely related we can
  // nest another describe block
  describe('entering some text', () => {
    // add in some code to pre-populated the textarea
    beforeEach(() => {
      // helper provided by test_helper.js, simulate method takes two
      // arguments, the first being the event to simulate and the second
      // argument being the value of adding in some dummy text
      component.find('textarea').simulate('change', 'new comment');
    });
    // stubbing out the 'it' statements
    it('shows text in the textarea', () => {
      // using juqery chai value matcher
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('clears the input when submitted', () => {
      // console.log(component); // eslint-disable-line no-console
      // trigger behavior
      component.simulate('submit');
      // using juqery chai value matcher
      expect(component.find('textarea')).to.have.value('');
    });
  });
});
