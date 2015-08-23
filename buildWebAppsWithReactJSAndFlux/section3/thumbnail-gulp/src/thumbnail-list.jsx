var ThumbNailList = React.createClass({
  render: function() {
    var list = this.props.thumbNailData.map(function(thumbNailProps){
      return <ThumbNail {...thumbNailProps}/>
    });

    return <div>
      {list}
    </div>
  }
});
