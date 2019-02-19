import * as React from "react";
import Prism from "prismjs";

class Buttons extends React.Component<any, any> {
  public componentDidMount() {
    Prism.highlightAll();
  }

  public render() {
    return (
      <div>
        <section className="guide-section">
          <h2>Buttons</h2>
          <div className="panel-demo">
            <section className="panel-section">
              <p className="panel-label">Normal</p>
              <button className="btn btn-primary">Primary</button>{" "}
              <button className="btn btn-secondary">Secondary</button>{" "}
              <button className="btn btn-outline">Outline</button>{" "}
            </section>
            <section className="panel-section">
              <p className="panel-label">Hover state</p>
              <button className="btn btn-primary state-hover">
                Primary (hover)
              </button>{" "}
              <button className="btn btn-secondary state-hover">
                Secondary (hover)
              </button>{" "}
              <button className="btn btn-outline state-hover">
                Outline (hover)
              </button>{" "}
            </section>
            <section className="panel-section">
              <p className="panel-label">With icon</p>
              <button className="btn btn-primary with-icon">
                <i className="icon icon-locked" />
                <span className="link-text">Primary (icon)</span>
              </button>{" "}
              <button className="btn btn-secondary with-icon">
                <i className="icon icon-locked" />
                <span className="link-text">Secondary (icon)</span>
              </button>{" "}
              <button className="btn btn-outline with-icon">
                <i className="icon icon-locked" />
                <span className="link-text">Outline (icon)</span>
              </button>{" "}
            </section>
          </div>
          <div className="panel-markup">
            <pre className="language-html">
              <code className="language-html">
                {`<button class="btn btn-primary">Button text</button>
<button class="btn btn-secondary">Button text</button>
<button class="btn btn-outline">Button text</button>
/*
  All of the above styles can be combined with icon by adding 
  "with-icon" css-class to button and then provide icon and
  button text inside button as follows:
*/
<button class="btn btn-primary with-icon">
  <i class="icon icon-someicon"></i>
  <span class="link-text">Button text</span>
</button>
`}
              </code>
            </pre>
          </div>
          <div className="panel-css">
            <pre className="language-css">
              <code className="language-css">
                {`.btn {
  border: 1px solid #231464;
  padding: 0.8rem;
  min-width: 200px;
  height: 46px;
  font-size: 16px;
  font-weight: 700;
}
.btn:hover{
  background: #f1f1f1;
  border-color: #f1f1f1; 
}
.btn-primary{
  background: #231464;
  border-color: #231464;
  color: #fff;
}
.btn-primary:hover{
  background: #140c3a;
  border-color: #140c3a;
}
.btn-secondary{
  background: #d82a07;
  border-color: #d82a07;
  color: #fff;
}
.btn-secondary:hover{
  background: #831301;
  border-color: #831301;
}
.btn-outline{
  background: #fff;
  color: #231464;
  border-color: #231464;
}
.btn-outline:hover{
  background: #f1f1f1;
  border-color: #f1f1f1;
}

`}
              </code>
            </pre>
          </div>
        </section>
      </div>
    );
  }
}

export default Buttons;
