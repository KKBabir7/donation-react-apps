import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Footer=()=>{
    return (
        <>
        <br></br>  <br></br>  <br></br>
        <section className='footer'>
           <Container>
			    <Row> 
		            <Col md={4} sm={6}>
		                <h1>Products</h1>
		                    <ul class="list-group">
								<li class="list-group-item"><a href="#">Instant accounts</a></li>
								<li class="list-group-item"><a href="#">Joint accounts</a></li>
								<li class="list-group-item"><a href="#">Business accounts</a></li>
								
		                    </ul>
		            </Col> 
					<Col md={4} sm={6}>
						<h1>Features</h1>
							<ul class="list-group">
								<li class="list-group-item"><a href="#">Account opening</a></li>
								<li class="list-group-item"><a href="#">Card</a></li>
								<li class="list-group-item"><a href="#">Payments</a></li>
								<li class="list-group-item"><a href="#">Money transfers</a></li>
								
							</ul>
					</Col> 
					<Col md={4} sm={6}>
						<h1>Company</h1>
							<ul class="list-group">
								<li class="list-group-item"><a href="#">About us</a></li>
								<li class="list-group-item"><a href="#">Blog</a></li>
								
							</ul>
					</Col> 		
                </Row>
			</Container>
        </section>
        </>
    )
}
export default Footer