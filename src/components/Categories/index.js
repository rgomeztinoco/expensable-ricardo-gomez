// below comment line is required
// it tells babel how to convert properly
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { getMonth, getYear, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import apiFetch from "../../services/api-fetch";
import CategoryCard from "../CategoryCard";
import NewCategoryCard from "../CategoryCard/NewCategory";
import CategoriesHeader from "./Header";
import { Link, useLocation, useParams } from "react-router-dom";

const now = new Date();

const initialDate = {
  year: getYear(now),
  month: getMonth(now),
};

function Categories({ type }) {
  const [date, setDate] = useState(initialDate);
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    apiFetch("/categories")
      .then(setCategoriesData)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const monthlyData = categoriesData
    .filter((cat) => cat.transaction_type === type)
    .map((cat) => {
      const { transactions, transaction_type, ...rest } = cat;
      const amount = transactions.reduce((acc, curr) => {
        const trxDate = parseISO(curr.date);
        const trxYear = trxDate.getFullYear();
        const trxMonth = trxDate.getMonth();
        const isInThisMonth = trxYear === date.year && trxMonth === date.month;
        return acc + (isInThisMonth ? curr.amount : 0);
      }, 0);

      return { ...rest, amount: amount };
    });

  const total = monthlyData.reduce((acc, curr) => acc + curr.amount, 0);

  const style = css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 0.5rem;
    row-gap: 0.625rem;
  `;

  return (
    <section>
      <CategoriesHeader {...{ date, setDate, total }} />
      <div css={style}>
        {monthlyData.map((categorie) => (
          <CategoryCard
            color={categorie.color}
            iconName={categorie.icon}
            name={categorie.name}
            key={categorie.id}
            amount={categorie.amount}
          />
        ))}
        <NewCategoryCard />
      </div>
    </section>
  );
}

export default Categories;
