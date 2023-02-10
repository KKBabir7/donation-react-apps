import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Toogetinformation=(props)=> {
    
  const [open, setOpen] = useState(true);
const styledhere={
    background:'#fff',
    paddingTop:'50px',
    paddingBottom:'50px'

}
  return (
    <>
    <br></br>
    <Container >  
        <Row>
        <Col md={12} style={styledhere}>
        <center>
                <Button style={{width:'70%'}}
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                 Get Our Vision
              </Button>
              <br></br>
            </center>
            <Collapse in={open}>
                <div id="example-collapse-text" style={{opacity:'0.7'}}>
                {props.tdata}
                </div>
            </Collapse>
        </Col>
    </Row>

      </Container>
      <br></br>
    </>
  );
}

export default Toogetinformation