import React from 'react'


import people from '../assets/people.png'
import ai from '../assets/ai.png'

const Header = () => {
    return (
        <div className='header ' id='home'>
            <div className="header_content">
                <div className="header_content_heading gradient_text" >
                    <h1>Let’s Build Something
                        amazing with GPT-3
                        OpenAI</h1>
                </div>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

                <div className="header_content_input">
                    <input type="text" placeholder='Your Email Address' />
                    <div className="header_content_btn">
                        <button>Get Started</button>
                    </div>
                </div>
                <div className="header_content_people">
                    <div className="header_content_people_img">
                        <img src={people} alt="people" />
                    </div>
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="header_img">
                <img src={ai} alt="ai" />
            </div>
        </div>

    )
}

export default Header