import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Home from "./views/Home";
import About from "./views/About";
import Event from "./views/Event";
import Merchandise from "./views/Merchandise";
import Login from "./views/Login";
import Register from "./views/Register";
import ResetPassword from "./views/ResetPassword";
import DashboardCatalog from "./views/DashboardCatalog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/about" element={<About />} />
          <Route path="/event" element={<Event />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/dashboard-catalog" element={<DashboardCatalog />} />
        </Route>
        <Route path="/" element={<GuestLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password/reset" element={<ResetPassword />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
