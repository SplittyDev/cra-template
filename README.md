# cra-template
> SplittyDev's personal and production-ready create-react-app template.

## Tech Stack

- [Jest] as test runner
- [Testing Library] for component testing
- [React Router DOM] for routing
- [Styled Components] for styling
- [Recoil] for state management
- [Recoil Persist] for state persistence and hydration

## Additional Goodies

- Imports relative to `src` are enabled by default:
  ```js
  import MyComponent from 'components/MyComponent'
  import MyPage from 'pages/MyPage'
  ```
- This template provides a basic `.editorconfig` file

## Project Structure

```
.
├── README.md
├── .editorconfig
├── .gitignore
├── jsconfig.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.js
    ├── App.test.js
    ├── components
    │   └── Page.js
    ├── index.css
    ├── index.js
    ├── pages
    │   └── HomePage.js
    ├── reportWebVitals.js
    └── setupTests.js
```

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.

[Jest]: https://www.npmjs.com/package/jest
[Testing Library]: https://www.npmjs.com/package/@testing-library/react
[React Router DOM]: https://www.npmjs.com/package/react-router-dom
[Styled Components]: https://www.npmjs.com/package/styled-components
[Recoil]: https://www.npmjs.com/package/recoil
[Recoil Persist]: https://www.npmjs.com/package/recoil-persist