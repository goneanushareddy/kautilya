import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
function Research_projects(){
    
    return(
        <>
        <section className="research-projects">
        <Container>
            <h1 className='mt-3 mb-4 acd-claender-heading research-projects-res'>Grants & Projects</h1>
            <img src="./images/kautilya-ICSSR-web-banner-min.jpg" alt=' reasearch banner' />
            <div className='mt-5'>
            <p className='border_line'><span className='sub_title'>Project Title:</span> <span>“A Comparative Assessment of the Impact of Beti Bachao Beti Padhao Scheme in the Gender-Critical Districts of 
                Telangana and Uttar Pradesh”</span></p>
            <p className='border_line'><span className='sub_title'>Project Duration:</span> <span>06 Months</span></p>
            <p className='border_line'><span className='sub_title'>Project Approved By:</span> <span>Indian Council of Social Science Research</span></p>
            <p><span className='sub_title'>Project Description:</span> <span>In June 2023, the <strong>Indian Council of Social Science Research</strong> invited research proposals under <strong>
                Special Call for Short-term Empirical Research 2023-24</strong> for short-term projects to be undertaken by Indian scholars/researchers/academicians on selected schemes and policy initiatives of the Indian government. The invite was for projects that undertake a rigorous assessment of the reach and socio-economic impact of a specific scheme/policy initiative focusing on a specific geographical region (urban, semi-urban, or rural). <strong>Link: </strong><a href="https://icssr.org/special-call-short-term-empirical-research-2023-24-guidelines" target="_blank" rel="noopener" className='text-blue'>Special Call for Short-term Empirical Research 2023-24 — Guidelines</a></span></p>
            <p><span>Under this call, the Kautilya School of Public Policy research proposal titled “<u>A Comparative Assessment of the Impact of Beti Bachao Beti Padhao Scheme in the Gender-Critical Districts of Telangana and Uttar Pradesh</u>” has been accepted by ICSSR and has been awarded a grant too. Through this project, we aim to compare the reach and socio-economic impact of <strong>Beti Bachao Beti Padhao</strong> in <strong>Telangana</strong> and <strong>Uttar Pradesh</strong>.</span></p>
            <p className='text-primary'>The project team intends to assess the shift in public attitude as a result of this scheme using Structural Equation Modelling and evaluate these effects through the lenses of gender, caste, age, and education.</p>
            <h4 className='sub_title'>Project Team :</h4>
            <Table bordered hover responsive>
                <tbody variant="dark">
                    <tr>
                    <th>Name</th>
                    <th>Present Position</th>
                    <th>Institution</th>
                    <th>Role in the Research Project</th>
                    </tr>
                    <tr>
                    <td>Dr. Amrendra Pandey</td>
                    <td>Associate Professor</td>
                    <td className="imp-tab-sub1">Kautilya School of Public Policy, GITAM, Hyderabad</td>
                    <td className="imp-tab-sub1">Project Coordinator and Project Director</td>
                    </tr>
                    <tr>
                    <td className="imp-tab-sub1">Dr. Rahul Singh</td>
                    <td className="imp-tab-sub1">Area Head – Strategy, Innovation, Entrepreneurship Professor in Strategy and Globalization</td>
                    <td className="imp-tab-sub1">Birla Institute of Management Technology (BIMTECH), Greater Noida</td>
                    <td className="imp-tab-sub1">Project Director</td>
                    </tr>
                    <tr>
                    <td className="imp-tab-sub1">Dr. Vishnu S Pillai</td>
                    <td className="imp-tab-sub1">Assistant Professor</td>
                    <td className="imp-tab-sub1">Kautilya School of Public Policy, GITAM, Hyderabad</td>
                    <td className="imp-tab-sub1">Project Director</td>
                    </tr>
                    <tr>
                    <td className="imp-tab-sub1">Dr. Amarnath Bose</td>
                    <td className="imp-tab-sub1">Professor of Operations, Decision Science &amp; IT</td>
                    <td className="imp-tab-sub1">Birla Institute of Management Technology (BIMTECH), Greater Noida</td>
                    <td className="imp-tab-sub1">Project Director</td>
                    </tr>
                    <tr>
                    <td className="imp-tab-sub1">Mr. Pritish Anand</td>
                    <td className="imp-tab-sub1">Academic Associate</td>
                    <td className="imp-tab-sub1">Kautilya School of Public Policy, GITAM, Hyderabad</td>
                    <td className="imp-tab-sub1">Research Associate</td>
                    </tr>
                    </tbody>
                </Table>
            </div>

          </Container>
          </section>
        </>
    )
}
export default Research_projects;