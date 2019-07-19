import * as React from "react";

import SelectList from "../containers/SelectList";
import SearchBar from "../containers/SearchBar";

const Layout: React.SFC = () => (
  <React.Fragment>
    <SearchBar />
    <SelectList />
  </React.Fragment>
);

export default Layout;
