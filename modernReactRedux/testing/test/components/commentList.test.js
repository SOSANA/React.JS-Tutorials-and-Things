/**
 * what we care about:
 *  - it shows an "li" element for each comment
 *  - it shows each comment that is provided
 */

import { renderComponent, expect } from '../test.helper';
import CommentList from '../../client/components/commentList';

describe('CommentList Component:', () => {
  let component;

  beforeEach(() => {
    // stubbing in some dummy text
    const props = { comments: ['new comment', 'other new comment'] };
    component = renderComponent(CommentList, null, props);
  });

  it('shows an "li" element for each comment', () => {
    return expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('new comment');
    expect(component).to.contain('other new comment');
  });
});
