import React from "react";
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon
  } from 'mdb-react-ui-kit';


function Projects() {
    return (
        <div className='project-area' id="projects-section">
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
            <MDBCol>
                <MDBCard className='h-100'>
                <MDBCardImage
                    src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                    alt='...'
                    position='top'
                />
                <MDBCardBody>
                    <MDBCardTitle>Project Title 1</MDBCardTitle>
                    <MDBCardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </MDBCardText>
                    <MDBBtn color='light' rippleColor='dark'><MDBIcon fab icon="github"  /></MDBBtn>
                    <span className="tech-used"><b>HTML CSS React Nodejs</b></span>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard className='h-100'>
                <MDBCardImage
                    src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                    alt='...'
                    position='top'
                />
                <MDBCardBody>
                    <MDBCardTitle>Project Title 2</MDBCardTitle>
                    <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</MDBCardText>
                    <MDBBtn color='light' rippleColor='dark'><MDBIcon fab icon="github"  /></MDBBtn>
                    <span className="tech-used"><b>HTML CSS React Nodejs</b></span>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard className='h-100'>
                <MDBCardImage
                    src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                    alt='...'
                    position='top'
                />
                <MDBCardBody>
                    <MDBCardTitle>Project Title 3</MDBCardTitle>
                    <MDBCardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </MDBCardText>
                    <MDBBtn color='light' rippleColor='dark'><MDBIcon fab icon="github"  /></MDBBtn>
                    <span className="tech-used"><b>HTML CSS React Nodejs</b></span>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol>
                <MDBCard className='h-100'>
                    <MDBCardImage
                        src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Project Title 4</MDBCardTitle>
                        <MDBCardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </MDBCardText>
                        <MDBBtn color='light' rippleColor='dark'><MDBIcon fab icon="github"  /></MDBBtn>
                        <span className="tech-used"><b>HTML CSS React Nodejs</b></span>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            </MDBRow>
        </div>
    )
}

export default Projects;