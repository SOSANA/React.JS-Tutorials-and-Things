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
 * 	- src: reduxNotes/stepByStepNotes/02_about-state-and-meet-redux.js
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
 * 	- src: reduxNotes/stepByStepNotes/04_get-state.js
 *  - to get the state that Redux is holding for us, you call getState()
 *  - this is how we retrieve the state from our Redux instance
 */


/**
 * combineReducers:
 * 	- src: reduxNotes/stepByStepNotes/05_combine-reducers.js
 *  - We use Redux combineReducers({}) helper function to hold the state of multiple reducers
 *  - a single reducer function cannot hold all our application's actions handling (it could hold it,
 *    but wouldn't be maintainable). Redux doesn't care if we have one reducer or a dozen and it
 *    will even help us to combine them if we have many!
 *  - combineReducers({}) takes a hash and returns a function that, when invoked, will call all our reducers,
 *  	retrieve the new slice of state and reunite them in a state object (a simple hash {}) that Redux is
 *  	holding.
 */


/**
 * Dispatch Action:
 * 	- src: reduxNotes/stepByStepNotes/06_dispatch-action.js
 *  - To dispatch an action we need to a dispatch function
 *  - dispatch function is provided by Redux and will propagate our action to all of our reducers.
 *  	The dispatch function is accessible through the Redux instance property "dispatch"
 * Dispatch Async Action:
 *  - requires the use of redux middleware for asynchronous
 */


/**
 * Middleware:
 *  - src: reduxNotes/stepByStepNotes/09_middleware.js
 *  - is something that goes between parts A and B of an application to
 *  	transform what A sends before passing it to B.
 *  	 - So instead of having:
 *  	 - A -----> B
 *  	 - We end up having:
 *  	 - A ---> middleware 1 ---> middleware 2 ---> middleware 3 --> ... ---> B
 *  - middleware between our action creator and our reducers, we could transform this function into
 *  	something that suits Redux:
 *  	 - action ---> dispatcher ---> middleware 1 ---> middleware 2 ---> reducers
 *  - Our middleware will be called each time an action (or whatever else, like a function in our
 *  	async action creator case) is dispatched and it should be able to help our action creator
 *  	dispatch the real action when it wants to (or do nothing - this is a totally valid and
 *  	sometimes desired behavior)
 *  - In Redux, middleware are functions that must conform to a very specific signature and follow
 *  	a strict structure:
 *   	 var anyMiddleware = function ({ dispatch, getState }) {
 *     		return function(next) {
 *     		  return function (action) {
 *     		  	// your middleware-specific code goes here
 *     		  }
 *     		}
 * 		 }
 * 	- As you can see above, a middleware is made of 3 nested functions (that will get called sequentially):
 * 	   1) The first level provide the dispatch function and a getState function (if your middleware or
 * 	   		your action creator needs to read data from state) to the 2 other levels.
 * 	   2) The second level provide the next function that will allow you to explicitly hand over your
 * 	   		transformed input to the next middleware or to Redux (so that Redux can finally call all reducers).
 * 	   3) the third level provides the action received from the previous middleware or from your dispatch
 * 	   		and can either trigger the next middleware (to let the action continue to flow) or process
 * 	   		the action in any appropriate way.
 * 	- can apply a functional pattern: "currying" may come any functional programming library
 * 		 (lodash, ramda, etc.)
 * 		   var thunkMiddleware = curry(
 * 		     ({dispatch, getState}, next, action) => (
 * 		       // your middleware-specific code goes here
 * 		     )
 * 		   );
 * 	- The middleware we have to build for our async action creator is called a thunk middleware and
 * 		- its code is provided here: https://github.com/gaearon/redux-thunk.
 * 	  - To tell Redux that we have one or more middlewares, we must use one of Redux's
 * 	  	helper functions: applyMiddleware
 * 	  - "applyMiddleware" takes all your middlewares as parameters and returns a function to be called
 * 	  	with Redux createStore. When this last function is invoked, it will produce "a higher-order
 * 	  	store that applies middleware to a store's dispatch".
 * 	  	(from https://github.com/rackt/redux/blob/v1.0.0-rc/src/utils/applyMiddleware.js)
 * 	  - For multiple middlewares, write: applyMiddleware(middleware1, middleware2, ...)(createStore)
 */


/**
 * State Subscriber using Provider and Connect:
 * 	- src: reduxNotes/stepByStepNotes/10_state-subscriber.js
 * 	- src: reduxNotes/stepByStepNotes/11_Provider-and-connect.js
 * 	- src: reduxNotes/stepByStepNotes/11_src/src/application.jsx
 * 	- src: reduxNotes/stepByStepNotes/11_src/src/home.jsx
 * 	- react-redux (https://github.com/rackt/react-redux) holds all the bindings we need to simplify
 * 		our life when using Redux inside React.
 * 	- react-redux brings us: an API that will allow us to seamlessly fill the gap between the raw
 * 		Redux subscribing mechanism and our developer expectations. In the end, you won't need to use
 * 		"subscribe" directly. Instead you will use bindings such as "provide" or "connect" and those
 * 		will hide from you the "subscribe" method. The "subscribe" method will still be used but it will
 * 		be done through a higher order API that handles access to redux state for you.
 *  - Provider:
 *  	 - is a React Component designed to be used as a wrapper of your application's root component.
 *  	 	 Its purpose is to provide your redux instance to all of your application's components. How
 *  	 	 it does that does not really matter to us but just to let you know, it's using React's
 *  	 	 context feature (it's undocumented so you don't have to know about it, but if you're curious:
 *  	   https://www.tildedave.com/2014/11/15/introduction-to-contexts-in-react-js.html).
 * - Connect:
 *  	 - Provider component we allow all components of our app to access Redux. But this access can only
 *  	 	 be made through the undocumented feature "React's context". To avoid asking you to use such a "dark"
 *  	 	 React API, React-Redux is exposing a function that you can use on a component class. The function
 *  	 	 we're talking about is "connect" and it allows to literally connect your component with your Redux's
 *  	 	 store. By doing so, it provides your store's dispatch function through a component's prop and also
 *  	 	 adds any properties you want to expose as part of your store's state.
 *  	 - Using "connect", you'll turn a dumb component into a smart component with very little code overhead
 *  	 	 (https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).
 *  	 - "connect" is a function that takes as parameters few mapping functions and that returns a function
 *  	   expecting the actual component class you want to connect. Such a function (connect) is called a
 *  	   Higher Order Component (HOC). Higher Order functions comes from a functional pattern designed to add
 *  	   features / behaviors to their inputs (component, store, ...) without using inheritance. This approach
 *  	   favors composition over inheritance which is the prefered way to build React applications (actually
 *  	   this is not limited at all to React applications). Read more about HOCs and composition here:
 *  	   - https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.lpp7we7mx
 *  	   - http://natpryce.com/articles/000814.html
 *  	 - the dispatch function "automatically" provided by connect in a prop. There are alternative ways to call
 *  	   actionCreators that are already bound to dispatch and those imply providing the second parameter to
 *  	   'connect': https://github.com/rackt/react-redux/blob/v4.0.0/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
 *  	 - The "connect" HOC is designed to address all use-cases, from the most simple to the most complex ones.
 *  	   In the present example, we're not going to use the most complex form of 'connect' but you can find all
 *  	   information about it in the complete 'connect' API documentation here:
 *  	   https://github.com/rackt/react-redux/blob/v4.0.0/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
 *  	 - Here is the complete 'connect' signature:
 *  	   connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
 *  	   and here is how you're supposed to use it:
 *  	   const wrappedComponentClass = connect(...)(ComponentClass)
 *  	 - "connect" takes, as its first parameter, a function that will select which slice of your state you
 *  	   want to expose to your component. This function is logically called a "selector" and receives 2
 *  	   parameters: the state of your store and the current props of your component. "mapStateToProps" name
 *  	   is just a semantic name for our function that clearly expresses what the function does:
 *  	   it maps (read "extracts some of") the state to a few component props. The props of the component
 *  	   are also provided as arguments to handle common cases like extracting a slice of your state depending
 *  	   on a prop value (Ex: state.items[props.someID]). "mapStateToProps" is expected to return the props that you wish to expose to your component
 *  	   (usually via an object literal). It's up to you to eventually transform the state you're receiving
 *  	   before returning it.
 *  	 - connect(...) returns a function that accept a class and returns another class, you can use it as an
 *  	   ES7 decorator if you want to. Decorators are an experimental ES7 features that make it possible to
 *  	   annotate and modify classes and properties at design time (https://github.com/wycats/javascript-decorators)
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


// flow of our application
// ActionCreator -> Action -> dispatcher -> reducer
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
console.log("\n", '### It starts here')
console.log('store_0 state after initialization:', store_0.getState())

// To dispatch an action, simply call:
store_0.dispatch({
    type: 'AN_ACTION'
})
// Output:
// userReducer was called with state {} and action { type: 'AN_ACTION' }
// itemsReducer was called with state [] and action { type: 'AN_ACTION' }
// Each reducer is effectively called but since none of our reducers care about this action type,
// the state is left unchanged:

var setNameActionCreator = function (name) {
    return {
        type: 'SET_NAME',
        name: name
    }
}

store_0.dispatch(setNameActionCreator('bob'))
// Output:
// userReducer was called with state {} and action { type: 'SET_NAME', name: 'bob' }
// itemsReducer was called with state [] and action { type: 'SET_NAME', name: 'bob' }

// We just handled our first action and it changed the state of our application!
console.log('store_0 state after action SET_NAME:', store_0.getState())
// Output:
// store_0 state after action SET_NAME: { user: { name: 'bob' }, items: [] }
