//declaration.
//assignament.

//let age = 25;
//let price = 10.99;

//let firstname = 'John';
//let favoritegame = 'COD';

/*let online = true;
let aproved = false;
document.getElementById("myh1").textContent = `My name is John and im online: ${online}`;
if(aproved == false) {
    console.log('Its approved');
}*/

function getClietIP(){
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position){    
            var ip = position.coords.latitude + "," + position.coords.longitude;    
            alert(`Your IP adress is: ${ip}`);  
        });
    }  else{
        alert("Geolocation is not supported by your browser and this application does not work properly without it.");
}
}
getClietIP();