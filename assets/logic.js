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
        frequency: "",
        nextArrival: "",
        minutesAway: "",
    },
    {
        train: "Oregon Trail",
        destination: "Salem, Oregon",
        frequency: "",
        nextArrival: "",
        minutesAway: "",
    },
    {
        train: "Midnight Carriage",
        destination: "Philadelphia",
        frequency: "",
        nextArrival: "",
        minutesAway: "",
    },
    {
        train: "Sing Sing Caravan",
        destination: "Atlanta",
        frequency: "",
        nextArrival: "",
        minutesAway: ""
    },
    {
        train: "Boston Bus",
        destination: "Boston",
        frequency: "",
        nextArrival: "",
        minutesAway: ""
    },
    {
        train: "California Caravan",
        destination: "San Francisco",
        frequency: "",
        nextArrival: "",
        minutesAway: ""
    },
    {
        train: "Analben's Train",
        destination: "Florida",
        frequency: "",
        nextArrival: "",
        minutesAway: ""
    },
];

function trainSchedule(){
//Logic to populate the table
for (i = 0; i < trains.length; i++) {
    card.append("<tr><td>" + trains[i].train + "</td><td>" + trains[i].destination);
    console.log(trains[i].train);
}
}

trainSchedule();