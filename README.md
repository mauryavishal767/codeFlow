# Code Flow

Code Flow is a web-based code playground that allows users to create folders and files, write code in multiple languages (C++, Java, JavaScript, Python), run code with custom input, and manage their code projects in an organized way. It features a Monaco-powered code editor, file/folder management, and integration with the Judge0 API for code execution.

**Deployed** : <a href="https://code-flow-eight.vercel.app/" target="_blank">Code Flow</a>

## Features

- **Create and manage folders and files**: Organize your code into folders and files, rename, delete, and edit them.

- **Multi-language support**: Write and run code in C++, Java, JavaScript, and Python.

- **Monaco Editor**: Rich code editing experience with syntax highlighting and themes.

- **Run code with input**: Provide custom input and view output or errors.

- **Import/Export code and input/output**: Easily import code/input from files and export your code/output.

- **Persistent storage**: All data is saved in `localStorage` for session persistence.

- **Responsive UI**: Modern, clean interface with folder/file navigation.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

Clone the repository:

```sh
git clone <your-repo-url>
cd codeFlow
```

Install dependencies:

```sh
npm install
```

## Build Instructions

To build the project for production:

```sh
npm run build
```

This will generate a production-ready build in the `dist` folder.

## Run Instructions

To start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to use Code Flow.

To preview the production build:

```sh
npm run preview
```

## Known Issues

- **Judge0 API Key**: The Judge0 API key is hardcoded in `judge0.js`. If the quota is exceeded or the key is invalid, code execution will fail.

- **No authentication**: All data is stored locally; there is no user authentication or cloud sync.

- **No mobile optimization**: The UI is primarily designed for desktop use.

## File Structure

- `App.jsx`: Main app component and routing.

- `PlaygroundScreen.jsx`: Playground screen for code editing and running.

- `HomeScreen.jsx`: Home screen with folder/file management.

- `judge0.js`: Judge0 API integration for code execution.

- `PlaygroundProvider.jsx`: State management for folders/files.

- `ModelProvider.jsx`: Modal state management.