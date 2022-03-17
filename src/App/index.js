/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { Fragment, useState } from "react";
import Main from "../components/Main";
import SideBar from "../components/Sidebar";
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
        <Main page={currentPage} />
      </div>
    </Fragment>
  );
}

export default App;
