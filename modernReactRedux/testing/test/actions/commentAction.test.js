import { expect } from '../test.helper';
import { SAVE_COMMENT } from '../../client/actions/types';
import { saveComment } from '../../client/actions/commentAction';

describe('Actions:', () => {
  describe('saveComment', () => {
    it('has the correct type', () => {
      const action = saveComment();
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
      const action = saveComment('new comment');
      expect(action.payload).to.equal('new comment');
    });
  });
});
