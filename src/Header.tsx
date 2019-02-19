import React from 'react';
import logo from './assets/gfx/spbsor-logo_liggende-white-text.svg';

const Header: React.FunctionComponent<any> = props => {
  return (
    <header className="page-header">
      <div className="header-logo">
        <article className="logo-wrap">
          <img src={logo} />
          {/* <img src="assets/gfx/spbsor-logo_liggende-white-text.svg" /> */}
        </article>
      </div>
      <div className="header-content">
        <h1>Designmanual</h1>
      </div>
    </header>
  );
};
export default Header;
