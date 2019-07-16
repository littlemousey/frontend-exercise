import * as React from "react";
import { shallow } from "enzyme";

import SelectList from "../SelectList";
import SelectItem from "../SelectItem";

window.fetch = jest.fn(() => Promise.resolve(({} as unknown) as Response));

describe("components/SelectList", () => {
  it("should render SelecItems", () => {
    const component = shallow(<SelectList />);

    component.setState({
      items: [
        { name: "Travel Guide", selected: false },
        { name: "Physics Textbook", selected: false }
      ]
    });

    expect(component.find(SelectItem)).toHaveLength(2);
  });
  describe("handleChange", () => {
    it("should take selected item to the beginning and mark as selected", () => {
      const component = shallow(<SelectList />);

      component.setState({
        items: [
          { name: "Travel Guide", selected: false },
          { name: "Physics Textbook", selected: false }
        ]
      });

      (component.instance() as SelectList).handleChange(({
        currentTarget: { name: "Physics Textbook", checked: true }
      } as unknown) as React.ChangeEvent<HTMLInputElement>);

      expect(
        component
          .find(SelectItem)
          .first()
          .prop("item").name
      ).toEqual("Physics Textbook");
      expect(
        component
          .find(SelectItem)
          .first()
          .prop("item").selected
      ).toBe(true);
    });
    it("should take out unselected item", () => {
      const component = shallow(<SelectList />);

      component.setState({
        items: [
          { name: "Travel Guide", selected: true },
          { name: "Physics Textbook", selected: false }
        ]
      });

      (component.instance() as SelectList).handleChange(({
        currentTarget: { name: "Travel Guide", checked: false }
      } as unknown) as React.ChangeEvent<HTMLInputElement>);

      expect(
        component
          .find(SelectItem)
          .first()
          .prop("item").name
      ).toEqual("Physics Textbook");
      expect(
        component
          .find(SelectItem)
          .last()
          .prop("item").selected
      ).toBe(false);
    });
  });
  describe("componentDidMount", () => {
    it("should fetch data and add to state", () => {
      shallow(<SelectList />);

      expect(window.fetch).toBeCalled();
    });
  });
});
