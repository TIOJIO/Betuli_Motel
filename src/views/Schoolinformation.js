
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import Schoolinformation from "./Schoolinformation/Schoolinformation.js";


function Typography() {
  return (
     <>
      <PanelHeader size="sm" />
      <div className="content">
                       <Schoolinformation/>
      </div>
    </>
   
  );
}

export default Typography;
