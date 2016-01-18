/**
 * - first install babel cli globally
 * 	 - $ npm i babel-cli -g
 * - in terminal type following to watch our source file and keep generating our
 * 	 dist.js file everytime we make a change
 * 	 - $ babel --presets react src.js -o dist.js --watch
 */
'use strict';

const App = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>heading</th>
            <th>heading</th>
            <th>heading</th>
          </tr>
        </thead>
        <tbody>
          <tr id="theRow">
            <td>
              <form action=""></form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
