/**
 * FLUX - INTRODUCTION
 *  - Flux is application architecture which can be used to build client-side web application.
 *  - This architecture works by utilizing unidirectional data flow.
 *  - Its pretty easy to use without a lot of new code
 * 
 * FLUX ARCHITECTURE
 *  - Flux applications have three major parts
 *      - Action
 *          - The dispatcher exposes a method that allows us to trigger a dispatch to the stores and to
 *            include a payload of data which we call an action. The actions creation may be wrapped 
 *            into a semantic helper method which sends the action to the dispatcher. This action creator
 *            method also adds a type to the action so that when the action is interpeted in the store it
 *            can respond appropriately.
 *      - Dispatcher
 *          - is the central hub that manages all data flow in a flux application. It is essentially a 
 *            registry of callbacks into the stores and has no real intelligence of its own. It's a 
 *            simple mechanism for distributing the actions to the stores. 
 *      - Stores
 *          - contain the application state and logic. Its similar to a model in a traditional mvc but
 *             manage the state of many objects.
 *          - they do not represent a single record of data like object relationship models do. More 
 *            than simply managing a collection of ORM style objects. Stores manage the application 
 *            state for a particular domain within the application. A store registerys itself with the
 *            dispatcher and provides it with a callback. This callback recieves the action as a
 *            parameter. Within this stores registered callback, a switch statement based on the actions
 *            type is used to interpet the action and to provide the proper hooks into these stores
 *            internal methods. This allows an action to result in a update to the state of the store via
 *            the dispatcher. After these stores are updated, the broadcast an event declaring that their
 *            state has changed so the views may query the new state and update themselves. 
 *          - close to the top of the nested view hierarchy, a special kind of view listens for events that
 *            are broadcasted by the stores that it depends on. We call this a controller view as it 
 *            provides the glue code to get the data from the stores and pass this data down its chain of
 *            decendants. We might have one of these controller views governing any significant section of
 *            the page. When it recieves the event from the store, it first requests the new data it needs
 *            via the stores public getter methods. It then calls its own set state or force update methods
 *            causing its render method and the render method of all its decendants to run.  
 *      - Views [React Components]
 *  - When a user interacts with a React view, the view propagates an action through a central 
 *    dispatcher to the various stores that hold the application's data and business logic, which 
 *    updates all of the views that are affected. This works especially well with React's declarative 
 *    programming style, which allows the store to send updates without specifying how to transition 
 *    views between states.
 *  - The stores accept updates and reconcile them as appropriate, rather than depending on something 
 *    external to update its data in a consistent way. Nothing outside the store has any insight into 
 *    how it manages the data for its domain, helping to keep a clear separation of concerns. Stores 
 *    have only a single way of getting new data into their self-contained world — the callback they 
 *    register with the dispatcher.
 * 
 * STRUCTURE AND DATA FLOW
 *  - Data in a Flux application flows in a single direction:
 * 
 *        Action ->Dispatcher->Store->View
 * 
 *  - A unidirectional data flow is central to the Flux pattern, and the above diagram should be "the 
 *    primary mental model for the Flux programmer". The dispatcher, stores and views are independent 
 *    nodes with distinct inputs and outputs. The actions are simple objects containing the new data 
 *    and an identifying type property.
 *  - the dispatcher is the central hub that manages all data flow in a flux application. It is 
 *    essentially a registry of callbacks into the stores and has no real intelligence of its own. It's
 *    a simple mechanism for distributing the actions to the stores.
 */