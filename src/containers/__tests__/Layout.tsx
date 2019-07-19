import * as React from "react";
import { shallow } from "enzyme";

import { LayoutContainer } from "../Layout";
import Layout from "../../components/Layout";

const props = {
  fetch: jest.fn()
};

describe("containers/Layout", () => {
  it("should render presentational component and call props.fetch", () => {
    const component = shallow(<LayoutContainer {...props} />);

    expect(component.find(Layout)).toHaveLength(1);
    expect(props.fetch).toBeCalled();
  });
});
