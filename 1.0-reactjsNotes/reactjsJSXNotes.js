/**
 * JSX COMPILER IN REACTJS
 *  - refer to jsxTools folder for example
 *  - <script src="../js/JSXTransformer.js"></script> is a heavy file and advised to convert it to a 
 *    normal js file for use in production
 *  - you can visit https://facebook.github.io/react/jsx-compiler.html for a side by side comparison
 *  - you can also get the Production CDN URL From http://facebook.github.io/react/downloads.html
 *  - to make use of the react jsx compiler via npm
 *      - npm install -g react-tools
 *      - cd into folder you want to compile jsx
 *      - mkdir js (storing your jsx files)
 *      - in root copy over html files that include jsx prior to compiling.
 *      - in command type following
 *      > jsx --watch js/ build/
 *      - once this is done you should see a new folder with build in it containing the new files
 *        that have been transpiled to js
 *      - remember to use html files that don't include jsx script tag and use the minified script files 
 */