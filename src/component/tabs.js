import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function Maintabs(props) {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="On" title="On">
          <p>{props.on}</p>
      </Tab>
      <Tab eventKey="News" title="News">
      <p>{props.news}</p>
      </Tab>
      <Tab eventKey="Who-helped" title="Who Helped">
         <p>{props.whohlp}</p>
      </Tab>
      <Tab eventKey="Message" title="Message" >
       
      </Tab>
    </Tabs>
  );
}

export default Maintabs;