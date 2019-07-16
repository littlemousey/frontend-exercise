import { useApi } from "api";
import { MultipleChoiceFilter } from "components/multiple-choice-filter";
import { css } from "emotion";
import React from "react";

export const HomePage: React.FC = () => {
  const { items } = useApi();

  return (
    <div
      className={css`
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
          display: flex;
          width: 30%;
          height: 60%;
        `}
      >
        {items && <MultipleChoiceFilter items={items} />}
      </div>
    </div>
  );
};
