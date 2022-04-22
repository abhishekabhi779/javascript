var user = {
    firstName :"abhi",
    lastname :"sattu",
    role:"member",
    loginCount :23,
    courseList : [],
    buyCourse :function (courseName) {
        this.courseList.push(courseName);
    },
    getCoursecount : function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} course`;
    }
};

console.log(user.getCoursecount());
user.buyCourse("js");
user.buyCourse("react.js");
console.log(user.courseList());