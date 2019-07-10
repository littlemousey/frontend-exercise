import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import sinon from "sinon";
import { CheckboxInput } from "./checkbox-input";

describe("components/checkbox", () => {
  let shallowComponent: ShallowWrapper;
  const fakeOnChange = sinon.fake();
  const ChildrenMock = () => <span>Mock checkbox</span>;

  beforeEach(() => {
    shallowComponent = shallow(
      <CheckboxInput onChange={fakeOnChange}>
        <ChildrenMock />
      </CheckboxInput>
    );
  });

  it("renders input of type checkbox within a label", () => {
    expect(
      shallowComponent.find("label > input[type='checkbox']")
    ).toBeTruthy();
  });

  it("passes down onChange to input", () => {
    expect(
      shallowComponent.find("input[type='checkbox']").props().onChange
    ).toBe(fakeOnChange);
  });

  it("renders children content", () => {
    expect(shallowComponent.find(ChildrenMock)).toBeTruthy();
  });
});
