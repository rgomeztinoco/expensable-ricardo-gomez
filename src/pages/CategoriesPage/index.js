// below comment line is required
// it tells babel how to convert properly
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

function CategoriesPage({ setCategoriesType }) {
  const pageStyle = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `;

  const navStyle = css`
    display: flex;
    gap: 2rem;
    border-bottom: 1px solid var(--gray-200);
  `;

  const linkStyle = css`
    padding-inline: 0.25rem;
    padding-bottom: 1rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    text-decoration: none;
    color: var(--gray-500);
  `;

  const activeLinkStyle = ({ isActive }) => {
    if (isActive) {
      return {
        borderBottom: "2px solid var(--pink-500)",
        color: "var(--pink-500)",
      };
    }
  };

  return (
    <div css={pageStyle}>
      <h2 className="heading heading--sm">Categories</h2>
      <nav css={navStyle}>
        <IconContext.Provider value={{ size: "1.25em" }}>
          <NavLink
            css={linkStyle}
            style={activeLinkStyle}
            to="expense"
            onClick={() => setCategoriesType("expense")}
          >
            <AiOutlineMinusCircle />
            Expenses
          </NavLink>
          <NavLink
            css={linkStyle}
            style={activeLinkStyle}
            to="income"
            onClick={() => setCategoriesType("income")}
          >
            <AiOutlinePlusCircle />
            Income
          </NavLink>
        </IconContext.Provider>
      </nav>
      <Outlet />
    </div>
  );
}

export default CategoriesPage;
