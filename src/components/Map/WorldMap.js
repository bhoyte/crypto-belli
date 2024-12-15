import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import styles from '../../styles/Map.module.css';
import { loadWorldData, getMapProjection, getMapPath, getCryptoIntensity } from '../../utils/mapUtils';

const WorldMap = ({ data }) => {
  const svgRef = useRef(null);
  const [worldData, setWorldData] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 });

  useEffect(() => {
    const loadData = async () => {
      const geoData = await loadWorldData();
      setWorldData(geoData);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (!worldData || !data) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Set up the map projection
    const projection = getMapProjection(dimensions.width, dimensions.height);
    const path = getMapPath(projection);
    const intensityScale = getCryptoIntensity(data);

    // Create the base map
    const g = svg.append("g");
    
    // Add zoom behavior
    const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);

    // Draw countries
    g.selectAll("path")
      .data(worldData.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("class", styles.country)
      .attr("fill", "#2C3E50")
      .attr("stroke", "#1B2631")
      .attr("stroke-width", "0.5px");

    // Add crypto market indicators
    if (data.length > 0) {
      data.forEach(crypto => {
        if (crypto.country_origin) {
          const [lon, lat] = projection([
            parseFloat(crypto.country_origin.longitude),
            parseFloat(crypto.country_origin.latitude)
          ]);

          g.append("circle")
            .attr("cx", lon)
            .attr("cy", lat)
            .attr("r", intensityScale(crypto.market_cap) * 10)
            .attr("fill", "#F1C40F")
            .attr("opacity", 0.6)
            .attr("class", styles.cryptoMarker)
            .append("title")
            .text(`${crypto.name}: $${crypto.market_cap.toLocaleString()}`);
        }
      });
    }
  }, [worldData, data, dimensions]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const container = svgRef.current?.parentElement;
      if (container) {
        setDimensions({
          width: container.clientWidth,
          height: container.clientHeight
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.mapContainer}>
      <svg 
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className={styles.map}
      />
    </div>
  );
};

export default WorldMap;
