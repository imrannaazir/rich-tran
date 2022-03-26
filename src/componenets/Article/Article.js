import React from 'react';
import './Article.css'

const Article = () => {
    return (
        <div><h3>Articles:</h3>
            <div className='blog-container'>

                <div className='blog'><h3>How does React work?</h3>
                    <p>We know React is a JavaScript library. It helps us to create UI. When we see a webpage basically we see a DOM. Multiple of DOM changes can slow web pages. Here is react's specialty. React always create a virtual DOM and always render with relating that.</p>
                </div>
                <div className='blog'>
                    <h3>Difference between State and Props:</h3>
                    <p>There are two main things in react is props and state. But there are many differences between this two. First of all, props are read-only, we cannot reassign their value. But the state can be changed.
                        The state is mutable but props are immutable.  </p>
                </div>
            </div>
        </div>
    );
};

export default Article;