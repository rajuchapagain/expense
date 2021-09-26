import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Row, Col } from "react-bootstrap";
import { GetExpenses } from "../services/expenses.service";
import ExpenseForm from "./expense-form";

export default function ExpenseList() {
  const dispatch = useDispatch();

  const expenses = useSelector((state) => state.expensesSlice.expenses);
  useEffect(() => {
    GetExpenses(dispatch);
  }, []);

  return (
    <div style={{ marginBottom: "1rem" }}>
      {expenses.map((e) => (
        <ListRow expense={e} key={e.id} />
      ))}
    </div>
  );
}
const ListRow = ({ expense }) => {
  const [isEditing, setIsEditing] = useState(false);

  return isEditing ? (
    <ExpenseForm expense={expense} setIsEditing={setIsEditing} />
  ) : (
    <div>
      <Row>
        <Col>{expense.description}</Col>
        <Col>${expense.amount}</Col>
        <Col>
          <Button variant="warning" onClick={() => setIsEditing(!isEditing)}>
            Edit
          </Button>
        </Col>
      </Row>
      <hr />
    </div>
  );
};
