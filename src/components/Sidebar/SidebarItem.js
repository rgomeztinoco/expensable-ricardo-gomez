/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function SidebarItem({
  href = "#",
  current = false,
  icon,
  children,
  handlePageChange,
  pageName,
  ...otherProps
}) {
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

  const activeItemStyle = css`
    background-color: var(--pink-400);
    color: white;
    &:hover {
      background-color: var(--pink-500);
    }
  `;

  return (
    <a
      href={href}
      css={[sidebarItemStyles, current ? activeItemStyle : null]}
      onClick={handlePageChange}
      data-page-name={pageName}
      {...otherProps}
    >
      {icon}
      {children}
    </a>
  );
}

export default SidebarItem;
