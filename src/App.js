import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./Conponents/UserList";
import AddUser from "./Conponents/AddUser";
import UpdateUser from "./Conponents/UpdateUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
