/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Main({ page }) {
  const mainStyles = css`
    padding: 2rem;
  `;

  return (
    <div css={mainStyles}>
      <h2>{page}</h2>
    </div>
  );
}

export default Main;
