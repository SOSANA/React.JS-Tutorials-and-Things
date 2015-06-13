var React = require('react/addons');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'PopupIcon',
	propTypes: {
		name: React.PropTypes.string.isRequired,
		type: React.PropTypes.oneOf(['default', 'muted', 'primary', 'success', 'warning', 'danger']),
		spinning: React.PropTypes.bool
	},

	render: function () {
		var className = classNames('Modal-icon', {
			'is-spinning': this.props.spinning
		}, this.props.name, this.props.type);

		return <div className={className} />;
	}
});
