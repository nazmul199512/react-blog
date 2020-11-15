import React, { Component } from 'react';
import './App.css';
import Post from './components/Post';
import axiosInstance from './axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import dummy from  "./img/images.jpg";
import { Link } from 'react-router-dom';

class App extends Component{
	  
	state = { posts: [] };

	 componentDidMount(){
		 //let id = this.props.match.params.post_id;
		  axiosInstance.get('https://jsonplaceholder.typicode.com/posts' )   
		  .then(res => {
			  console.log(res)
			  this.setState({
				  posts: res.data.slice(0,10)
			  })
		  } )
		

	}

	render(){

		const { posts } = this.state
        const postList = posts.length ? (
               posts.map(post=>{
				   return(
					   <div className="card mb-4" key={post.id}>
						    <div className="card-body">
							<div className="row">
							<div className="col-lg-6">
                            <a href="#">
							<img className="img-fluid rounded" style={{
								height: '250px',
								width: '500px'
							}} src={dummy} alt=""/>

							</a>
                               
               
                             </div>
					

							 <div className="col-lg-6">
							 <h2 className="card-title">{post.title}</h2>
							 <p className="card-text">{post.body}</p>  
							 <Link to={'/' + post.id}>
							 <a href="" class="btn btn-primary">Read More &rarr;</a>
							 </Link>
							  </div>

							  </div>
					   </div>

					   </div>

					  
				   )
			   })
		) : (

			<div className="center"> No Posts yet </div>
		)

        return (
			<div className="container" >
				
          
                {postList}

		  </div>
			 
		)

	}
}

export default App;




