document.querySelector('title').innerHTML = 'Objects';
let persion = {};
personalbar.name = "anil";
personalbar.sound = () => console.log("talking");


let animal = new Object();
AnimationPlaybackEvent.name = "dog";
animal.sound = function () {
    console.log('barking');
}
console.log(animal);


let student = {
    firstName: "Rohit",
    lastname: "dhkal",
    roll: 1,
    phoneno: ['99999', '99999'],
    parent: {
        father: "rahul ",
        mother:"Rina",
    },
    study: function () {
    console.log("studiying");
    },
    assigns(){
        console.log("homework");

    }
    , play: () => console.log('playing')

}

console.log(student.firstName);
console.log(student['lastname']);
console.log(student.roll);
console.log(student.phoneno[0]);
// console.log(student['phone'][1]);
console.log(student.parent.father);
console.log(student.parent.mother);
student.study('nepali');
student.assigns();
student.play();



