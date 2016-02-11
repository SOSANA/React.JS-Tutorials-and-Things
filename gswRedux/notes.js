/**
 * Redux Notes
 *
 * Examples:
 * 	- src: http://redux.js.org/docs/introduction/Examples.html
 *
 * Three Principles:
 *  - src: http://redux.js.org/docs/introduction/ThreePrinciples.html
 *  1. Single source of truth
 *  	- The state of your whole application is stored in an object tree within a single store.
 *  	- This makes it easy to create universal apps, as the state from your server can be serialized and hydrated
 *  		into the client with no extra coding effort. A single state tree also makes it easier to debug or introspect
 *  		an application; it also enables you to persist your app’s state in development, for a faster development cycle.
 *  		Some functionality which has been traditionally difficult to implement - Undo/Redo, for example - can suddenly
 *  		become trivial to implement, if all of your state is stored in a single tree.
 *  2. State is read-only
 *  	- The only way to mutate the state is to emit an action, an object describing what happened
 *  	- This ensures that neither the views nor the network callbacks will ever write directly to the state. Instead,
 *  		they express an intent to mutate. Because all mutations are centralized and happen one by one in a strict order,
 *  		there are no subtle race conditions to watch out for. As actions are just plain objects, they can be logged,
 *  		serialized, stored, and later replayed for debugging or testing purposes.
 *  3. changes are made with pure functions
 *  	- To specify how the state tree is transformed by actions, you write pure reducers.
 *  	- Reducers are just pure functions that take the previous state and an action, and return the next state. Remember
 *  		to return new state objects, instead of mutating the previous state. You can start with a single reducer, and as
 *  	 	your app grows, split it off into smaller reducers that manage specific parts of the state tree. Because reducers
 *  	 	are just functions, you can control the order in which they are called, pass additional data, or even make reusable
 *  	 	reducers for common tasks such as pagination.
 *
 * Actions:
 * 	- src: http://redux.js.org/docs/basics/Actions.html
 * 	- flux-standard-action, src: https://github.com/acdlite/flux-standard-action
 * 	- Actions are payloads of information that send data from your application to your store. They are the only source of
 * 		information for the store. You send them to the store using store.dispatch()
 * 	- Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being
 * 	  performed. Types should typically be defined as string constants. Once your app is large enough, you may want to
 * 	  move them into a separate module.
 *  - Other than type, the structure of an action object is really up to you. If you’re interested, check out
 *  	Flux Standard Action for recommendations on how actions could be constructed.
 *  Action Creators:
 *  	- Action creators are exactly that—functions that create actions. It's easy to conflate the terms “action” and
 *  	  “action creator,” so do your best to use the proper term.
 *  	- In traditional Flux implementations, action creators often trigger a dispatch when invoked, by contrast,
 *  		in Redux action creators simply return an action
 *
 * Reducers:
 *  - src: http://redux.js.org/docs/basics/Reducers.html
 *  - Actions describe the fact that something happened, but don’t specify how the application’s state changes in
 *  	response. This is the job of a reducer.
 *  - The reducer is a pure function that takes the previous state and an action, and returns the next state.
 *  	(previousState, action) => newState
 *  - It’s called a reducer because it’s the type of function you would pass to
 *  	Array.prototype.reduce(reducer, ?initialValue). It’s very important that the reducer stays pure. Things you
 *  	should never do inside a reducer:
 *  	 - Mutate its arguments;
 *  	 - Perform side effects like API calls and routing transitions;
 *  	 - Calling non-pure functions, e.g. Date.now() or Math.random()
 *  - remember that the reducer must be pure. Given the same arguments, it should calculate the next state and return
 *  	it. No surprises. No side effects. No API calls. No mutations. Just a calculation.
 *  - all application state is stored as a single object. It’s a good idea to think of its shape before writing any
 *  	code. What’s the minimal representation of your app’s state as an object?
 *  - You’ll often find that you need to store some data, as well as some UI state, in the state tree. This is fine,
 *  	but try to keep the data separate from the UI state.
 *  - with regards to relationships in a more complex app, you’re going to want different entities to reference each
 *  	other. We suggest that you keep your state as normalized as possible, without any nesting. Keep every entity in
 *  	an object stored with an ID as a key, and use IDs to reference it from other entities, or lists. Think of the app’s
 *  	state as a database. This approach is described in normalizr's documentation in detail. For example, keeping
 *  	todosById: { id -> todo } and todos: array<id> inside the state would be a better idea in a real app
 *  -
 *
 * Store:
 *  - src: http://redux.js.org/docs/basics/Store.html
 * 	- holds the state and takes care of calling your reducer when you dispatch an action
 * 	- we defined the actions that represent the facts about “what happened” and the reducers that update the state
 * 		according to those actions. The Store is the object that brings them together. The store has the following
 * 		responsibilities:
 * 		 - Holds application state;
 * 		 - Allows access to state via getState();
 * 		 - Allows state to be updated via dispatch(action);
 * 		 - Registers listeners via subscribe(listener);
 * 		 - Handles unregistering of listeners via the function returned by subscribe(listener).
 * 	- It’s important to note that you’ll only have a single store in a Redux application. When you want to split your
 * 		data handling logic, you’ll use reducer composition instead of many stores
 *
 * Ecosytem:
 * - src: http://redux.js.org/docs/introduction/Ecosystem.html
 * 	Middleware:
 * 	 - redux-thunk — The easiest way to write async action creators
 * 	 - redux-promise — FSA-compliant promise middleware
 * 	 - redux-rx — RxJS utilities for Redux, including a middleware for Observable
 * 	 - redux-logger — Log every Redux action and the next state
 * 	 - redux-immutable-state-invariant — Warns about state mutations in development
 * 	 - redux-analytics — Analytics middleware for Redux
 * 	 - redux-gen — Generator middleware for Redux
 * 	 - redux-saga — An alternative side effect model for Redux apps
 * 	Routing:
 * 	 - react-router-redux — Ruthlessly simple bindings to keep React Router and Redux in sync
 * 	 - redux-router — Redux bindings for React Router
 * 	Components:
 * 	 - redux-form — Keep React form state in Redux
 * 	 - react-redux-form — Create forms easily in React with Redux
 * 	Enhancers:
 * 	 - redux-batched-subscribe — Customize batching and debouncing calls to the store subscribers
 * 	 - redux-history-transitions — History transitions based on arbitrary actions
 * 	 - redux-optimist — Optimistically apply actions that can be later committed or reverted
 * 	 - redux-undo — Effortless undo/redo and action history for your reducers
 * 	 - redux-ignore — Ignore redux actions by array or filter function
 * 	 - redux-recycle — Reset the redux state on certain actions
 * 	 - redux-batched-actions — Dispatch several actions with a single subscriber notification
 * 	 - redux-search — Automatically index resources in a web worker and search them without blocking
 * 	 - redux-electron-store — Store enhancers that synchronize Redux stores across Electron processes
 * 	 - redux-loop — Sequence effects purely and naturally by returning them from your reducers
 *  Utilities:
 *   - reselect — Efficient derived data selectors inspired by NuclearJS
 *   - normalizr — Normalize nested API responses for easier consumption by the reducers
 *   - redux-actions — Reduces the boilerplate in writing reducers and action creators
 *   - redux-act — An opinionated library for making reducers and action creators
 *   - redux-transducers — Transducer utilities for Redux
 *   - redux-immutable — Used to create an equivalent function of Redux combineReducers that works with Immutable.js state.
 *   - redux-tcomb — Immutable and type-checked state and actions for Redux
 *   - redux-mock-store — Mock redux store for testing your app
 *  DevTools:
 *   - Redux DevTools — An action logger with time travel UI, hot reloading and error handling for the reducers, first
 *     demoed at React Europe
 *   - Redux DevTools Extension — A Chrome extension wrapping Redux DevTools and providing additional functionality
 *  DevTools Monitors:
 *   - Log Monitor — The default monitor for Redux DevTools with a tree view
 *   - Dock Monitor — A resizable and movable dock for Redux DevTools monitors
 *   - Slider Monitor — A custom monitor for Redux DevTools to replay recorded Redux actions
 *   - Diff Monitor — A monitor for Redux Devtools that diffs the Redux store mutations between actions
 *   - Filterable Log Monitor — Filterable tree view monitor for Redux DevTools
 *   - Chart Monitor — A chart monitor for Redux DevTools
 *   - Filter Actions — Redux DevTools composable monitor with the ability to filter actions
 */
