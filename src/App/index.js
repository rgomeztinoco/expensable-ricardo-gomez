/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { Fragment, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Categories from "../components/Categories";
import Main from "../components/Main";
import SideBar from "../components/Sidebar";
import BudgetPage from "../pages/BudgetsPage";
import CategoriesPage from "../pages/CategoriesPage";
import TransactionsPage from "../pages/TransactionsPage";
import { useLocalStorage } from "../useLocal";
import globalStyles from "./styles/globals";

function App() {
  const [currentPage, setCurrentPage] = useState("Categories");

  const handlePageChange = (event) => {
    setCurrentPage(event.target.dataset.pageName);
  };

  const appStyles = css`
    display: flex;
  `;

  const [categoriesType, setCategoriesType] = useLocalStorage(
    "expense",
    "category_type"
  );

  return (
    <Fragment>
      {globalStyles.map((style, index) => (
        <Global key={index} styles={style} />
      ))}
      <div css={appStyles}>
        <SideBar {...{ currentPage, handlePageChange }} />
        <Main page={currentPage}>
          <Routes>
            <Route index element={<Navigate to="categories" />} />
            <Route path="/categories" element={<CategoriesPage />}>
              <Route index element={<Navigate to={categoriesType} />} />
              <Route path="expense" element={<Categories type="expense" />} />
              <Route path="income" element={<Categories type="income" />} />
            </Route>
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/budgets" element={<BudgetPage />} />
          </Routes>
        </Main>
      </div>
    </Fragment>
  );
}

export default App;
