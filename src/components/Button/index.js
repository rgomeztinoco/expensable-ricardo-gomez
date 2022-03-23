/** @jsxImportSource @emotion/react */
import { css } from "@emotion/core";

function Button({
  size,
  type = "primary",
  icon,
  iconLast = false,
  children,
  onlyIcon = false,
  ...otherProps
}) {
  let fontSize;
  let paddingDefault;
  let paddingOnlyIcon;
  let sizeOnlyIcon;
  switch (size) {
    case "sm":
      fontSize = "0.75rem";
      paddingDefault = "0.375rem 0.625rem";
      paddingOnlyIcon = "0.54rem";
      sizeOnlyIcon = "1.75rem";
      break;
    case "lg":
      fontSize = "1rem";
      paddingDefault = "0.75rem 1.5rem";
      paddingOnlyIcon = "1rem";
      sizeOnlyIcon = "3rem";
      break;
    default:
      fontSize = "0.875rem";
      paddingDefault = "0.5rem 1rem";
      paddingOnlyIcon = "0.7rem";
      sizeOnlyIcon = "2.25rem";
      break;
  }

  let backgroundColor;
  let backgroundColorHover;
  switch (type) {
    case "primary":
      backgroundColor = "var(--primary-300)";
      backgroundColorHover = "var(--primary-400)";
      break;
    case "secondary":
      backgroundColor = "var(--secondary-300)";
      backgroundColorHover = "var(--secondary-400)";
      break;
    case "subtle":
      backgroundColor = "var(--gray-100)";
      backgroundColorHover = "var(--gray-200)";
      break;
    default:
      break;
  }

  const baseStyle = css`
    border: none;
    font-size: ${fontSize};
    background-color: ${backgroundColor};
    color: ${type === "subtle" ? "inherit" : "white"};
    cursor: pointer;

    &:hover {
      background-color: ${backgroundColorHover};
    }

    &:focus-visible {
      outline: 2px solid ${backgroundColor};
      outline-offset: 2px;
    }
  `;

  const buttonStyle = css`
    padding: ${paddingDefault};
    border-radius: 0.25rem;
  `;

  const onlyIconStyle = css`
    height: ${sizeOnlyIcon};
    width: ${sizeOnlyIcon};
    padding: ${paddingOnlyIcon};
    display: grid;
    place-content: center;
    border-radius: 50%;

    & svg {
      height: 100%;
      width: 100%;
    }
  `;

  let content;
  if (onlyIcon) {
    content = icon;
  } else {
    content = iconLast ? [children, icon] : [icon, children];
  }

  return (
    <button
      css={[baseStyle, onlyIcon ? onlyIconStyle : buttonStyle]}
      className="overline"
      {...otherProps}
    >
      {content}
    </button>
  );
}

export default Button;
