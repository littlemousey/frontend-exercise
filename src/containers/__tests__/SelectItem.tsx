import * as React from "react";
import { shallow } from "enzyme";

import { SelectItemContainer } from "../SelectItem";
import SelectItem from "../../components/SelectItem";

const props = {
  name: "Game",
  index: 0,
  selected: false,
  select: jest.fn(),
  unselect: jest.fn(),
  containerRef: (<div /> as unknown) as HTMLDivElement
};

describe("containers/SelectItem", () => {
  it("should render presentational with correct props", () => {
    const component = shallow(<SelectItemContainer {...props} />);
    const presentational = component.find(SelectItem);

    expect(presentational).toHaveLength(1);
    expect(presentational.props()).toEqual({
      name: props.name,
      selected: props.selected,
      onChange: (component.instance() as SelectItemContainer).handleChange
    });
  });
  describe("handleChange", () => {
    it("should call props.select if event is checked", () => {
      const component = shallow(<SelectItemContainer {...props} />);

      (component.instance() as SelectItemContainer).handleChange(({
        currentTarget: {
          checked: true
        }
      } as unknown) as React.ChangeEvent<HTMLInputElement>);

      expect(props.select).toBeCalledWith(props.index);
    });
    it("should call props.unselect if event is not checked", () => {
      const component = shallow(<SelectItemContainer {...props} />);

      (component.instance() as SelectItemContainer).handleChange(({
        currentTarget: {
          checked: false
        }
      } as unknown) as React.ChangeEvent<HTMLInputElement>);

      expect(props.unselect).toBeCalledWith(props.index);
    });
  });
});
