import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./components/Users/Users";
import UserProfile from "./components/UserProfile/UserProfile";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Users />} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
