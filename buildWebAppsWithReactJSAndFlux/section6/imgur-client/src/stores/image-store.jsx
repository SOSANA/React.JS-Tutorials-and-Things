var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions/topic-action');
// utility library for common operations, every day js challenges
var _ = require('lodash');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getImages: function(topicId) {
    Api.get('topics/' + topicId)
    .then(function(json){
      /**
       * _.reject takes two arguments, an array and a function
       * the function gets called with each element out of the  
       * array we pass. This function will get a single image. It 
       * will be ran how ever many times equal to the number of 
       * images we have which could be 60 to 100
       */
      this.images = _.reject(json.data, function (image) {
        // is_album is a boolean, if its true reject it
        return image.is_album
      });
      this.triggerChange();
    }.bind(this));
  },
  getImage: function(id) {
    Api.get('gallery/image/' + id)
      .then(function(json){
        if(this.images) {
          this.images.push(json.data);
        } else {
          this.images = [json.data];
        }
        
        this.triggerChange();
      }.bind(this));
  },
  find: function(id) {
    /**
     * using another lodash method. '_.findWhere' takes a collection of
     * data ex 'this.images' and finds the first record in that collection
     * that has an key id that is equal to the property id that we passed in
     * ex {id: id}
     */
    var image = _.findWhere(this.images, {id: id})   ;
    
    if(image) {
      return image
    } else {
      this.getImage(id);
      return null
    }
  },
  triggerChange: function() {
    this.trigger('change', this.images);
  }
});
  

