/**
 * Redux:
 * - is a "predictable state container for JavaScript apps"
 * - why flux exists and why we need it...What are all web applications made of?
 * 	  1) Templates / html = View
 *    2) Data that will populate our views = Models
 *    3) Logic to retrieve data, glue all views together and to react accordingly to user events,
 * 		 	 data modifications, etc. = Controller
 *   - This is the very classic MVC that we all know about. But it actually looks like concepts of flux,
 * 	 	 just expressed in a slightly different way:
 *     - Models look like stores (reducers)
 *     - user events, data modifications and their handlers look like
 *   	 	 "action creators" -> action -> dispatcher -> callback
 *     - Views look like React views (or anything else as far as flux is concerned)
 * - Redux vocabulary (flux vocabulary too for some of them):
 * 	 - Where do I keep all the data regarding my application along its lifetime?
 * 	 	 - You keep it the way you want (JS object, array, Immutable structure, ...)
 * 	 	 - Data of your application will be called state. This makes sense since we're talking about
 * 	 	 - all the application's data that will evolve over time, it's really the application's state.
 * 	 	 - But you hand it over to Redux (Redux is a "state container", remember?).
 * - How do I handle data modifications?
 *   - Using reducers (called "stores" in traditional flux).
 *   - A reducer is a subscriber to actions.
 *   - A reducer is just a function that receives the current state of your application, the action,
 *     and returns a new state modified (or reduced as they call it)
 * - How do I propagate modifications to all parts of my application?
 * 	 - Using subscribers to state's modifications.
 * - to sum up, Redux will provide you:
 * 	 	1) a place to put your application state
 * 	 	2) a mechanism to dispatch actions to modifiers of your application state, AKA reducers
 * 	 	3) a mechanism to subscribe to state updates
 * - reducer VS store:
 * 	 - how exactly do Store and Reducer differ?
 * 	   - A Store keeps your data in it while a Reducer doesn't. So in traditional flux, stores
 * 	  	 hold state in them while in Redux, each time a reducer is called, it is passed the state
 * 	  	 that needs to be updated. This way, Redux's stores became "stateless stores" and were
 * 	  	 renamed reducers.
 */

/**
 * Actions:
 *  -`is just a function
 *  - one thing to note is the format of the action.
 *  	- The action is an object that contains a "type" property.
 *  	- This type allows for further handling of the action.
 *  	- the action can also contain other properties to pass any data you want.
 *  - action creator can actually return something other than an action, like a function. This will
 *  	be extremely useful for async action handling.
 *  - "Dispatching an action":
 *  	 - sending this action somewhere so that anyone interested could know that something happened
 *  	 	 and could act accordingly. We call this "Dispatching Actions".
 *  	 - let anyone interested know that an action happened, we need a mechanism to register
 *  	 	 "handlers". Such "handlers" to actions in traditional flux application are called stores and
 *  	 	 in redux we call these "reducers".
 *  - Sometimes the actions that we'll handle in our application will not only inform us that something
 *  	happened but also tell us that data needs to be updated.
 */

 // flow of our application:
 // ActionCreator -> Action
 // The action creator is just a function...
 var actionCreator = function() {
     // ...that creates an action (yeah, the name action creator is pretty obvious now) and returns it
     return {
         type: 'AN_ACTION'
     }
 }
 // We can call this action creator and get an action as expected:
 console.log(actionCreator())  // Output: { type: 'AN_ACTION' }


/**
 * Redux instance:
 *  - holds the state of our application
 *  - when creating a Redux instance you must give it a reducer function
 *  - expects a reducer function that will allow it to reduce your state.
 *  - allows reducer functions to transform this state
 *  - Redux can call this function on your application state each time an action occurs.
 *  - Giving reducer(s) to createStore is exactly how redux registers the action "handlers"
 *  - Our reducer is called even if we didn't dispatch any action. That's because to
 *  	initialize the state of the application, Redux actually dispatches an init action
 *  	({ type: '@@redux/INIT' })
 */

/**
 * Reducers:
 *  - reducers are called "stores" in traditional flux.
 *  - A reducer is a subscriber to actions.
 *  - A reducer is just a function that receives the current state of your application, the action,
 *    and returns a new state modified (or reduced as they call it)
 *  - Redux instance (called a store) will hold the state of our application and the reducer functions
 *  	will allow us to transform this state.
 *  - When called, a reducer is given those parameters: (state, action). It's then very logical that
 *  	at an application initialization, the state, not being initialized yet, is "undefined"
 *  - a reducer can actually handle any type of data structure. It's really up to you to decide which data
 *    structure suits your needs (an object literal, an array, a boolean, a string, an immutable structure).
 *  - often see the pattern involving a switch statement to respond appropriately to an action received
 *  	in your reducers
 *  - When using a switch, NEVER forget to have a "default: return state" because if you don't, you'll
 *  	end up having your reducer return undefined (and lose your state)
 *  - Inside the switch, notice how we returned a new state made by merging current state with
 *  	{ message: action.value }, all that thanks to this awesome ES7 notation
 *  	(Object Spread): { ...state, message: action.value }
 *    - Note also that this ES7 Object Spread notation suits our example because it's doing a shallow
 *  	  copy of { message: action.value } over our state (meaning that first level properties of state
 *  	  are completely overwritten - as opposed to gracefully merged - by first level property of
 *  	  { message: action.value }). But if we had a more complex / nested data structure, you might choose
 *  	  to handle your state's updates very differently:
 *  	   - using Immutable.js (https://facebook.github.io/immutable-js/)
 *  	   - using Object.assign (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
 *  	   - using manual merge
 *  	   - or whatever other strategy that suits your needs and the structure of your state since Redux is
 *  	     absolutely NOT opinionated on this (remember, Redux is a state container).
 */

/**
 * Get State:
 *  - to get the state that Redux is holding for us, you call getState()
 *  - this is how we retrieve the state from our Redux instance
 */

/**
 * combineReducers:
 *  - We use Redux combineReducers({}) helper function to hold the state of multiple reducers
 *  - a single reducer function cannot hold all our application's actions handling (it could hold it,
 *    but wouldn't be maintainable). Redux doesn't care if we have one reducer or a dozen and it
 *    will even help us to combine them if we have many!
 *  - combineReducers({}) takes a hash and returns a function that, when invoked, will call all our reducers,
 *  	retrieve the new slice of state and reunite them in a state object (a simple hash {}) that Redux is
 *  	holding.
 */

// The Redux instance is called a store and can be created like this:
import { createStore } from 'redux'
// using only one reducer
var reducer_3 = function (state = {}, action) {
  console.log('reducer_3 was called with state', state, 'and action', action)
  switch (action.type) {
    case 'SAY_SOMETHING':
      // Notice how we returned a new state made by merging current state with { message: action.value },
      // all that thanks to this awesome ES7 notation (Object Spread): { ...state, message: action.value }
      return {
        ...state,
        message: action.value
      }
    // NEVER forget to have a "default: return state" because if you don't, you'll end up having your
    // reducer return undefined (and lose your state)
    default:
      return state;
  }
}
// expects a reducer function that will allow it to reduce your state.
// ex: var store = createStore(() => {})
var store_3 = createStore(reducer_3)
// Output: reducer_3 was called with state {} and action { type: '@@redux/INIT' }
console.log('store_3 state after initialization:', store_3.getState())
// Output: redux state after initialization: {}


// using mulitple reducers with combineReducers
// userReducer got an initial state in the form of a literal object ({})
var userReducer = function (state = {}, action) {
  console.log('userReducer was called with state', state, 'and action', action)
  switch (action.type) {
    case 'SET_NAME':
        return {
            ...state,
            name: action.name
        }
        return [
            ...state,
            action.item
        ]
    default:
      return state;
  }
}
// itemsReducer got an initial state in the form of an array ([])
var itemsReducer = function (state = [], action) {
  console.log('itemsReducer was called with state', state, 'and action', action)
  switch (action.type) {
    case 'ADD_ITEM':
        return [
            ...state,
            action.item
        ]
    default:
      return state;
    }

  }
// using combineReducers for mulitple reducers
// here is how you create a Redux instance with multiple reducers:
import { createStore, combineReducers } from 'redux';

var reducer = combineReducers({
  user: userReducer,
  tems: itemsReducer
});
console.log('store_0 state after initialization:', store_0.getState())