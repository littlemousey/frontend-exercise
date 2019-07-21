import * as React from "react";
import injectSheet, { WithSheet } from "react-jss";

import SelectItem from "../containers/SelectItem";
import { Item, LIST_ITEM_HEIGHT, TOTAL_ITEMS } from "../constants";

const styles = {
  list: {
    height: "275px",
    overflow: "scroll"
  }
};

interface OwnProps {
  items: Item[];
  loadMoreItems: () => void;
  limit: number;
}

type Props = OwnProps & WithSheet<typeof styles>;

export class SelectList extends React.Component<Props> {
  container: HTMLDivElement;

  handleScroll = () => {
    const { items, loadMoreItems, limit } = this.props;

    if (limit >= TOTAL_ITEMS) {
      // all items are already loaded
      return;
    }

    // load more items when 3 newly loaded items are scrolled out
    const previouslyScrolled = (items.length - 10) * LIST_ITEM_HEIGHT;
    const loadPoint = previouslyScrolled + 3 * LIST_ITEM_HEIGHT;

    if (this.container.scrollTop > loadPoint) {
      loadMoreItems();
    }
  };

  render() {
    const { items, classes } = this.props;

    return (
      <div
        className={classes.list}
        ref={ref => (this.container = ref)}
        onScroll={this.handleScroll}
      >
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
