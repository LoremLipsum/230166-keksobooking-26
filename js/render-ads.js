import { createAd } from './create-ad.js';

const mapNode = document.querySelector('#map-canvas');

const renderAds = (ad) => {
  mapNode.append(createAd(ad));
};

export { renderAds };

