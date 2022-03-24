/** @jsxImportSource @emotion/react */
import { css } from "@emotion/core";
import CircleIcon from "../CircleIcon";
import ICONS from "../Icons";
import { cardStyle } from "./card-styles";

function CategoryCard({ iconName, color, name, amount }) {
  const style = css`
    --border-color: var(--color-${color});
    padding: 1.125rem 1rem;
    display: flex;
    gap: 1rem;
    align-items: center;
  `;

  const contentStyle = css`
    display: flex;
    flex-direction: column;
  `;

  const nameStyle = css`
    color: var(--gray-500);
  `;

  return (
    <article css={[cardStyle, style]}>
      <CircleIcon
        size="lg"
        color={`var(--color-${color})`}
        icon={ICONS[iconName]}
      />
      <div css={contentStyle}>
        <span className="content--sm" css={nameStyle}>
          {name}
        </span>
        <span className="heading heading--sm">$ {amount}</span>
      </div>
    </article>
  );
}

export default CategoryCard;
