import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Add_user } from "../Config/actions";

function AddUser() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      Add_user({
        id: count+1,
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
}

export default AddUser;
