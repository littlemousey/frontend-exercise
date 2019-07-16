import * as React from "react";
import injectSheet, { WithSheet } from "react-jss";

import SelectList from "./SelectList";

const styles = {
  app: {
    margin: 0
  }
};

type Props = WithSheet<typeof styles>;

const App: React.SFC<Props> = ({ classes: { app } }) => (
  <div className={app}>
    <SelectList />
  </div>
);

export default injectSheet(styles)(App);
