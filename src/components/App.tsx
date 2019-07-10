import * as React from "react";
import injectSheet, { WithSheet } from "react-jss";

const styles = {
  app: {
    margin: 0
  }
};

type Props = WithSheet<typeof styles>;

const App: React.SFC<Props> = ({ classes: { app } }) => (
  <div className={app}>Placeholder</div>
);

export default injectSheet(styles)(App);
