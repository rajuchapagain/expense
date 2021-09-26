import { Form, Row, Col, Button } from "react-bootstrap";
import { React, useState, useEffect } from "react";
import {
  DeleteExpense,
  EditExpense,
  NewExpense,
} from "../services/expenses.service";
import { useDispatch } from "react-redux";
const ExpenseForm = ({ expense, setIsEditing }) => {
  const descriptions = [
    "Groceries",
    "Credit Card",
    "Student Loans",
    "Eating out",
    "Gas",
  ];
  const [id, setId] = useState(0);
  const [amount, setAmount] = useState(0.0);
  const [description, setDescription] = useState(descriptions[0]);
  const [isNewExpense, setIsNewExpence] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (expense !== undefined) {
      setIsNewExpence(false);
      setDescription(expense.description);
      setAmount(expense.amount);
      setId(expense.id);
    } else {
      setIsNewExpence(true);
    }
  }, [expense]);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (isNewExpense) {
          NewExpense(
            dispatch,
            (expense = { description: description, amount: amount })
          );
        } else {
          setIsEditing(false);
          EditExpense(dispatch, {
            id: expense.id,
            description: description,
            amount: amount,
          });
        }
      }}
    >
      <Row style={{ marginBottom: "10px" }} key={id}>
        <Col>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="select"
            onChange={(event) => setDescription(event.target.value)}
          >
            {descriptions.map((d) => (
              <option>{d}</option>
            ))}
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            placeholder={amount}
            onChange={(event) => setAmount(event.target.value)}
          ></Form.Control>
        </Col>
        <div className="col" style={{ marginTop: "auto" }}>
          {isNewExpense ? (
            <Button variant="primary" type="submit">
              Add
            </Button>
          ) : (
            <div>
              <Button
                style={{ marginRight: "2px" }}
                variant="danger"
                onClick={(e) => DeleteExpense(dispatch, expense.id)}
              >
                Delete
              </Button>
              <Button
                style={{ marginRight: "2px" }}
                variant="success"
                type="submit"
              >
                Save
              </Button>
              <Button
                variant="default"
                onClick={() => {
                  setIsEditing(false);
                }}
              >
                Cancel
              </Button>
            </div>
          )}
        </div>
      </Row>
    </Form>
  );
};

export default ExpenseForm;
