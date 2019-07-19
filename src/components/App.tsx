import * as React from "react";
import injectSheet, { WithSheet } from "react-jss";
import { Provider } from "react-redux";

import configureStore from "../store";
import Layout from "../containers/Layout";

const styles = {
  app: {
    margin: 0
  }
};

type Props = WithSheet<typeof styles>;

export const App: React.SFC<Props> = ({ classes: { app } }) => (
  <Provider store={configureStore()}>
    <div className={app}>
      <Layout />
    </div>
  </Provider>
);

export default injectSheet(styles)(App);
