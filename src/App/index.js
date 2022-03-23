/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../components/Main";
import SideBar from "../components/Sidebar";
import BudgetPage from "../pages/BudgetsPage";
import CategoriesPage from "../pages/CategoriesPage";
import TransactionsPage from "../pages/TransactionsPage";
import globalStyles from "./styles/globals";

function App() {
  const [currentPage, setCurrentPage] = useState("Categories");

  const handlePageChange = (event) => {
    setCurrentPage(event.target.dataset.pageName);
  };

  const appStyles = css`
    display: flex;
  `;

  return (
    <Fragment>
      {globalStyles.map((style, index) => (
        <Global key={index} styles={style} />
      ))}
      <div css={appStyles}>
        <SideBar {...{ currentPage, handlePageChange }} />
        <Main page={currentPage}>
          <Routes>
            <Route path="/" element={<CategoriesPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/budgets" element={<BudgetPage />} />
          </Routes>
        </Main>
      </div>
    </Fragment>
  );
}

export default App;
