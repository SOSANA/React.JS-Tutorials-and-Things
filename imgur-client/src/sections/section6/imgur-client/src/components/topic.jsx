var React = require('react');
var Actions = require('../actions/topic-action');
var ImageStore = require('../stores/image-store');
var Reflux = require('reflux');
var ImagePreview = require('./image-preview');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      images: []
    };
  },
  // componentWillMount Method is invoked once both on the client and on the server
  componentWillMount: function() {
    // for testing
    //console.log('Topic is about to render and fetch data');
    Actions.getImages(this.props.params.id);
  },
  // componentWillReceiveProps is invoked when a component is receiving new properties. 
  // This is a react method that gets called with an object called 'nextProps'. 'nextProps' 
  // means whenever this function is called, we are about to get new set of properties and 
  // when that happens you have to rerender yourself
  componentWillReceiveProps: function(nextProps) {
    Actions.getImages(nextProps.params.id);
  },
  render: function() {
    // for testing
    //console.log('Topic is rendering with ID', this.props.params.id);
    //console.log('I have this many images', this.state.images.length);
    return <div className="topic">
      { this.renderImages() }
    </div>
  },
  renderImages: function() {
    return this.state.images.slice(0, 20).map(function(image){
      // rather than apply this.props.image, this.props.name, this.props.description, etc we use '...'
      return <ImagePreview key={image.id} {...image} />
    });
  },
  onChange: function(event, images) {
    this.setState({images: images});
  }
});