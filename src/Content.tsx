import * as React from 'react';
import { Switch, Route } from 'react-router';
import { routes, IRoute } from './routes';

class Content extends React.Component<any, any> {
  public render() {
    return (
      <div className="page-content">
        <Switch>
          {routes.map((route: IRoute, index) => {
            if (route.subroutes) {
              return route.subroutes.map((subroute: IRoute, subindex) => (
                <Route
                  key={subindex}
                  path={subroute.path}
                  exact={subroute.exact}
                  component={subroute.component}
                />
              ));
            }
            return <Route key={index} path={route.path} exact={route.exact} component={route.component} />;
          })}
        </Switch>
      </div>
    );
  }
}

export default Content;
