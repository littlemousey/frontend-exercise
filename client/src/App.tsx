import { Button } from "components/button";
import { CheckboxInput } from "components/checkbox-input";
import { SearchInput } from "components/search-input";
import React from "react";

const App: React.FC = () => {
  return (
    <>
      <CheckboxInput />
      <CheckboxInput>Checkbox</CheckboxInput>
      <Button />
      <Button>Button</Button>
      <SearchInput placeholder="Type to filter" />
    </>
  );
};

export default App;
