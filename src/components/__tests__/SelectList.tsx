import * as React from "react";
import { shallow } from "enzyme";

import SelectList from "../SelectList";
import SelectItem from "../../containers/SelectItem";

const props = {
  items: [
    { name: "Travel Guide", selected: false, index: 0 },
    { name: "Physics Textbook", selected: false, index: 1 }
  ]
};

describe("components/SelectList", () => {
  it("should render SelecItems with correct props", () => {
    const component = shallow(<SelectList {...props} />);
    const selectItem = component.find(SelectItem);

    expect(selectItem).toHaveLength(2);

    selectItem.forEach((item, i) => {
      expect(item.prop("name")).toEqual(props.items[i].name);
      expect(item.prop("selected")).toEqual(props.items[i].selected);
      expect(item.prop("index")).toEqual(props.items[i].index);
    });
  });
});
