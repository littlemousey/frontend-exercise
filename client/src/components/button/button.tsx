import { css } from "emotion";
import { darken } from "polished";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { colors, defaults } from "theme";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => (
  <button
    className={css`
      display: inline-block;
      padding: 8px 16px;
      height: 40px;
      border-radius: ${defaults.borderRadius};
      background-color: ${colors.mariner};
      border-color: ${darken(0.2, colors.mariner)};
      border-width: 0px;
      border-bottom-width: 2px;
      color: #fff;
      cursor: pointer;
      font-size: 18px;
      transition: ${defaults.transition};

      &:active {
        border-color: transparent;
      }
    `}
    {...props}
  />
);
