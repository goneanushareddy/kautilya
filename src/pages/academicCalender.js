import { Col,Row,Container } from "react-bootstrap";
import AccordionComponent from "../components/Accordian";
import Accordion from 'react-bootstrap/Accordion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import React, { useState } from 'react';
function AcademicCalendar (){
    const [isOpen, setIsOpen] = useState(true);   
    

    const [activeKey1, setActiveKey1] = useState('0');
    const [activeKey2, setActiveKey2] = useState('0');

    const toggleAccordion1 = (eventKey) => {
        setActiveKey1(activeKey1 === eventKey ? null : eventKey);
    };

    const toggleAccordion2 = (eventKey) => {
        setActiveKey2(activeKey2 === eventKey ? null : eventKey);
    };
    return(
        <section className="ac">
            <Container>
                <Row>
                    <Col xl={12} className="text-center">
                    <h1 className="mtb-5 acd-claender-heading"> Academic Calendar </h1>
                    <h3 className="ac_head">Year 2023-24:<br/>Start Date: 01st August 2023; End Date: 17th May 2024</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12} className="ac_head mt-4">
                      <img src="./images/rightarrow.png"  alt="arrow"/><span>2023</span>
                    </Col>
                    <Col xl={12} className="mt-3 mb-3">
                    <Accordion activeKey={activeKey1} onSelect={toggleAccordion1}>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <div className="accordion-toggle">
                            <span className="panel-title">October/November/ December</span>
                            <span className="accordion-icon">{activeKey1 === '0' ? <FaMinus /> : <FaPlus />}</span>
                          </div>
                        </Accordion.Header>
                          <Accordion.Body className="table-responsive">

                          <table className="table_style"> 
                          <thead>
                          <tr className="tablehead1">
                          <th>Date and Month</th>
                          <th >Day</th>
                          <th >Event</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr className="even">
                          <td >02nd Oct 2023</td>
                          <td >Monday</td>
                          <td><strong>Gandhi Jayanthi</strong></td>
                          </tr>
                          <tr className="odd">
                          <td >24th Oct 2023</td>
                          <td >Tuesday</td>
                          <td><strong>Vijayadasami</strong></td>
                          </tr>
                          <tr className="even">
                          <td >8th Nov 2023</td>
                          <td >Wednesday</td>
                          <td><strong>last day of Trimester 1 and Trimester 4</strong></td>
                          </tr>
                          <tr className="odd">
                          <td >9th Nov – 19th Nov 2023</td>
                          <td >Thursday – Sunday</td>
                          <td><strong>Trimester Holidays</strong></td>
                          </tr>
                          <tr className="even">
                          <td >20th Nov 2023</td>
                          <td >Monday</td>
                          <td><strong>First day of Trimester 2 and Trimester 5</strong></td>
                          </tr>
                          <tr className="odd">
                          <td >25th Dec 2023</td>
                          <td >Monday</td>
                          <td><strong>Christmas</strong></td>
                          </tr>
                          </tbody>
                          </table>
                        </Accordion.Body>
                      </Accordion.Item>

                      
                    </Accordion>
                   
                       
                    </Col>
                </Row>

                <Row>
                <Col xl={12} className="ac_head mt-4">
                      <img src="./images/rightarrow.png" alt="arrow" /><span>2024</span>
                    </Col>
                    <Col xl={12} >
                    
                    <Accordion activeKey={activeKey2} onSelect={toggleAccordion2}>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <div className="accordion-toggle">
                            <span className="panel-title">Jan to Feb</span>
                            <span className="accordion-icon">{activeKey2 === '0' ? <FaMinus /> : <FaPlus />}</span>
                          </div>
                        </Accordion.Header>
                          <Accordion.Body>
                          <table className="table_style"> 
                          <thead>
                          <tr className="tablehead1">
                          <th>Date and Month</th>
                          <th >Day</th>
                          <th >Event</th>
                          </tr>
                          </thead>
                          <tbody>
                         
                            <tr>
                            <td>15th Jan 2024</td>
                            <td>Monday</td>
                            <td><strong>Sankranti</strong></td>
                            </tr>
                            <tr >
                            <td>26th Jan 2024</td>
                            <td>Friday</td>
                            <td><strong>Republic day</strong></td>
                            </tr>
                            <tr>
                            <td>9th Feb 2024</td>
                            <td>Friday</td>
                            <td><strong>Last day of Trimester 2 and Trimester 5</strong></td>
                            </tr>
                            <tr>
                            <td>10th Feb – 25th Feb 2024</td>
                            <td>–</td>
                            <td><strong>Trimester Holidays</strong></td>
                            </tr>
                            <tr>
                            <td>21st Feb 2024</td>
                            <td>Wednesday</td>
                            <td><strong>First day of Trimester 6</strong></td>
                            </tr>
                            <tr>
                            <td>26th February 2024</td>
                            <td>Monday</td>
                            <td><strong>First day of Trimester 3</strong></td>
                            </tr>
                            </tbody>
                          </table>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          <div className="accordion-toggle">
                            <span className="panel-title">March to May</span>
                            <span className="accordion-icon">{activeKey2 === '1' ? <FaMinus /> : <FaPlus />}</span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        <table className="table_style"> 
                        <thead>
                        <tr className="tablehead1">
                        <th>Date and Month</th>
                        <th >Day</th>
                        <th >Event</th>
                        </tr>
                        </thead>
                        <tbody>
                        
                            <tr>
                            <td>29th March 2024</td>
                            <td>Friday</td>
                            <td><strong>Good Friday</strong></td>
                            </tr>
                            <tr>
                            <td>9th April 2024</td>
                            <td>Tuesday</td>
                            <td><strong>Ugadi</strong></td>
                            </tr>
                            <tr>
                            <td>11th April 2024</td>
                            <td>Thursday</td>
                            <td><strong>Id-Ul-Fitr</strong></td>
                            </tr>
                            <tr>
                            <td>14th April 2024</td>
                            <td>Sunday</td>
                            <td><strong>Ambedkar Jayanthi</strong></td>
                            </tr>
                            <tr>
                            <td>17th May 2024</td>
                            <td>Friday</td>
                            <td><strong>Last Day of Trimester 3 and Trimester 6</strong></td>
                            </tr>
                            
                        </tbody>
                        </table>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          <div className="accordion-toggle">
                            <span className="panel-title">July to October</span>
                            <span className="accordion-icon">{activeKey2 === '2' ? <FaMinus /> : <FaPlus />}</span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        <table className="table_style"> 
                        <thead>
                        <tr className="tablehead1">
                        <th>Date and Month</th>
                        <th >Day</th>
                        <th >Event</th>
                        </tr>
                        </thead>
                        <tbody>
                          <tr>
                          <td>23rd July 2024</td>
                          <td>Tuesday</td>
                          <td><strong>Orientation Week Starts for 2024-26 batch</strong></td>
                          </tr>
                          <tr>
                          <td>30th July 2024</td>
                          <td>Tuesday</td>
                          <td><strong>First day of Trimester 1 and 4</strong></td>
                          </tr>
                          <tr>
                          <td>15th August 2024</td>
                          <td>Thursday</td>
                          <td><strong>Independence Day</strong></td>
                          </tr>
                          <tr>
                          <td>7th September 2024</td>
                          <td>Saturday</td>
                          <td><strong>Ganesh Chaturthi</strong></td>
                          </tr>
                          <tr>
                          <td>2nd October 2024</td>
                          <td>Wednesday</td>
                          <td><strong>Gandhi Jayanti</strong></td>
                          </tr>
                          <tr>
                          <td>3rd October 2024</td>
                          <td>Thursday</td>
                          <td><strong>Bathukamma</strong></td>
                          </tr>
                          <tr>
                          <td>12th October 2024</td>
                          <td>Saturday</td>
                          <td><strong>Dussehra</strong></td>
                          </tr>
                          <tr>
                          <td>25th October 2024</td>
                          <td>Friday</td>
                          <td><strong>Last Day of Trimester 1 and 4
                          </strong></td>
                          </tr>
                          <tr>
                          <td>26th October to 5th Nov</td>
                          <td>–</td>
                          <td><strong>Trimester Holidays</strong></td>
                          </tr>

                            
                        </tbody>
                        </table>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          <div className="accordion-toggle">
                            <span className="panel-title">November to December</span>
                            <span className="accordion-icon">{activeKey2 === '3' ? <FaMinus /> : <FaPlus />}</span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        <table className="table_style"> 
                        <thead>
                        <tr className="tablehead1">
                        <th>Date and Month</th>
                        <th >Day</th>
                        <th >Event</th>
                        </tr>
                        </thead>
                        <tbody>
                          <tr>
                          <td>6th Nov 2024</td>
                          <td>Wednesday</td>
                          <td><strong>First Day of Trimester 2 and 5</strong></td>
                          </tr>
                          <tr>
                          <td>25th Dec 2024</td>
                          <td>Wednesday</td>
                          <td><strong>Christmas</strong></td>
                          </tr>
                          </tbody>
                        </table>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>


                        <p className="mt-5">
                        * Classes will be conducted periodically on saturdays as well as per the management’s decision
                        </p>
                    </Col>
                </Row>
                
            </Container>
           

        </section>
    );
}
export default AcademicCalendar;