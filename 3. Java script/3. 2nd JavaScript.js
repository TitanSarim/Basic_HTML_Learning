function student (first, last, age){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.greeting =function(){
        return "Hi iam " +this.firstname + "and iam" + this.age + 
        "years old";
}
}

// var student = {
//     firstname: "sarim",
//     lastname: "zahid",
//     age: 7,

//     greeting: function(){
//             return "Hi iam " +this.firstname + "and iam" + this.age + 
//             "years old";
//     }
// };

// console.log(student.greeting());


var s1 = new student("JENNY", "LAGA", 5);
console.log(s1);
console.log(s1.greeting());

student.push(new student("jenny","lega", 5));

// //---create a new empty object
// var student1 = new Object();
// student1.firstname = "Jhon";
// student1.lastname = "parker ";
// student1.age = 7;

// var student2 = {};
// student2.firstname = "sarim";
// student2.lastname = "ZAHID";
// student2.age = 5;

// var student = [];
// student.push(student1);
// student.push(student2);

// for(var index = 0; index < student.length; index++){
//     console.log(student[index]);
// }


// console.log(student.firstname);
// console.log(student.lastname);
// console.log(student["firstname"]);
// console.log(student["lastname"]);

// var students = ["sarim","dani","bilu","heimer","smith"];

// for(var index = 0; index < students.length; index++){

// }