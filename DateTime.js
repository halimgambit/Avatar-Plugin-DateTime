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
