import { createAd } from './create-ad.js';

// const marker = L.marker(
//   {
//     lat: 35.681729,
//     lng: 139.753927,
//   },
//   {
//     draggable: true,
//     icon: mainPinIcon,
//   },
// );

// marker.on('moveend', (evt) => {
//   console.log(evt.target.getLatLng());
// });
// const map = L.map('map-canvas')
//   .on('load', () => {
//     console.log('Карта инициализирована');
//   })
//   .setView({
//     lat: 35.681729,
//     lng: 139.753927,
//   }, 10);

// L.tileLayer(
//   'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//   {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//   },
// ).addTo(map);
// resetButton.addEventListener('click', () => {
//   mainPinMarker.setLatLng({
//     lat: 59.96831,
//     lng: 30.31748,
//   });

//   map.setView({
//     lat: 59.96831,
//     lng: 30.31748,
//   }, 16);
// });

// marker.addTo(map);

// mainPinMarker.remove();


// const points = [
//   {
//     title: 'Футура',
//     lat: 59.96925,
//     lng: 30.31730,
//   },
//   {
//     title: 'Шаверма',
//     lat: 59.96783,
//     lng: 30.31258,
//   },
//   {
//     title: 'Франк',
//     lat: 59.95958,
//     lng: 30.30228,
//   },
//   {
//     title: 'Ginza',
//     lat: 59.97292,
//     lng: 30.31982,
//   },
// ];

// points.forEach(({lat, lng}) => {
//   const marker = L.marker({
//     lat,
//     lng,
//   });

//   marker.addTo(map);
// });


const createPins = (ads) => {
  const map = L.map('map-canvas')
    .on('load', () => {
      console.log('Карта инициализирована');
    })
    .setView({
      lat: 35.681729,
      lng: 139.753927,
    }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const pinIcon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

  const mainPinIcon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 26],
  });

  const markerGroup = L.layerGroup().addTo(map);

  ads.forEach((ad) => {
    const marker = L.marker({
      lat: ad.location.lat,
      lng: ad.location.lng
    }, {
      icon: pinIcon
    });

    marker
      .addTo(markerGroup)
      .bindPopup(createAd(ad));
  });

};

export { createPins };
