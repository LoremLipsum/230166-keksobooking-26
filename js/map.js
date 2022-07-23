import { createAd } from './create-ad.js';

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

const map = L.map('map-canvas')
  .on('load', () => {
    console.log('Карта инициализирована');
  })
  .setView({
    lat: 35.681729,
    lng: 139.753927,
  }, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const createPins = (ads) => {
  const pinIcon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
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

const createMainPin = () => {
  const mainPinIcon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 26],
  });

  const mainMarkerGroup = L.layerGroup().addTo(map);

  const mainMarker = L.marker({
    lat: 35.681729,
    lng: 139.753927,
  }, {
    icon: mainPinIcon,
    draggable: true,
  });

  mainMarker.addTo(mainMarkerGroup);

  mainMarker.on('moveend', (evt) => {
    console.log(evt.target.getLatLng());
  });
};

export { createPins, createMainPin };
