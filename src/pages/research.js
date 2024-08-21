import Container from 'react-bootstrap/Container';
function Research(){
    
    return(
        <>
        <section className="research">
        <Container>
            <h1 className='mt-4 mb-5 acd-claender-heading'>Research @ Kautilya</h1>
            <img src="./images/research.jpg" />
            <p className="mt-5">Like every great institution, the Kautilya School of Public Policy research program’s core elements are to <b>captivate and understand </b> to discover the nearest possible solution to every problem through <b>evidence-based research. </b>
                We mindfully invest resources with an impact-driven approach to measure the outcome of research initiatives. Kautilya’s doctoral program aims to develop the <b>next generation of scholars</b> who are knowledgeable, problem-solvers, and passionate about purposeful research.</p>
                <p className="mt-5 mb-0">The school conducts research in the following areas:</p>
                <ul>
                    <li>1. Business & Government.</li>
                    <li>2. Economics For Policy.</li>
                    <li>3. Environmental, Social and Governance Issues.</li>
                    <li>4. Global Affairs.</li>
                    <li>5. Technology & Society.</li>
                </ul>
          </Container>
          </section>
        </>
    )
}
export default Research;