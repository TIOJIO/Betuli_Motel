
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import Finance from './Finance/Finance';


function Dashb() {
  return (
   
      
      <div >
        <Row>
          <Col md={12}>
            <Card>
              <CardBody style={{ backgroundColor:'#d3d0d0'}} >
                <div>
                    <Finance/>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
   
  )
}

export default Dashb;
