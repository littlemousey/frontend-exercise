import { getItemsList } from "../item";

describe("selectors/item", () => {
  describe("getItemsList", () => {
    it("should return state.items.list", () => {
      const item = {
        name: "list to get",
        index: 0,
        selected: false
      };
      const state = {
        items: {
          list: [item],
          filter: ""
        }
      };

      expect(getItemsList(state)).toEqual([item]);
    });
  });
});
