// Initialize Firebase
var config = {
    apiKey: "AIzaSyDWOnoavGNQ1uCe8t5B-rvA-Hd0ACd_O9w",
    authDomain: "train-time-69aba.firebaseapp.com",
    databaseURL: "https://train-time-69aba.firebaseio.com",
    projectId: "train-time-69aba",
    storageBucket: "train-time-69aba.appspot.com",
    messagingSenderId: "722972657872"
};
firebase.initializeApp(config);

//saves the firebase database as a variable
db = firebase.database();
var fireTrains = db.ref('trains');

var card = $("#main-table");

//Generates the current time
var t = moment().format('LT');
var timeStamp = Date.now();
var nextTime = $("#train-time");
console.log(t);
console.log(timeStamp);
//==========================================

var trains = {
    name: "test",
    destination: "",
    frequency: "",
    nextArrival: "",
    minutesAway: ""
};

function calcNext(a) {
    trains.nextArrival = Math.abs(23:)
}


$("#submit").click(function(e){
    e.preventDefault();
    calcNext(nextTime);
    trains.name = $("#train-name").val().trim();
    trains.destination = $("#train-destination");
    trains.frequency = $("#train-frequency");
    console.log(trains.nextArrival);
    // db.ref().push().set(trains)
});


//Array of trains
// var trains = {
//         "Trenton Express": {
//         destination: "Trenton",
//         frequency: "25",
//         nextArrival: "",
//         minutesAway: "",
//     },
    
//         "Oregon Trail": {
//         destination: "Salem, Oregon",
//         frequency: "200",
//         nextArrival: "",
//         minutesAway: "",
//     }
//     {
//         train: "Midnight Carriage",
//         destination: "Philadelphia",
//         frequency: "15",
//         nextArrival: "",
//         minutesAway: "",
//     },
//     {
//         train: "Sing Sing Caravan",
//         destination: "Atlanta",
//         frequency: "3000",
//         nextArrival: "",
//         minutesAway: ""
//     },
//     {
//         train: "Boston Bus",
//         destination: "Boston",
//         frequency: "60",
//         nextArrival: "",
//         minutesAway: ""
//     },
//     {
//         train: "California Caravan",
//         destination: "San Francisco",
//         frequency: "100",
//         nextArrival: "",
//         minutesAway: ""
//     },
//     {
//         "Analben's Train"
//         destination: "Florida",
//         frequency: "90",
//         nextArrival: "",
//         minutesAway: ""
//     }
// };


// var lengthTest = trains.length;
// function trainSchedule(){
// //Logic to populate the table
// for (i = 0; i < trains.length; i++) {
//     card.append("<tr><td>" + trains[i].train + "</td><td>" + trains[i].destination + "</td><td>" + trains[i].frequency);
//     console.log(trains[i].train);
//     console.log(lengthTest);
// }
// // fireTrains.update(trains);
// }

//populates the table with the trains from the array
// trainSchedule();




