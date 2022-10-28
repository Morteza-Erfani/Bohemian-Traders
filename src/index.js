import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { store } from "./redux/Store";
import { Provider } from "react-redux";

// Styles
import "./index.css";
import "./Styles/fonts.css";

// Components
import App from "./App";
// Setup apollo client
const client = new ApolloClient({
  uri: process.env.REACT_APP_API_ADDRESS,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </Provider>
);
