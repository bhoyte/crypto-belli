# Crypto Belli: Market Warfare Simulator
## Project Overview

### Executive Summary
Crypto Belli is an educational platform that transforms cryptocurrency market data into an engaging, war-game inspired visualization. The platform focuses on making cryptocurrency market dynamics understandable through simple, intuitive metaphors and clear visuals.

### Core Concept
Top cryptocurrencies are represented as nations on a simplified world map, where their market performance and interactions are displayed through basic military and diplomatic metaphors.

## Product Vision

### Key Features
1. **Cryptocurrency Nations (MVP)**
   - Focus on top 10 cryptocurrencies initially
   - Each represented as a nation with:
     * Simple visual identity (flag, color scheme)
     * Basic market statistics (market cap, 24h volume)
     * Territory size based on market cap

2. **Visualization System**
   - **Main Map View**
     * Static map updated hourly
     * Territory size changes based on market cap
     * Simple color coding for price movement (green/red)
     * Basic interaction indicators between major pairs

   - **Battle Reports**
     * Daily summary of major market movements
     * Simple narrative descriptions of price actions
     * Basic historical data viewing

3. **Educational Features**
   - Beginner-friendly market terminology guide
   - Simple tooltips explaining market concepts
   - Weekly market summary reports

## Technical Architecture

### Simplified Tech Stack
- **Frontend**: React (Create React App)
- **Visualization**: D3.js for map visualization
- **Data**: Single API (CoinGecko) with hourly updates
- **Styling**: Plain CSS with CSS Modules
- **Hosting**: GitHub Pages

### Data Management
- Hourly data updates (not real-time)
- Local storage for caching
- Single API endpoint to minimize complexity

### Development Roadmap

#### Phase 1: Foundation (Months 1-3)
- Project setup
- Basic static map implementation
- Simple API integration

#### Phase 2: Core Features (Months 4-6)
- Interactive map functionality
- Basic "battle report" system
- Educational tooltips

#### Phase 3: Polish (Months 7-9)
- User interface improvements
- Educational content
- Bug fixes and optimization

#### Phase 4: Launch (Months 10-12)
- Testing and refinement
- Documentation
- Public release

## Future Expansion Possibilities
- Real-time updates
- Advanced battle animations
- Additional cryptocurrencies
- Community features
- Trading pair visualization
- Mobile app version

## Success Metrics
- Basic user engagement tracking
- Website analytics
- User feedback collection

## Initial Monetization
- Basic affiliate links to exchanges
- Educational content partnerships

## Development Priorities
1. Functional core features over complex animations
2. Educational value over gameplay elements
3. Stability over real-time updates
4. Simple, clear UI over complex features
