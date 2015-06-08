/*
 * COMPONENT STATE & LIFE CYCLE
 *  - components are classes in react js
 *  - All components should start with a capital letter
 *  - Components are functions
 * 
 * Life Cycle State and Methods
 *  - We have 3 states: Mount, Update, Unmount 
 *  - Each state has their own methods
 *  - Mount
 *      - componentWillMount
 *          -
 *      - componentDidMount
 *          -
 *  - Update
 *      - componentWillReceiveProps
 *          -
 *      - shouldComponentUpdate
 *          -
 *      - componentWillUpdate
 *          -
 *      - componentDidUpdate
 *          -
 *  - Unmount
 *      - componentWillUnmount
 *          -
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
 *      - mixins array allows you to use mixins to share behavior amoung multiple components. This will also be apart 
 *        of reusable components.
 *  - statics
 *      - statics object allows you to define static methods that can be called on the component class
 *  - displayName
 *      - displayName is a string used in debugging msgs and usually jsx sets this value automatically
 *  - States & Methods
 *      -
 *  - Mount
 *      -
 *  - componentWillMount
 *      -
 *  - componentDidMount
 *      -
 *  - Update
 *      -
 *  - componentWillReceiveProps
 *      -
 *  - shouldComponentUpdate
 *      -
 *  - componentWillUpdate
 *      -
 *  - componentDidUpdate
 *      -
 *  - Unmount
 *      -
 *  - componentWillUnmount
 *      -
 * 
*/