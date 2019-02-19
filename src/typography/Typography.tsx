import * as React from "react";

const Typography: React.SFC<any> = props => {
  return (
    <div>
      <div className="guide-section">
        <h1>Typography: Mobile, Gotham</h1>
        <div className="panel-demo mobile">
          <section className="panel-section">
            <h1>H1: Narrow A, 30px, font-weight 500</h1>
            <h2>H2: Narrow A, 25px, font-weight 700</h2>
            <h3>H3: Narrow A, 20px, font-weight 600</h3>
          </section>
          <section className="panel-section">
            <div className="lead">
              <p className="lead-para-1">
                Lead paragraph 1: Narrow A, 22px font-weight 400
              </p>
              <p className="lead-para-2">
                Lead paragraph 2: Narrow A, 18px font-weight 700
              </p>
            </div>
          </section>
          <section className="panel-section">
            <p className="sub-title">
              Sub title 1: Narrow A, 25px, font-weight 700
            </p>
            <p className="sub-title-small">
              Sub title 2: Narrow A, 18px, font-weight 700
            </p>
          </section>
          <section className="panel-section">
            <p className="menu-text-main">
              Menu text, main actions - 01: Narrow A, 18px, font-weight 700
            </p>
            <p className="menu-text-top">
              Menu text top - 01: Narrow A, 18px, font-weight 400
            </p>
          </section>
          <section className="panel-section">
            <a href="##" className="link-text-large">
              Link-text, large: Narrow A, 18px, font-weight auto
            </a>
          </section>
          <section className="panel-section">
            <p>Body text: Narrow A, 16px font-weight auto</p>
            <a className="link-text-body" href="##">
              Body link: Narrow A, 16px font weight auto
            </a>
          </section>
        </div>
      </div>
      <div className="guide-section">
        <h1>Typography: Desktop, Gotham</h1>
        <div className="panel-demo desktop">
          <section className="panel-section">
            <h1>H1: Narrow A, 50px, font-weight 500</h1>
            <h2>H2: Narrow A, 38px, font-weight 700</h2>
            <h3>H3: Narrow A, 25px, font-weight 600</h3>
          </section>
          <section className="panel-section">
            <div className="lead">
              <p className="lead-para-1">
                Lead paragraph 1: Narrow A, 22px font-weight 400
              </p>
              <p className="lead-para-2">
                Lead paragraph 2: Narrow A, 18px font-weight 700
              </p>
            </div>
          </section>
          <section className="panel-section">
            <p className="sub-title">
              Sub title 1: Narrow A, 25px, font-weight 700
            </p>
            <p className="sub-title-small">
              Sub title 2: Narrow A, 18px, font-weight 700
            </p>
          </section>
          <section className="panel-section">
            <p className="menu-text-main">
              Menu text, main actions - 01: Narrow A, 18px, font-weight 700
            </p>
            <p className="menu-text-top">
              Menu text top - 01: Narrow A, 18px, font-weight 400
            </p>
          </section>
          <section className="panel-section">
            <a href="##" className="link-text-large">
              Link-text, large: Narrow A, 18px, font-weight auto
            </a>
          </section>
          <section className="panel-section">
            <p>Body text: Narrow A, 16px font-weight auto</p>
            <a className="link-text-body" href="##">
              Body link: Narrow A, 16px font weight auto
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Typography;
