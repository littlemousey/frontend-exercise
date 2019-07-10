import { Button } from "components/button";
import { CheckboxInput } from "components/checkbox-input";
import React from "react";

const App: React.FC = () => {
  return (
    <>
      <CheckboxInput />
      <CheckboxInput>Checkbox</CheckboxInput>
      <Button />
      <Button>Button</Button>
    </>
  );
};

export default App;
