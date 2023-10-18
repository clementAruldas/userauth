import "./App.css";
import Login from "./components/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="login">
        <Login />
      </div>
    </div>
  );
}

export default App;
