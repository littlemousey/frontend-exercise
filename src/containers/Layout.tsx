import * as React from "react";
import { connect } from "react-redux";

import { fetchItems } from "../actions/index";
import Layout from "../components/Layout";

interface Props {
  fetch: () => void;
}

export class LayoutContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return <Layout />;
  }
}

export default connect(
  null,
  { fetch: fetchItems }
)(LayoutContainer);
