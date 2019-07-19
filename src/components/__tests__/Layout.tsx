import * as React from "react";
import { shallow } from "enzyme";

import Layout from "../Layout";
import SearchBar from "../../containers/SearchBar";
import SelectList from "../../containers/SelectList";

describe("components/Layout", () => {
  it("should render expected content", () => {
    const component = shallow(<Layout />);

    expect(component.find(SearchBar)).toHaveLength(1);
    expect(component.find(SelectList)).toHaveLength(1);
  });
});
