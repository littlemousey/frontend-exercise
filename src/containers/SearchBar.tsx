import * as React from "react";
import { connect } from "react-redux";

import SearchBar from "../components/SearchBar";
import { filterItems } from "../actions/index";

interface Props {
  filter: (name: string) => void;
}

export class SearchBarContainer extends React.Component<Props> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value }
    } = e;
    const { filter } = this.props;

    filter(value);
  };

  render() {
    return <SearchBar onChange={this.handleChange} />;
  }
}

const mapDispatchToProps = {
  filter: filterItems
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBarContainer);
