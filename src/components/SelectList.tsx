import * as React from "react";
import injectSheet, { WithSheet } from "react-jss";

import SelectItem from "../containers/SelectItem";
import { Item } from "../constants";

const styles = {
  list: {
    height: "275px",
    overflow: "scroll"
  }
};

interface OwnProps {
  items: Item[];
}

type Props = OwnProps & WithSheet<typeof styles>;

export class SelectList extends React.Component<Props> {
  container: HTMLDivElement;
  render() {
    const { items, classes } = this.props;

    return (
      <div className={classes.list} ref={ref => (this.container = ref)}>
        {items.map(item => (
          <SelectItem
            key={item.name}
            name={item.name}
            selected={item.selected}
            index={item.index}
            containerRef={this.container}
          />
        ))}
      </div>
    );
  }
}
export default injectSheet(styles)(SelectList);
