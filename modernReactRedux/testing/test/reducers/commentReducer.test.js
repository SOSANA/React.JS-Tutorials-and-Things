import { expect } from '../test.helper';
import commentReducer from '../../client/reducers/commentReducer';
import { SAVE_COMMENT } from '../../client/actions/types';

describe('Comments Reducer:', () => {
  it('handles action with unknown type', () => {
    const reducer = commentReducer(undefined, {});
    // expecting what every the comment reducer returns to be an array
    // using chai BDD expect matchers
    // instanceof matcher is just checking for type of array not empty array
    // expect(reducer).to.be.instanceof(Array);
    // using 'eql' instead of 'equal' matcher for a deeper comparison. 'equal'
    // matcher makes sure they are absolutely identical, 'eql' matcher will make
    // sure that all the values in this array are equal to the values in the array
    expect(reducer).to.be.eql([]);
  });

  it('handles action of type of SAVE_COMMENT', () => {
    // creating dummy action
    const action = { type: SAVE_COMMENT, payload: 'new comment' };
    const reducer = commentReducer([], action);
    expect(reducer).to.eql(['new comment']);
  });
});
