import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { Button } from '@material-ui/core';

const Navigation = () => {
  return (
    <div className="Header">
      <ul className="NavList">
        <li>
          <NavLink
            exact
            to={routes.home}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            <Button variant="outlined" color="primary" size="large">
              Home
            </Button>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.movies}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            <Button variant="outlined" color="secondary" size="large">
              movies
            </Button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
