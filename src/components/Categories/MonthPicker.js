// below comment line is required
// it tells babel how to convert properly
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Fragment, useRef } from "react";
import { DatePicker } from "@material-ui/pickers";
import { format, getMonth, getYear } from "date-fns";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "../../components/Button";

function MonthPicker({ date, setDate }) {
  const datePickerRef = useRef(null);

  const dateStyle = css`
    margin-bottom: 0.325rem;
    display: flex;
    gap: 2rem;
  `;

  const inputStyle = css`
    & input {
      display: none;
    }
  `;

  const openDatePicker = () => {
    datePickerRef.current.click();
  };

  const asDateObject = new Date(date.year, date.month);

  const handleDatechange = (date) => {
    setDate({ year: getYear(date), month: getMonth(date) });
  };

  const handleSubtractMonth = () => {
    const isFirstMonth = date.month - 1 < 0;
    setDate({
      year: date.year - isFirstMonth,
      month: isFirstMonth ? 11 : date.month - 1,
    });
  };

  const handleAddMonth = () => {
    const isLastMonth = date.month + 1 > 11;
    setDate({
      year: date.year + isLastMonth,
      month: isLastMonth ? 0 : date.month + 1,
    });
  };

  return (
    <Fragment>
      <div css={dateStyle}>
        <Button
          icon={<IoIosArrowBack />}
          onlyIcon={true}
          type="subtle"
          size="sm"
          onClick={handleSubtractMonth}
        />
        <Button type="subtle" size="sm" onClick={openDatePicker}>
          {format(asDateObject, "MMMM yyyy")}
        </Button>
        <Button
          icon={<IoIosArrowForward />}
          onlyIcon={true}
          type="subtle"
          size="sm"
          onClick={handleAddMonth}
        />
      </div>
      <DatePicker
        id="month"
        color="secondary"
        views={["year", "month"]}
        onChange={handleDatechange}
        value={asDateObject}
        inputRef={datePickerRef}
        css={inputStyle}
      />
    </Fragment>
  );
}

export default MonthPicker;
