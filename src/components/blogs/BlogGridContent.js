import React, {Component} from 'react';

const blogcontent = (props) => {
    let content = (
        props.state.map(function(blogdata, index){
            return (
                <div className="blog-content-grids"  key={index}>
                    <a href="#" onClick={props.click}>
                        <img className="blog-content-grids-img" src={blogdata.image}/>
                        <h2 className="blog-content-grids-title">{blogdata.title}</h2>
                        <p className="blog-content-grids-desc">{blogdata.description}</p>
                    </a>
                </div>
            );
        })
    )
    return(
        <div className="blog-content">
            {content}
        </div>
    )
};

export default blogcontent;
