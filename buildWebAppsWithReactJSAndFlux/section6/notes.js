/**
 * remember the following: 
 *  - the only way we can pass data between components is through 'this.props' object
 *    and the component needs to render its child component to have access
 *  - 'componentWillMount:' always runs right before the component is rendered and only 
 *    gets rendered one time. If there is any child or other components that need to get access to 
 *    this data we will have to fetch that data in another component due to not being able to pass
 *    'this.props' to it because we are not rendering that component. Long story short if any of 
 *    our components need access to our topic's or data we are going to have to re-fetch data and
 *    we would have to duplicate code throught our app
 *      ex: you re-render the page because your route changes or click on another component 
 *          it needs to re fetch the data
 * 
 * imgur developer api: 
 *  login: https://api.imgur.com/
 *  Api key creds: look at apiKey.js
 * 
 * Src code found here:
 *  https://github.com/StephenGrider/ReactStarter
 *  https://github.com/StephenGrider/ReactCasts
 * 
 * install the following for react=router version:
 * - $ npm install react-router@1.0.0-beta2 --save
 * 
 * install the following for fetch version:
 * - native fetch function for browers, its like jquery's ajax 
 *   function but without the entire weight of jquery around it
 * - more info found at src: https://github.com/github/fetch
 * - $ npm install --save whatwg-fetch
 * 
 *  install the following for Flux (reflux) version:
 *  - $ npm install --save reflux
 *  - more info found at src: https://github.com/github/fetch
 */
