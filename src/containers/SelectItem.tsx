import * as React from "react";
import { connect } from "react-redux";

import { selectItem, unselectItem } from "../actions/index";
import SelectItem from "../components/SelectItem";
import { Item } from "../constants";

interface Props {
  name: string;
  index: number;
  selected: boolean;
  select: (index: number) => void;
  unselect: (index: number) => void;
}

export class SelectItemContainer extends React.Component<Props> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.currentTarget;
    const { select, unselect, index } = this.props;

    if (checked) {
      select(index);
    } else {
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
