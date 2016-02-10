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
 *  -
 *
 * Store:
 *  - src:
 * 	-
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
