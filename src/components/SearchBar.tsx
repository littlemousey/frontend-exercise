import * as React from "react";
import injectSheet, { WithSheet } from "react-jss";

import SearchIcon from "../../assets/search.svg";
import { COLORS } from "../constants";

const styles = {
  container: {
    border: `1px solid ${COLORS.darkGrey}`,
    backgroundColor: COLORS.white,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px",
    borderRadius: "3px"
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    fontSize: "20px",
    border: "none",
    "&:focus": {
      outline: "none"
    }
  },
  icon: {
    height: "20px",
    width: "20px"
  }
};

interface OwnProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type Props = OwnProps & WithSheet<typeof styles>;

export const SearchBar: React.SFC<Props> = ({ onChange, classes }) => (
  <div className={classes.container}>
    <input
      onChange={onChange}
      className={classes.input}
      placeholder="Zoek op ..."
    />
    <SearchIcon viewBox="0 0 14 14" className={classes.icon} />
  </div>
);

export default injectSheet(styles)(SearchBar);
