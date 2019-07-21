import { getMessage } from "../message";

const state = {
  message: "message",
  items: {
    list: [{ selected: false, name: "name", index: 0 }],
    limit: 10,
    filter: ""
  }
};

describe("selectors/message", () => {
  describe("getMessage", () => {
    it("should return state.message", () => {
      expect(getMessage(state)).toEqual("message");
    });
  });
});
