# Crypto Belli

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An educational cryptocurrency visualization platform that transforms market data into an engaging war-game inspired experience.

## Project Structure

```
crypto-belli/
├── src/
│   ├── components/           # React components
│   │   ├── Map/             # D3.js map visualization
│   │   │   ├── WorldMap.js  # Base map component
│   │   │   └── Nations.js   # Cryptocurrency nations
│   │   ├── UI/              # Basic UI components
│   │   │   ├── Tooltip.js   # Educational tooltips
│   │   │   └── Reports.js   # Daily summaries
│   │   └── common/          # Shared components
│   ├── services/
│   │   ├── api.js           # CoinGecko API integration
│   │   └── storage.js       # Local storage management
│   ├── styles/              # CSS module files
│   │   ├── Map.module.css
│   │   └── UI.module.css
│   └── utils/
│       ├── formatters.js    # Data formatting helpers
│       └── constants.js     # Shared constants
├── public/
│   ├── index.html
│   └── assets/             # Static assets
│       └── flags/          # Cryptocurrency nation flags
└── docs/                   # Documentation
    ├── core-concept.md     # Project overview
    ├── map-mechanics.md    # Map visualization details
    ├── education.md        # Educational content
    └── future-concepts/    # Future feature ideas
```

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

## Key Features

- Simple map visualization of top 10 cryptocurrencies
- Hourly market data updates via CoinGecko API
- Educational tooltips and terminology guides
- Daily market summary reports

## Technology Stack

- React (Create React App) for UI framework
- D3.js for basic map visualization
- CoinGecko API for market data
- CSS Modules for styling
- GitHub Pages for simple hosting

## Development Status

Current Phase: Initial Development
Target Launch: Q4 2024

## Development Workflow

### GitHub Project Boards

The project uses GitHub Projects for task management with the following structure:

```
Project Boards:
└── Crypto Belli Development
    ├── 📋 Backlog
    │   └── Future features and ideas
    ├── 🎯 Sprint Planning
    │   └── Next tasks to implement
    ├── 🏗️ In Progress
    │   └── Currently working on
    ├── 👀 Review
    │   └── Ready for testing
    └── ✅ Done
        └── Completed features
```

### Issue Labels

- `feature`: New functionality
- `bug`: Something isn't working
- `documentation`: Documentation updates
- `enhancement`: Improvements to existing features
- `good first issue`: Good for first-time contributors
- `help wanted`: Extra attention needed

### Development Process

1. **Task Creation**
   - Create issues for new features/bugs
   - Add appropriate labels
   - Link to project board

2. **Development**
   - Create feature branch from issue
   - Implement changes
   - Test locally

3. **Review & Deploy**
   - Self-review changes
   - Test on GitHub Pages
   - Merge to main branch

### Milestones

- **Phase 1: Foundation** (Months 1-3)
  - [ ] Project setup
  - [ ] Basic map implementation
  - [ ] API integration

- **Phase 2: Core Features** (Months 4-6)
  - [ ] Interactive map
  - [ ] Battle reports
  - [ ] Educational tooltips

- **Phase 3: Polish** (Months 7-9)
  - [ ] UI improvements
  - [ ] Content creation
  - [ ] Bug fixes

- **Phase 4: Launch** (Months 10-12)
  - [ ] Testing
  - [ ] Documentation
  - [ ] Public release

## Development Guidelines

1. Keep it Simple
   - Focus on core educational features
   - Use basic animations and transitions
   - Minimize external dependencies

2. Performance First
   - Hourly data updates instead of real-time
   - Efficient DOM updates
   - Local storage for caching

3. Educational Focus
   - Clear, beginner-friendly UI
   - Helpful tooltips and guides
   - Simple market explanations

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

The MIT License was chosen because:
- It's simple and widely understood
- Allows for both educational and commercial use
- Provides basic liability protection
- Encourages collaboration and sharing
