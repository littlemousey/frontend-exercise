import * as React from "react";

import { Item } from "../constants";

interface Props {
  name: string;
  selected: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SelectItem: React.SFC<Props> = ({ name, selected, onChange }) => (
  <React.Fragment>
    <input type="checkbox" name={name} checked={selected} onChange={onChange} />
    {name}
    <br />
  </React.Fragment>
);

export default SelectItem;
