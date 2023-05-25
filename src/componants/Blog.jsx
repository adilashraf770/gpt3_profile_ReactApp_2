import React from 'react'

const Blog = ({ imgURL }) => {
    return (
        <div className='blog'>
            <div className="blog_image">
                <img src={imgURL} alt="blog" />
            </div>
            <div className="blog_content">
                <div className='blog_content_heading'>
                    <p>Sep 26, 2021</p>
                    <h1>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Blog