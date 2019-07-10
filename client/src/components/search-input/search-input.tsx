import { css } from "emotion";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { ReactComponent as MagnifierIcon } from "static/icons/magnifier.svg";
import { colors, defaults } from "theme";

type SearchInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const SearchInput: React.FC<SearchInputProps> = ({ ...props }) => (
  <div
    className={css`
      position: relative;
      display: block;
    `}
  >
    <input
      type="text"
      className={css`
        position: relative;
        box-sizing: border-box;
        width: 100%;
        background-color: white;
        color: ${colors.mineShaft};
        border: 1px solid ${colors.grayNickel};
        border-radius: ${defaults.borderRadius};
        padding: ${defaults.inputPadding};
        font-size: ${defaults.inputFontSize};

        &::placeholder {
          color: ${colors.grayNickel};
        }
      `}
      {...props}
    />
    <MagnifierIcon
      className={css`
        position: absolute;
        right: 10px;
        top: 10px;
        width: 18px;
        height: 18px;
        fill: ${colors.mineShaft};
      `}
    />
  </div>
);
