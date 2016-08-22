/**
 * what we care about:
 *  - it has a text area
 *  - it has a button
 *  - entering text into the text area updates the text
 */

import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../client/components/commentBox';

describe('CommentBox', () => {
  it('has a text area', () => {
    const component = renderComponent(CommentBox);
    // using jquery chai helper methods and matchers
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('button')).to.exist;
  });
});
