import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./components/Users/Users";
import UserProfile from "./components/UserProfile/UserProfile";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={process.env.PUBLIC_URL + "/"} element={<Users />} />
        <Route path={process.env.PUBLIC_URL + "/user/:id"} element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
