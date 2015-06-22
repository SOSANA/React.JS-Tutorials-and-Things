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

var ReviewControl = React.createClass({  
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
                    return <option key={course.courseName} value={course.courseName}>{course.courseName}</option>
        });
        
        return (<div>
                    <form onSubmit={this.submitReview}>
                        <label> Name </label>
                        
                        <input type="text" placeholder="Enter Your Name" value={this.state.name} onChange={this.onChangeName} />
                        <br/><br/>
                        <input type="text" defaultValue="SkillBakery"/>
                        <br/><br/>
                        <label> Feedback </label>
                        <textarea placeholder="Enter Your Feedback" value={this.state.feedback} onChange={this.onChangeFeedback}></textarea>
                        <br/><br/>
                        <select onChange={this.onChangeCourse}>
                            {options}
                        </select>
                         <br/><br/>
                         <input type="submit" value="Submit" />
                    </form>
                    <ReviewCollection reviews={this.state.reviews} />
            </div>)
    }
});

var ReviewCollection=React.createClass({
    render:function(){
       var reviews=this.props.reviews.map(function(review){
            return <Review course={review.course} name={review.name} feedback={review.feedback} />
        });
   
       return (<div> {reviews} </div>)
    }
})

var Review = React.createClass({
    render:function(){
       return <div>
            <span>Name</span> {this.props.name}
            <br/>
            <span>Course</span> {this.props.course}
            <br/>
            <span>Feedback</span> {this.props.feedback}
        </div>
    }    
});

React.render(<ReviewControl list={courseList} />,document.getElementById('divContainer'));