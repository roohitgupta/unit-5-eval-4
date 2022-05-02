import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import "./App.css"
// import { ProtectedRoute } from "./components/ProtextedRoute";
import { Link, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div>
        <Link className="nav-home items" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
        <Link className="nav-logout items" to="/logout">
          Logout
        </Link>
        <Link className="nav-login items" to="/login">
          Login
        </Link>
        <Link className="nav-login items" to="/orders">
          Orders
        </Link>
        <Link className="nav-login items" to="/NewOrder">
          NewOrder
        </Link>

      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/neworder" element={<NewOrder />} />
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}
      </Routes>
    </div>
  );
}

export default App;
