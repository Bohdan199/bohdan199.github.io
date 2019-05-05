

 mapboxgl.accessToken = 'pk.eyJ1IjoiYm9oZGFuMTk5IiwiYSI6ImNqdW5ydnVsazJ2b2s0ZnBqOGhvamFpa3AifQ.z7AwHRljt-1cezaTeb7LpA';
 var coordinates = document.getElementById('coordinates');
 var map = new mapboxgl.Map({
 container: 'map',
 style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
 center: [30.488705, 50.489175],
 zoom: 10
});

var marker = new mapboxgl.Marker()
  .setLngLat([30.488705, 50.489175])
  .addTo(map);

 document.getElementById('barcelona').addEventListener('click', function () {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [2.163165,41.375936]
});
});
var marker = new mapboxgl.Marker()
  .setLngLat([2.163165,41.375936])
  .addTo(map);

 document.getElementById('Kyiv').addEventListener('click', function () {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [30.488705, 50.489175],
 zoom: 9
});
});

 document.getElementById('rome').addEventListener('click', function () {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [12.497526,41.902276]
});
});
var marker = new mapboxgl.Marker()
  .setLngLat([12.497526,41.902276])
  .addTo(map);

document.getElementById('new-york').addEventListener('click', function () {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [-74.004331,40.716132]
});
});
var marker = new mapboxgl.Marker()
  .setLngLat([-74.004331,40.716132])
  .addTo(map);

$(function(){
 $('form').submit(function(e){
  var data = $(this).serialize()
  console.log(data);
  e.preventDefault(); // или return false;

 });
});

let sendForm = () => {
  document.getElementById
}

$(function(){
 $('form').submit(function(e){
  var data = $(this).serialize()
  $.ajax({
 url: 'http://localhost/index.php',
 type: 'POST',
 data: data,
 success: function(x, success){
    // alert(x.status);

 },
 error: function(jqXHR, textStatus, errorThrown) {
    alert(jqXHR.status);
    alert(textStatus);
    alert(errorThrown);

},
statusCode: {
    404: function() {
      alert('page not found');
    },
    200: function() {
      alert("Your form Send");
    }

}
  });
  e.preventDefault(); // или return false;
 });
});








 let clickTab = (that) => {  
  console.log(that);
    console.log($(that).attr('id'));
let blockName=$(that).attr('id')+"-info";
$("#content").html($("#blockName").html());
console.log(blockName );


 }


$('#mytabe a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})



$(function () {
    $("#myTab").tab('show');
  })

$('#someTabe').tab('show')

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
})

