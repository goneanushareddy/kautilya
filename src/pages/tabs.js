import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
const Tabs_section = ({phd,popup}) => {
  //console.log(phd[0].name);

  return (
    <Container>
      <Tabs
      defaultActiveKey={phd[0].name}
      id="fill-tab-example"
      className=""
      fill
    >
      {phd.map((eachobj)=>(
    
      <Tab eventKey={eachobj.name} title={<span> <i class="fa-solid fa-circle-down"></i>  {eachobj.name} </span>}>
        
         <div dangerouslySetInnerHTML={ { __html:  eachobj.description} }></div>
      </Tab>
      
    
      ))}
      </Tabs>
    </Container>
  );
}

export default Tabs_section;