/* create a class */
var RecipeBook = React.createClass({
    render: function() {
        return (
            <div>
	        Hello, world! I am a RecipeBook.
            </div>
        );
    }
});
/* controller view calls render */
React.render(
/* Recipe book is just a function, attrs are args */
<RecipeBook />,
document.getElementById('app-container')
);
