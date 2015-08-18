module.exports = {
  // Load Mock Course Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('Courses', JSON.stringify([
                {
                    title: "Master JavaScript & jQuery",
                    description: "Learn JavaScript & jQuery",
                    image: "Master-JavaScript.jpg",
                    price: 20,
                    author: "SkillBakery.com",
                    published: true,
                    courseUrl: "https://www.udemy.com/master-javascript-jquery/",
                    CourseID: 1,
                    reviews: [{
                        rating: 5,
                        author: "student@skillbakery.com",
                        feedback: "Great Course"
                    },
                        {
                            rating: 3,
                            author: "anotherstudent@skillbakery.com",
                            feedback: "Good Course"
                        }
                    ]
                },
                {
                    title: "Master KnockoutJS",
                    description: "Learn KnockoutJS",
                    image: "Master-Knockout.jpg",
                    price: 39,
                    author: "SkillBakery.com",
                    published: true,
                    courseUrl: "https://www.udemy.com/master-knockoutjs-javascript/",
                    CourseID: 2,
                    reviews: [{
                        rating: 5,
                        author: "student@skillbakery.com",
                        feedback: "Great Course"
                    },
                        {
                            rating: 3,
                            author: "anotherstudent@skillbakery.com",
                            feedback: "Good Course"
                        }
                    ]
                },
                {
                    title: "AWS LAMP Setup",
                    description: "Learn JavaScript & jQuery",
                    image: "AWS-LAMP.jpg",
                    price: 50,
                    author: "SkillBakery.com",
                    published: true,
                    courseUrl: "https://www.udemy.com/amazon-web-services-lamp-setup-step-by-step/",
                    CourseID: 3,
                    reviews: [{
                        rating: 5,
                        author: "student@skillbakery.com",
                        feedback: "Great Course"
                    },
                        {
                            rating: 3,
                            author: "anotherstudent@skillbakery.com",
                            feedback: "Good Course"
                        }
                    ]
                },
                {
                    title: "Advanced jQuery",
                    description: "Learn JavaScript & jQuery",
                    image: "Advanced-jQuery.jpg",
                    price: 10,
                    author: "SkillBakery.com",
                    published: true,
                    courseUrl: "https://www.udemy.com/advanced-jquery-tips-tricks-for-developers-designers/",
                    CourseID: 4,
                    reviews: [{
                        rating: 5,
                        author: "student@skillbakery.com",
                        feedback: "Great Course"
                    },
                        {
                            rating: 3,
                            author: "anotherstudent@skillbakery.com",
                            feedback: "Good Course"
                        }
                    ]
                }
            ]));
  }

};