import * as React from "react";
import Prism from "prismjs";

class Colors extends React.Component<any, any> {
  public componentDidMount() {
    Prism.highlightAll();
  }

  public render() {
    return (
      <div>
        <section className="guide-section">
          <h2>Colors</h2>
          <div className="panel-demo">
            <section className="panel-section">
              <p className="panel-label">Brand colors</p>
              <ul className="list-colors">
                <li className="item">
                  <div className="color-sample-wrap">
                    <div className="color-sample deep-koamaru" />
                    <div className="color-info">
                      <p className="color-label">Deep Koamaru: Primary</p>
                      <p className="color-code">#231464</p>
                    </div>
                  </div>
                </li>
                <li className="item">
                  <div className="color-sample-wrap">
                    <div className="color-sample cobalt-blue" />
                    <div className="color-info">
                      <p className="color-label">Cobalt blue</p>
                      <p className="color-code">#004fb8</p>
                    </div>
                  </div>
                </li>
                <li className="item">
                  <div className="color-sample-wrap">
                    <div className="color-sample deep-blue" />
                    <div className="color-info">
                      <p className="color-label">Deep blue</p>
                      <p className="color-code">#1c104f</p>
                    </div>
                  </div>
                </li>
                <li className="item">
                  <div className="color-sample-wrap">
                    <div className="color-sample dark-blue" />
                    <div className="color-info">
                      <p className="color-label">Dark blue</p>
                      <p className="color-code">#140c3a</p>
                    </div>
                  </div>
                </li>
                <li className="item">
                  <div className="color-sample-wrap">
                    <div className="color-sample trinidad" />
                    <div className="color-info">
                      <p className="color-label">Trinidad</p>
                      <p className="color-code">#d82a07</p>
                    </div>
                  </div>
                </li>
                <li className="item">
                  <div className="color-sample-wrap">
                    <div className="color-sample trinidad-dark" />
                    <div className="color-info">
                      <p className="color-label">Trinidad dark</p>
                      <p className="color-code">#831301</p>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
            <section className="panel-section">
              <p className="panel-label">Greys</p>
              <ul className="list-colors">
                <li className="item">
                  <div className="color-sample-wrap">
                    <div className="color-sample black" />
                    <div className="color-info">
                      <p className="color-label">Black</p>
                      <p className="color-code">#000000</p>
                    </div>
                  </div>
                </li>
                <li className="item">
                  <div className="color-sample-wrap">
                    <div className="color-sample deep-grey" />
                    <div className="color-info">
                      <p className="color-label">
                        Deep grey: typograpy primary
                      </p>
                      <p className="color-code">#4a4a4a</p>
                    </div>
                  </div>
                </li>
                <li className="item">
                  <div className="color-sample-wrap">
                    <div className="color-sample dark-grey" />
                    <div className="color-info">
                      <p className="color-label">Dark grey</p>
                      <p className="color-code">#878c8c</p>
                    </div>
                  </div>
                </li>
                <li className="item">
                  <div className="color-sample-wrap">
                    <div className="color-sample grey" />
                    <div className="color-info">
                      <p className="color-label">Grey</p>
                      <p className="color-code">#dcdcdc</p>
                    </div>
                  </div>
                </li>
                <li className="item">
                  <div className="color-sample-wrap">
                    <div className="color-sample light-grey" />
                    <div className="color-info">
                      <p className="color-label">Light grey</p>
                      <p className="color-code">#f1f1f1</p>
                    </div>
                  </div>
                </li>
                <li className="item">
                  <div className="color-sample-wrap">
                    <div className="color-sample" />
                    <div className="color-info">
                      <p className="color-label">White</p>
                      <p className="color-code">#ffffff</p>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
          </div>
          <div className="panel-markup">
            <pre className="language-html">
              <code className="language-html">{``}</code>
            </pre>
          </div>
          <div className="panel-css">
            <pre className="language-css">
              <code className="language-css">{``}</code>
            </pre>
          </div>
        </section>
      </div>
    );
  }
}

export default Colors;
