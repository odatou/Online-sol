import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/dashboard">
          Online Sol
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/groups">Groupes</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/create-group">Créer Groupe</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/payments">Paiements</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/history">Historique</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profil</Link>
            </li>

            <li className="nav-item ms-lg-2">
              <button className="btn btn-danger" onClick={handleLogout}>
                Déconnexion
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;