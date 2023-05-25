import React from 'react'
import { Blog } from '../componants'
import blog1 from '../assets/blog01.png'
import blog2 from '../assets/blog02.png'
import blog3 from '../assets/blog03.png'
import blog4 from '../assets/blog04.png'
import blog5 from '../assets/blog05.png'


const Blogs = () => {
    return (
        <div className='blogs' id='blog'>
            <div className="blogs_heading">
                <h4 className='gradient_text'>A lot is happening, We are blogging about it.</h4>
            </div>
            <div className="blogs_section">
                <div className="blogs_sectionA">
                    <Blog imgURL={blog1} />
                </div>
                <div className="blogs_sectionB">
                    <Blog imgURL={blog2} />
                    <Blog imgURL={blog3} />
                    <Blog imgURL={blog4} />
                    <Blog imgURL={blog5} />
                </div>
            </div>
        </div >
    )
}

export default Blogs