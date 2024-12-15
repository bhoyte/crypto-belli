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

## Project Workflow

### Current Status
- ✅ Project initialized with React and core dependencies
- ✅ Basic project structure set up
- ✅ GitHub project board configured with initial tasks
- 🏗️ Initial development environment ready

### Development Process
1. **Planning Phase**
   - Issues are created and labeled in GitHub
   - Tasks are organized in the project board
   - Priority and type labels guide development focus

2. **Development Phase**
   - Work on tasks according to priority
   - Move cards from "Todo" to "In Progress"
   - Create pull requests for review

3. **Review Phase**
   - Code review process
   - Testing and validation
   - Move cards to "Done" when completed

### Current Sprint Focus
- Initial Setup and Configuration
- Core Map Visualization Features
- Basic UI Components
- Project Documentation

## Contributing

1. Check the project board for available tasks
2. Assign yourself to an issue
3. Create a branch for your work
4. Submit a pull request when ready
5. Await review and merge

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
