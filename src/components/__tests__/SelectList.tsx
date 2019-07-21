import * as React from "react";
import { shallow } from "enzyme";

import { SelectList } from "../SelectList";
import SelectItem from "../../containers/SelectItem";

const props = {
  items: [
    { name: "Travel Guide", selected: false, index: 0 },
    { name: "Physics Textbook", selected: false, index: 1 }
  ],
  classes: {
    list: "list"
  },
  theme: undefined as undefined,
  loadMoreItems: jest.fn(),
  limit: 10
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
  it("should call loadMoreItems after scroll", () => {
    const component = shallow(
      <SelectList
        {...props}
        items={[
          { name: "0", selected: false, index: 0 },
          { name: "1", selected: false, index: 1 },
          { name: "2", selected: false, index: 2 },
          { name: "3", selected: false, index: 3 },
          { name: "4", selected: false, index: 4 },
          { name: "5", selected: false, index: 5 },
          { name: "6", selected: false, index: 6 },
          { name: "7", selected: false, index: 7 },
          { name: "8", selected: false, index: 8 },
          { name: "9", selected: false, index: 9 }
        ]}
      />
    );
    const el = ((component.instance() as SelectList).container = {
      scrollTop: 0
    } as any);

    el.scrollTop = 0;
    expect(props.loadMoreItems).not.toHaveBeenCalled();

    el.scrollTop = 65;
    component
      .find("div")
      .first()
      .simulate("scroll", { deltaY: 65 });

    expect(props.loadMoreItems).not.toHaveBeenCalled();

    el.scrollTop = 130;
    component
      .find("div")
      .first()
      .simulate("scroll", { deltaY: 65 });

    expect(props.loadMoreItems).toHaveBeenCalledTimes(1);
  });
});
