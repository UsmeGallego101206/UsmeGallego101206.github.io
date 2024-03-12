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

/*function getClietIP(){
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
*/
const mapDiv = document.getElementById("map");
let map;
function initMap() {
navigator.geolocation.getCurrentPosition(function(position){    
    var ip = position.coords.latitude;
    var ip2 = position.coords.longitude;
    console.log(`<p> Your latitude is : ${ip}</p>`);
    console.log(`<p> Your longitude is : ${ip2}</p>`);
    map = new google.maps.Map(mapDiv, {
    center: {lat: ip, lng: ip2},
    zoom: 8,
  });
  marker = new google.maps.Marker({
      position:{
          lat: ip,
          lng: ip2
      },
      map: map,
      title:"You are here!"
  })    
    });
  
}
initMap();