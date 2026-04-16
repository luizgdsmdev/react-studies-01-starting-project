# React Essentials - Initial Studies

The project is published on GitHub Pages: <https://luizgdsm.github.io/react-studies-01-starting-project>

A React starter study project focused on the library's fundamental concepts. This project demonstrates the basic structure of a modern React application using current best practices.

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.3.9-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 📋 About the Project

This is a demonstration single page project that presents the essential React concepts in an interactive way. The application displays cards with the four fundamental pillars of React (Components, Props, State, JSX) and includes an examples section with tab navigation.

### Features

- **Dynamic Header**: Random subtitle that changes between "Fundamental", "Core", and "Essential"
- **Concepts List**: Interactive cards displaying the 4 main React concepts
- **Tab Examples**: Interactive navigation between different example topics
- **Responsive Design**: Adaptable interface with CSS Modules

## 🚀 Technologies Used

### Core

- **React 19** - JavaScript library for building user interfaces
- **React DOM 19** - React rendering for the web

### Build & Development

- **Vite 4.3.9** - Modern and fast build tool for development
- **@vitejs/plugin-react** - Official Vite plugin for React

### Deploy

- **gh-pages** - Automatic deployment to GitHub Pages

## 🛠️ Techniques and Patterns Used

### Componentization

- **Functional Components**: Exclusive use of function components
- **Component Composition**: Hierarchical structure with parent/child components
- **Separation of Concerns**: Each component has a single, well-defined purpose

### State and Props

- **useState Hook**: Local state management (tab selection)
- **Props drilling**: Passing data between components via props
- **Custom Hook (`useTabSelection`)**: Abstraction of tab state logic

### Styling

- **CSS Modules**: Local style scoping to avoid conflicts

### Data Structure

- **Data centralization**: Separate data files (`/utils/data/`)
- **Asset imports**: Images imported as modules

### Best Practices

- **JSDoc**: Component and hook documentation
- **Named exports for utilities**: Hooks and utility functions with named exports
- **Default exports for components**: Main components with default exports

## 📁 Project Structure

```text
src/
├── assets/              # Images and static resources
├── components/          # React components
│   ├── coreConceptsList/    # Concepts list
│   ├── examplesSnippet/     # Examples section with tabs
│   ├── header/              # Header component
│   └── main/                # Main component
├── hooks/               # Custom React hooks
├── utils/               # Utilities and data
│   ├── data/                # Data files
│   └── randomNumber/        # Random number generator
├── App.jsx              # Root component
├── index.css            # Global styles
└── index.jsx            # Entry point
```

## 🚀 Available Scripts

| Command           | Description                |
| ----------------- | -------------------------- |
| `npm run dev`     | Starts development server  |
| `npm run build`   | Generates production build |
| `npm run preview` | Previews production build  |
| `npm run deploy`  | Deploys to GitHub Pages    |

## 🌐 Demo

The project is published on GitHub Pages: <https://luizgdsm.github.io/react-studies-01-starting-project>

## 📄 License

This project is under the MIT license.
