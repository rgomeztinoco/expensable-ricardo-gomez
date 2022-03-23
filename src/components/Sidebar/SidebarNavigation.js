/** @jsxImportSource @emotion/react */
import ICONS from "../Icons";
import SidebarItem from "./SidebarItem";
import { css } from "@emotion/react";

function SidebarNavigation() {
  const navigation = [
    { name: "Categories", icon: "categoryIcon", href: "/categories" },
    { name: "Transactions", icon: "transactionIcon", href: "/transactions" },
    { name: "Budgets", icon: "budgetIcon", href: "/budgets" },
  ];

  const style = css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `;

  return (
    <nav css={style}>
      {navigation.map((item) => (
        <SidebarItem href={item.href} icon={ICONS[item.icon]} key={item.name}>
          {item.name}
        </SidebarItem>
      ))}
    </nav>
  );
}

export default SidebarNavigation;
