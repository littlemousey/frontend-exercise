import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import sinon from "sinon";
import { Button } from "./button";

describe("components/checkbox", () => {
  let shallowComponent: ShallowWrapper;
  const fakeOnClick = sinon.fake();
  const ChildrenMock = () => <span>Mock button</span>;

  beforeEach(() => {
    shallowComponent = shallow(
      <Button onClick={fakeOnClick}>
        <ChildrenMock />
      </Button>
    );
  });

  it("renders a button", () => {
    expect(shallowComponent.find("button")).toBeTruthy();
  });

  it("passes down onClick to button", () => {
    expect(shallowComponent.find("button").props().onClick).toBe(fakeOnClick);
  });

  it("renders children content", () => {
    expect(shallowComponent.find(ChildrenMock)).toBeTruthy();
  });
});
