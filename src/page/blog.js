import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import BlogData from "../dataHendel/blogdata";
  
const Blog = () => {
    const [Bologpostdata,setblogData]=useState(BlogData)
  return (
       <>
       <br></br> <br></br> <br></br> <br></br>
        <Container>
            <Row>
            {Bologpostdata.map((post, index) => (
                <Col md={4}>
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={post.imgUrl} />
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                          {post.body}
                        </Card.Text>
                        <Card.Text>
                          {post.author}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
              ))}
            </Row>
        </Container>
    
       </>

  )
}
  
export default Blog;