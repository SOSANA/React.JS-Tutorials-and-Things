# Universal React Boilerplate

A node app that says, "Hello, world!"

This is a universal JavaScript application boilerplate using Express 4.x.


## Learn JavaScript with Eric Elliott

The Universal React Boilerplate was written for the ["Learn JavaScript with Eric Elliott" courses](https://ericelliottjs.com/). A series of courses to teach people how to build great JavaScript apps for production. Don't just learn JavaScript. Learn how to build amazing things.

## Universal JavaScript

Universal (aka *"isomorphic"*) means that it's designed to run a lot of the same code on both the client and the server. Typically that includes a lot of rendering and domain logic.

There are many advantages to building apps this way, but the primary advantages are:

* Cross-functional teams. Since everything is written in JavaScript, it's easier to build teams who know how to work on both the client and server sides of the app.
* Write once, run everywhere. With the exception of a few library substitutions and browser polyfills, the code is shared, which means you have to write about half the code you'd write working on a non-universal app.
* More productive developers. Since the app is more consistent across the stack, there's no context switching when you need to maintain application behavior on both sides of the stack. Write the behavior once, and you're done. Context switching slows developers down significantly.

## Roadmap

I'm planning to put a lot of love into this and make it an essential resource for anybody interested in building production Node and Universal JavaScript applications. It's already very useful as-is, but we've been rewriting a lot of these things over and over again for every app, or searching through the haystack that is `npm` and spending too much time on tech selection instead of knowing what the best, most well-tested solutions are and running with them.

This boilerplate will eventually demonstrate a very simple production ready application, (basically "Hello, world!" including:

* [x] Unit tests with [tape](https://github.com/substack/tape) & [faucet](https://github.com/substack/faucet)
* [ ] Route and render with [react-engine](https://github.com/paypal/react-engine)
* [ ] State management and time-travel debugging with [cerebral](https://github.com/christianalfoni/cerebral)
* [ ] Client bundling with browserify.
* [ ] Client unit tests also need to be validated cross-browser. [smokestack](https://github.com/hughsk/smokestack) with [Sauce Labs](https://github.com/hughsk/smokestack#sauce-labs)
* [ ] Functional testing with [selenium-sauce](https://github.com/alexbrombal/selenium-sauce) on [Sauce Labs](http://saucelabs.com)
* [x] Logging with [bunyan-request-logger](https://github.com/ericelliott/bunyan-request-logger)
* [ ] Configuration management with [qconf](https://github.com/ericelliott/qconf)
* [ ] Error handling with [express-error-handler](https://github.com/ericelliott/express-error-handler/)
* [ ] User sign-in flows with multi-factor auth and robust password hashing using [Credential](https://github.com/ericelliott/credential)
* [ ] Multi-factor auth (passwords are obsolete)
* [ ] Auth tokens with [json web tokens](https://github.com/auth0/node-jsonwebtoken)
* [ ] User authorization for requested functionality
* [ ] Command manager (routes will trigger commands rather than kicking off rendering directly)
* [ ] i18n
* [ ] Data modeling
* [ ] Data model validation
* [ ] Robust feature toggling with multivariate testing support
* [ ] HTML5 form validation using [h5v2](https://github.com/ericelliott/h5v2)
* [ ] Automatic hypermedia API route creation with [siren-resource](https://github.com/ericelliott/siren-resource) - Since all entities are root entities, siren-resource can auto-generate typed routes via `entityType`
* [ ] CORS
* [ ] XSS prevention with [Lusca](https://github.com/krakenjs/lusca)
* [ ] Security audit built-into automatic build validation
* [ ] Full-featured build system via [prod-module-boilerplate](https://github.com/ericelliott/prod-module-boilerplate)

In other words, everything you'd want to reuse in most production-ready applications -- all done for you using years worth of tried and true best practices.

## Help wanted

Let me know in the comments if you'd like to help with any of these items.


## Courses

Students will get a series of short videos, lots of interactive lessons explaining concepts in-depth, the ability to help and learn from each other, and a lot more.

Here's a sneak peek at our members-only site:

![Course homepage](https://cloud.githubusercontent.com/assets/364727/6434012/b3ff7a04-c03b-11e4-9b33-51889c74036f.png)

![Student profile](https://cloud.githubusercontent.com/assets/364727/6434016/c7a0b802-c03b-11e4-9f4b-867464bd88c6.png)


# [Learn JavaScript](https://ericelliottjs.com/)