import * as React from "react";
import injectSheet, { WithSheet } from "react-jss";

import { COLORS } from "../constants";

const styles = {
  button: {
    width: "100%",
    boxSizing: "border-box",
    fontSize: "20px",
    border: "none",
    borderRadius: "3px",
    padding: "12px",
    backgroundColor: COLORS.blue,
    color: COLORS.white,
    "&:focus": {
      outline: "none"
    },
    cursor: "pointer",
    "&:disabled": {
      cursor: "not-allowed",
    }
  }
};

interface OwnProps {
  onClick: (e: React.SyntheticEvent) => void;
  disabled?: boolean;
}

type Props = OwnProps & WithSheet<typeof styles>;

const SubmitButton: React.SFC<Props> = ({ onClick, disabled, classes }) => (
  <button onClick={onClick} disabled={disabled} className={classes.button}>
    Toepassen
  </button>
);

export default injectSheet(styles)(SubmitButton);
