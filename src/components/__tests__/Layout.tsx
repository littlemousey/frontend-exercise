import * as React from "react";
import { shallow } from "enzyme";

import { Layout } from "../Layout";
import SearchBar from "../../containers/SearchBar";
import SelectList from "../../containers/SelectList";
import SubmitButton from "../SubmitButton";

const props = {
  classes: {
    layout: "layout",
    item: "item",
    title: "title"
  },
  theme: undefined as undefined,
  hasSelectedItem: true,
  submit: jest.fn()
};

describe("components/Layout", () => {
  it("should render expected content", () => {
    const component = shallow(<Layout {...props} />);

    expect(component.find(SearchBar)).toHaveLength(1);
    expect(component.find(SelectList)).toHaveLength(1);
    expect(component.find(SubmitButton)).toHaveLength(1);
  });
});
