import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox, faTrash, faBan } from "@fortawesome/free-solid-svg-icons";

export default function NavigationBar() {
  const activeNavLinkStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "#f2c500" : "",
    color: isActive ? "#2874f0" : "#fff",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <NavLink to="/" style={activeNavLinkStyle} className="navbar-link">
          <FontAwesomeIcon icon={faInbox} /> Inbox
        </NavLink>
        <NavLink to="/spam" style={activeNavLinkStyle} className="navbar-link">
          <FontAwesomeIcon icon={faBan} /> Spam
        </NavLink>
        <NavLink to="/trash" style={activeNavLinkStyle} className="navbar-link">
          <FontAwesomeIcon icon={faTrash} /> Trash
        </NavLink>
      </div>
    </nav>
  );
}
