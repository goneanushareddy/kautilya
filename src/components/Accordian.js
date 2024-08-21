import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FaPlus, FaMinus } from 'react-icons/fa';

function AccordionComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Accordion defaultActiveKey={['0']} activeKey={isOpen ? '0' : undefined} onSelect={toggleAccordion}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div className="accordion-toggle">
            <span>October/November/ December</span>
            <span className="accordion-icon">
              {isOpen ? <FaMinus /> : <FaPlus />}
            </span>
          </div>
        </Accordion.Header>
        <Accordion.Body>
         <table className="table_style"> 
        <thead>
        <tr class="tablehead1">
        <th>Date and Month</th>
        <th >Day</th>
        <th >Event</th>
        </tr>
        </thead>
        <tbody>
        <tr class="even">
        <td >02nd Oct 2023</td>
        <td >Monday</td>
        <td><strong>Gandhi Jayanthi</strong></td>
        </tr>
        <tr class="odd">
        <td >24th Oct 2023</td>
        <td >Tuesday</td>
        <td><strong>Vijayadasami</strong></td>
        </tr>
        <tr class="even">
        <td >8th Nov 2023</td>
        <td >Wednesday</td>
        <td><strong>last day of Trimester 1 and Trimester 4</strong></td>
        </tr>
        <tr class="odd">
        <td >9th Nov – 19th Nov 2023</td>
        <td >Thursday – Sunday</td>
        <td><strong>Trimester Holidays</strong></td>
        </tr>
        <tr class="even">
        <td >20th Nov 2023</td>
        <td >Monday</td>
        <td><strong>First day of Trimester 2 and Trimester 5</strong></td>
        </tr>
        <tr class="odd">
        <td >25th Dec 2023</td>
        <td >Monday</td>
        <td><strong>Christmas</strong></td>
        </tr>
        </tbody>
        </table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <div className="accordion-toggle">
            <span>Jan to Feb</span>
            <span className="accordion-icon">
              {isOpen ? <FaMinus /> : <FaPlus />}
            </span>
          </div>
        </Accordion.Header>
        <Accordion.Body>
       <table className="table_style"> 
        <thead>
        <tr class="tablehead1">
        <th>Date and Month</th>
        <th >Day</th>
        <th >Event</th>
        </tr>
        </thead>
        <tbody>
        <tr class="even">
        <td >02nd Oct 2023</td>
        <td >Monday</td>
        <td><strong>Gandhi Jayanthi</strong></td>
        </tr>
        <tr class="odd">
        <td >24th Oct 2023</td>
        <td >Tuesday</td>
        <td><strong>Vijayadasami</strong></td>
        </tr>
        <tr class="even">
        <td >8th Nov 2023</td>
        <td >Wednesday</td>
        <td><strong>last day of Trimester 1 and Trimester 4</strong></td>
        </tr>
        <tr class="odd">
        <td >9th Nov – 19th Nov 2023</td>
        <td >Thursday – Sunday</td>
        <td><strong>Trimester Holidays</strong></td>
        </tr>
        <tr class="even">
        <td >20th Nov 2023</td>
        <td >Monday</td>
        <td><strong>First day of Trimester 2 and Trimester 5</strong></td>
        </tr>
        <tr class="odd">
        <td >25th Dec 2023</td>
        <td >Monday</td>
        <td><strong>Christmas</strong></td>
        </tr>
        </tbody>
        </table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionComponent;
