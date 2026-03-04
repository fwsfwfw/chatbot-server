# SafeNet Filter Site

A modern web application built with Angular

## Tech Stack

- **Framework:** Angular 21.0.0
- **Styling:** TailwindCSS
- **Icons:** Lucide Angular
- **Language:** TypeScript 5.9.3
- **Build Tool:** Vite 6.2.0

## Project Structure

```
safe-net-site/
├── src/
│   ├── components/          # Application components
│   │   ├── concept/         # Concept explanation component
│   │   ├── contact/         # Contact form component
│   │   ├── demo/            # Demo component
│   │   ├── footer/          # Footer component
│   │   ├── hero/            # Hero section component
│   │   ├── info-page/       # Information page component
│   │   ├── kashrut/         # Kashrut information component
│   │   ├── navbar/          # Navigation bar component
│   │   ├── steps/           # Steps guide component
│   │   └── tech-levels/     # Technical levels component
│   ├── services/            # Application services
│   │   ├── language.service.ts    # Language management
│   │   └── navigation.service.ts  # Navigation handling
│   ├── app.component.ts     # Root component
│   └── styles.css           # Global styles
├── angular.json             # Angular configuration
├── package.json             # Dependencies
└── tsconfig.json           # TypeScript configuration
```

## Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abaye123/safe-net-site.git
   cd safe-net-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000` (default Angular port).

## Build

Create a production build:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Preview Production Build

To preview the production build locally:
```bash
npm run preview
```

## Features

- Multi-component architecture for modular development
- Language service for potential internationalization
- Navigation service for routing management
- Responsive design with TailwindCSS
- Modern UI icons with Lucide Angular

## Dependencies

### Main Dependencies
- `@angular/core` - Angular framework core
- `@angular/forms` - Angular forms module
- `lucide-angular` - Icon library
- `rxjs` - Reactive extensions for JavaScript
- `tailwindcss` - Utility-first CSS framework

### Dev Dependencies
- `typescript` - TypeScript compiler
- `vite` - Build tool
- `@types/node` - Node.js type definitions

## License

Private project - use in accordance with the terms of the license given to you at the time of purchase