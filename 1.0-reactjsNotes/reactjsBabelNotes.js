/**
 * JSX Babel COMPILER IN REACTJS
 *  - As announced, starting with React v0.14 (next release), the JSXTransformer.js won't be
 *    part of the release. Also `react-tools` npm package is no more. So whatchagonnawannado
 *    is switch to Babel. Here's how.
 *
 * Build-time transform
 * -  Prerequisite: install Babel
 *      - $ npm install --global babel
 *
 * Where you previously had this as part of your development/build process:
 *  - $ jsx --watch source/ build/
 * ...now becomes
 *  - $ babel source/ --watch --out-dir build/
 *
 * In-browser transform
 *  - Required warning: in-browser transforms are just for testing and playing and prototyping.
 *    Never for live sites.
 *
 * Now with that out of the way, let's see how to switch to Babel.
 * Prerequisite: a file called browser.js. You'll find in in your node_modules, e.g.
 *  - $ ls /usr/local/lib/node_modules/babel/node_modules/babel-core/browser.js
 *
 * Slightly easier to find if you npm install babel-core:
 *  - $ ls /usr/local/lib/node_modules/babel-core/browser.js
 *
 * Anyway, find browser.js and put it somewhere handy. Now where you used to have:
 *
 *  <script src="react/build/react.js"></script>
 *  <script src="react/build/JSXTransformer.js"></script>
 *... now you do:
 *  <script src="react/build/react.js"></script>
 *  <script src="babel/browser.js"></script>
 *
 * Finally, instead of the invalid type="text/jsx" you used to add to your script tags, now
 * you do type="text/babel", like:
 *  <script type="text/babel">
 *    React.render(
 *      <h1 id="my-heading">
 *        <span><em>Hell</em>o</span> world!
 *      </h1>,
 *      document.getElementById('app')
 *    );
 *  </script>
 */
