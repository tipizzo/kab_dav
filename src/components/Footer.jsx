import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {

    const currentYear = Date();

    return (
        <div className="footer" id="footer-section">
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with me on social networks:</span>
                    </div>

                    <div>
                        <a href='https://web.facebook.com/davidjohnson.kabanga' className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f" />
                        </a>
                        <a href='https://twitter.com/davidkabanga1' className='me-4 text-reset'>
                            <MDBIcon fab icon="twitter" />
                        </a>
                        <a href='https://medium.com/@davkabanga96' className='me-4 text-reset'>
                            <MDBIcon fab icon="medium" />
                        </a>
                        <a href='https://www.instagram.com/mr._david_kabanga/' className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram" />
                        </a>
                        <a href='https://www.linkedin.com/in/kabanga-david/' className='me-4 text-reset'>
                            <MDBIcon fab icon="linkedin" />
                        </a>
                        <a href='https://discord.com/channels/@me' className='me-4 text-reset'>
                            <MDBIcon fab icon="discord" />
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <p>
                                    "<b>Think Twice 💭, Code once 💡</b>" - Unknown author
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>STACKS</h6>
                                <p>
                                    HTML <div className="progress">
                                        <div
                                            className="progress-bar progress-bar-html"
                                            aria-valuenow="100"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >

                                        </div>
                                    </div>
                                </p>
                                <p>
                                    CSS <div className="progress">
                                        <div
                                            className="progress-bar progress-bar-css"
                                            aria-valuenow="100"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >

                                        </div>
                                    </div>

                                </p>
                                <p>
                                    Javascript <div className="progress">
                                        <div
                                            className="progress-bar progress-bar-javascript"
                                            aria-valuenow="100"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >

                                        </div>
                                    </div>
                                </p>
                                <p>
                                    MDBootstrap <div className="progress">
                                        <div
                                            className="progress-bar progress-bar-mdb"
                                            aria-valuenow="100"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >

                                        </div>
                                    </div>
                                </p>
                                <p>
                                    ReactJs <div className="progress">
                                        <div
                                            className="progress-bar progress-bar-react"
                                            aria-valuenow="100"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >

                                        </div>
                                    </div>
                                </p>
                                <p>
                                    NodeJs <div className="progress">
                                        <div
                                            className="progress-bar progress-bar-node"
                                            aria-valuenow="100"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >

                                        </div>
                                    </div>
                                </p>
                                <p>
                                    Django <div className="progress">
                                        <div
                                            className="progress-bar progress-bar-django"
                                            aria-valuenow="100"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >

                                        </div>
                                    </div>
                                </p>
                                <p>
                                    QGIS <div className="progress">
                                        <div
                                            className="progress-bar progress-bar-qgis"
                                            aria-valuenow="100"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >

                                        </div>
                                    </div>
                                </p>
                            </MDBCol>
                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-2" />
                                    Goma, Av du Golf, 014
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    davkabanga96@gmail.com
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3" /> +243973573969
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © {currentYear}
                    <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                        ❣️ with reactjs by Kabanga David
                    </a>
                </div>
            </MDBFooter>
        </div>

    )
}

export default Footer;