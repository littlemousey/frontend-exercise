import * as React from "react";
import injectSheet, { WithSheet } from "react-jss";

const styles = {
  container: {
    border: "1px solid grey"
  },
  input: {
    width: "100%",
    padding: "6px"
  }
};

interface OwnProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type Props = OwnProps & WithSheet<typeof styles>;

export const SearchBar: React.SFC<Props> = ({ onChange, classes }) => (
  <div className={classes.container}>
    <input onChange={onChange} className={classes.input} placeholder="Zoek op ..." />
  </div>
);

export default injectSheet(styles)(SearchBar);
