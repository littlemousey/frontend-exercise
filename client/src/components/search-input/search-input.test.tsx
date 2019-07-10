import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import sinon from "sinon";
import { SearchInput } from "./search-input";

describe("components/search-input", () => {
  let shallowComponent: ShallowWrapper;
  const fakeOnChange = sinon.fake();
  const fakeValue = "laptop";

  beforeEach(() => {
    shallowComponent = shallow(
      <SearchInput onChange={fakeOnChange} value={fakeValue} />
    );
  });

  it("renders input of type text", () => {
    expect(shallowComponent.find("input[type='text']")).toBeTruthy();
  });

  it("passes down onChange to input", () => {
    expect(shallowComponent.find("input[type='text']").props().onChange).toBe(
      fakeOnChange
    );
  });

  it("passes down value to input", () => {
    expect(shallowComponent.find("input[type='text']").props().value).toBe(
      fakeValue
    );
  });
});
