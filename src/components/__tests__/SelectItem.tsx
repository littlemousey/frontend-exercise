import * as React from "react";
import { shallow } from "enzyme";

import { SelectItem } from "../SelectItem";

const props = {
  name: "Red Dead Redemption 2",
  selected: false,
  onChange: jest.fn(),
  classes: {
    container: "container",
    text: "text",
    checkbox: "checkbox",
    control: "control",
    selected: "selected",
    blue: "blue"
  },
  theme: undefined as undefined
};

describe("components/SelectItem", () => {
  it("renders a checkbox type input", () => {
    const component = shallow(<SelectItem {...props} />);

    const inputElement = component.find("input");

    expect(inputElement).toHaveLength(1);
    expect(inputElement.prop("type")).toEqual("checkbox");
    expect(inputElement.prop("onChange")).toEqual(props.onChange);
  });
  it("calls prop.onChange on change", () => {
    const component = shallow(<SelectItem {...props} />);

    component.find("input").simulate("change");

    expect(props.onChange).toBeCalled();
  });
});
