console.log(hello);                                   
var hello = 'world'; 
//interpreter reads it.
// var hello;
// console.log(hello);
// hello = 'world';
// output: undefined
/*************************************************************************************/
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//interpreter reads it.
// var needle;
// function test(){
//     var needle;
//     var needle = 'magnet';
//     console.log(needle);
// }
// test();
// needle = 'haystack';
//output = 'magnet'
/*************************************************************************************/
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//interpreter reads it.
// var brendan;
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// brendan = 'super cool';
// console.log(brendan);
//output = 'super cool'
/*************************************************************************************/
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//interpreter reads it.
// var food;
// function eat(){
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }
// var food = 'chicken';
// console.log(food);
// eat();
//output : 'chicken','half-chicken';
/*************************************************************************************/
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.logcopy(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
//interpreter reads it.
// var mean
// mean();
// console.log(food);
// var mean = function() {
//     var food;
//     food = "chicken";
//     console.logcopy(food);
//     food = "fish";
//     console.log(food);
// }
// console.log(food);
//output : error: TypeError: mean is not a function
/*************************************************************************************/
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
//interpreter reads it.
// var genre;
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// genre = "disco";
// rewind();
// console.log(genre);
//output: undefined,"rock","r&b","disco"
/*************************************************************************************/
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo); 
//interpreter reads it.
// var dojo;
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);
// learn();
// console.log(dojo);
//output: "san jose","seattle","burbank","san jose"
/*************************************************************************************/
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//interpreter reads it.
// function makeDojo(name, students){
//     const dojo;
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
//output: error