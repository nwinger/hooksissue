import * as React from 'react';
import NavigationContext from './context/navigation';
import useNavState from './hooks/use-navstate';

const AppContainer: React.FunctionComponent<any> = ({ children }) => {
  const { isOpenState, onChange } = useNavState();

  return (
    <NavigationContext.Provider value={{ isOpenState, onChange }}>{children}</NavigationContext.Provider>
  );
};

export default AppContainer;
