import React from "react";
import Helmet from "react-helmet";

// isse ye hoga ki jo bhi page mai hum component import karenge usme title vo rahega jo hum paas karenge.
// importing in home.js
const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default MetaData;