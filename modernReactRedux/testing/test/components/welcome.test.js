/**
 * what we care about:
 *  - it shows a commentBox component
 *  - it shows a commentList component
 */

 import { renderComponent, expect } from '../test.helper';
 import Welcome from '../../client/components/welcome';

 describe('Welcome Component:', () => {
   let component;

   beforeEach(() => {
     component = renderComponent(Welcome);
   });

   it('shows a commentBox component', () => {
     return expect(component.find('.comment-box')).to.exist;
   });

   it('shows a commentList component', () => {
     return expect(component.find('.comment-list')).to.exist;
   });
 });
