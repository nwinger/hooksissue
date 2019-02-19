import React, { useState, useContext } from 'react';
import { IRoute } from '../routes';
import { NavLink } from 'react-router-dom';
import NavigationContext from '../context/navigation';

interface INavItemProps {
  route: IRoute;
}

const NavItem: React.FunctionComponent<INavItemProps> = props => {
  const { onChange } = useContext(NavigationContext);
  const [toggleState, setToggleState] = useState<boolean>(false);
  const { route } = props;

  const handleClick = (element: React.MouseEvent<HTMLElement>) => {
    const newState = !toggleState;
    setToggleState(newState);
  };

  return (
    <li className={`item ${toggleState ? 'open' : ''}`}>
      {route.path ? (
        <NavLink to={route.path} activeClassName="is-active" exact={route.exact} onClick={onChange}>
          {route.label}
        </NavLink>
      ) : (
        <React.Fragment>
          <div className="trigger-sub-nav" onClick={handleClick}>
            {route.label}
          </div>
          <ul className="list-nav-sub">
            {route.subroutes &&
              route.subroutes.map((subroute: IRoute, subindex) => {
                return (
                  subroute.path && (
                    <li className="item" key={subindex}>
                      <NavLink to={subroute.path} activeClassName="is-active" onClick={onChange}>
                        {subroute.label}
                      </NavLink>
                    </li>
                  )
                );
              })}
          </ul>
        </React.Fragment>
      )}
    </li>
  );
};

export default NavItem;
