/**
 * The store is your data warehouse. This is the single source of truth for a
 * particular piece of your application’s state. Similar to actions, we’ll be
 * creating a class for the store.
 */
 var alt = require('../alt');
 var LocationActions = require('../actions/LocationActions');

 class LocationStore{
   constructor() {
     this.locations = [];
     // bind our action handlers to our actions
     this.bindListeners({
       handleUpdateLocations: LocationActions.UPDATE_LOCATIONS
     });
   }

   handleUpdateLocations(locations) {
     this.locations = locations;
   }
 }

// exporting our newly created store
module.exports = alt.createStore(LocationStore, 'LocationStore');
