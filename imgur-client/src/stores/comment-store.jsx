var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions/topic-action');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getImage: function(id){
    Api.get('gallery/' + id + '/comments')
    .then(function(json){
      this.comment = json.data;
      this.triggerChange();
    }.bind(this));
  },
  triggerChange: function () {
    this.trigger('change', this.comment);
  }
});