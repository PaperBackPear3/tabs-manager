# Tabs Manager Chrome Extension

## Overview

Tabs Manager is a Chrome extension built with Vite, React, and TypeScript. It aims to simplify tab management by automatically grouping tabs based on similar URLs or user-defined queries.

## Features

- **Automatic Tab Grouping**: Automatically groups tabs with similar URLs (e.g., GitHub, StackOverflow).
- **User-Defined Queries**: Allows users to define custom queries for grouping tabs.

## Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/yourusername/tabs-manager.git
  cd tabs-manager
  ```

2. Install dependencies:
  ```sh
  npm install
  ```

3. Build the project:
  ```sh
  npm run build
  ```

4. Load the extension in Chrome:
  - Open Chrome and navigate to `chrome://extensions/`
  - Enable "Developer mode"
  - Click "Load unpacked" and select the `dist` directory

## Development

1. Start the development server:
  ```sh
  npm run dev
  ```

2. Open Chrome and navigate to `chrome://extensions/`
  - Enable "Developer mode"
  - Click "Load unpacked" and select the `dist` directory

3. Make changes to the code and see them reflected instantly with Vite's HMR.

## Usage

- **Automatic Grouping**: The extension will automatically group tabs with similar URLs.
- **Custom Queries**: Define custom queries in the extension settings to group tabs based on your preferences.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
