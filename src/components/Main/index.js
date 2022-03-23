/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Main({ page, children }) {
  const mainStyles = css`
    width: 100%;
    padding: 2rem;
  `;

  return <main css={mainStyles}>{children}</main>;
}

export default Main;
