# Vite React PWA Minimal Demo

This project demonstrates a minimal working demo of a Vite project using [Vite PWA](https://vite-pwa-org.netlify.app/frameworks/) to support offline caching of the core application assets.

The first commit contains the inital vite react project generated from the react-ts template:

```
yarn create vite my-vue-app --template react-ts
```

The second commit demonstrates all boilerplate code required to implement the vite-plugin-pwa module.

- Service worker setup: https://vite-pwa-org.netlify.app/guide/
- Asset handling: https://vite-pwa-org.netlify.app/guide/static-assets.html
- React stateful values: https://vite-pwa-org.netlify.app/frameworks/react.html


## Getting Started

Install dependencies:

```
yarn
```

Build the application:

```
npx vite build
```

Run the production application:

```
npx vite preview
```

## Additional Info

Note: this application does NOT meet the minimum requirements for a PWA application, and is therefore not installable. Additional configuration is required as described here: https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html and here: https://web.dev/learn/pwa/web-app-manifest/