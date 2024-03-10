
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import Bulletin from './Bulletin/Bulletin';
import icons from "variables/icons";

function Icons() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Bulletin/>
      </div>
    </>
  );
}

export default Icons;
