import { mapStateToProps } from "../SelectList";

const movie = {
  name: "movie",
  selected: false,
  index: 0
};

const game = {
  name: "game",
  selected: true,
  index: 1
};

const music = {
  name: "music",
  selected: false,
  index: 2
};

const state = {
  items: {
    list: [movie, game, music],
    filter: "",
    limit: 10
  }
};

describe("containers/SelectList", () => {
  describe("mapStateToProps", () => {
    it("should put selected item to the beginning ", () => {
      const stateToPass = mapStateToProps(state);

      expect(stateToPass.items.indexOf(game)).toBe(0);
    });
    it("should filter unselected items", () => {
      const stateToPass = mapStateToProps({
        ...state,
        items: {
          ...state.items,
          filter: "mus"
        }
      });

      const { items } = stateToPass;

      expect(items).toHaveLength(2);
      //   selected item should be still on top
      expect(items[0]).toEqual(game);
      //   after that filtered item should come
      expect(items[1]).toEqual(music);
    });
    it("should return limit", () => {
      const stateToPass = mapStateToProps(state);

      expect(stateToPass.limit).toEqual(state.items.limit);
    });
  });
});
