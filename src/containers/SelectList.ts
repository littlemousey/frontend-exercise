import { connect } from "react-redux";

import SelectList from "../components/SelectList";
import { RootState } from "../constants";
import { getItemsList, getLimit } from "../selectors/item";
import { loadMoreItems } from "../actions/index";

export const mapStateToProps = (state: RootState) => {
  const regex = new RegExp(state.items.filter, "gim");
  const limit = getLimit(state);

  return {
    items: getItemsList(state)
      .filter(item => item.selected || regex.test(item.name))
      .sort((a, b) => {
        if (a.selected) {
          return -1;
        } else if (b.selected) {
          return 1;
        } else {
          return 0;
        }
      })
      .slice(0, limit),
    limit
  };
};

const mapDispatchToProps = {
  loadMoreItems
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectList);
