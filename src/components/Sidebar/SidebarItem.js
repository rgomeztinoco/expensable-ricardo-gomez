/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";

function SidebarItem({ href = "#", icon, children }) {
  const sidebarItemStyles = css`
    padding: 0.5rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    text-decoration: none;
    color: var(--gray-600);
    border-radius: 0.375rem;
    & svg {
      height: 1.125em;
      width: 1.125em;
    }
    &:hover {
      background-color: var(--pink-100);
    }
    &:focus-visible {
      outline: none;
      border: 2px solid var(--pink-500);
    }
  `;

  return (
    <NavLink
      to={href}
      css={sidebarItemStyles}
      style={({ isActive }) => {
        if (isActive) {
          return {
            backgroundColor: "var(--pink-400)",
            color: "white",
          };
        }
      }}
    >
      {icon}
      <span>{children}</span>
    </NavLink>
  );
}

export default SidebarItem;
