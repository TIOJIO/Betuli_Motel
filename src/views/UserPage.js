


import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import UserPage from './UserPage/UserPage';


function Dashb() {
  return (
   
      
      <div >
        <Row>
          <Col md={12}>
            <Card>
              <CardBody style={{ backgroundColor:'rgba(233, 232, 232, 0.829)'}} >
                <div>
                    <UserPage/>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
   
  )
}

export default Dashb;

/*import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import UserPage from './UserPage/UserPage';
import icons from "variables/icons";

function Icons() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <UserPage/>
      </div>
    </>
  );
}

export default Icons;

*/
