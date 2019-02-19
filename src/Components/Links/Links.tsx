import * as React from "react";
import Prism from "prismjs";

class Links extends React.Component<any, any> {
  public componentDidMount() {
    Prism.highlightAll();
  }

  public render() {
    return (
      <div>
        <section className="guide-section">
          <h2>Links</h2>
          <div className="panel-demo">
            <section className="panel-section">
              <a href="##">Normal hyperlink</a>{" "}
              <a href="##" className="link-secondary">
                Secondary hyperlink
              </a>
            </section>
            <section className="panel-section">
              <p className="panel-label">Hover state</p>
              <a href="##" className="state-hover">
                Normal hyperlink
              </a>{" "}
              <a href="##" className="link-secondary state-hover">
                Secondary hyperlink
              </a>
            </section>
          </div>
          <div className="panel-markup">
            <pre className="language-html">
              <code className="language-html">
                {`<a href="...">Normal hyperlink</a>
<a class="link-secondary" href="...">Alternate hyperlink</a>              
`}
              </code>
            </pre>
          </div>
          <div className="panel-css">
            <pre className="language-css">
              <code className="language-css">
                {`a{
  text-decoration: none;
  border-bottom: 1px solid #231464;
  color: #231464;                
  }
  .a:hover{
    color: #d82a07;
    border-color: #d82a07;  
  }
  a.link-secondary{
    color: #d82a07;
    border-color: #d82a07;  
  }
  a.link-secondary:hover{
    border-color: #231464;
    color: #231464;   
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

export default Links;
