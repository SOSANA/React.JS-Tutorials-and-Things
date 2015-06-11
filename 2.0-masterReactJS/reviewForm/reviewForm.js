/*
 *  using multiple components with getInitialState and some the events that are associated with components
 *  such as change events that we can associate with textboxes, drop downs and form submitting events
 *  left off at 2:15
*/

var courseList = [
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
    
    getInitialState: function() {
        return {name: '', feedback: '', course: '', reviews: []};
    },
    onChangeName: function(el) {
        this.setState({name: el.target.value})
    },
    onChangeFeedback: function(el) {
        this.setState({feedback: el.target.value})
    },
    onChangeCourse: function(el) {
        this.setState({course: el.target.value})
    },
    submitReview: function(el) {
        el.preventdefault();
        this.state.reviews.push({
            name: this.state.name, 
            feedback: this.state.feedback, 
            course: this.state.course
        });
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
            // and that is what we assigning to each of these properties of option component 
            // key and the value, then its the text {course.courseName} that is displayed in 
            // the drop down menu 
            return <option key={course.courseName} value={course.courseName}>{course.courseName}</option>
        });
                                          
        return (
            /* the value we are getting from the state that we created */
            <div>
                <form onSubmit = {this.submitReview}>
                    <label> Name </label>                   
                    <input type="text" placeholder="Enter Your Name" value={this.state.name} onChange={this.onChangeName} />
                    <br/><br/>
                    <label> Feedback </label>
                    <input type="text" placeholder="Enter Your Feedback" value={this.state.feedback} onChange={this.onChangeFeedback} />
                    <br/><br/>
                    <select onChange={this.onChangeCourse}>
                        // once our options variable is return, its getting passed here
                        // and is how our drop down is being generated
                        {options}
                    </select> 
                    <br/><br/>                      
                    <input type="submit" value="Submit" />
                </form>
                <ReviewCollection reviews = {this.state.reviews} />
            </div>
        );
    }
});

var ReviewCollection = React.createClass({
    render: function() {
        var reviews = this.props.reviews.map(function(review){
            return <Review course={review.course} name={review.name} feedback={review.feedback} />
        });
        
        return (<div> {reviews} </div>)
    }
});

var Review = React.createClass({
    render: function() {
        return 
            <div>
                <span> Name </span> {this.props.Name}
                <br />
                <span> Course </span> {this.props.course}
                <br />
                <span> Feedback </span> {this.props.feedback}
            </div>
    }
});

// courselist is being assigned to list and being passed as a property to ReviewControl
React.render(<ReviewControl list = {courseList} />,document.getElementById('divContainer'));