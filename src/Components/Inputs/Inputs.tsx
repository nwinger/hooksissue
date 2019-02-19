import * as React from "react";
import Prism from "prismjs";

class Inputs extends React.Component<any, any> {
  public componentDidMount() {
    Prism.highlightAll();
  }

  public render() {
    return (
      <div className="guide-inputs-wrap">
        <section className="guide-section">
          <h2>Form elements</h2>
          <section className="panel-columns col-2">
            <section className="column">
              <div className="panel-demo">
                <h3>Input</h3>
                <div className="form-field">
                  <label htmlFor="firstName">Default</label>
                  <input type="text" name="firstName" id="firstName" />
                </div>
                <div className="form-field focused">
                  <label htmlFor="firstName">Focused</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    defaultValue="Value text"
                  />
                </div>
                <div className="form-field error">
                  <label htmlFor="firstName">In error</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    defaultValue="Erroneous value"
                  />
                  <span id="firstName_error" className="error-msg">
                    Error message text
                  </span>
                </div>
                <div className="form-field info open">
                  <label htmlFor="firstName">
                    With info (normal){" "}
                    <button className="btn-icon info-trigger" />
                  </label>
                  <input type="text" name="firstName" id="firstName" />
                  <span id="firstName_info" className="info-box">
                    A longer informational text explaining how to use this field
                    or some other important information
                  </span>
                </div>
                <div className="form-field info-critical open">
                  <label htmlFor="firstName">
                    With info (critical){" "}
                    <button className="btn-icon info-trigger" />
                  </label>
                  <input type="text" name="firstName" id="firstName" />
                  <span id="firstName_info" className="info-box">
                    A longer informational text explaining how to use this field
                    or some other important information
                  </span>
                </div>
              </div>
            </section>
            <section className="column">
              <div className="panel-demo">
                <h3>Dropdown</h3>
              </div>
            </section>
          </section>
          <section className="panel-columns col-2">
            <section className="column">
              <div className="panel-demo">
                <h3>Radiobuttons</h3>
                <p>Minimum click target, mobile 48x48</p>
                <div className="radio-group">
                  <div className="form-field radio">
                    <input
                      type="radio"
                      name="frmYesNo"
                      value="0"
                      id="radioBtn_1_0"
                    />
                    <label htmlFor="radioBtn_1_0">
                      <span className="indicator" />
                      Ja
                    </label>
                  </div>
                  <div className="form-field radio">
                    <input
                      type="radio"
                      name="frmYesNo"
                      value="1"
                      id="radioBtn_1_1"
                    />
                    <label htmlFor="radioBtn_1_1">
                      <span className="indicator" />
                      Nei
                    </label>
                  </div>
                </div>
              </div>
            </section>
            <section className="column">
              <div className="panel-demo">
                <h3>Checkbox</h3>
                <p>Minimum click target, mobile 48x48</p>
                <div className="checkbox-group">
                  <div className="form-field checkbox">
                    <input
                      type="checkbox"
                      name="checkYesNo"
                      value="0"
                      id="checkBox_1_0"
                    />
                    <label htmlFor="checkBox_1_0">
                      <span className="indicator" />
                      Ja
                    </label>
                  </div>
                  <div className="form-field checkbox">
                    <input
                      type="checkbox"
                      name="checkYesNo"
                      value="1"
                      id="checkBox_1_1"
                    />
                    <label htmlFor="checkBox_1_1">
                      <span className="indicator" />
                      Nei
                    </label>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <section className="panel-columns">
            <section className="column">
              <div className="panel-demo">
                <h3>Sliders</h3>
                <div className="form-field slider">
                  <label htmlFor="frmSlider_1">Ønsket lånebeløp</label>
                  <input className="slider" id="frmSlider_1" type="range" />
                </div>
              </div>
            </section>
          </section>
          <section className="panel-columns">
            <section className="column">
              <div className="panel-demo">{"steps"}</div>
            </section>
          </section>{" "}
        </section>
      </div>
    );
  }
}

export default Inputs;
