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
database = firebase.database();
var card = $("#main-table");

//Array of trains
var trains = [
    {
        train: "Trenton Express",   
        destination: "Trenton",
        frequency: "25",
        nextArrival: "",
        minutesAway: "",
    },
    {
        train: "Oregon Trail",
        destination: "Salem, Oregon",
        frequency: "200",
        nextArrival: "",
        minutesAway: "",
    },
    {
        train: "Midnight Carriage",
        destination: "Philadelphia",
        frequency: "15",
        nextArrival: "",
        minutesAway: "",
    },
    {
        train: "Sing Sing Caravan",
        destination: "Atlanta",
        frequency: "3000",
        nextArrival: "",
        minutesAway: ""
    },
    {
        train: "Boston Bus",
        destination: "Boston",
        frequency: "60",
        nextArrival: "",
        minutesAway: ""
    },
    {
        train: "California Caravan",
        destination: "San Francisco",
        frequency: "100",
        nextArrival: "",
        minutesAway: ""
    },
    {
        train: "Analben's Train",
        destination: "Florida",
        frequency: "90",
        nextArrival: "",
        minutesAway: ""
    },
];

function trainSchedule(){
//Logic to populate the table
for (i = 0; i < trains.length; i++) {
    card.append("<tr><td>" + trains[i].train + "</td><td>" + trains[i].destination + "</td><td>" + trains[i].frequency);
    console.log(trains[i].train);
}
}

//populates the table with the trains from the array
trainSchedule();

//Generates the current time
var date = new Date(); 
var t = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

console.log(date);
console.log(t);

