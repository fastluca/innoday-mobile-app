import { AppState, Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import { callbackUri, clientId, domain as auth0Domain } from "./auth.config";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const queryClient = new QueryClient();

const onRedirectCallback = (appState?: AppState) =>
  window.location.replace(appState?.returnTo || window.location.pathname);

ReactDOM.render(
  <React.StrictMode>
    <h1>Axa splash</h1>
    <Auth0Provider
      domain={auth0Domain}
      clientId={clientId}
      redirectUri={callbackUri}
      onRedirectCallback={onRedirectCallback}
      /* Uncomment the following lines for better support  in browers like Safari where third-party cookies are blocked.
See https://auth0.com/docs/libraries/auth0-single-page-app-sdk#change-storage-options for risks. */
      // cacheLocation="localstorage",
      useRefreshTokens={true}
    >
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
