// below comment line is required
// it tells babel how to convert properly
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BsPlusLg } from "react-icons/bs";
import { cardStyle } from "./card-styles";

function NewCategoryCard(props) {
  const style = css`
    --border-color: var(--gray-400);
    --border-style: dashed;
    display: grid;
    place-content: center;
    color: var(--gray-400);
  `;

  return (
    <div css={[cardStyle, style]}>
      <BsPlusLg />
    </div>
  );
}

export default NewCategoryCard;
