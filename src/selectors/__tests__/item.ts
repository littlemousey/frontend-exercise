import { getItemsList, hasSelectedItem, getLimit } from "../item";

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
          filter: "",
          limit: 10
        }
      };

      expect(getItemsList(state)).toEqual([item]);
    });
  });
  describe("hasSelectedItem", () => {
    it("should return true if there is a selected item", () => {
      const item = {
        name: "not selected",
        index: 0,
        selected: false
      };
      const otherItem = {
        name: "selected",
        index: 1,
        selected: true
      };
      const state = {
        items: {
          list: [item, otherItem],
          filter: "",
          limit: 10
        }
      };

      expect(hasSelectedItem(state)).toEqual(true);
    });
    it("should return false if there is no selected item", () => {
      const item = {
        name: "not selected",
        index: 0,
        selected: false
      };
      const otherItem = {
        name: "also not selected",
        index: 1,
        selected: false
      };
      const state = {
        items: {
          list: [item, otherItem],
          filter: "",
          limit: 10
        }
      };

      expect(hasSelectedItem(state)).toEqual(false);
    });
  });
  describe("getLimit", () => {
    it("should return state.items.limit", () => {
      const item = {
        name: "list to get",
        index: 0,
        selected: false
      };
      const state = {
        items: {
          list: [item],
          filter: "",
          limit: 10
        }
      };

      expect(getLimit(state)).toEqual(10);
    });
  });
});
