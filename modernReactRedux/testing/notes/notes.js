/**
 * Needs of a testing suite:
 *  - mocha: loads tests, runs them one by one, cleans up after each test ran
 *  - chai: helpers for asserting certain properties about the test subject
 *    - other libraries that are built on top of chai like chai-jquery redefine
 *      these matchers from chai's api
 *
 * Testing:
 *  - always all our tests will follow the same syntax for
 *    'describe', 'it', and 'expect'
 *  - 'describe' and 'it' take a first argument of string and second argument of a function
 *    and inside this function is our specs
 *
 * Three main core constructs for testing:
 *  - describe:
 *    - groups together similar tests
 *    - conveys to other developers that a certain number of tests
 *      are related in fashion
 *    - when we have two similar spec's that are closely related we
 *      can nest another describe block
 *  - it:
 *    - used to test a single attribute of a target.
 *    - 'it' blocks try to make an assertion about a very particular
 *      fact about the testing subject
 *    - uses a 'matcher' that are chainable functions
 *      - ex: https://github.com/chaijs/chai-jquery
 *        - only used for tests
 *  - expect:
 *    - used to make an 'assertion' about a target
 *    - Used for a very particular attribute for our target
 *
 * Writing Spec's:
 *  - we make assertion about the end product
 *  - we should have a list of what we care about
 *    - ex: a comment area
 *      - we care about
 *        - it has a text area
 *        - it has a button
 *        - entering text into the text area updates the text
 *
 * JSDOM:
 *  - runs the application in a fake browser env in the cli terminal
 */
