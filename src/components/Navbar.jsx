import React, { useState } from "react";
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse
} from 'mdb-react-ui-kit';
import Pdf from "../documents/myCV.pdf"

function Navbar() {
    const myBrandName = "<KD />"
    const [showNavText, setShowNavText] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light' sticky>
            <MDBContainer fluid>
                <MDBNavbarBrand href="#" className='brand-name'>
                    {myBrandName}
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarText'
                    aria-controls='navbarText'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavText(!showNavText)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNavText}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href="#about-section" className='list-menu'><b>About KD</b> </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href="#projects-section" className='list-menu'>Projects </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href="#footer-section" className='list-menu'>Contacts </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href={Pdf} target="_blank" className='list-menu'>Download CV </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                    <a href='https://github.com/tipizzo?tab=repositories' className='social-media-link'><MDBIcon fab icon='github' className='social-media-icon' /></a>
                    <a href='https://twitter.com/home' className='social-media-link'><MDBIcon fab icon='twitter' className='social-media-icon' /></a>
                    <a href='https://www.linkedin.com/in/kabanga-david/' className='social-media-link'><MDBIcon fab icon='linkedin' className='social-media-icon' /></a>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}

export default Navbar;