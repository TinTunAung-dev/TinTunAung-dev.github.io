//Bind
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        this.students.forEach(function(student) {
            console.log(this.title + ": " + student);
        }.bind(this)); 
    }
};
group.showList();

//Call and Apply
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function() {
//         this.students.forEach(function(student) {
//             console.log(this.title + ": " + student);
//         }, this); 
//     }
// };
// group.showList();

//Self
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function() {
//         let self = this;
//         this.students.forEach(function(student) {
//             console.log(self.title + ": " + student);
//         }); 
//     }
// };
// group.showList();