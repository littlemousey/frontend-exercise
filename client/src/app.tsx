import { MultipleChoiceFilter } from "components/multiple-choice-filter";
import { css } from "emotion";
import React from "react";

export const App: React.FC = () => {
  return (
    <div
      className={css`
        @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap");
        * {
          font-family: "Open Sans", sans-serif;
          font-weight: 300;
        }

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding-top: 10%;
      `}
    >
      <div
        className={css`
          width: 30%;
        `}
      >
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
      </div>
    </div>
  );
};

export default App;
