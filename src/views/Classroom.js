
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import Classroom from './Classroom/Classroom';
import icons from "variables/icons";

function Icons() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Classroom/>
      </div>
    </>
  );
}

export default Icons;
