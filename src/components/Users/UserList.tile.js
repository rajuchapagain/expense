import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetRegisteredUsers } from "../../services/users.service";

const ImageCard = ({ data }) => {
  console.log(data);
  return (
    <div className="card">
      <img src={data.imgSrc} className="card-img-top rounded-circle" alt=".." />
      <div className="card-body">
        <h5>
          {data.fullName} {data.isAdmin ? "(Admin)" : ""}{" "}
        </h5>
        <p>{data.email}</p>
        <p>Total Expense: ${data.totalExpense}</p>
      </div>
    </div>
  );
};

const UserListTile = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.usersReducer);

  const groups = users
    .map((e, i) => {
      return i % 3 === 0 ? users.slice(i, i + 3) : null;
    })
    .filter((e) => {
      return e;
    });

  console.log(groups);
  useEffect(() => {
    GetRegisteredUsers(dispatch);
  }, [dispatch]);
  return (
    <div className="container">
      <div className="col-md-8">
        <h1> All registered members</h1>
        <table>
          <tbody>
            {groups.map((group, i) => {
              return (
                <tr>
                  <td>{group[i] ? <ImageCard data={group[i]} /> : null} </td>
                  <td>
                    {group[i + 1] ? <ImageCard data={group[i + 1]} /> : null}
                  </td>
                  <td>
                    {group[i + 2] ? <ImageCard data={group[i + 2]} /> : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserListTile;
