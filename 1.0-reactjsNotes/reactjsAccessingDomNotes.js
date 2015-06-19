/**
 * ACCESSING DOM IN REACTJS
 *  - check out /dom/dom.js example
 *  - getDOMNode
 *      - is a function we can call to get reference to components DOMNode. 
 *      - This only works on mounted components. Components that has been placed in the DOM. 
 *      - If you try to call this on a component that has not been mounted yet like calling 
 *        getDOMNode in render function on a component that has yet to be created in this 
 *        case an exception error will be thrown.
 *  - refs
 *      - refers to a react component you own
 */