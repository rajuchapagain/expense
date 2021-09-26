import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetExpenses } from "../../services/expenses.service";
import { Button, Row, Col } from "react-bootstrap";
import ExpenseForm from "./ExpenseForm";
import { GetRegisteredUsers } from "../../services/users.service";
import { BsArrowLeftRight } from "react-icons/bs";

const ExpenseList = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expensesReducer.expenses);
  const { users } = useSelector((state) => state.usersReducer);
  const { isAdmin, id } = useSelector((state) => state.authenticationReducer);
  const [enableEdit, setEnableEdit] = useState(true);
  const [selectedUser, setSelectedUser] = useState(id);
  const [showOther, setShowOther] = useState(false);

  useEffect(() => {
    GetExpenses(dispatch, selectedUser);
    //eslint-disable-next-line
  }, [selectedUser]);

  useEffect(() => {
    GetRegisteredUsers(dispatch);
  }, [dispatch]);

  return (
    <div>
      <h5>
        Your expense list{" "}
        {isAdmin & showOther ? (
          <>
            <select
              id="registeredUsers"
              onChange={(e) => {
                GetExpenses(dispatch, Number(e.target.value));
                setSelectedUser(e.target.value);
                setEnableEdit(Number(e.target.value) === Number(id));
              }}
              defaultValue={id}
            >
              {users.map((user) => (
                <option value={user.id}>{user.fullName}</option>
              ))}
            </select>
          </>
        ) : (
          ""
        )}
        {isAdmin ? (
          <BsArrowLeftRight
            onClick={() => setShowOther(!showOther)}
            title="Show other person"
          />
        ) : (
          ""
        )}
      </h5>
      <hr />
      {expenses.map((e) => (
        <ListRow key={e.id} expense={e} enableEdit={enableEdit} />
      ))}
    </div>
  );
};

const ListRow = ({ expense, enableEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  return isEditing && enableEdit ? (
    <ExpenseForm expense={expense} setIsEditing={setIsEditing} />
  ) : (
    <div>
      <Row onDoubleClick={() => setIsEditing(!isEditing)}>
        <Col>{expense.description}</Col>
        <Col>${expense.amount}</Col>
        <Col>
          {enableEdit ? (
            <Button variant="warning" onClick={() => setIsEditing(!isEditing)}>
              Edit
            </Button>
          ) : (
            ""
          )}
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default ExpenseList;
