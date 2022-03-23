/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SidebarNavigation from "./SidebarNavigation";

function SideBar() {
  const sidebarStyles = css`
    min-height: 100vh;
    min-width: 200px;
    padding: 1.25rem 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: var(--gray-100);
    border-right: 1px solid var(--gray-200);
  `;

  return (
    <aside css={sidebarStyles}>
      <SidebarNavigation />
    </aside>
  );
}

export default SideBar;
