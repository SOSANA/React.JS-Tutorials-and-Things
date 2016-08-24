import jsdom from 'jsdom';
import jquery from 'jquery'; // tell jquery make use of this window object below
import TestUtils from 'react-addons-test-utils'; // pulling from react add-ons
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDom from 'react-dom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import reducers from '../client/reducers';

// set up testing env to run like a browser in the cli using jsdom
// assigning global scope, global.document same as window.document
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
// making instance of jquery that reaches out to the fake instance of the dom.
// This makes sure that it doesn't reach out to the dom but instead be
// responsible for this global window that is being provided by jsdom
const $ = jquery(global.window);

// build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  // variable is holding a reference to our rendered
  // version of our component instance
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  // geting ref access to our dom element, produces html
  // this helps us to access to jquery-chai by wrapping jquery around ReactDom
  return $(ReactDom.findDOMNode(componentInstance));
}

// build helper for simulating events
// behind the scenes in jquery $('div').simulate()
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }

  TestUtils.Simulate[eventName](this[0]);
};

// set up chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
