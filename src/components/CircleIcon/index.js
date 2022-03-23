/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function CircleIcon({ color, size = "md", inverted = false, icon }) {
  let fontSize;

  switch (size) {
    case "sm":
      fontSize = 1;
      break;
    case "md":
      fontSize = 1.25;
      break;
    case "lg":
      fontSize = 1.5;
      break;
    default:
      break;
  }

  const style = css`
    padding: 0.584em;
    width: 2em;
    height: 2em;
    display: grid;
    place-content: center;
    font-size: ${fontSize}rem;
    color: ${inverted ? color : "white"};
    border-radius: 50%;
    background-color: ${!inverted ? color : "white"};
    & svg {
      width: 100%;
      height: 100%;
    }
  `;

  return <div css={style}>{icon}</div>;
}

export default CircleIcon;
