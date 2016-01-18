/**
 * - first install babel cli globally
 * 	 - $ npm i babel-cli -g
 * - in terminal type following to watch our source file and keep generating our
 * 	 dist.js file everytime we make a change
 * 	 - $ babel --presets react src.js -o dist.js --watch
 */
'use strict';

const App = () => {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'table',
      null,
      React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          null,
          React.createElement(
            'th',
            null,
            'heading'
          ),
          React.createElement(
            'th',
            null,
            'heading'
          ),
          React.createElement(
            'th',
            null,
            'heading'
          )
        )
      ),
      React.createElement(
        'tbody',
        null,
        React.createElement(
          'tr',
          { id: 'theRow' },
          React.createElement(
            'td',
            null,
            React.createElement('form', { action: '' })
          )
        )
      )
    )
  );
};
