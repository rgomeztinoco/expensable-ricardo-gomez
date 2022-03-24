// below comment line is required
// it tells babel how to convert properly
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MonthPicker from "./MonthPicker";

function CategoriesHeader({ date, setDate, total }) {
  const style = css`
    margin-bottom: 1.625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  `;

  const currencyFormatter = new Intl.NumberFormat(["en-IN"], {
    style: "currency",
    currency: "USD",
  });

  return (
    <header css={style}>
      <MonthPicker {...{ date, setDate }} />
      <p className="heading heading--lg">{currencyFormatter.format(total)}</p>
      <p className="content--sm">Total Expenses</p>
    </header>
  );
}

export default CategoriesHeader;
