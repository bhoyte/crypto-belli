import * as d3 from 'd3';

export const loadWorldData = async () => {
  try {
    const response = await fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson');
    return await response.json();
  } catch (error) {
    console.error('Error loading world map data:', error);
    return null;
  }
};

export const getMapProjection = (width, height) => {
  return d3.geoMercator()
    .scale((width) / (2 * Math.PI))
    .translate([width / 2, height / 1.5]);
};

export const getMapPath = (projection) => {
  return d3.geoPath().projection(projection);
};

export const getCryptoIntensity = (cryptoData) => {
  const maxMarketCap = d3.max(cryptoData, d => d.market_cap) || 1;
  return d3.scaleLog()
    .domain([1, maxMarketCap])
    .range([5, 15]); // Adjusted size range to make markers more visible
};
