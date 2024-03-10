
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import Exam from "./Exam/Exam.js";


function Typography() {
  return (
     <>
      <PanelHeader size="sm" />
      <div className="content">
                       <Exam/>
      </div>
    </>
   
  );
}

export default Typography;
