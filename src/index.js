import "babel-polyfill";

import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { RouterProvider } from "react-router5";
import AsyncApp from "./containers/App/AsyncApp";
import createRouter from "./create-router";
import configureStore from "./store/configureStore";

import "./index.css";

const router = createRouter();
const store = configureStore(router);
const wrappedApp = (
  <Provider store={store}>
    <RouterProvider router={router}>
      <AsyncApp />
    </RouterProvider>
  </Provider>
);

router.start((err, state) => {
  render(wrappedApp, document.getElementById("root"));
});
