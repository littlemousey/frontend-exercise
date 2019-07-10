import { CheckboxInput } from "components/checkbox-input";
import { SearchInput } from "components/search-input";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import sinon from "sinon";
import { MultipleChoiceFilter } from "./multiple-choice-filter";

const items = ["1", "2", "3", "4"];

describe("components/multiple-choice-filter", () => {
  describe("without filter", () => {
    let shallowComponent: ShallowWrapper;
    const fakeOnChange = sinon.fake();

    beforeEach(() => {
      shallowComponent = shallow(<MultipleChoiceFilter items={items} />);
    });

    it("renders props items wrapped in CheckboxInput", () => {
      shallowComponent
        .find(CheckboxInput)
        .forEach((checkboxComponent, index) => {
          expect(checkboxComponent.props().children).toBe(items[index]);
        });
    });

    it("allows selecting an item and shows on the top", () => {
      shallowComponent
        .find(CheckboxInput)
        .at(2)
        .simulate("change");
      shallowComponent.update();

      expect(
        shallowComponent
          .find(CheckboxInput)
          .at(0)
          .props().children
      ).toBe(items[2]);
    });

    it("allows selecting multiple items and shows on the top", () => {
      shallowComponent
        .find(CheckboxInput)
        .at(0)
        .simulate("change");

      shallowComponent
        .find(CheckboxInput)
        .at(2)
        .simulate("change");

      shallowComponent.update();

      expect(
        shallowComponent
          .find(CheckboxInput)
          .filterWhere(component => component.props().checked === true)
      ).toHaveLength(2);
    });

    it("shows selected items on top", () => {
      const firstSelectedItem = shallowComponent
        .find(CheckboxInput)
        .at(0)
        .simulate("change");

      const secondSelectedItem = shallowComponent
        .find(CheckboxInput)
        .at(3)
        .simulate("change");

      shallowComponent.update();

      expect(
        shallowComponent
          .find(CheckboxInput)
          .at(0)
          .props().children
      ).toBe(firstSelectedItem.props().children);
      expect(
        shallowComponent
          .find(CheckboxInput)
          .at(1)
          .props().children
      ).toBe(secondSelectedItem.props().children);
    });
  });

  describe("on filter", () => {
    let shallowComponent = shallow(<MultipleChoiceFilter items={items} />);
    let selectedItem = shallowComponent.find(CheckboxInput).at(2);
    const filterValue = "2";

    beforeEach(() => {
      selectedItem.simulate("change");
      shallowComponent.update();

      shallowComponent
        .find(SearchInput)
        .dive()
        .find("input")
        .simulate("change", { target: { value: filterValue } });

      shallowComponent.update();
    });

    it("shows previous selected items", () => {
      expect(
        shallowComponent
          .find(CheckboxInput)
          .at(0)
          .props().children
      ).toBe(selectedItem.props().children);
    });

    it("shows filtered items", () => {
      expect(shallowComponent.find(CheckboxInput)).toHaveLength(2);
      expect(
        (shallowComponent
          .find(CheckboxInput)
          .at(1)
          .props().children as string).includes(filterValue)
      ).toBeTruthy();
    });
  });
});
