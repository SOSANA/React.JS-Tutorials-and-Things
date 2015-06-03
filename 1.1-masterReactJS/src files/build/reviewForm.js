var courseList=[
    {courseName:"Master ReactJS"},
    {courseName:"Master AngularJS"},
    {courseName:"Master JavaScript & jQuery"},
    {courseName:"Browser Developer Tools"},
    {courseName:"Master KnockoutJS"},
    {courseName:"Advanced jQuery for Designers & Developers"},
    {courseName:"Amazon EC2 LAMP"},
    {courseName:"NodeJS"}
]

var ReviewControl = React.createClass({displayName: "ReviewControl",  
    getInitialState: function() {
            return {name:'',feedback:'',course:'',reviews:[]};
    },
    onChangeName:function(el){
        this.setState({name:el.target.value})
    },
    onChangeFeedback:function(el){
        this.setState({feedback:el.target.value})
    },
    onChangeCourse:function(el){
        this.setState({course:el.target.value})
    },
    submitReview:function(el){
        el.preventDefault();
        this.state.reviews.push({name:this.state.name,feedback:this.state.feedback,course:this.state.course});
        this.setState({name:'',feedback:''});
    },
    render:function(){
        var options=this.props.list.map(function(course){
                    return React.createElement("option", {key: course.courseName, value: course.courseName}, course.courseName)
        });
        
        return (React.createElement("div", null, 
                    React.createElement("form", {onSubmit: this.submitReview}, 
                        React.createElement("label", null, " Name "), 
                        
                        React.createElement("input", {type: "text", placeholder: "Enter Your Name", value: this.state.name, onChange: this.onChangeName}), 
                        React.createElement("br", null), React.createElement("br", null), 
                        React.createElement("input", {type: "text", defaultValue: "SkillBakery"}), 
                        React.createElement("br", null), React.createElement("br", null), 
                        React.createElement("label", null, " Feedback "), 
                        React.createElement("textarea", {placeholder: "Enter Your Feedback", value: this.state.feedback, onChange: this.onChangeFeedback}), 
                        React.createElement("br", null), React.createElement("br", null), 
                        React.createElement("select", {onChange: this.onChangeCourse}, 
                            options
                        ), 
                         React.createElement("br", null), React.createElement("br", null), 
                         React.createElement("input", {type: "submit", value: "Submit"})
                    ), 
                    React.createElement(ReviewCollection, {reviews: this.state.reviews})
            ))
    }
});

var ReviewCollection=React.createClass({displayName: "ReviewCollection",
    render:function(){
       var reviews=this.props.reviews.map(function(review){
            return React.createElement(Review, {course: review.course, name: review.name, feedback: review.feedback})
        });
   
       return (React.createElement("div", null, " ", reviews, " "))
    }
})

var Review = React.createClass({displayName: "Review",
    render:function(){
       return React.createElement("div", null, 
            React.createElement("span", null, "Name"), " ", this.props.name, 
            React.createElement("br", null), 
            React.createElement("span", null, "Course"), " ", this.props.course, 
            React.createElement("br", null), 
            React.createElement("span", null, "Feedback"), " ", this.props.feedback
        )
    }    
});

React.render(React.createElement(ReviewControl, {list: courseList}),document.getElementById('divContainer'));