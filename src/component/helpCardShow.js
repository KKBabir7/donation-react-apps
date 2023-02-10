import React, { useEffect, useState } from 'react'
import { useParams ,useLocation} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Button  from 'react-bootstrap/Button';
import WithLabelExample from '../component/progress'
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegWindowRestore } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import CarouselFade from '../component/cursol'

import Helpdata from '../dataHendel/helpcarddata/helpcard'
import Maintabs from '../component/tabs';
import Modal from 'react-bootstrap/Modal';
import WhohelpedData from '../dataHendel/helpcarddata/whohelped';

const HelpCardShow=()=>{
    const {showid}=useParams()
    const location=useLocation()
//     const [holedata,setHoledata]=useState('')
//     const [maindata,setmaindat]=useState(HelpdataShow)
//    useEffect(()=>{
//     const alldata=maindata.filter((x)=>x.id===show) 
//          setHoledata(alldata[0])
   
//    },[maindata])


const [copylink,setCopylink]=useState(false)
const copyidlink=()=>{
    
    if(!copylink){
        setCopylink(!copylink)
        setTimeout(()=>{
            setCopylink(copylink)
        },2000)
        
    }
    const copyText = document.getElementById("idurlcopy")
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy")
}
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


// const [maindata,setmaindat]=useState(HelpdataShow[0])
const [whohelp,setWhohelp]=useState(WhohelpedData)
const totalWhohelpData=whohelp
// const {id,img,name,lastname,hdes,sendHelp:{imgn,nameh,lastnameh},taka:{collected,need},on,news}=maindata


//    const hendeleron=(e)=>{
// // //  const dwwp=document.getElementById('getvaluer').value
// // //  setmaindat({...maindata,'jlki':dwwp})
// // // console.log(maindata)
// // // console.log({'jlki':dwwp})
//  e.preventDefault()

 
//       ssetDonData((pre)=>{
       
       
//         return {...pre,'jlki':40} 
// })
// console.log(donsData)
// }
const [dataset,Maindata]=useState(Helpdata)
const [amount ,setamount]=useState('')
const addname=(e)=>{
    e.preventDefault()
for(let i=0;i<dataset.length;i++){
    if(dataset[i].id===location.state.id){
        Maindata({...dataset[i],'Usercontribute':document.getElementById('nameUser').value})
        console.log(dataset[i])
       break; 
    }
}

setShow(false);
}


    


  return (
   <>
   <br></br> <br></br> <br></br> <br></br>
    <section className='sectiondaynamic'>
        <Container>
          
            <center>
                <h1>Go Contribution</h1>
                <p style={{opacity:'0.8'}}> {location.state.nameh} ID: {location.state.id}</p>    
            </center>
            <div className='daynamic-box-data'>
           
        
                <Row>
                    <Col md={8}>
                        
                    <div className='main-imgage'>
                         <CarouselFade image={location.state.imgn} imagee={location.state.imgn1} imageee={location.state.imgn2}/>
                    </div>
                    <Row>
                        <Col md={8}>
                            <br/>
                            <div class="form-group vaka">
                                
                               {
                                copylink &&(
                                    <h2><FaRegCheckCircle /> ID Copy</h2>
                                )
                               }
                               <div className='copylink'>
                                <input  readOnly type="text" value={showid} id="idurlcopy"/>
                                    <button onClick={copyidlink}><FaRegWindowRestore/></button>
                               </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <ul className='socail-icon'>
                                <li><a href='#'><FaFacebookF /></a></li>
                                <li><a href='#'><FaGooglePlusG /></a></li>
                                <li><a href='#'><FaTwitter /></a></li>
                            </ul>
                        </Col>
                    </Row>
                    </Col>
                    <Col md={4} className='day-sidemenu'>
                    <h2>{location.state.nameh}</h2>
                    <h5> {location.state.lastnameh}</h5>
                   
                    <WithLabelExample per={((location.state.collected)*100)/(location.state.need)}/>
                    
                    <p><b>Raised</b></p>
                    <p style={{marginTop:'-15px'}}><b>{location.state.collected} Taka.</b></p>
                   
                    <p><b>Total need</b></p>
                    <p style={{marginTop:'-15px'}}><b>{location.state.need} Taka.</b></p>
                   
                    <p>Supporters</p>
                    <p style={{marginTop:'-15px'}}><b></b></p>
                    <br></br>
                    <div className="d-grid gap-2">
                        <Button variant="primary" onClick={handleShow} size="lg">
                           BDT-Contribute
                        </Button>
                        </div>
                    </Col>
                </Row>
            </div>
              <br/><br/>
            <Row>
          
                <Col md={12}>
              
                    <div className='navstabs'>
                        <Maintabs on={location.state.on} news={location.state.news} whohlp={dataset.Usercontribute} />
                    </div>
                    
                </Col>
            </Row>
            <br/><br/>
            
        </Container>
    </section>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Send Contribution To {location.state.nameh}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <Form onSubmit={addname}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Amount</Form.Label>
                <Form.Control  id='takaUser' value={amount} onChange={(e)=>{
                        setamount(e.target.value)
                    }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control value={totalWhohelpData[0].name}   id='nameUser' type="text" disabled/>
            </Form.Group>
                <Button type='submit'>Send</Button>
            </Form>
       
        </Modal.Body>
        <Modal.Footer>
         
         
        </Modal.Footer>
      </Modal>
   </>
  )
}
export default HelpCardShow