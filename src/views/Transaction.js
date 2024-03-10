
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import {Typography,TextField, Box,Button,Paper,Grid} from '@material-ui/core';


// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import Transaction from './Transaction/Transaction';
import icons from "variables/icons";

function Icons() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Typography variant='h5'  style={{color:'black',fontSize:'30px',fontWeight:'bold',color:'green',marginTop:'-70px'}} >New transaction</Typography><br></br><br></br>
        <Transaction/>
      </div>
    </>
  );
}

export default Icons;
