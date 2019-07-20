import * as React from "react";
import injectSheet, { WithSheet } from "react-jss";
import cx from "classnames";

import { COLORS } from "../constants";

const styles = {
  container: {
    position: "relative",
    marginBottom: "16px",
    fontSize: "18px",
  },
  text: {
    display: "inline-block"
  },
  checkbox: {
    display: "none"
  },
  control: {
    display: "inline-block",
    width: "20px",
    height: "20px",
    marginRight: "12px",
    verticalAlign: "middle",
    border: `2px solid ${COLORS.darkGrey}`,
    cursor: "pointer"
  },
  selected: {
    top: "6px",
    left: "5px",
    width: "14px",
    height: "14px",
    position: "absolute",
    backgroundColor: COLORS.blue,
    cursor: 'pointer'
  },
  blue: {
    color: COLORS.blue
  }
};

interface OwnProps {
  name: string;
  selected: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type Props = OwnProps & WithSheet<typeof styles>;

export const SelectItem: React.SFC<Props> = ({
  name,
  selected,
  onChange,
  classes
}) => (
  <div
    className={cx(classes.container, {
      [classes.blue]: selected
    })}
  >
    <label>
      <input
        onChange={onChange}
        type="checkbox"
        name={name}
        checked={selected}
        className={classes.checkbox}
      />
      <span className={classes.control} />
      {selected && <span className={classes.selected} />}
    </label>
    <div className={classes.text}>{name}</div>
  </div>
);

export default injectSheet(styles)(SelectItem);
