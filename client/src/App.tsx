import { Button } from "components/button";
import { CheckboxInput } from "components/checkbox-input";
import { MultipleChoiceFilter } from "components/multiple-choice-filter";
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
      <MultipleChoiceFilter
        items={[
          "Literatuur &amp; Romans",
          "Thrillers",
          "Fantasy",
          "Kinderboeken",
          "Young Adult",
          "Kookboeken",
          "Reisboeken",
          "Kunst, Fotografie &amp; Architectuur",
          "Psychologie",
        ]}
      />
    </>
  );
};

export default App;
