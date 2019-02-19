import * as React from "react";

const Nomatch: React.SFC<any> = props => {
  const { location } = props;
  return (
    <div>
      <h2>404 🤷</h2>
      <pre>{location.pathname}</pre>
    </div>
  );
};

export default Nomatch;
