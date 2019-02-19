import React, { useContext, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './prism.css';
import './App.scss';

import Navigation from './navigation/Navigation';
import Header from './Header';
import Content from './Content';
import ErrorBoundary from './error/ErrorBoundary';
import AppContainer from './AppContainer';
import NavigationContext from './context/navigation';

const App: React.FunctionComponent<{}> = props => {
  // TODO: Wanted to use this approach, but for some strange reason it doesn't work for this component.🤷‍
  // const { isOpenState, onChange } = useContext(NavigationContext);

  return (
    <AppContainer>
      {/* Using the <NavigationContext.Consumer> instead of useContext(NavigationContext) for this component - see comment above */}
      <NavigationContext.Consumer>
        {({ isOpenState, onChange }) => (
          <Router>
            <ErrorBoundary>
              <div>
                <div className={`app ${isOpenState ? 'menu-open' : ''}`}>
                  <button className={`btn-navigation-toggle ${isOpenState ? 'open' : ''}`} onClick={onChange}>
                    <span className="btn-text">Meny</span>
                  </button>
                  <Navigation />
                  <main className="content-wrap">
                    <Header />
                    <Content />
                  </main>
                </div>
              </div>
            </ErrorBoundary>
          </Router>
        )}
      </NavigationContext.Consumer>
    </AppContainer>
  );
};

export default App;
