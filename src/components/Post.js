import React, { Component } from 'react';
import axiosInstance from '../axios';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import dummy from  "../img/images.jpg";

class Post extends Component {
    state = {
      post: null
    }
    componentDidMount(){
      let id = this.props.match.params.post_id;
      axiosInstance.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => {
          this.setState({
            post: res.data
          });
          //console.log(res.data);
        });
    }
    render() {
  
      const post = this.state.post ? (
        <div className="container">
        <h1 className="mt-4 mb-3">{this.state.post.title}</h1>

        <div className="col-lg-8"> 
        <Link to={'/'}>
        <ol className="breadcrumb">
            <li class="breadcrumb-item">
                <a href="/">Home</a>
            </li>
        </ol>
        </Link>
                          <a href="#">
							<img className="img-fluid rounded" style={{
								height: '250px',
								width: '900px'
							}} src={dummy} alt=""/>

							</a>
                                <hr/>   

                        <p>Posted on January 1, 2017 at 12:00 PM</p>
                              <hr/>
                      <p className="lead">
                            {this.state.post.body}
                        </p>

                       <hr/>
                    </div>
         
        </div>
      ) : (
        <div className="center">Loading post...</div>
      );
  
      return (
        <div className="container">
          {post}
        </div>
      )
    }
  }
  
  export default Post