# Vue Admin Dashboard

A modern, responsive admin dashboard built with Vue.js, featuring a clean UI, comprehensive components, and powerful data visualization tools.

![Dashboard Preview](./screenshots/dashboard-preview.png)

## Features

- 📱 Fully responsive design - works on all devices
- 🎨 Customizable themes and layouts
- 📊 Interactive charts and data visualization components
- 📋 Advanced data tables with sorting, filtering, and pagination
- 🔒 Role-based access control
- 🌐 Multi-language support
- 🔍 Global search functionality
- 🔔 Real-time notifications
- 📝 Form validation and wizard components

## Tech Stack

- **Frontend Framework**: Vue.js 3
- **State Management**: Vuex 4
- **Routing**: Vue Router 4
- **UI Components**: 
  - Element Plus
  - Tailwind CSS
- **HTTP Client**: Axios
- **Charts**: ECharts/Vue-ECharts
- **Authentication**: JWT
- **Icons**: Font Awesome
- **Testing**: Jest, Vue Test Utils
- **Build Tools**: Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── api/                # API services and config
│   ├── assets/             # Theme assets (images, fonts, etc.)
│   ├── components/         # Reusable Vue components
│   ├── layouts/            # Application layout components
│   ├── router/             # Vue router configuration
│   ├── store/              # Vuex store modules
│   ├── utils/              # Utility functions
│   ├── views/              # Page components
│   ├── App.vue             # Root component
│   └── main.js             # Application entry point
├── tests/                  # Unit and integration tests
├── .eslintrc.js            # ESLint configuration
├── .gitignore              # Git ignore rules
├── babel.config.js         # Babel configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite configuration
```

## Installation

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.22.x or later)

### Project setup
```
npm install
# or
yarn install
```

### Compiles and hot-reloads for development
```
npm run serve
# or
yarn serve
```

### Compiles and minifies for production
```
npm run build
# or
yarn build
```

### Lints and fixes files
```
npm run lint
# or
yarn lint
```

### Run unit tests
```
npm run test:unit
# or
yarn test:unit
```

## Configuration

### Environment Variables

Create a `.env` file in the project root with the following variables:

```
VUE_APP_API_URL=https://your-api-url.com
VUE_APP_API_TIMEOUT=10000
VUE_APP_I18N_LOCALE=en
VUE_APP_I18N_FALLBACK_LOCALE=en
```

### Customize Configuration
See [Vue CLI Configuration Reference](https://cli.vuejs.org/config/).

## Authentication

The dashboard uses JWT (JSON Web Tokens) for authentication. The token is stored in localStorage and included in the Authorization header for API requests.

## API Integration

The application communicates with RESTful APIs using Axios. API service modules are organized in the `src/api` directory.

Example usage:

```javascript
import { getUserData } from '@/api/user';

// In a component method
async fetchUserData() {
  try {
    const userData = await getUserData(userId);
    this.user = userData;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
  }
}
```

## State Management

Vuex is used for centralized state management. Store modules are organized by feature in the `src/store` directory.

## Internationalization

The dashboard supports multiple languages through Vue I18n. Language files are stored in `src/locales`.

## Theming

The application supports light and dark themes, with additional customization options available in the user settings panel.

## Performance Optimization

- Code splitting using dynamic imports
- Lazy loading of routes and components
- Tree-shaking for reduced bundle size
- Asset optimization and minification

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
