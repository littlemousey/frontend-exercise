import * as React from "react";
import { connect } from "react-redux";

import { selectItem, unselectItem } from "../actions/index";
import SelectItem from "../components/SelectItem";

interface Props {
  name: string;
  index: number;
  selected: boolean;
  select: (index: number) => void;
  unselect: (index: number) => void;
  containerRef: HTMLDivElement;
}

export class SelectItemContainer extends React.Component<Props> {
  componentDidMount() {
    const { index, selected, select } = this.props;
    const localValue = localStorage.getItem(`item-${index}`);

    if (localValue === "selected" && !selected) {
      select(index);
    }
  }
  getSnapshotBeforeUpdate() {
    const el = this.props.containerRef;

    return el ? el.scrollTop : null;
  }

  componentDidUpdate(_prevProps: Props, _prevState: Props, snapshot: number) {
    if (snapshot) {
      const el = this.props.containerRef;
      // after checking an item default behavior is auto-scroll to top
      // prevent this for a better UX
      el.scrollTop = snapshot;
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.currentTarget;
    const { select, unselect, index } = this.props;

    if (checked) {
      select(index);
      localStorage.setItem(`item-${index}`, "selected");
    } else {
      localStorage.setItem(`item-${index}`, "unselected");
      unselect(index);
    }
  };

  render() {
    const { name, selected } = this.props;

    return (
      <SelectItem
        name={name}
        selected={selected}
        onChange={this.handleChange}
      />
    );
  }
}

const mapDispatchToProps = {
  select: selectItem,
  unselect: unselectItem
};

export default connect(
  null,
  mapDispatchToProps
)(SelectItemContainer);
