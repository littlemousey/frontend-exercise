import reducer from "../message";
import { SHOW_MESSAGE, HIDE_MESSAGE } from "../../constants";

describe("reducers/message", () => {
  it("should return default state for unknown actions", () => {
    expect(reducer(undefined, { type: "UNKNOWN" })).toBe("");
  });
  it("should hande SHOW_MESSAGE action", () => {
    const newState = reducer("", { type: SHOW_MESSAGE, payload: "message" });

    expect(newState).toEqual("message");
  });
  it("should hande HIDE_MESSAGE action", () => {
    const newState = reducer("some old message", { type: HIDE_MESSAGE });

    expect(newState).toEqual("");
  });
});
