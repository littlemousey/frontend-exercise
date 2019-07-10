import { css, cx } from "emotion";
import React from "react";
import { colors, defaults } from "theme";

type CheckboxInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const CheckboxInput: React.FC<CheckboxInputProps> = ({
  children,
  ...props
}) => (
  <label
    className={css`
      display: inline-block;
      vertical-align: middle;
      position: relative;
      font: inherit;
      user-select: none;
      padding-left: 35px;
      margin-bottom: 25px;
      cursor: pointer;

      &:hover {
        color: ${colors.mariner};

        & > input:not(:checked) ~ .checkmark:after {
          background-color: ${colors.alabaster};
        }
      }
    `}
  >
    <input
      type="checkbox"
      className={css`
        position: absolute;
        opacity: 0;
        height: 0;
        width: 0;

        &:focus,
        &:active {
          & ~ .checkmark {
            outline-width: 2px;
            outline-style: solid;
            outline-color: Highlight;

            @media (-webkit-min-device-pixel-ratio: 0) {
              .unreal-focus {
                outline-color: -webkit-focus-ring-color;
                outline-style: auto;
              }
            }
          }
        }

        &:checked {
          & ~ .content {
            color: ${colors.mariner};
          }
          & ~ .checkmark:after {
            background-color: ${colors.mariner};
          }
        }
      `}
      {...props}
    />
    <span
      className={cx(
        css`
          position: absolute;
          top: 0;
          left: 0;
          display: inline-block;
          height: 25px;
          width: 25px;
          border: 2px solid #ccc;
          background-color: white;
          vertical-align: middle;
          padding: 4px;

          &:after {
            content: "";
            display: block;
            background-color: transparent;
            width: 100%;
            height: 100%;
            transition: ${defaults.transition};
          }
        `,
        "checkmark"
      )}
    />
    <span className="content">{children}</span>
  </label>
);