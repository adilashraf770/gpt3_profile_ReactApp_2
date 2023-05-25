import React from 'react'
import gpt3 from '../assets/logo.svg'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div className='footer'>
            <div className="footer_content">
                <div className="footer_content_heading">
                    <h1 className='gradient_text'>Do you want to step in to the future before others</h1>
                </div>
                <div className="footer_content_btn">
                    <button>Request Early Access</button>
                </div>
                <div className="footer_content_links">
                    <div className="footer_content_links_heading">
                        <img src={gpt3} alt="" />
                        <p>Faisalabad , Pakistan.</p>
                    </div>
                    <div className="footer_content_link_container">
                        <div>
                            <h5>Links</h5>
                            <p>Overons</p>
                            <p>Social Media</p>
                            <p>Counters</p>
                            <p>Contact</p>
                        </div>
                        <div>
                            <h5>Company</h5>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                            <p>Contact</p>
                        </div>
                        <div>
                            <h5>Get in touch</h5>
                            <p>Faisalabad , Pakistan.</p>
                            <p>+92343 - 7703231</p>
                            <p>smadal770@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_text">
                <p>&copy; {year} GPT - 3. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer