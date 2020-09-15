mapboxgl.accessToken =
  'pk.eyJ1IjoicGZ1cnRhayIsImEiOiJja2YzbTFpeDQwNGJvMndrdWI1c2M3MDN4In0.7kXrdvI0M6BBO7uA--KwMA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/pfurtak/ckf48etd40san1antnwuwldbf',
  center: [-87.661557, 41.893748],
  zoom: 10.7,
});
map.on('click', function (e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['chicago-parks'],
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
      '<h3>' +
        feature.properties.title +
        '</h3><p>' +
        feature.properties.description +
        '</p>'
    )
    .addTo(map);
});
