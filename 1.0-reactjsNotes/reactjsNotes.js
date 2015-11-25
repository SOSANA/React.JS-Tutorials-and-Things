/**
 * WHY REACT
 *  - UI code is readable and maintainable
 *  - Creating UI components allows for modularity and code reusability
 *  - React can be rendered on both client & server side
 *  - It uses a concept called Virtual DOM that selectively renders subtrees of
 *  	nodes upon state changes.
 *
 * ReactJS Virtual DOM
 *  - React runs a diffing algorithm which at exactly has changed
 *  - Reconcilition where it updates the document object model with the results
 *  	of diff
 *  - in other words it will only change the child attributes we updated while
 *  	not affecting the parent or changing the other child elements
 *
 * Thinking in React
 * 	- ref: https://facebook.github.io/react/docs/thinking-in-react.html
 * 	- Each component should try to adhere to the single responsibility principle.
 *  	If you find yourself working on a component that does too many things,
 *  	perhaps it's best to split it into sub-components. Having said that, I
 *  	typically write monolithic components first, just to get it working, then
 *  	refactor it by splitting it into smaller sub-components.
 *  - The top-level App component contains Navbar, Homepage and Footer components.
 *  	Homepage component contains two Character components.
 *  - So, whenever you have a certain UI design in mind, start by breaking it
 *  	apart from top-down and always be mindful of how your data propagates from
 *   	parent to child, child to parent and between sibling components or you
 *    will quickly find yourself completely lost. It may be difficult initially,
 *    but it will become second nature to you after building a few React apps.
 *  - So, next time you decide to build a new app in React, before writing any
 *  	code, do this hierarchy outline first. It will help you to visualize the
 *   relationships between multiple components and build them accordingly.
 * 	- ref: thinkingInReact.png
 */
