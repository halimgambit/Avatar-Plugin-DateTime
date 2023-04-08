exports.action = function(data, callback){

	var tblCommand = {
	time : function() {time (data, client);
},
	date : function() {date (data, client);
},	
    rappel : function() {rappel (data, client);
}	
};

	let client = setClient(data);

	info("DateTime:", data.action.command, "From:", data.client, "To:", client);
	
	tblCommand[data.action.command]();
	
	callback();
}

function time (data, client) {

	let ville = "Paris";

	fetch("https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/" + ville)
	.then(response => response.json())
	.then(response2 => {
    console.log(response2)
    Avatar.speak("il est." + response2.time , data.client, function(){
		Avatar.Speech.end(data.client);

	if(response2.hour > 5 && response2.hour < 9){
		Avatar.speak("je vous souhaite une Bonne journné|je vous souhaite une Bonne matiné!", data.client, function(){
		Avatar.Speech.end(data.client);
		});
	}
		if(response2.hour > 13 && response2.hour < 16){
		Avatar.speak("je vous souhaite un Bon aprés midi!", data.client, function(){
		Avatar.Speech.end(data.client);
		});
	}
		if(response2.hour > 17 && response2.hour < 23){
		Avatar.speak("je vous souhaite une Bonne soirée!", data.client, function(){
		Avatar.Speech.end(data.client);
		});
	}
	if(response2.hour > 0 && response2.hour < 4){
		Avatar.speak("je vous souhaite une Bonne nuit!", data.client, function(){
		Avatar.Speech.end(data.client);
		});
	}

});

})


}


function date (data, client) {

Avatar.speak("Nous somme le." + new Date().toLocaleDateString('fr-fr', {weekday:"long", year:"numeric", month:"short", day:"numeric"}) , data.client, function(){
	Avatar.Speech.end(data.client);
	});

}

	/*

		fetch("https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Paris")
	.then(response => response.json())
	.then(response2 => {
console.log(response2)
	Avatar.speak("Nous somme le." + date, data.client, function(){
		Avatar.Speech.end(data.client);
	});
	});
})
*/


/*
let annee = "2023";
	var today = new Date();
    annee_actuel = today.getFullYear();
    mois_actuel = today.getMonth() +1;
    jour_actuel = today.getDate();

	Avatar.speak("Nous somme le." + date, data.client, function(){
	if(annee_actuel === annee && mois_actuel === 1 && jour_actuel === 1) {
	Avatar.speak("aujourd'hui c'est le nouvel", data.client, function(){
	Avatar.speak("Bonne année!", data.client, function(){
	Avatar.Speech.end(data.client);
	});
    });
}
	if(annee_actuel === annee && mois_actuel === 12 && jour_actuel === 25) {
		Avatar.speak("aujourd'hui c'est noél!", data.client, function(){
		Avatar.speak("Joyeux noél!", data.client, function(){
		Avatar.Speech.end(data.client);
		});
	});
	}

    });
    */

function rappel (data, client) {

}


function setClient(data){
    var client = data.client;
    if (data.action.room)
    client = (data.action.room != 'current') ? data.action.room : (Avatar.currentRoom) ? Avatar.currentRoom : Config.default.client;
    if (data.action.setRoom)
    client = data.action.setRoom;
    return client;
}


/*

var birthday = new Date(1994, 12, 10);
var copy = new Date();
copy.setTime(birthday.getTime());
console.log(copy);


let end, start;

let start = new Date();
for (var i = 0; i < 3000; i++) {
 Math.sqrt(i);
}
let end = new Date();
console.log("L'operation prend." + (end.getTime() - start.getTime()) + ' msec');


var date = new Date();
var heure = date.getHours();
var minute = date.getMinutes();
alert(heure + "heure:" + "et" + ":" + minute + "minute");



var moment = require('moment');
moment.lang('fr');
var heure = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
alert(heure);



var now = new Date(); 
var datetime = ' '+now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
alert(datetime);


var now = new Date(); 
  var date = now.getFullYear()+'/'+(now.getMonth()+1)+'/'+now.getDate(); 
  var time = ' '+now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
  alert(date + "" + time);


var now = new Date(); 
  var date = now.getFullYear()+'/'+(now.getMonth()+1)+'/'+now.getDate(); 
  alert(date);

var d = new Date();
alert(d.toLocaleString());
*/