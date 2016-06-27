/**
 * creating a container:
 *  - is a react component that has direct connection to the state managed by redux
 *  - forms the bridge between react and redux, in our mockup its part of that app
 *  	that joins these two libraries
 *  - we inject data/state into a container
 *  - also called smart component
 *  - our most parent component should be our container
 *  - the react-redux module is the glue between react and redux
 *
 * form tags:
 *  - using form vs div we get out of the box handlers for click and enter without having
 *  	to create handlers for each.
 *  - Use a form tag for any type of user input
 *
 * react keys:
 *  - remember rule for adding key to a react list is you add to the top element in the
 *  	list and just has to be some unique piece of data as show in weatherList.js
 *
 * redux bindActionCreators:
 *  - makes sure our actions flow through to our reducers
 *
 * redux middleware:
 *  - have the ability to stop or manipulate actions before the hit any reducers
 *  	- ex: redux-promise or redux-thunk
 *
 * redux reducer:
 *  - we never want to mutate our state in a reducer, always return a new instance of state
 *  - always create an entirely new array or object
 */
