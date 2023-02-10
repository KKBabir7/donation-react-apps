import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Button  from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'



import Img from '../allImage/img'
import HomeData from '../dataHendel/home/homedata';
import HelpCard from '../component/helpcard';
import Toogetinformation from '../component/toogle'

const Homepage=()=>{
  const {Bannersection:{
    bsH1,bsP,bsBTN
  },section2:{c1,c2,c3,rightheading},tooglesection:{des}}=HomeData

    return (
        <>
        <section className='section-1' >
            <Container fluid>
			    <Row>
				    <Col md={6} data-aos="fade-right" className='left-section'>
					    <h1>{bsH1}</h1>
						<h3>{bsP}</h3>
						<Button  className="btn-a">{bsBTN}</Button>&nbsp;&nbsp;&nbsp;
				    </Col>
					<Col md={6} data-aos="fade-left" className='kitty'>
                        <Jumbotron className='jum'>
							<Form>
								 <Form.Group>
                                    <Form.Control type="email" className='input' placeholder="Enter Email" />
								 </Form.Group >
								 <Form.Group>
                                    <Form.Control type="password" className='input' placeholder="Enter Password" />
								</Form.Group >
                                <div className="d-grid gap-2">
								   <Button variant="primary" size="lg" className='btn-b'>Send Your Contribution</Button>
                                 </div>
							</Form>
						</Jumbotron>
					</Col>
				</Row>
		    </Container>
        </section>
        <section class="section-2">
			<Container>
				<Row  data-aos="flip-up">
					<Col md={12}>
						<Row className='card'>
						   <Col md={7} sm={7} xs={12} className="scan">
								<Image src={Img[1]} />
							</Col>
							<Col md={2} sm={2} xs={6} className="mid-card">
								<center>
                                    <p className="p-2">{c1}</p>
									<p className="p-2">{c2} </p>
									<p className="p-2">{c3}</p>
								</center>
							</Col>
							<Col md={3} sm={3} xs={6} class="last-card">
								<center><p className='p-9'>{rightheading} </p></center>
							</Col>
						</Row>	
					</Col>
				</Row>
			</Container>
		</section>

        <br></br>
        <HelpCard />
        <br></br>
        <Toogetinformation tdata={des}/>
        <br></br>
        
        </>
    )
}

export default Homepage