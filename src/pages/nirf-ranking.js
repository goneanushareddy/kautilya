import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

function Nirf (){
    return(
   <section className='mt-5'>
    <Container>
        <Row>
            <Col>
                <p>Kautilya function’s under the tutelage of GITAM, as one of the premier schools of public policy.
                 The GITAM: Gandhi Institute of Technology And Management, a Category – I Deemed to be University has been voluntarily participating in the India Rankings (NIRF) since 2017. The NIRF is an initiative of the Ministry of Education (MoE), formerly known as MHRD, Govt. of India which ranks the institutions in our country across various disciplines, under a given framework.</p>
                 <p className='mb-5'>The details of the NIRF Ranking process can be found in the URL: <a href="https://www.nirfindia.org/Home" target='_blank'>https://www.nirfindia.org/Home</a></p>
                 <Table striped responsive bordered hover className='mt-5'>
                    <thead>
                        <tr>
                        <th>S.No</th>
                        <th>Year of Participation</th>
                        <th>Category</th>
                        <th>All India Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>2017</td>
                        <td>University</td>
                        <td>89</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>2018</td>
                        <td>University</td>
                        <td>85</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>2019</td>
                        <td>University</td>
                        <td>84</td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>2020</td>
                        <td>University</td>
                        <td>71</td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td>2021</td>
                        <td>University</td>
                        <td>67</td>
                        </tr>
                        <tr>
                        <td rowspan="4">6</td>
                        <td rowspan="4" valign="middle">2022</td>
                        <td>University</td>
                        <td>92</td>
                        </tr>
                        <tr>
                        <td>Engineering</td>
                        <td>102</td>
                        </tr>
                        <tr>
                        <td>Pharmacy</td>
                        <td>49</td>
                        </tr>
                        <tr>
                        <td>Dental</td>
                        <td>33</td>
                        </tr>
                        <tr>
                        <td rowspan="6">7</td>
                        <td rowspan="6" valign="middle">2023</td>
                        <td>Pharmacy</td>
                        <td>48</td>
                        </tr>
                        <tr>
                        <td>University</td>
                        <td>101 – 150</td>
                        </tr>
                        <tr>
                        <td>Engineering</td>
                        <td>101 – 150</td>
                        </tr>
                        <tr>
                        <td>Innovation</td>
                        <td>101 – 150</td>
                        </tr>
                        <tr>
                        <td>Management</td>
                        <td>101 – 125</td>
                        </tr>
                        <tr>
                        <td>Overall</td>
                        <td>151 – 200</td>
                        </tr>
                        </tbody>
                    </Table>
            </Col>
            
        </Row>
    </Container>
   </section>
    )
}


export default Nirf;