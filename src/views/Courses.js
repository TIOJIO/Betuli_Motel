
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import Courses from './Courses/Courses';
import icons from "variables/icons";

function Icons() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Courses/>
      </div>
    </>
  );
}

export default Icons;
