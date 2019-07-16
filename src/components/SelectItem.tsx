import * as React from "react";

import { Item } from "./SelectList";

interface Props {
  item: Item;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SelectItem: React.SFC<Props> = ({
  item: { name, selected },
  onChange
}) => (
  <React.Fragment>
    <input type="checkbox" name={name} checked={selected} onChange={onChange} />
    {name}
    <br />
  </React.Fragment>
);

export default SelectItem;
