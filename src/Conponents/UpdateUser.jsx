import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Update_user } from "../Config/actions";

const UpdateUser = () => {
  const { id } = useParams();
  console.log(id);
  const users = useSelector((state) => state);
  console.log(users);
  const user = users.filter((u) => u.id === id);
  console.log(user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      Update_user({
        id: id,
        name: name,
        email: email,
      })
    );
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UpdateUser;
