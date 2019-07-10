import { css } from "emotion";
import React from "react";
import { colors, defaults } from "theme";

type FilterProps = {
  label: string;
};

export const Filter: React.FC<FilterProps> = ({ label, children }) => {
  return (
    <section
      className={css`
        border: 1px solid ${colors.grayNickel};
        border-radius: ${defaults.borderRadius};
        background-color: ${colors.wildSand};
        padding: 20px;
      `}
    >
      <span
        className={css`
          font-size: ${defaults.inputFontSize};
        `}
      >
        {label}
      </span>
      <div
        className={css`
          margin: 18px 0;
        `}
      >
        {children}
      </div>
    </section>
  );
};
