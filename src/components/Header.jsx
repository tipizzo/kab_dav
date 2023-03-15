import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

function Header(props) {

  return (
    <div
      id='about-section'
      className='p-5 text-center bg-image header'
    >
      <div className='mask header-container' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div className='text-white'>
            <img
              src={props.img}
              alt={props.text}
              className="profile_picture"
            />
            <h2 className='mb-3 presentation'>I am KABANGA David</h2>
            <h4 className='mb-4 presentation'>A Software Developer &amp; Tech Enthousiast based in DRC/Goma </h4>
            <p>Actually working full-time as a FTTH Design Engineer for <a href="https://www.gva.africa">Group Vivendi Africa</a>, in order to democratize a very high internet access in African Sub-Saharian. These details were only a parenthesis hahahah ! 😁</p>
            <p>Holder of a bachelor's degree in Computer Science, I have always been passionate about computers from a very young age.</p>
            <p>A Freelance Software Developer, I describe myself as a FTTH Designer during the day and Software Developer at night. Ooops! I almost forgot, Gamer on the Weekend.</p>
            <MDBBtn
              color='light'
              rippleColor='dark'
              className="m-2"
              tag="a"
              outline
              size="lg"
              rel="nofollow"
              target="_blank"
              href='https://www.youtube.com/watch?v=c9B4TPnak1A'
            >
              GITHUB <MDBIcon fab icon='github' className='social-media-icon-about' />
            </MDBBtn>
            <MDBBtn
              color='light'
              rippleColor='dark'
              className="m-2"
              tag="a"
              outline
              size="lg"
              target="_blank"
              href='https://mdbootstrap.com/docs/standard/'
            >
              LINKEDIN <MDBIcon fab icon='linkedin' className='social-media-icon-about' />
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Header;