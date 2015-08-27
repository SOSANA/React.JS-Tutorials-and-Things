/**
 * COMPONENT STATE & LIFE CYCLE IN REACTJS
 *  - components are classes in react js
 *  - All components should start with a capital letter
 *  - Components are functions
 * 
 * Life Cycle State and Methods
 *  - We have 3 states: Mount, Update, Unmount 
 *  - Each state has their own methods
 *  - Mount State
 *      - componentWillMount Method
 *          - is invoked once both on the client and on the server
 *          - immediately before the inital render occurs, if you call setState() within this method, render will 
 *            see this updated state and will be excuted only once despite the state change
 *      - componentDidMount Method
 *          - is invoked once only on the client, not on the server
 *          - immediately after the inital render occurs, at this point in the life cycle the component has DOM
 *            representation which you can access via React.findDOMNode(component)
 *          - if you want to integrate with other js frameworks, set timers using setTimeout() or setInterval() or
 *            send ajax requests, you can perform those operations in this method. Soon as component is mounted, we can do 
 *            our stuff inside that method.
 *  - Update State
 *      - componentWillReceiveProps Method
 *          - is invoked when a component is receiving new properties. 
 *          - this method is not called for the inital render. We can use this as an opportunity to react to a property
 *            transition before render is called by updating the state using this.setState(). The old properties can be
 *            accessed via this.props calling this.setState() within this function will not a trigger an additional render
 *      - shouldComponentUpdate Method
 *          - is invoked before rendering when new properties or state are being received. This method is not called for the
 *            inital render or than a forced update is used. We can use this as an opportunity to reinforce when you are certain 
 *            that the transition to the new props and state will not require a component update. Should the component update
 *            returns false, than render will be completely skipped, handling the next state change. In addition 
 *            componentWillUpdate and componentDidUpdate will not be called as well. By default shouldComponentUpdate always
 *            return true to prevent settled bugs and state is mutated in place, but if your careful to always treat state as
 *            immutable and to read only from properties and state in render. Than you can over ride shouldComponentUpdate with
 *            a implentation that compares the old properties and state to their replacements
 *      - componentWillUpdate Method
 *          - is invoked immediately before rendering. When new properties or state are being recieved. This method is not 
 *            called for the inital render
 *      - componentDidUpdate Method
 *          - is invoked immediately after the components updates are flushed to the DOM
 *          - This method is not called for the inital render 
 *          - We can use this method to operate on the DOM when the component 
 *            has been updated
 *  - Unmount State
 *      - componentWillUnmount Method
 *          - is invoked immediately before a component is unmonted from the DOM. We can perform any necessary clean up in this
 *            method or you can say garbage collection. Such as invalidating timers or clearing up any DOM elements that were 
 *            created in componentDidMount
 * 
 * COMPONENT STATE Methods
 *  - render
 *      - only returns one element
 *      - if you do not want to return nothing at all you can simply write null or false to indicate you don't want 
 *        anything rendered behind the scenes
 *      - the render function should not modify component state. It should always return the same results each time 
 *        its invoked and does not read or write to DOM. In case you need to interact with the browser, you need to 
 *        perform your work and methods like componentDidMount or other life cycle methods instead
 *      - keeping render pure this way makes server rendering more practical and components easier to think
 *  - getInitialState
 *      - when ever this is invoked, once before the component is mounted, the return value will used 
 *        as the inital value of "this.state" property
 *  - getDefaultProps
 *      - this invoked once and cached when the class is created. This method is invoked before any instances 
 *        are created and thus cannot rely on "this.props"
 *      - in addition be aware that any complex objects return by getDefaultProps will be shared across instances and
 *        not copied
 *  - propTypes
 *      - propTypes object allows you to validate props being passed to your components
 *  - mixins
 *      - a mixin is a group of methods that sits on one object, that gets copied over to another object
 *      - a fantastic method react provids us to easily resuse code
 *      - mixins array allows you to use mixins to share behavior amoung multiple components. This will also be apart 
 *        of reusable components.
 *  - statics
 *      - statics object allows you to define static methods that can be called on the component class
 *  - displayName
 *      - displayName is a string used in debugging msgs and usually jsx sets this value automatically
 */