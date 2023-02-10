import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WithLabelExample from '../component/progress'



import Helpdata from '../dataHendel/helpcarddata/helpcard'


const HelpCard=()=>{
    
//        const [matro,setmatro]=useState(Helpdata.map((x,i)=>Helpdata[i].taka.collected))
//        const [totalm,settotlam]=useState(Helpdata.map((x,i)=>Helpdata[i].taka.need))
//        const diviv=((matro * 100)/totalm).toFixed(2)
//   useEffect(()=>{
//     setmatro()
//   })
const [donData,setDonData]=useState(Helpdata)


// const //truncutstring=(str,num)=>{
//   if(str.length>num){
//     return str.slice(0,num) + '...'
//   }
//   else{
//     return str
//   }
// }


    return(
        <>
        <section class="section-3">
		    <Container>
			    <center><h3 className='all-title'><span>Vaquinhas</span> que captaram mais nos útlimos 7 dias</h3>
				<hr style={{width:'300px',border:'1px solid #0891f8'}} />
				</center>
               
                <br/><br/>
		        <Row>
                    {donData.map((Hdata,i)=>{
                        const {id,img,name,lastname,hdes,sendHelp:{imgn,nameh,lastnameh,imgn1,imgn2},taka:{collected,need},on,news,jlki}=Hdata

                        return <Col md={4} sm={6}  className="main-thumbnail" key={id}>
				        <div className="thumbnail">
						    <div className="main-img">
							    <img class="img-responsive" src={img} alt="..."/>
							</div>
							 <WithLabelExample  per={((collected)*100)/(need)}/>
							<div class="caption">
								<h4 class="hwdding">{name} </h4>
								<p class="id">{lastname}</p>
								<p>{hdes}</p>
								<div class="media">
									<div class="media-left">
										  <img class="media-object" src={imgn} alt="..."/>
									</div>
									<div class="media-body">
										<h4 class="media-heading">{nameh}</h4>
										<p>{lastnameh}</p>
                                       
									</div>
								</div>
                                    <hr style={{width:'100%',padding:'0'}} />
                                    <p class="pq">Still Donation <b>{collected}</b> Taka</p>
                                    <p class="pt">Totat Need <b> {need}</b> Taka</p>
                                <Link className='learonmore' to={id} state={{name,lastname,collected,need,nameh,lastnameh,id,on,news,imgn,imgn1,imgn2}}>Know Him</Link>  
							</div>
						</div>
					</Col>
                    })}
                
               
                </Row>
            </Container>
        </section>
        </>
    )
}

export default HelpCard