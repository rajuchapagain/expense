import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import { GetExpensesByCategory } from "../../services/statistics.service";
const ExpenseStatistics = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.statisticsReducer.expenses);

  const [doughnut, setDoughnut] = useState({
    labels: [],
    data: [],
  });
  useEffect(() => {
    GetExpensesByCategory(dispatch);
  }, [dispatch]);

  useEffect(() => {
    setDoughnut({
      labels: expenses.map((x) => x.key),
      data: expenses.map((x) => x.value),
    });
  }, [expenses]);

  const data = {
    labels: doughnut.labels,
    datasets: [
      {
        data: doughnut.data,
        backgroundColor: [
          "#007bff", // blue
          "#FF0000", // red
          "#FFD700", // yellow
          "#28a745", // green
          "#FF00FF", // violet
          "#ff9900", // orange
          "#00FFFF", // aqua marine
          "#d69ae5", // red violet
          "#FF8F66", // orange red
          "#00FF00", // lime
        ],
      },
    ],
  };

  return (
    <div
      hidden={!expenses || !expenses.length}
      style={{
        maxWidth: "35rem",
        maxHeight: "35rem",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h4 style={{ marginTop: "10px" }}>Expenses per category</h4>
      <Doughnut data={data} />
    </div>
  );
};

export default ExpenseStatistics;
