import { Container,Row, Col} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Faqs = ({faq,popup}) => {
  const [openItem, setOpenItem] = useState(null);
//  console.log("FAq ",faq)
  const useToggleAccordion = (itemKey) => {
    ////console.log(itemKey);
    setOpenItem((prevOpenItem) => (prevOpenItem === itemKey ? null : itemKey));
  };
  
  const pageUrl = window.location.pathname === '/publications-academic-associates'
 
  return (
    <Container>
        <Row className='faqs'>
            <Col xl={12}>
            <Accordion activeKey={openItem} onSelect={useToggleAccordion}>
            {faq.map((eachobj) => (
              <Accordion.Item key={eachobj.id} eventKey={eachobj.id}>
                <Accordion.Header>
                  <div className="accordion-toggle_left">
                    <span className="accordion-icon">
                      {openItem === eachobj.id ? <FaMinus /> : <FaPlus />}
                    </span>
                    <span className='title'>{pageUrl ? eachobj.name : eachobj.question }</span>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div dangerouslySetInnerHTML={{ __html: pageUrl ? eachobj.description : eachobj.answer  }} ></div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
            </Col>
        </Row>
    </Container>
  );
}

export default Faqs;