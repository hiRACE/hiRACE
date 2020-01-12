function initMap() {
  // The location of Rankine Building, from Google Maps, right-click location and select "what's here"
  var rankine = {lat: 55.872488, lng: -4.285597};
  // The map, centered at Rankine Building.
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: rankine});
  // The marker, positioned at Rankine Building
  var marker = new google.maps.Marker({position: rankine, map: map});


}
<div style="width: 100%"><iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=55.872488,-4.285597&amp;q=Oakfield%20Ave+(Rankine%20Building)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/coordinates.html">gps coordinates</a></iframe></div><br />

<div style="width: 100%"><iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=55.872488,-4.285597&amp;q=Oakfield%20Ave+(Rankine%20Building)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/coordinates.html">find my coordinates</a></iframe></div><br />
