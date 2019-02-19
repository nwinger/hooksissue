import React, { useContext } from 'react';
import { routes, IRoute } from '../routes';
import NavItem from './NavItem';
import NavigationContext from '../context/navigation';

const Navigation: React.FunctionComponent<any> = () => {
  const { isOpenState } = useContext(NavigationContext);

  return (
    <nav className={`page-navigation ${isOpenState ? 'open' : ''}`}>
      <div className="page-navigation-wrap">
        <h3 className="page-navigation-headline">
          Meny <span className="mobile-appendix">Designmanual</span>
        </h3>
        <ul className="list-nav-main" role="navigation">
          {routes.map((route: IRoute, index) => {
            return !route.hidden && <NavItem route={route} key={index} />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
