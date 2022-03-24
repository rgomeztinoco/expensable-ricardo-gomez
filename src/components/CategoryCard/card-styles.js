// below comment line is required
// it tells babel how to convert properly
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const cardStyle = css`
  --border-color: var(--gray-400);
  --border-style: solid;
  min-height: 90px;
  border: 2px var(--border-style) var(--border-color);
  border-radius: 0.5rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  cursor: pointer;
`;
