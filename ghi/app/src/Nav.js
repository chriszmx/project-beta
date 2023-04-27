import { NavLink } from 'react-router-dom';

const dropdownItemStyles = {
  backgroundColor: '#4b4e6d',
  color: '#f0f0f0',
};

const dropdownItemHoverStyles = {
  backgroundColor: '#4fc3f7',
  color: '#ffffff',
};

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#343a40' }}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" exact={1} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salespeople">Salespeople</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salespeople/new">New Salesperson</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customers">Customers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customers/new">New Customer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales">Sales</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales/new">Record a new Sale</NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/list-technicians" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Technicians
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: '#4b4e6d' }}>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/list-technicians"
                    style={dropdownItemStyles}
                    onMouseEnter={e => Object.assign(e.target.style, dropdownItemHoverStyles)}
                    onMouseLeave={e => Object.assign(e.target.style, dropdownItemStyles)}
                  >
                    Technicians
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/add-technicians"
                    style={dropdownItemStyles}
                    onMouseEnter={e => Object.assign(e.target.style, dropdownItemHoverStyles)}
                    onMouseLeave={e => Object.assign(e.target.style, dropdownItemStyles)}
                  >
                    New Technicians
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/service-appointments" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Service Appointments
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: '#4b4e6d' }}>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/service-appointments"
                    style={dropdownItemStyles}
                    onMouseEnter={e => Object.assign(e.target.style, dropdownItemHoverStyles)}
                    onMouseLeave={e => Object.assign(e.target.style, dropdownItemStyles)}
                  >
                    Service Appointments
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/create-service"
                    style={dropdownItemStyles}
                    onMouseEnter={e => Object.assign(e.target.style, dropdownItemHoverStyles)}
                    onMouseLeave={e => Object.assign(e.target.style, dropdownItemStyles)}
                  >
                    Schedule Service Appointment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/history-service"
                    style={dropdownItemStyles}
                    onMouseEnter={e => Object.assign(e.target.style, dropdownItemHoverStyles)}
                    onMouseLeave={e => Object.assign(e.target.style, dropdownItemStyles)}
                  >
                    Service History
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/list-manufacturers" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Models
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: '#4b4e6d' }}>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/list-manufacturers"
                    style={dropdownItemStyles}
                    onMouseEnter={e => Object.assign(e.target.style, dropdownItemHoverStyles)}
                    onMouseLeave={e => Object.assign(e.target.style, dropdownItemStyles)}
                  >
                    Manufacturers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/create-manufacturers"
                    style={dropdownItemStyles}
                    onMouseEnter={e => Object.assign(e.target.style, dropdownItemHoverStyles)}
                    onMouseLeave={e => Object.assign(e.target.style, dropdownItemStyles)}
                  >
                    Add Manufacturers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/list-vehicle"
                    style={dropdownItemStyles}
                    onMouseEnter={e => Object.assign(e.target.style, dropdownItemHoverStyles)}
                    onMouseLeave={e => Object.assign(e.target.style, dropdownItemStyles)}
                  >
                    Vehicles
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/create-model"
                    style={dropdownItemStyles}
                    onMouseEnter={e => Object.assign(e.target.style, dropdownItemHoverStyles)}
                    onMouseLeave={e => Object.assign(e.target.style, dropdownItemStyles)}
                  >
                    Add Model
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/automobile/form"
                    style={dropdownItemStyles}
                    onMouseEnter={e => Object.assign(e.target.style, dropdownItemHoverStyles)}
                    onMouseLeave={e => Object.assign(e.target.style, dropdownItemStyles)}
                  >
                    Add Automobile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/automobile/list"
                    style={dropdownItemStyles}
                    onMouseEnter={e => Object.assign(e.target.style, dropdownItemHoverStyles)}
                    onMouseLeave={e => Object.assign(e.target.style, dropdownItemStyles)}
                  >
                    List Automobiles
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
