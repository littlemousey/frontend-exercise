import * as React from "react";
import { connect } from "react-redux";

import { fetchItems, submitItems } from "../actions/index";
import Layout from "../components/Layout";
import { hasSelectedItem } from "../selectors/item";
import { RootState } from "../constants";

interface Props {
  hasSelectedItem: boolean;
  fetch: () => void;
  submit: () => void;
}

export class LayoutContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <Layout
        submit={this.props.submit}
        hasSelectedItem={this.props.hasSelectedItem}
      />
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  hasSelectedItem: hasSelectedItem(state)
});

const mapDispatchToProps = {
  fetch: fetchItems,
  submit: submitItems
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutContainer);
