import * as React from "react";
import { shallow } from "enzyme";

import { SearchBarContainer } from "../SearchBar";
import SearchBar from "../../components/SearchBar";

const props = {
  filter: jest.fn()
};

describe("containers/SearchBarContainer", () => {
  it("should render presentational and pass correct props", () => {
    const component = shallow(<SearchBarContainer {...props} />);

    const presentational = component.find(SearchBar);

    expect(presentational).toHaveLength(1);
    expect(presentational.props()).toEqual({
      onChange: (component.instance() as SearchBarContainer).handleChange
    });
  });
  describe("handleChange", () => {
    it("should call prop.filter with change event value", () => {
      const component = shallow(<SearchBarContainer {...props} />);

      (component.instance() as SearchBarContainer).handleChange(({
        currentTarget: { value: "x" }
      } as unknown) as React.ChangeEvent<HTMLInputElement>);

      expect(props.filter).toBeCalledWith("x");
    });
  });
});
