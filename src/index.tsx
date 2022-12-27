import React from 'react';
import ReactDOM from 'react-dom/client';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <FluentProvider theme={teamsLightTheme}>
    <App />
  </FluentProvider>
);