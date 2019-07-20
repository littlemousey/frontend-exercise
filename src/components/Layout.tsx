import * as React from "react";
import injectSheet, { WithSheet } from "react-jss";

import SelectList from "../containers/SelectList";
import SearchBar from "../containers/SearchBar";
import { COLORS, Item } from "../constants";
import SubmitButton from "./SubmitButton";
import { hasSelectedItem } from "../selectors/item";

const styles = {
  layout: {
    width: "300px",
    padding: "24px",
    margin: "12px",
    borderRadius: "3px",
    border: `1px solid ${COLORS.darkGrey}`,
    backgroundColor: COLORS.lightGrey
  },
  item: {
    paddingBottom: "24px",
    "&:last-of-type": {
      paddingBottom: 0
    }
  },
  title: {
    fontSize: "20px"
  }
};

interface OwnProps {
  hasSelectedItem: boolean;
  submit: () => void;
}

type Props = OwnProps & WithSheet<typeof styles>;

export const Layout: React.SFC<Props> = ({
  hasSelectedItem,
  submit,
  classes
}) => (
  <div className={classes.layout}>
    <div className={classes.item}>
      <div className={classes.title}>Productgroep</div>
    </div>
    <div className={classes.item}>
      <SearchBar />
    </div>
    <div className={classes.item}>
      <SelectList />
    </div>
    <div className={classes.item}>
      <SubmitButton onClick={submit} disabled={!hasSelectedItem} />
    </div>
  </div>
);

export default injectSheet(styles)(Layout);
