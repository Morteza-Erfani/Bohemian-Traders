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

const client = new ApolloClient({
  uri: "https://api-ap-southeast-2.hygraph.com/v2/cl7c9dew64bbo01uhgm6g4vae/master",
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
