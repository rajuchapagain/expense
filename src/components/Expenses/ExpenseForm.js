import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";
import {
  NewExpense,
  DeleteExpense,
  EditExpense,
} from "../../services/expenses.service";
import { toast } from "react-toastify";

const ExpenseForm = ({ expense, setIsEditing }) => {
  const descriptions = [
    "Groceries",
    "Credit Card",
    "Student Loans",
    "Eating out",
    "Gas",
    "Remittances",
  ];
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState(descriptions[0]);
  const [isNewExpense, setIsNewExpense] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (expense !== undefined) {
      setIsNewExpense(false);
      setAmount(expense.amount);
      setDescription(expense.description);
    }
  }, [expense]);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (Number(amount) > 0) {
          if (isNewExpense) {
            NewExpense(dispatch, {
              description: description,
              amount: Number(amount),
            });
          } else {
            setIsEditing(false);
            EditExpense(dispatch, {
              id: expense.id,
              description: description,
              amount: Number(amount),
            });
          }
        } else {
          toast.error("Amount must be greater than 0");
        }
      }}
    >
      <Row onDoubleClick={() => (NewExpense ? "" : setIsEditing(false))}>
        <Col>
          <Form.Label>Description</Form.Label>
          <Form.Select onChange={(event) => setDescription(event.target.value)}>
            {descriptions.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </Form.Select>
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
        <Col style={{ marginTop: "auto" }}>
          {isNewExpense ? (
            <Button variant="primary" type="submit">
              Add
            </Button>
          ) : (
            <div>
              <Button
                variant="success"
                type="submit"
                style={{ marginRight: "5px" }}
              >
                Save
              </Button>
              <Button
                variant="danger"
                onClick={() => DeleteExpense(dispatch, expense.id)}
                style={{ marginRight: "5px" }}
              >
                Delete
              </Button>
              <Button
                variant="default"
                onClick={() => setIsEditing(false)}
                style={{ marginRight: "5px" }}
              >
                Cancel
              </Button>
            </div>
          )}
        </Col>
      </Row>
      <hr style={{ border: "2px solid grey" }} />
    </Form>
  );
};

export default ExpenseForm;
