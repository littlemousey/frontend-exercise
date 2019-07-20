import * as React from "react";
import { shallow } from "enzyme";

import { SearchBar } from "../SearchBar";

const props = {
  onChange: jest.fn(),
  classes: {
    container: "container",
    input: "input",
    icon: "icon"
  },
  theme: undefined as undefined
};

describe("components/SearchBar", () => {
  it("should render an input", () => {
    const component = shallow(<SearchBar {...props} />);

    expect(component.find("input")).toHaveLength(1);
  });
  it("should call onChange on input change", () => {
    const input = shallow(<SearchBar {...props} />).find("input");
    const event = { currentTarget: { value: "a" } };

    input.simulate("change", event);

    expect(props.onChange).toBeCalledWith(event);
  });
});
