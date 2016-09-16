
var mapGlobal = null;
function initMap(mapId,latVar,lngVar) {    
  mapGlobal = new google.maps.Map(document.getElementById(mapId), {		
		center: { lat: latVar, lng: lngVar },      
		//scrollwheel: false, //wylacza scrollwheel
		zoom: 12
  }); 
 }
 
  function makeMarker(position,iconVar){
      var marker;
      if(iconVar!='' &&iconVar!=null){
		marker = new google.maps.Marker({
			position: position
			, map: mapGlobal
			, icon: iconVar
		});
      }else{
         marker = new google.maps.Marker({
			position: position
			, map: mapGlobal
			//, icon: iconVar
		}); 
      }
      return marker;
	}