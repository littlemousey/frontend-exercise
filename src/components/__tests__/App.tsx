import * as React from "react";
import { shallow, configure } from "enzyme";
import { Provider } from "react-redux";

import { App } from "../App";
import Layout from "../../containers/Layout";

const props = {
  classes: { app: "app" },
  theme: undefined as undefined
};

describe("components/App", () => {
  it("should render Layout nested in Provider", () => {
    const component = shallow(<App {...props} />);
    const provider = component.find(Provider);

    expect(provider).toHaveLength(1);
    expect(provider.find(Layout)).toHaveLength(1);
  });
});
