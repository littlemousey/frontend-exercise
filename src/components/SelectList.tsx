import * as React from "react";

import SelectItem from "../containers/SelectItem";
import { Item } from "../constants";

interface Props {
  items: Item[];
}

const SelectList: React.SFC<Props> = ({ items }) => (
  <React.Fragment>
    {items.map(item => (
      <SelectItem
        key={item.name}
        name={item.name}
        selected={item.selected}
        index={item.index}
      />
    ))}
  </React.Fragment>
);

export default SelectList;
