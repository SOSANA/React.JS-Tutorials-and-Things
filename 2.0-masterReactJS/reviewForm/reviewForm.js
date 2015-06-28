/**
 *  using multiple components with getInitialState and some the events that are associated with components
 *  such as change events that we can associate with textboxes, drop downs and form submitting events
 */

var courseList = [
    {courseName: "Pick One"},
    {courseName: "Master ReactJS"},
    {courseName: "Master AngularJS"},
    {courseName: "Master Hacking"},
    {courseName: "Master immutableJS"},
    {courseName: "Master RadiumJS"},
    {courseName: "Master NodeJS"},
    {courseName: "Master ExpressJS"},
    {courseName: "Master BaconJS"},
    {courseName: "Master MongooseJS"}
]

var ReviewControl = React.createClass({
    // preparing our initals values with empty fields, and reviews will be an empty array of collections
    getInitialState: function() {
        return {name: '', feedback: '', course: '', reviews: []};
    },
    // these are the functions (onChangeName, onChangeFeedback, onChangeCourse) that we have associated with 
    // our controls for input and select
    // we are assigning what value is in the textbox to name state
    onChangeName: function(el) {
        this.setState({name: el.target.value})
    },
    // we are assigning what value is in the textbox to feedback state
    onChangeFeedback: function(el) {
        this.setState({feedback: el.target.value})
    },
    // we are assigning what value in the dropdown box to course state
    onChangeCourse: function(el) {
        this.setState({course: el.target.value})
    },
    // once this is done the form this method gets called
    submitReview: function(el) {
        // preventing form from getting submitted
        el.preventDefault();
        // we are adding the feedback to the reviews collection
        // this reviews collections is actually containing name, feedback, and course
        this.state.reviews.push({
            name: this.state.name, 
            feedback: this.state.feedback, 
            course: this.state.course
        });
        // once that is done we are refreshing our text boxes name and feedback to blank
        this.setState({
            name: '', 
            feedback: ''
        });
    },
    render: function() {
        // utilizing the list property in var options to pass to our form below by 
        // using map array to iterate through each item from the list
        var options = this.props.list.map(function(course){
            // we are assigning values from the list, we only have one element courseName 
            // and that is what we are assigning to each of these properties of option component 
            // key and the value, then its the text {course.courseName} that is displayed in 
            // the drop down menu 
            return <option key={course.courseName} value={course.courseName}>{course.courseName}</option>
        });
                                          
        return (
            // the value we are getting from the state that we created
            // onSubmit is calling a function submitReview event
            // onChange is calling a function onChangeName event
            // onChange is calling a function onChangeFeedback event
            // onChange is calling a function onChangeCourse event
            // we have assigned these events to select and input
            <div>
                <form onSubmit = {this.submitReview}>
                    <label> Name </label>                   
                    <input type="text" placeholder="Enter Your Name" value={this.state.name} onChange={this.onChangeName} />
                    <br/><br/>
                    <label> Feedback </label>
                    <textarea placeholder="Enter Your Feedback" value={this.state.feedback} onChange={this.onChangeFeedback}></textarea>
                    <br/><br/>
                    <select onChange={this.onChangeCourse}>
                        // once our options variable is return, its getting passed here
                        // and is how our drop down is being generated
                        {options}
                    </select>
                    <br/><br/>                      
                    <input type="submit" value="Submit" />
                </form>
                { /*in order to display the reviews that the user as given, we have created another component called
                    ReviewCollection. This has property called reviews which is getting its values from getInitialState
                    method which we defined in our ReviewControl. Once the set of reviews is assigned to this property
                    the ReviewCollection gets into action */ }
                <ReviewCollection reviews={this.state.reviews} />
            </div>
        )
    }
});

var ReviewCollection = React.createClass({
    render: function() {
        // here we are making use of the map function and than creating a component called Review with three properties
        // with course, name, and feedback. we are assiging the properties that we pushed from the submitReview method 
        // when we were submitting the form thats returned and stored in this variable called reviews.
        var reviews = this.props.reviews.map(function(review){
            return <Review course={review.course} name={review.name} feedback={review.feedback} />
        });
        // that collection is than returned and showed in the browser
        return (<div> {reviews} </div>)
    }
})
// the ReviewCollection returns this component with Name, Course, and Feedback
var Review = React.createClass({
    render: function() {
        return  <div>
                <span> Name </span> {this.props.name}
                <br/>
                <span> Course </span> {this.props.course}
                <br/>
                <span> Feedback </span> {this.props.feedback}
                </div>
    }
});

// courselist is being assigned to list and being passed as a property to ReviewControl
React.render(<ReviewControl list = {courseList} />,document.getElementById('divContainer'));