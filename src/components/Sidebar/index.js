/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ICONS from "../Icons";
import SidebarItem from "./SidebarItem";

function SideBar({ currentPage, handlePageChange }) {
  const navigation = [
    { name: "Categories", icon: "categoryIcon", href: "#" },
    { name: "Transactions", icon: "transactionIcon", href: "#" },
    { name: "Budgets", icon: "budgetIcon", href: "#" },
  ];

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
    <nav css={sidebarStyles}>
      {navigation.map((item) => (
        <SidebarItem
          href={item.href}
          icon={ICONS[item.icon]}
          current={currentPage === item.name}
          key={item.name}
          handlePageChange={handlePageChange}
          pageName={item.name}
        >
          {item.name}
        </SidebarItem>
      ))}
    </nav>
  );
}

export default SideBar;
