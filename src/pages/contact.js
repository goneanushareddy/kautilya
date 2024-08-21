import { Col, Container, Row } from "react-bootstrap";
import bg_image from './../assets/img/bg_image.jpg';
function Contact(){
    return(
        <>
           <div className="banner_img contact">           
                <h2>Contact <br /> Kautilya</h2>                   
                <div className="transparant_bg table-responsive">
                    <table className="white_table">
                        <tr>
                            <td> Study @ Kautilya: </td>
                            <td> <i className="fa fa-message"> </i>  admissions@kautilya.org.in </td>
                        </tr>
                         <tr>
                            <td> Collaborate: </td>
                            <td> <i className="fa fa-message"> </i>  initiatives@kautilya.org.in </td>
                        </tr>
                        <tr>
                            <td> Campus Stay: </td>
                            <td> <i className="fa fa-message"> </i>  opsmanager@kautilya.org.in </td>
                        </tr>
                        <tr>
                            <td> Placements: </td>
                            <td> <i className="fa fa-message"> </i>  careerfulfillment@kautilya.org.in </td>
                        </tr>
                        <tr>
                            <td> Grievance Cell: </td>
                            <td> <i className="fa fa-message"> </i>  grievances@kautilya.org.in </td>
                        </tr>
                        <tr>
                            <td> Work @ Kautilya: </td>
                            <td> <i className="fa fa-message"> </i>  careers@kautilya.org.in </td>
                         </tr>
                    </table>
                </div>
           </div>
        </>
    );
}
export default Contact;