import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Delete_user } from "../Config/actions";

const UserList = () => {
  const users = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(Delete_user(id));
  };

  return (
    <div>
      <button>
        <Link to="/add">Add User</Link>
      </button>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => {
            return (
              <tr key={i}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <Link to={`/update/${u.id}`}>
                    <button>Update</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDelete(u.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
