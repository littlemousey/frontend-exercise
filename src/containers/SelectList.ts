import { connect } from "react-redux";

import SelectList from "../components/SelectList";
import { RootState } from "../constants";
import { getItemsList } from "../selectors/item";

export const mapStateToProps = (state: RootState) => {
  const regex = new RegExp(state.items.filter, "gim");

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
  };
};

export default connect(mapStateToProps)(SelectList);
