import React, {Component} from 'react';
import BlogContent from './BlogGridContent';

class BlogGrid extends Component{
    
    state = {
        blogcontent : [
            {title: 'Paradise Search : An Apartment In Helsinki, Finland', description: 'Sed in malesuada ex, sed finibus elit. Aliquam ullamcorper et quam mollis iaculis.', image: './images/dummy.png'},
            {title: 'Jungles In Paris: Vermont’s Rugged, Retro Ski Mountain', description: 'Sed in malesuada ex, sed finibus elit. Aliquam ullamcorper et quam mollis iaculis.', image: './images/dummy.png'},
            {title: 'Li River, China’s Orignial Postcard Landcaspe', description: 'Sed in malesuada ex, sed finibus elit. Aliquam ullamcorper et quam mollis iaculis.',image: './images/dummy.png'},
            {title: 'Geenland’s Garden Of Rusting Barrels', description: 'Sed in malesuada ex, sed finibus elit. Aliquam ullamcorper et quam mollis iaculis.',image: './images/dummy.png'}
        ]
    }
    clickHandeler = (event) => {
        console.log(event.target);
    } 
    render(){
        return (
            <div>
                <BlogContent state={this.state.blogcontent} click={(event) => this.clickHandeler(event)}/>
            </div>

        );
    }
}

export default BlogGrid;